import React from 'react';
import photoHomepage from '../img/buildingCut-LIGHT.png'
import isometricBuilding from '../img/scroll2-01.png'
import isometricBuilding2 from '../img/bimHD.jpg'


import photoCardOne from '../img/revitAutodesk.jpg'
import photoCardtwo from '../img/agile.jpg'
import photoCardthree from '../img/whyBIM.jpg'
import photoCardfour from '../img/bimhd2.jpg'

import {
    Link
  } from "react-router-dom";


class Homepage extends React.Component {
    render() {
        return (
            
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg  navbar-light firstnavbar">
                <Link to="/" className="navbar-brand logo">BIM</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav float-right">
                        <Link to="/articles" className="nav-item nav-link ml-5">ARTICLES</Link>
                        <Link to="/contact"className="nav-item nav-link ml-5">CONTACT</Link>
                        </div>
                    </div>
                </nav>


                <div className="containerFirstScroll">
                    <div className="text-center  container-fluid definitionBIM">
                        <img src={photoHomepage} alt="Building pic" className="container-fluid firstBg" />
                        <h1 className="boldtitle mr-5">BIM</h1>
                        
                    </div>
                </div>
                <div className="container-fluid ">
                    <div className="card border-0 shadow mx-auto sizeCardArticle1 container-fluid Article4Box">
                        
                            <div className="form-group container-fluid ">
                                <img src={isometricBuilding2} alt="isometric building" className="container-fluid secondBG" />
                                <p className="lead text-justify my-4 container">Tout d'abord BIM vient de l'anglais Building Information Modeling qui se traduit par Modélisation des Informations (ou données) du Bâtiment. Le terme bâtiment ici est générique et englobe également les infrastructures. ... Le BIM définit qui fait quoi, comment et à quel moment.<br/><br/>D'ici à <b>2024</b>, l'Univers de la Construction - sur les Chantiers de Terrassement, d'Infrastructures, de Bâtiments ou de Génie Civil, sur les Mines et Carrières - et de l'Industrie auront connu une profonde mutation. Les acteurs qui auront su se transformer face aux défis actuels de <b>la Digitalisation</b> seront les leaders de ce nouveau monde.</p>
                            
                            </div>
                            </div>
                            </div>
                

                <div className='row ml-2 mr-2 my-5'>
                <div className="card container mb-4">
                        <img className="card-img-top my-3 imgCard" src={photoCardfour} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">POURQUOI LE BIM ?</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/articles/#bimArticle" className="btn buttonCards">En savoir plus</a>
                        </div>
                    </div>
                    <div className="card container mb-4">
                        <img className="card-img-top my-3 imgCard" src={photoCardOne} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">MAQUETTE NUMÉRIQUE</h5>
                            <p className="card-text">centralisant les caractéristiques physiques et fonctionnelles de l’ouvrage.</p>
                            <a href="/articles/#maquettenumerique" className="btn buttonCards">En savoir plus</a>
                        </div>
                    </div>
                    <div className="card container mb-4">
                        <img className="card-img-top my-3 imgCard" src={photoCardtwo} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">MÉTHODES DE TRAVAIL</h5>
                            <p className="card-text">transformées, plus collaboratives et à plus forte valeur ajoutée.</p>
                            <a href="/articles/#methodesdetravail" className="btn buttonCards">En savoir plus</a>
                        </div>
                    </div>
                    <div className="card container mb-4">
                        <img className="card-img-top my-3 imgCard" src={photoCardthree} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">RÈGLES DE GESTION</h5>
                            <p className="card-text">des échanges et des données, des conventions cadrant le rôle et les responsabilités de chaque intervenant.</p>
                            <a href="/articles/#gestionArticle" className="btn buttonCards">En savoir plus</a>
                        </div>
                    </div>
                    
                </div>
                <footer>
                    <div className="mt-5 pt-5 pb-5 footer">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5 col-xs-12 about-company">
                                    <h2>À propos</h2>
                                    <p className="pr-5 text-white-50">Les besoins de professionnels rompus à l'utilisation de la maquette numérique explosent, selon Syntec-Ingénierie, qui estime qu'il va être nécessaire de former 80.000 salariés d'ici à 2020</p>
                                    <p><a href="#"><i className="fa fa-facebook-square mr-1"></i></a><a href="#"><i className="fa fa-linkedin-square"></i></a></p>
                                </div>
                                <div className="col-lg-3 col-xs-12 links">
                                    <h2 className="mt-lg-0 mt-sm-3">Sources</h2>
                                    <ul className="m-0 p-0">
                                        <li>- <a href="https://www.vinci-construction-projets.com/fr/nos-savoir-faire/nos-expertises/bim/" target="_blank">Vinci Construction</a></li>
                                        <li>- <a href="https://www.autodesk.com/solutions/bim" target="_blank">Autodesk</a></li>
                                    </ul>
                                </div>
                                <div className="col-lg-4 col-xs-12 location">
                                    <h2 className="mt-lg-0 mt-sm-4">Location</h2>
                                    <p className='text-white-50'>19 Avenue Kleber, Paris</p>
                                    <p className='text-white-50'>(+33) 654301023</p>
                                    <p className='text-white-50'>info@bimotop.com</p>
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col copyright">
                                    <p class=""><small className="text-white-50">© Timothée Diot - 2019 - All Rights Reserved.</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

        )

    }
}

export default Homepage
