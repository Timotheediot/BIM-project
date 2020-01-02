import React from 'react';


import pictoCalendar from '../img/pictos/calendar.svg'
import pictoOrdi from '../img/pictos/ordi.svg'
import pictoTest from '../img/pictos/test.svg'




class Articles extends React.Component {
    render() {
        return (
            <div className="container-fluid" id='entete'>
                <nav className="navbar navbar-expand-lg  navbar-light firstnavbar">
                    <a className="navbar-brand logo" href="/">BIM</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav float-right">
                            <a className="nav-item nav-link ml-5" href="/articles">ARTICLES</a>
                            <a className="nav-item nav-link ml-5" href="/contact">CONTACT</a>
                        </div>
                    </div>
                </nav>


                <div className="container-fluid ">
                    <div className="card border-0 shadow mx-auto sizeCardArticle1 container-fluid Article1Box">
                        <div className=" card-body p-5 my-2 container">
                            <h1 className="font-weight-light text-center">POURQUOI LE BIM ?</h1>
                            <div className="form-group container ">
                                <p className="lead text-justify">Le BIM, c'est des méthodes de travail et une maquette numérique paramétrique 3D qui contient des données intelligentes et structurées. Le BIM est le partage d'informations fiables tout au long de la durée de vie d'un bâtiment ou d'infrastructures, de leur conception jusqu'à leur démolition. La maquette numérique quant à elle est une représentation digitale des caractéristiques.</p>
                            </div>
                            <iframe className=' video container text-center' width="560" height="415" src="https://www.youtube.com/embed/pSK_bioP7cQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>

                

                <div className="container-fluid Article2Box">
                    <div className="card border-0 shadow mx-auto sizeCardArticle container ">
                        <div className=" card-body p-5 my-4">
                            <div className="form-group container ">
                            <h1 className="font-weight-light text-center" id="maquettenumerique">MAQUETTE NUMÉRIQUE</h1>
                                <p>Le BIM est souvent assimilé à un logiciel ou à une technologie. Il est bien plus que cela. C'est en fait une suite de processus ou méthodes de travail utilisés tout au long de la conception, de la construction et de l'utilisation d'un bâtiment. Le BIM définit qui fait quoi, comment et à quel moment.<br /><br />Un ou plusieurs modèles virtuels 3D paramétriques intelligents et structurés sont utilisés tout au long de la conception, de la construction et même de l'utilisation d'un bâtiment. Ces modèles virtuels permettent d'effectuer des analyses et simulations (énergétiques, calcul structurel, détections des conflits, etc), des contrôles (respect des normes, du budget, etc) et des visualisations.<br />La maquette numérique structurée permet une collaboration entre tous les intervenants d'un projet, soit par des échanges de données, soit en permettant une intervention sur un seul et même modèle.<br /><br />Avec le BIM, les analyses-contrôles-visualisation sont effectués très tôt dans l'étude d'un projet, permettant ainsi une conception de meilleure qualité et la détection des problèmes avant la mise en chantier.<br /><br />Grâce à la maquette numérique constamment tenue à jour, les coûts de construction sont mieux maîtrisés car extraits en temps réel. La qualité des bâtiments se trouve globalement améliorée grâce aux différentes analyses et simulations effectuées à un stade précoce du projet, avant que les coûts des modifications n'aient trop de répercussions.</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="container-fluid ">
                    <div className="card border-0 shadow mx-auto sizeCardArticle1 container-fluid Article1Box">
                        <div className=" card-body p-5 my-2 container">
                            <h1 className="font-weight-light text-center" id="methodesdetravail">MÉTHODES DE TRAVAIL</h1>
                            <div className="form-group container ">
                                <p className="lead text-justify">Le BIM, c'est tout d'abord des changements dans nos méthodes de travail. Ces changements sont sensés déboucher sur une amélioration de notre productivité et amener une valeur ajoutée à notre activité. Il est important d'identifier par exemple les pertes de temps et les risques d'erreurs, comme lors de la duplication de saisie d'informations durant les échanges de données. Une fois l'identification d'un problème effectuée, il faut penser au moyen de le résoudre par un nouveau processus, une nouvelle méthode de travail.</p>
                            </div>
                            <div className="form-group container ">
                                <p className="lead text-justify">La mise en place de nouveaux processus se fait selon le cycle:</p>
                                <h3>Planifier</h3>
                                <p className="lead text-justify">Identifier les problèmes et opportunités pour une amélioration et développer un plan pour effectuer les changements.</p>
                                <h3>Effectuer</h3>
                                <p className="lead text-justify">Déployer le plan, documenter tous les changements effectués.</p>
                                <h3>Vérifier</h3>
                                <p className="lead text-justify">Analyser les processus révisés afin de vérifier si les buts ont été atteints.</p>
                                <h3>Agir</h3>
                                <p className="lead text-justify">Documenter, standardiser et divulguer les résultats. Si les buts n'ont pas été atteints, déterminer pourquoi et effectuer les modifications nécessaires.</p>
                            </div>
                            <div className='row ml-2 mr-2 my-5'>
                                <div className="card container mb-4">
                                    <img className="card-img-top my-3 imgCard" src={pictoCalendar} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">PLANIFIER</h5>
                                        <ul>
                                            <li>Planification du changement</li>
                                            <li>Checklist du déploiement</li>
                                            <li>Plan de déploiement</li>
                                            <li>Formation initiale</li>
                                            <li>Planification formation pour la phase suivante</li>
                                        </ul>

                                    </div>
                                </div>

                                <div className="card container mb-4">
                                    <img className="card-img-top my-3 imgCard" src={pictoOrdi} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">EFFECTUER</h5>
                                        <ul >
                                            <li>Gestion du changement</li>
                                            <li>Logiciels et ordinateurs adéquats</li>
                                            <li>Déploiement</li>
                                            <li>Formation de tous les employés</li>
                                            <li>Premiers projets pilotes</li>
                                            <li>Ajustements mineurs</li>

                                        </ul>

                                    </div>
                                </div>
                                <div className="card container mb-4">
                                    <img className="card-img-top my-3 imgCard" src={pictoTest} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">VÉRIFIER ET AGIR</h5>
                                        <ul >
                                            <li>Mise à jour du plan de déploiement</li>
                                            <li>Checklist post-déploiement</li>
                                            <li>Evaluation des formations</li>
                                            <li>Evaluation des projets pilotes pour recommandations</li>
                                            <li>Confirmation des performances</li>
                                        </ul>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid Article3Box">
                    <div className="card border-0 shadow mx-auto sizeCardArticle3 container ">
                        <div className=" card-body p-5 my-2">
                            <div className="form-group container text-justify">
                                <h1 className="font-weight-light text-center" id="gestionArticle">RÈGLES DE GESTION</h1>
                                <p>Un des avantages majeurs du BIM est de pouvoir créer, gérer et échanger des informations durant toute la durée de vie d'un ouvrage. Il est important de bien comprendre quelles sont les différentes phases :<br />
                                <ul>
                                    <li>Faisabilité</li>
                                    <li>Conception</li>
                                    <li>Construction</li>
                                    <li>Opération</li>
                                    <li>Adaptation/Démolition</li>

                                </ul>
                                <p>On différencie également les modèles BIM comme suit:</p>
                                <ul>
                                    <li>Modèle de conception</li>
                                    <li>Modèle de construction</li>
                                    <li>Modèle de mise en service </li>
                                    <li>Opération</li>
                                    <li>Modèle d'utilisation de l'ouvrage</li>

                                </ul>
                                La notion de gestion tout au long du cycle de vie est très importante en BIM car sous-entend le partage d'informations entre toutes les phases de l'ouvrage en minimisant les pertes de données en raison de problèmes d'interopérabilité. Cela signifie également que toutes les étapes dans le partage des informations doivent être clairement définies, de même que le type et le format d'informations échangées.<br/><br/>
                                L'échange durant toute la durée de vie d'un ouvrage implique également de connaître les informations requises durant les phases suivantes afin de pouvoir dès que possible intégrer ces informations dans le modèle. L'interopérabilité entre les logiciels BIM et de gestion du patrimoine (FM) devra également être optimisée à l'avenir afin de pouvoir transmettre les informations de manière fiable.  </p>
                            </div>

                        </div>
                            <a href='#entete' className='btnHaut container text-center mb-5'>Haut de page</a>
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
                

            </div>

        )

    }
}

export default Articles
