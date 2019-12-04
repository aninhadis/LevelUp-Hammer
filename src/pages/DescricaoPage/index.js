import React, { Component } from 'react';
import {descricaoStore} from '../../store';



class DescricaoPage extends Component {

    render() {

        const {brand, category, color, currency, image, name, price, comments} = descricaoStore.getState();
        console.log(descricaoStore.getState());

        return (


            <React.Fragment>
                <div className="produto">
                    <h1>{name}</h1>
                    <img src={image}/>
                    <h2>Valor atual: {price}</h2>
                    <h2>Moeda: {currency}</h2>
                    <h2>Cor: {color}</h2>
                    <h2>Marca: {brand}</h2>
                    <h2>Categoria: {category}</h2>
                </div>
                <div className="comentario">
                    <h1>Comentários:</h1>
                </div>
                

            </React.Fragment>
        );
    }
}

export default DescricaoPage;
