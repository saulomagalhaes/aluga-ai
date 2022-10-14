import styled from 'styled-components'

export const ContainerLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;

  form {
    display: flex;
    flex-direction: column;
    background: ${(props) => props.theme['gray-300']};
    padding: 8rem 6rem;
    border-radius: 1rem;
    box-shadow: 0 0 1rem ${(props) => props.theme['gray-300']};

    img {
      width: 200px;
      margin-bottom: 2rem;
    }

    label {
      margin-top: 1rem;
      font-size: 1.2rem;
    }

    input {
      margin-top: 0.5rem;
      border: 0;
      border-radius: 0.25rem;
      height: 2rem;
      width: 15rem;
      padding: 0 0.5rem;
    }

    button {
      margin-top: 1rem;
      font-size: 1rem;
      border: 0;
      color: ${(props) => props.theme.white};
      background: ${(props) => props.theme['green-300']};
      padding: 0.5rem 1rem;
    }

    p {
      margin-top: 1rem;
      font-size: 1rem;
      color: ${(props) => props.theme['red-700']};
      text-align: center;
    }
  }
`
