import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;

  img {
    width: 12rem;
  }
  button {
    font-size: 1rem;
    color: ${(props) => props.theme['gray-500']};
    background: ${(props) => props.theme['gray-100']};
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 2rem;
  }
`
