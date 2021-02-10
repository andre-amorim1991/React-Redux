import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import Menu from './components/menu/index';

function App() {
  const [inputFrutas, setFrutas] = React.useState("");
  const [inputTitulo, setTitulo] = React.useState("");

  //redux
  const state = useSelector((state) => state.reducer.frutas);
  const titulo = useSelector((state) => state.tituloReducer.titulo);
  console.log(state);
  console.log(titulo);
  
  const dispatch = useDispatch();

  //troca titulo
  function trocaTitulo (event){
    setTitulo(event.target.value);
    dispatch({type: "TROCAR", value: event.target.value })
  }

  //insere texto lista
  function adicionarFrutas (event){
    event.preventDefault();
    const objFrutas = {
      nome: inputFrutas
    }

      dispatch({type: "ADICIONAR", value:objFrutas })

  }

  return (
    <div className="App" style={{textAlign:'center', fontWeight: 'bolder'}}>

     <h1 style={{color:"red", textDecoration:"italic"}}>App para criar uma lista de itens com Redux.</h1>
      <form>
        <label>Digite aqui um titulo para sua lista</label><br />
        <input
     placeholder='Digite aqui seu titulo: '
     value={inputTitulo}
     onChange={trocaTitulo}
         />    
      </form>
      <br />
      <h1 style={{margin:"25px"}}>{titulo}</h1>
     <br />

     <form onSubmit={adicionarFrutas}>

       <input 
       placeholder="Digite algo relacionado ao titulo: " 
       value={inputFrutas} 
       onChange={(event) => setFrutas(event.target.value)}/>
      
      <button style={{background: "#7FFFD4", color: 'white', borderRadius:"5px", marginLeft:"5px", border:"none", width:"80px", height:"22px"}}>Enviar</button>
     </form>
    
     {state.map((fruta, index) =>{
       return(
         <li key={index}>{fruta.nome}</li>
       )
     })}
     </div>
  );
}

export default App;
