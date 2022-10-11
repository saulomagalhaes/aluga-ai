import styled from 'styled-components'

export const ProductContainer = styled.main`
  padding: 1rem 10rem;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 20rem;
  }

  div {
    margin-left: 2rem;
    background: ${(props) => props.theme['gray-100']};
    padding: 5rem;
    border-radius: 0.5rem;

    h1 {
      margin-bottom: 2rem;
    }

    p {
      font-size: 1.5rem;
      line-height: 2rem;
    }

    button {
      margin-top: 5rem;
      font-size: 1rem;
      border: 0;
      color: ${(props) => props.theme['green-500']};
      background: ${(props) => props.theme['gray-100']};
      outline: 1px solid ${(props) => props.theme['green-500']};
      padding: 0.5rem 3rem;
      border-radius: 0.25rem;

      :hover {
        background: ${(props) => props.theme['green-500']};
        color: ${(props) => props.theme.white};
      }
    }
  }
`
