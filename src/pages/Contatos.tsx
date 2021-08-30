import img from '../img/logo.jpg'
import '../styles/contato.scss'
import '../styles/global.scss'

const Contatos = () => {

 return(
   <section className =  'section animacaoLeft'>
     <div>
         <img src = {img} alt =  'imagem' />
     </div>
   
     <div>
        <h3>Vanderlei de Oliveira Lemos</h3>
        <h4>Telefone : 35997111055</h4>
        <h4> Linkedin : https://www.linkedin.com/in/vanderlei-lemos-09/</h4>
        <h4> github : https://github.com/Delei09</h4>
     </div>
   </section>
 ) 
}
export default Contatos