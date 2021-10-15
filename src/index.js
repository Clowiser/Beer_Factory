import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const e = React.createElement;

class BeerFactoryList extends React.Component {
    render() {
        return (
            <div>
                <header>Squid Game !</header>
                   <form>
                       <input className="navSearch" type="search" placeholder="Saisissez votre recherche"/>
                       <button className="search">Search</button>
                       <button className="triangle">Clear</button>
                   </form>
                <footer>Copyright ta maman :D</footer>
                <div>
                    <h1>Voulez-vous jouer à un jeu ?</h1>
                </div>
            </div>
        );
    }
}

const domContainer = document.querySelector('div');
ReactDOM.render(e(BeerFactoryList), domContainer);

