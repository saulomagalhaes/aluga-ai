import styled from 'styled-components'

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
`
export const ProductsContent = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme['gray-100']};
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: 0 0 1rem ${(props) => props.theme['gray-300']};

    button {
      margin-top: 1rem;
      font-size: 1rem;
      border: 0;
      color: ${(props) => props.theme['green-500']};
      background: ${(props) => props.theme['gray-100']};
      outline: 1px solid ${(props) => props.theme['green-500']};
      padding: 0.5rem 1rem;

      :hover {
        background: ${(props) => props.theme['green-500']};
        color: ${(props) => props.theme.white};
      }
    }
  }
`
