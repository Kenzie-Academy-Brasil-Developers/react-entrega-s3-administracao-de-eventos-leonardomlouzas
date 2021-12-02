import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
    ul {
        width: 80vw;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        box-shadow: 0px 0px 14px 0px #000000;
        background-color: white;
        border-radius: 20px;

        li {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 300px;
            padding: 5px;
            margin: 15px;
            border-radius: 5px;
            
            div {
                height: 35%;
            }
            p {
                max-height: 25%;
                overflow: scroll;
                overflow-x: hidden;
                ::-webkit-scrollbar {
                    display: none;
                }
            }
            img {
                width: 100px;
                height: 150px;
            }
            :hover {
                background-color: #aaa;
                box-shadow: 0px 0px 14px 0px #000000;
            }
        }
    }
`