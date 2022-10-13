import styled from 'styled-components'

export const ContainerCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme['gray-100']};
  padding: 3rem;
  border-radius: 1rem;
  box-shadow: 0 0 1rem ${(props) => props.theme['gray-300']};

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  button {
    font-size: 1rem;
    color: ${(props) => props.theme.white};
    font-weight: 600;
    background: ${(props) => props.theme['green-300']};
    border: 0;
    padding: 0.6rem 1.5rem;
    border-radius: 0.25rem;
    margin-top: 1rem;
  }

  input {
    margin-top: 1rem;
  }
`
