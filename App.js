import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


function App() {

  const state = useSelector((state) => {
    return state.reducer
  });

  const nome = useSelector((state) => {
    return state.nomesReducer
  });

  const dispatch = useDispatch();

  console.log(state);

  return (
    <div className="App" style={{textAlign:'center', color: 'tomato', fontWeight: 'bolder'}}>
      {state}
      <br />
     
    <button onClick={() => dispatch({type: "ADICIONAR"})} style={{background: 'yellow', width: '100px'}}>
      Adicionar
    </button>
    <br />
    <button onClick={() => dispatch({type: "SUBTRAIR"})} style={{background: 'green', width: '100px'}}>
      Subtrair
    </button>
    <br />
    <hr />
    {nome}
    <br />
    <button onClick={() => dispatch({type: "OUTROTEXTO"})} style={{background: 'blue', width: '100px'}}>
      Troca texto
    </button>
    <br />
    <button onClick={() => dispatch({type: "TEXTO"})} style={{background: 'red', width: '100px'}}>
      Outro Texto
    </button>

    </div>
  );
}

export default App;
