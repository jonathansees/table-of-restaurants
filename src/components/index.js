import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import axios from 'axios';
import Table, { TableRow, TableHeader, TableColumn } from './Table';
import Button from './Button';
import TextInput from './TextInput/TextInput';
import Select, { Option } from './Select';
import Radio, { RadioItem } from './Radio';
import ExpandableContent from './ExpandableContent';
 
function RestarauntsTable() {
  const [restaurants, setRestaurants] = useState([]);
 
  useEffect(async () => {
    const result = await axios(
      'https://code-challenge.spectrumtoolbox.com/api/restaurants',
      {
        headers: {
          Authorization: 'Api-Key q3MNxtfep8Gt',
        },
      }
    );
 
    setRestaurants(result.data);
  }, []);

  restaurants.sort((a, b) => (a.name > b.name) ? 1 : -1 );

  console.log(restaurants)

  // create a long string of all possible genres
  const genresString = restaurants.reduce((accumulator, currentValue) => accumulator + currentValue.genre + ',', '');
  // create an array of only unique genres excluding the last because we have a trailing comma
  const genres = [...new Set(genresString.split(',').slice(0, -1))];
  const states = [...new Set(restaurants.map((a) => a.state))];

  const [searchValue, setSearchValue] = useState('');
  const [filter, setFilter] = useState(searchValue);
  const [filteredGenre, setFilteredGenre] = useState('');
  const [filteredState, setFilteredState] = useState('');
  const [themeValue, setThemeValue] = useState('main');

  const renderExtra = (restaurant) => <ExpandableContent restaurant={restaurant} />;

  const handleClear = () => {
    setFilter('');
    setFilteredGenre('');
    setFilteredState('');
  };
 
  return (
    <ThemeProvider theme={{ mode: themeValue }}>
      <Radio
        value={themeValue}
        name="theme"
        onChange={(e) => setThemeValue(e.target.value)}
      >
        <RadioItem id="light">Light</RadioItem>
        <RadioItem id="main">Default</RadioItem>
        <RadioItem id="dark">Dark</RadioItem>
      </Radio>
      <div style={{display: "flex", justifyContent: "space-between", width: "100%", marginTop: "20px"}}>
        <div>
          <Select placeholder="Genre" size="small" name="genres" value={filteredGenre} id="genres" onChange={(e) => setFilteredGenre(e.target.value)}>
            {genres.sort().map((genre) => (
              <Option value={genre}>{genre}</Option>
            ))}
          </Select>
          <Select placeholder="State" size="small" name="states" id="states" value={filteredState} onChange={(e) => setFilteredState(e.target.value)}>
            {states.sort().map((state) => (
              <Option value={state}>{state}</Option>
            ))}
          </Select>
        </div>
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <TextInput
            size="small"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search..."
            value={searchValue}
          />
          <Button size="small" onClick={() => setFilter(searchValue)}>
            Search
          </Button>
        </div>
        <Button size="small" invert variant="destructive" onClick={() => handleClear()}>
          Clear
        </Button>
      </div>
      <Table rowsPerPage={10}>
        <TableRow>
          <TableHeader>Name</TableHeader>
          <TableHeader>City</TableHeader>
          <TableHeader>State</TableHeader>
          <TableHeader>Phone Number</TableHeader>
          <TableHeader>Genre</TableHeader>
        </TableRow>
        {restaurants ? restaurants
          .filter((restaurant) => (
            restaurant.name.toLowerCase().includes(filter.toLowerCase())
            || restaurant.city.toLowerCase().includes(filter.toLowerCase())
            || restaurant.genre.toLowerCase().includes(filter.toLowerCase())))
          .filter((restaurant) => restaurant.genre.includes(filteredGenre))
          .filter((restaurant) => restaurant.state.includes(filteredState))
          .map((restaurant) => (
            <TableRow expandableContent={renderExtra(restaurant)}>
              <TableColumn>
                {restaurant.name}
              </TableColumn>
              <TableColumn>
                {restaurant.city}
              </TableColumn>
              <TableColumn>
                {restaurant.state}
              </TableColumn>
              <TableColumn>
                {restaurant.telephone}
              </TableColumn>
              <TableColumn>
                {restaurant.genre.split(',').join(', ')}
              </TableColumn>
            </TableRow>
          )) : null}
      </Table>
    </ThemeProvider>
  );
}
 
export default RestarauntsTable;
