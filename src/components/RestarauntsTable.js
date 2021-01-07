import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
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
 
  return (
    <div>
      Hello
    </div>
  );
}
 
export default RestarauntsTable;
