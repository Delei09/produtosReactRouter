import { useEffect , useState } from "react"
import {useParams } from 'react-router-dom'
import axios from 'axios'
import Carregar from "../components/Carregar"
import '../styles/global.scss'
import '../styles/produto.scss'


type idParams = {
 id: string;
};
type fotoType = {
 titulo: string;
 src : string
}[]
type produtoType = {
 id : string,
 descricao : string,
 preco : string ,
 nome : string,
 fotos : fotoType
}
const Produto = () => {

 const [produto, setProduto] = useState<produtoType>()
 const [carregando , setCarregando ] = useState<boolean>(true)
 const {id} = useParams<idParams>()

 useEffect( () => {
   axios.get(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
    .then(resp => resp.data)
    .then(dados => {
      setProduto(dados)
      setCarregando(false)
    })

 }, [id])

 return(
   <section className = 'animacaoLeft produto'>

   { carregando ? <Carregar /> : produto?.fotos.map( (foto, index) => {
              if(index === 0){
               return(
                <img key = {index} src = {foto.src}  alt = {foto.titulo} />
               )}else {return ''}
             })}
   <div>
        <h3> {produto?.nome} </h3>
       {produto ?  <h5>R${produto?.preco}</h5> : null}
   </div>
   <div>
        <h5>{produto?.descricao}</h5>
   </div>

    
   </section>
 )
}
export default Produto