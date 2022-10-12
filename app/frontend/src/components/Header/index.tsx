import { NavLink } from 'react-router-dom'
import logoAllugator from '../../assets/logotype.png'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoAllugator} alt="" />
      </NavLink>
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
