import './componentes.css';
import React, {Component, useState} from 'react';
import {Modal, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import swal from '@sweetalert/with-react';


class Componentes extends Component {


render () {


  return (
    <div id='body'>
      <Header />
      <Main />
  
      <Footer />

    </div>
  );
}
}


const Header = () => {
  return (
    <header>

      <h1>Sistema de Cadastros</h1>
    
    </header>
  );
}

const Main = () => {
    const [showCliente, setShowCliente] = useState(false);
    const [showProduto, setShowProduto] = useState(false);

    const handleCloseCliente = () => setShowCliente(false);
    const handleShowCliente = () => setShowCliente(true);
    const handleCloseProduto = () => setShowProduto(false);
    const handleShowProduto = () => setShowProduto(true);

    const handleCadastroCliente = (e) => {
        e.preventDefault();
        let username = e.target.elements.nome.value;
        let email = e.target.elements.email.value;
        let telefone = e.target.elements.telefone.value;
        let cpf = e.target.elements.cpf.value;
        let endereco = e.target.elements.endereco.value;
        let numero = e.target.elements.numero.value;
        let complemento = e.target.elements.complemento.value;
        let bairro = e.target.elements.bairro.value;
        let cidade = e.target.elements.cidade.value;
        let cep = e.target.elements.cep.value;
        let estado = e.target.elements.estado.value;

        let data = {
          username,
          email,
          telefone,
          cpf,
          endereco,
          numero,
          complemento,
          bairro,
          cidade,
          cep,
          estado
        }

        let idClientes = JSON.parse(localStorage.getItem('cadastroCliente') ?? '[]');
        idClientes.push(data);        
        idClientes = JSON.stringify(idClientes);
        localStorage.setItem('cadastroCliente', idClientes);

        swal('Cadastro realizado!', '', 'success');
               
      };

      const handleCadastroProduto = (e) => {
        e.preventDefault();
        let productname = e.target.elements.nome.value;
        let codigo = e.target.elements.codigo.value;
        let categoria = e.target.elements.categoria.value;
        let quantidade = e.target.elements.quantidade.value;
        let preco = e.target.elements.preco.value;
        let descricao = e.target.elements.descricao.value;


        let data = {
          productname,
          codigo,
          categoria,
          quantidade,
          preco,
          descricao,
        }

        let idProdutos = JSON.parse(localStorage.getItem('cadastroProduto') ?? '[]');
        idProdutos.push(data);        
        idProdutos = JSON.stringify(idProdutos);
        localStorage.setItem('cadastroProduto', idProdutos);

        swal('Cadastro realizado!', '', 'success');
    
      };
    
  return (
 <div>
      <div className='cadastros'>
        <button className='botoes' onClick={handleShowCliente}>Cadastro do Cliente</button>
        <button className='botoes' onClick={handleShowProduto}>Cadastro do Produto</button>
      </div>

    
      <Modal
    show={showCliente}
    onHide={handleCloseCliente}
    backdrop="static"
    keyboard={false}
    id='modalcliente'
  >
    <Modal.Header closeButton>
      <Modal.Title>Cadastro do Cliente</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    
            <form onSubmit={handleCadastroCliente}>
                <input className='inputmarginname' type="text" id="nome" name="nome" placeholder="Nome" required/>
                <br></br>
                <input className='inputmargin' type="text" id="email" name="email" placeholder="Email" required/>
                <input className='inputmargin' type="text" id="telefone" name="telefone" placeholder="Telefone" required/>
                <input className='inputmargin' type="text" id="cpf" name="cpf" placeholder="CPF" required/>
                <input className='inputmargin' type="text" id="endereco" name="endereco" placeholder="Endereço" required/>
                <input className='inputmargin' type="text" id="numero" name="numero" placeholder="Número" required/>
                <input className='inputmargin' type="text" id="complemento" name="complemento" placeholder="Complemento" />
                <input className='inputmargin' type="text" id="bairro" name="bairro" placeholder="Bairro" required/>
                <input className='inputmargin' type="text" id="cidade" name="cidade" placeholder="Cidade" required/>
                <input className='inputmargin' type="text" id="cep" name="cep" placeholder="CEP Ex:00000-000" maxLength="9" required/>
                <input className='inputmargin' type="text" id="estado" name="estado" placeholder="UF" maxLength="2" required/>
                <br></br>
                <input className='inputmargin' type="reset" defaultValue="Reset" value='Limpar Formulário'  />  
                <Button className='botaocadastrocliente' variant="primary" type='submit'>Cadastrar</Button>
            </form>
           
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleCloseCliente}>
        Fechar
      </Button>

    </Modal.Footer>
  </Modal>

  <Modal
    show={showProduto}
    onHide={handleCloseProduto}
    backdrop="static"
    keyboard={false}
    id='modalproduto'
  >
    <Modal.Header closeButton>
      <Modal.Title>Cadastro do Produto</Modal.Title>
    </Modal.Header>
    <Modal.Body>
   
            <form onSubmit={handleCadastroProduto}>
                <input className='inputmargin' type="text" id="nome" name="nome" placeholder="Nome do Produto" required/>
                <input className='inputmargin' type="number" id="codigo" name="codigo" placeholder="Código" required/>
                <input className='inputmargin' type="text" id="categoria" name="categoria" placeholder="Categoria" required/>
                <input className='inputmargin' type="number" id="quantidade" name="quantidade" placeholder="Quantidade" required/>
                <input className='inputmargin' type="number" id="preco" name="preco" placeholder="Preço" required/>
                <br></br>
                <textarea className='inputmargin' name="descricao" id="descricao" cols="35" rows="5" placeholder="Informações técnicas" required></textarea>
                <br></br>
                <input className='inputmargin' type="reset" defaultValue="Reset" value='Limpar Formulário'  />  
                <Button className='botaocadastrocliente' variant="primary" type='submit'>Cadastrar</Button>
            </form>
           
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleCloseProduto}>
        Fechar
      </Button>

    </Modal.Footer>
  </Modal>
    </div>
    
  );
}



const Footer = () => {
  return(
   <footer>
     <h4>Autor: Delano Augusto</h4>
   </footer>
  )
}



export default Componentes;
