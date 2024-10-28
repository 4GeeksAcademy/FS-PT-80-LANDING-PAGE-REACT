import React from "react";

export const NavBar = () => {
return(

    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="#">NBA - National Basket American</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active text-white" aria-current="page" href="#">Base</a>
        <a className="nav-link text-white" href="#">Alero</a>
        <a className="nav-link text-white" href="#">Escolta</a>
        <a className="nav-link text-white" href="#">Pívot</a>
        <a className="nav-link text-white" href="#">Ala-Pívot</a>
      </div>
    </div>
  </div>
</nav>
 );
};