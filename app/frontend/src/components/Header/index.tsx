import { NavLink } from 'react-router-dom'
import logoAllugator from '../../assets/logotype.png'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoAllugator} alt="" />
      <div>
        <NavLink to="/login">
          <button>LOGIN</button>
        </NavLink>
        <NavLink to="/register">
          <button>CRIAR CONTA</button>
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
