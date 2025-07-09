import React from 'react';
  /*onClick é um parametro sendo preenchido com um argumento*/
  /*em função que é passado os paramentros*/
function App() {
  const handleSave = () => {
    alert("Dados salvos!");
  };

  const handleShare = () => {
    alert("Conteúdo compartilhado!");
  };

  const handleCancelShare = () => {
    alert("Compartilhamento cancelado!");
  };

  return (
    <div className="Teste">
    
      <button className="botao-salvar" onClick={handleSave}> 
        Salva
      </button>
      <button className="botao-compartilhar" onClick={handleShare}>
        Compartilhar
      </button>
      <button className="botao-cancelar" onClick={handleCancelShare}>
        Cancelar
      </button>
    </div>
  );
}

export default App;

