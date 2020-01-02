import React from 'react';
import scroll1 from '../img/article1final-01.png'
import photoBimArticle from '../img/bim-batiment-principal.jpg'
import photoContact from '../img/Contact-light.jpg'


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


class Contact extends React.Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg  navbar-light firstnavbar">
                        <Link to="/" className="navbar-brand logo">BIM</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav float-right">
                                <Link to="/articles" className="nav-item nav-link ml-5">ARTICLES</Link>
                                <Link to="/contact" className="nav-item nav-link ml-5">CONTACT</Link>
                            </div>
                        </div>
                    </nav>
                </div>


                <div className="container-fluid ContactBox">
                    <div className="card border-0 shadow mx-auto sizeCard container ">
                        <div className=" card-body p-5 my-2">
                            <h1 className="font-weight-light text-center">CONTACT</h1>
                            <div className="form-group container ">
                                <label for="exampleFormControlInput1">Email</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="form-group container">
                                <label for="exampleFormControlTextarea1">Votre message…</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
                                <button className="BtnEnvoyer my-4">Envoyer</button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        )

    }
}

export default Contact
