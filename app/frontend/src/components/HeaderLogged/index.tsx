import { NavLink, useNavigate } from 'react-router-dom'
import logoAllugator from '../../assets/logotype.png'
import { HeaderContainer } from './styles'

export function HeaderLogged() {
  const navigate = useNavigate()
  const removeTokenLocalStorage = () => {
    localStorage.removeItem('token')
    navigate('/')
  }
  return (
    <HeaderContainer>
      <NavLink to="/user">
        <img src={logoAllugator} alt="" />
      </NavLink>
      <div>
        <NavLink to="/signatures">
          <button>MINHAS ASSINATURAS</button>
        </NavLink>
        <NavLink to="/">
          <button onClick={removeTokenLocalStorage}>SAIR</button>
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
