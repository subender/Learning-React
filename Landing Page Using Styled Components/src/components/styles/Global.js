import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@400;600;700&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background-color: ${({ theme }) => theme.colors.body};
    color: hsl(192,100%,9%);
    font-family: 'Baloo Tamma 2', cursive;
    font-size: 1.15em;
}

p{
    opacity: 0.6;
    line-height: 1.5;
}

img{
    max-width: 100%;
}
`;

export default GlobalStyles;
