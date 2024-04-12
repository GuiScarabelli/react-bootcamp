import api from "./api";
import { useState } from "react";
function App() {
  const [musicas, setMusicas] = useState([]);
  const listaMusicas = musicas.map((musica) => {
    return (
      <div key={musica.id}>
        <h2>{musica.nomeMusica}</h2>
        <p>{musica.artista}</p>
        <img src={musica.imagem} alt={musica.nomeMusica} />
      </div>
    );
  });
  // criando state com valor de um vetor vazio;
  function listar() {
    api
      .get()
      .then((respostaObtida) => {
        // cairá aqui se a requisição for realizada;
        console.log(respostaObtida);
        // objeto que representa a resposta enviada pela API;
        console.log(respostaObtida.status);
        // vendo status da resposta (OK - 200);
        console.log(respostaObtida.data);
        // vendo os dados da resposta (data: []);
        setMusicas(respostaObtida.data);
        // setando "musicas" com os mesmos dados recebidos pela resposta da requisição;
      })
      .catch((erroOcorrido) => {
        // cairá aqui se houver algum erro durante a requisição
        console.log(erroOcorrido);
      });
  }
  return (
    <>
      <h1>Titulo</h1>
      <button onClick={listar}>Listar</button>
      {listaMusicas}
    </>
  );
}

export default App;
