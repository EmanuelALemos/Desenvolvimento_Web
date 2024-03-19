import styled from 'styled-components';



export const Container = styled.div`
    width: 150px;
    height: 150px;
    background-color: ${props => props.peso / (props.altura * props.altura) < 18 ? '#febc35' : props.peso / (props.altura * props.altura) > 25 ? '#bd2416' : '#3b8952'};
    border: 2px solid transparent;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    margin: 1rem;
`;
