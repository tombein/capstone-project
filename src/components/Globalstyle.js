import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html {
  font-size: 62.5%;
	font-family: -apple-system, sans-serif;
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {  
  }
  :root {
    --main-color: #132a13;
    --card-color: #31572c;

  }
`;

export default GlobalStyle;
