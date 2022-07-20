import styled from "@emotion/styled";


export const Label = styled.span`
display: block;
margin-bottom: 10px;
`
export const Item = styled.li`
padding: 16px;
background-color: ${() => getRandomHexColor()}
`
export const Percentage = styled.span`
font-size: 24px;
    font-weight: bold;
`
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}