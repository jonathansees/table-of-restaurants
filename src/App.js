import RestarauntsTable from './components/index';
import styled from 'styled-components';

const PageWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <PageWrapper>
      <RestarauntsTable />
    </PageWrapper>
  );
}

export default App;
