import styled from 'styled-components';
import { theme } from '../../theme';

type ModalProps = {
    visible: boolean;
};

export const Container = styled.div`
    width: 100%;
    padding: 135px 101px 135px 101px;
`;

export const Modal = styled.div<ModalProps>`
    width: 100%;
    height: 100%;
    background-color: rgba(19, 19, 19, 0.76);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    position: ${({ visible }) => visible ? 'fixed' : 'absolute'};
    display: ${({ visible }) => visible ? 'flex' : 'none'};
    animation: animate;
    animation-duration: 800ms;

    @keyframes animate {
        from { opacity: 1; }
        from { opacity: 0; }
    }
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

export const HeaderInnerBox = styled.div`
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

    padding: 71px 51px 71px 51px;
    background-color: ${theme.colors.cards};
    border-radius: 67px;

    margin-top: 110px;

    .card {
        background-color: ${theme.colors.card};
        border-radius: 28px;
        padding: 48px 51px 48px 51px;
        display: inline-flex;
        flex-direction: column;

        margin-left: 45px;
        cursor: pointer;

        /* &.first { margin-left: 0; } */
        &:nth-child(3n+1) { margin-left: 0; }
        &:nth-child(1n+4) { margin-top: 53px; }

        .text {
            font-size: 40px;
            font-weight: bold;
            color: ${theme.colors.text};

            margin-top: 46px;

            &.first { margin-top: 0; }
        }
    }


`;

export const Card = styled.div``;

export const Text = styled.p``;

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