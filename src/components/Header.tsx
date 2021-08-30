import {NavLink } from 'react-router-dom'
import '../styles/header.scss' 
const Header = () => {

 return(
  <header className = 'header' >
        <NavLink activeClassName = 'ativo' to = '/produtos' >Produtos</NavLink>
        <NavLink activeClassName = 'ativo' to = '/contatos' >Contato</NavLink>
  </header>
 )
}

export default Header