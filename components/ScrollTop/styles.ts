import styled, { css } from 'styled-components'

interface TitleProps {
    readonly showScroll: boolean;
}

export const TopButton = styled.button<TitleProps>`
    display: ${props => props.showScroll  ?  'flex' : 'none'};
    position: fixed;
    bottom: 20px;
    right: 50px;
    ${props => props.color === "light" ? css`
        color: #1A202C;
        background-color: #fff;
    ` : css`
        color: #fff;
        background-color: rgba(255, 255, 255, 0.08);
    `}
    align-items: center;
    justify-content: center;
    z-index: 100;
    cursor: pointer;
    animation: fadeIn 0.3s;
    transition: opacity 0.4s;
    padding: 15px;
    border-radius: 15px;
    font-size: 25px;
    border: none;
    outline: none;

    &:hover {
        background-color: ${props => props.color === 'light' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0.05)'};
        transition: all ease-in-out 0.2s;
    }
`
