import React from "react";
import ListaPost from "../components/ListaPost";

const Home = () => {
  return (
    <main>
      <ListaPost url={'/posts'} />
      <div className="container">
        <h2 className="titulo-pagina">Pet notícias</h2>
      </div>
    </main>
  );
};

export default Home;
