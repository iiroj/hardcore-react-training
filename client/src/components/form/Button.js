import styled, { css } from 'styled-components';

export default styled.button`
  background-color: hsla(0, 0%, 60%, 1);
  border-radius: 1.5em;
  border: none;
  box-shadow: 0 1px 4px hsla(0, 0%, 0%, 0.2);
  color: hsla(0, 0%, 100%, 1);
  display: block;
  font-size: 0.8em;
  height: 2em;
  outline: none;
  padding: 0 1em;
  position: relative;
  transition: box-shadow 125ms ease-out;

  &:hover:not(:disabled) {
    box-shadow: 0 2px 8px hsla(0, 0%, 0%, 0.2);
    cursor: pointer;
  }

  &:active:not(:disabled) {
    box-shadow: inset 0 0 0 10rem hsla(0, 0%, 0%, 0.2);
    transform: scale(0.95);
  }

  &:disabled {
    box-shadow: none;
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props => props.color === 'red' && css`background: hsla(0, 80%, 40%, 1);`};
`;
