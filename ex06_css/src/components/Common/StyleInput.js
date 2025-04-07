import styled from "styled-components";



const SyleInput = styled.input`
    color: gary;
    font-size: 20px;
    margin-top:10px;
    border:none;
    outline:none;
    border-bottom : 1px solid lightgray;
    letter-spaceing: 3px;
    width: 100%;
    &:focus {border-bottom: 1px solid gray; }
`;
export default SyleInput;