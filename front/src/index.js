import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import './css/style.css';
import logo from './img/musikdin-logo.png';
import quems from './img/img-quems.png';
import conts from './img/img-forms.png';


export default function App() {
   window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position)
   )
   return (
      <>
         <section id="header">
            <nav class="navbar navbar-expand-lg navbar-main">
               <div class="container">
                  <div class="col-8 col-lg-2 col-xxl-4">
                     <a class="navbar-brand" href="#"><img class="logo-header" width="247" height="58" src={logo} alt="Musikdin" /></a>
                  </div>
                  <div class="col-4 d-lg-none text-end">
                     <button class="navbar-toggler" title="Expandir" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarMain" aria-controls="navbarMain">
                        <span class="navbar-toggler-icon"></span>
                     </button>
                  </div>
                  <div class="col-12 col-lg-10 col-xxl-8">
                     <div class="offcanvas offcanvas-end" tabindex="-1" id="navbarMain">
                        <div class="offcanvas-header justify-content-end">
                           <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                           <ul class="navbar-nav justify-content-end align-items-lg-center flex-grow-1 pe-3">
                              <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
                              <li class="nav-item"><a class="nav-link" href="#">Quem somos</a></li>
                              <li class="nav-item"><a class="nav-link" href="#">Serviços</a></li>
                              <li class="nav-item"><a class="nav-link" href="#">Avaliações</a></li>
                              <li class="nav-item"><a class="nav-link" href="#">Contatos</a></li>
                              <li class="nav-item"><button target="_blank" class="btn-header" href="#">Fazer login</button></li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </nav>
         </section>

         <div class="banner">
            <div class="col-12 banner-conteudo container">
               <h1>Bem vindo ao Musikdin</h1>
               <p>Descubra o palco perfeito para a sua música!</p>
               <a href="#" class="btn-banner">Saiba mais</a>
            </div>
         </div>

         <div class="div-quems">
            <div class="container d-flex">
               <div class="col-12 row">
                  <div class="col-12 col-md-6 col-lg-6">
                     <h1>Conheça o Musikdin</h1>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                     </p>
                     <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                     </p>
                     <p>
                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.
                     </p>
                     <a href="#" class="btn-banner">Saiba mais</a>
                  </div>
                  <div class="col-12 col-md-6 col-lg-6">
                     <img src={quems} alt="Minha Figura" />
                  </div>
               </div>
            </div>
         </div>

         <div class="div-servicos">
            <div class="container">
               <div class="col-12 row">
                  <div class="col-12 text-center titulo-servicos">
                     <h2>Conheça nossos serviços</h2>
                  </div>
                  <div class="col-12 col-md-4 col-lg-4">
                     <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                           <h5 class="card-title">Card title</h5>
                           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                           <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                     </div>
                  </div>
                  <div class="col-12 col-md-4 col-lg-4">
                     <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                           <h5 class="card-title">Card title</h5>
                           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                           <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                     </div>
                  </div>
                  <div class="col-12 col-md-4 col-lg-4">
                     <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                           <h5 class="card-title">Card title</h5>
                           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                           <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div class="div-contato">
            <div class="container d-flex">
               <div class="col-12 row">
                  <div class="col-12 col-md-6 col-lg-6 d-flex img-forms">
                     <img src={conts} alt="Minha Figura" />
                  </div>
                  <div class="col-12 col-md-6 col-lg-6">
                     <div class="texto-forms row">
                        <h2>Entre em Contato!</h2>
                        <p>Preencha o formulário e nos diga que tipo de palco você busca!</p>
                     </div>
                     <form class="row g-3">
                        <div class="col-md-6">
                           <input type="text" class="form-control" id="inputName" placeholder="Nome*" />
                        </div>
                        <div class="col-md-6">
                           <input type="email" class="form-control" id="inputEmail4" placeholder="E-mail*" />
                        </div>
                        <div class="col-md-6">
                           <input type="tel" class="form-control" id="inputPhone" placeholder="Telefone*" />
                        </div>
                        <div class="col-md-6">
                           <input type="text" class="form-control" id="inputSubject" placeholder="Assunto*" />
                        </div>
                        <div class="col-12">
                           <input type="text" class="form-control" id="inputAddress" placeholder="Endereço*" />
                        </div>
                        <div class="col-12">
                           <input type="text" class="form-control" id="inputAddress2" placeholder="Complemento" />
                        </div>
                        <div class="col-md-4">
                           <input type="text" class="form-control" id="inputCity" placeholder="Cidade*" />
                        </div>
                        <div class="col-md-4">
                           <select id="inputState" class="form-select">
                              <option selected>Estado</option>
                              <option>AC</option>
                              <option>AL</option>
                              <option>AP</option>
                              <option>AM</option>
                              <option>BA</option>
                              <option>CE</option>
                              <option>ES</option>
                              <option>GO</option>
                              <option>MA</option>
                              <option>MT</option>
                              <option>MS</option>
                              <option>MG</option>
                              <option>PA</option>
                              <option>PB</option>
                              <option>PR</option>
                              <option>PE</option>
                              <option>PI</option>
                              <option>RJ</option>
                              <option>RN</option>
                              <option>RS</option>
                              <option>RO</option>
                              <option>RR</option>
                              <option>SC</option>
                              <option>SP</option>
                              <option>SE</option>
                              <option>TO</option>
                              <option>DF</option>
                           </select>
                        </div>
                        <div class="col-md-2">
                           <input type="text" class="form-control" id="inputZip" placeholder="N°" />
                        </div>
                        <div class="col-md-2">
                           <input type="text" class="form-control" id="inputCep" placeholder="CEP" />
                        </div>
                        <div class="col-md-12">
                           <textarea class="form-control txtmensagens" placeholder="Mensagem" id="floatingTextarea2"></textarea>
                        </div>
                        <div class="col-12">
                           <button type="submit" class="btn btn-primary btn-formsc">Enviar</button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>

         <div class="div-footer">
            <div class="container d-flex">
               <div class="col-12 row">
                  <div class="col-12 col-md-3 col-lg-3 colunas-footer">
                     <a class="navbar-brand" href="#"><img class="logo-footer" width="247" height="58" src={logo} alt="Musikdin" /></a>
                     <p class="slogan-footer">
                        Harmonize seu talento e encontre o palco perfeito. Uma sinfonia de oportunidades para músicos e palcos se encontrarem.
                     </p>
                  </div>
                  <div class="col-12 col-md-3 col-lg-3 colunas-footer">
                     <p class="h2">Navegação</p>
                     <ul class="list-unstyled list-footer d-flex flex-column">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Quem Somos</a></li>
                        <li><a href="#">Serviços</a></li>
                        <li><a href="#">Avaliações</a></li>
                        <li><a href="#">Contato</a></li>
                     </ul>
                  </div>
                  <div class="col-12 col-md-3 col-lg-3 colunas-footer">
                     <p class="h2">Serviços</p>
                     <ul class="list-unstyled list-footer d-flex flex-column">
                        <li><a href="#">Encontrar Músico</a></li>
                        <li><a href="#">Encontrar Banda</a></li>
                     </ul>
                  </div>
                  <div class="col-12 col-md-3 col-lg-3 colunas-footer">
                     <p class="h2">Informações</p>
                     <ul class="list-unstyled list-footer d-flex flex-column">
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Linkedin</a></li>
                        <li><a href="#">Github</a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>

      </>
   )
}
ReactDOM.render(
   <App />,
   document.querySelector("#root")
)