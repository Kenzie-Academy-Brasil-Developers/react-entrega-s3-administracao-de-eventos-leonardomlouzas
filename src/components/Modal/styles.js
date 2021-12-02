import styled from "styled-components";

export const Background = styled.div`
width: 100vw;
height: 100vh;
position: fixed;
background-color: rgba(0,0,0, 0.25);
display: flex;
justify-content: center;
align-items: center;
`

export const Container = styled.div`
text-align: center;
box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.85);
background-color: white;
padding: 25px;
border-radius: 15px;

h3 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    button {
        color: white;
        background-color: rgb(255, 70, 70);
    }
}

button {
    margin: 15px;

    :hover {
        filter: none;
        outline: 1px solid black;
    }
}
`