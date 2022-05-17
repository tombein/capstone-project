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
    --input-border: #CDCDCD;
    --grey-color: #F0F0F0;
    --purple-button: linear-gradient(45deg, #D274FE, #9180FF);
    --blue-button: linear-gradient(#75EEFF, #907EFF);
    --green-button: linear-gradient(#8CF373, #AFCCA8);
    --red-button: linear-gradient(#FF5468, #FB9595);
    --blue-project: #A3DDFE;
    --purple-project: #ECA0FF;
    --yellow-project: #FFE486;
    --red-project: #FFA6A6;
    --green-project: #B6FFD3;
    --green-complex: #5EDC5C;
    --yellow-complex: #FFE247;
    --red-complex: #FF6464;
  }
`;

export default GlobalStyle;
