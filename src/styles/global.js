import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

:root{

}

body{
  background-color: #3c5ba6;
    
}

body,input,button {
    font-family: "inter";
    font-size: 1rem;
} 

button{
    border: none;
    cursor: pointer;
}

a{
    text-decoration: none;
}

`;
