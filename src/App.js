import React from 'react';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500;700&display=swap');
      </style>
	  <Div>
      	<H1>Coming Soon!</H1>
	  </Div>
    </div>
  );
}

export default App;

const Div = styled.div`
	display: table-cell;
	width: 100vw;
	height: 100vh;
	vertical-align: middle;
`

const H1 = styled.h1`
	font-family: "Roboto Mono", serif;
	text-align: center;
	font-size: 4em;
`
