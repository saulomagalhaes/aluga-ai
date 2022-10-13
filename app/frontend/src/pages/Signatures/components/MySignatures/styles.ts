import styled from 'styled-components'

export const ContainerMySignatures = styled.div`
  display: flex;
  padding: 0 2rem;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme['gray-100']};
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 0 1rem ${(props) => props.theme['gray-300']};
`
