import styled from 'styled-components';
import { theme } from '../../theme';

type ModalProps = {
    visible: boolean;
};

export const Container = styled.div`
    width: 100%;
    padding: 135px 101px 135px 101px;
`;

export const ModalBackground = styled.div<ModalProps>`
    width: 100%;
    height: 100%;
    background-color: rgba(19, 19, 19, 0.76);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    position: ${({ visible }) => visible ? 'fixed' : 'absolute'};
    display: ${({ visible }) => visible ? 'flex' : 'none'};
    animation: animate;
    animation-duration: 800ms;

    @keyframes animate {
        from { opacity: 1; }
        from { opacity: 0; }
    }
`;

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 80%;
    height: auto;
    top: 80px;
    left: 0;
    right: 0;
    margin: 0 auto;
    position: fixed;

    padding: 113px 79px 113px 79px;
    background-color: ${theme.colors.card};
    border-radius: 65px;
    z-index: 2;
`;

export const ModalTop = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ModalBox = styled.div`
    width: 33.33%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */

    &.box-description {
        width: 100%;
        /* align-items: flex-start; */
    }
`;

export const ModalText = styled.p`
    color: ${theme.colors.text};
    font-size: 55px;
    font-weight: 500;
`;

export const ModalInput = styled.input`
    background-color: #3B56B9;
    border-radius: 24px;
    padding: 50px 26px 50px 26px;

    width: 60%;
    font-size: 41px;
    font-weight: 500;
    color: ${theme.colors.text};
    text-align: center;

    margin-top: 37px;

    &::placeholder { color: ${theme.colors.text}; }

    &.hour { width: 70%; }
    &.input-description { 
        width: 100%; 
        text-align: left;
    }
`;

export const ModalBottom = styled.div`
    display: flex;
    flex-direction: row;
    /* background-color: red; */
    /* padding: 20px; */

    margin-top: 111px;
    
`;

export const Title = styled.h1`
    font-size: 97px;
    font-weight: bold;
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`;

export const Column = styled.div`
    width: 33.33%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    &.column3 {
        justify-content: flex-end;
        padding-right: 56px;
    }
`;

export const ButtonReset = styled.button`
    position: relative;
    padding: 14px;
    background-color: ${theme.colors.buttonReset};
    border-radius: 37px;
    cursor: pointer;

    transition: background-color .2s;

    &:hover { background-color: ${theme.colors.buttonResetDark}; }
`;

export const SvgResetBox = styled.img``;

export const Cards = styled.main`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /* justify-content: center; */

    padding: 71px 51px 71px 51px;
    background-color: ${theme.colors.cards};
    border-radius: 67px;

    margin-top: 110px;
`;

export const Card = styled.div`
    background-color: ${theme.colors.card};
    border-radius: 28px;
    padding: 48px 51px 48px 51px;
    display: inline-flex;
    flex-direction: column;
    width: 335px;

    margin-left: 78px;
    cursor: pointer;

    /* &.first { margin-left: 0; } */
    &:nth-child(4n+1) { margin-left: 0; }
    &:nth-child(1n+5) { margin-top: 53px; }
`;

export const Text = styled.p`
    /* display: inline-flex; */
    font-size: 36px;
    font-weight: 600;
    color: ${theme.colors.text};

    margin-top: 46px;
    /* max-width: 430px; */

    &.first { margin-top: 0; }

    &.value {
        font-size: 30px;
        font-weight: 300;
        margin-top: 0;
        font-family: 'Roboto', sans-serif;
    }
`;

export const ButtonAdd = styled.button`
    background-color: ${theme.colors.buttonAdd};
    opacity: 0.7;
    border-radius: 55px;
    padding: 46px;

    position: fixed;
    bottom: 20px;
    right: 155px;
    
    cursor: pointer;
    transition: opacity .2s;

    &:hover {
        opacity: 1;

    }
`;

export const SvgAddBox = styled.img``;