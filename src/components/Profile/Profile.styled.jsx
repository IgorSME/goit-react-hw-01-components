import styled from "@emotion/styled";

export const ProfileItem = styled.div`
margin: 40px;
border: 1px solid;
// display: inline-block;
    display: table;
padding: 25px;

`
export const Description = styled.div`
text-align: center;

`
export const Image = styled.img`
width: 100px;
border: 1px blue;
border-radius: 50%;
`


export const StatList = styled.ul`
display: flex;
list-style: none;
padding: 15px;
`
export const StatItem = styled.li`
display: flex;
flex-direction: column;
padding: 15px;
    background-color: gray;
    color: white;
    text-align: center;
    min-width: 75px;
`

export const Quantity = styled.span`
color: black;
font-weight: bold;
margin-top: 10px;
`