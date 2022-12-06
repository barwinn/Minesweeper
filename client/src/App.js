import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Box from './Components/Box.js';

const BigDiv = styled.div`
padding-left: 34%;
padding-right: 34%;
`

const LayoutDiv = styled.div`
padding-right: 29%;
padding-left: 29%;
rows: 10;
row-gap = 0;
column-gap = 0;
`;

const booleanValues = [
  true, false, true, false, false, false, false, false, false, false,
  true, false, true, false, false, false, false, false, false, false,
  true, false, true, false, false, false, false, false, false, false,
  true, false, false, false, false, false, false, false, false, false,
  true, false, true, false, false, true, false, false, false, true,
  true, false, true, false, false, false, false, false, false, false,
  true, false, true, false, false, false, false, false, false, false,
  true, false, true, false, false, false, false, true, false, false,
  true, false, true, false, false, false, false, false, false, false,
  true, false, true, false, false, false, false, false, false, true
];


const matrixDisplay = (value) => {
    return(<Box mine={value} />)
}

function App() {
  return (
    <BigDiv>
    <h1>
      Minesweeper
    </h1>
    <LayoutDiv>
      {booleanValues.map(matrixDisplay)}
    </LayoutDiv>
    </BigDiv>
  );
}

export default App;
