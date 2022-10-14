import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 2rem;
  margin-bottom: 1rem;
  background: ${(props) => props.theme['gray-100']};

  img {
    width: 12rem;
  }
  button {
    font-size: 1rem;
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme['green-300']};
    border: 0;
    padding: 0.6rem 1.5rem;
    border-radius: 0.25rem;
    margin-left: 0.5rem;
  }
`
