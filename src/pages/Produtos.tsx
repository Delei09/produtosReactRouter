import { useEffect, useState } from "react"
import {Link } from 'react-router-dom'
import axios from 'axios'
import '../styles/global.scss'
import '../styles/produtos.scss'
import Carregar from "../components/Carregar"

type fotoType = {
  titulo : string,
  src : string
}[]

type produtoType = {
  id: string,
  nome : string,
  preco : string ,
  fotos : fotoType
}[]


const Produtos = () => {
  
  const [ aProduto , setAProduto] = useState<produtoType>() 
  const [carregando , setCarregando] = useState<boolean>(true)

  useEffect( () => {  

    axios.get('https://ranekapi.origamid.dev/json/api/produto')
      .then(resp => resp.data)
      .then(dados =>  {
        setAProduto(dados) 
        setCarregando(false)
      })
  },[])

 return(
    <section className = 'containerProdutos animacaoLeft'> 
      { carregando ? <Carregar /> : aProduto?.map( ({fotos,nome,id}) => {
        return(
          <Link to = {`produto/${id}`} key = {id}>
              {fotos.map( (foto, index) => {
                if (index === 0){
                  return <img key = {index} src = {foto.src} alt = {foto.titulo} /> 
                }else{
                  return ''
                }    
              })}
              <h3>{nome}</h3>
          </Link>
        )
      }  )}
    </section>
 ) 
}
export default Produtos