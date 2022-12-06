import React from 'react';
import styled from 'styled-components';
const { useEffect, useState } = React

const Mine = styled.button`
    border: 1px outset black;
   background-color: grey;
   height:25px;
   width:25px;
   cursor:pointer;
`;


const Box  = (props) => {
    const [nonMine, setNonMine] = useState('-');
    const [defMine, setDefMine] = useState('-');
    if (props.mine) {
        return (
            <Mine onClick={() => setDefMine('X')}>{defMine}</Mine>
        )
    } else {
        return (
        <Mine onClick={() => setNonMine('0')}>{nonMine}</Mine>
        )
    }
  }

export default Box;