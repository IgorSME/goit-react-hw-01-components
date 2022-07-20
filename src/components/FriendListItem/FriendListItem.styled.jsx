import styled from "@emotion/styled";

export const Item = styled.li`
display: flex;
width: 150px;
    border: 1px solid;
    border-radius: 5px;
    margin-bottom: 10px;
    box-shadow: 5px 5px 5px black;
    align-items: center;
`

export const Status = styled.span`
width: 15px;
    height: 15px;
    border-radius: 50%;
    margin-left: 10px;
    background-color: ${(props) => {
    if (props.isonline === 'true') {
    return 'green';
}
    return 'red';
    }
    
}   
`
export const Avatar = styled.img`
margin-left: 10px;
`
export const Name = styled.p`
margin-left: 10px;
`