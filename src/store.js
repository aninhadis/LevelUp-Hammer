import { createStore } from 'redux';


function data(state = [], action = {}) {
    switch (action.type) {
        case add_data:
            return action.produtos;
        default:
            return state
    }
}

function descricao(state = [], action = {}) {
    switch (action.type) {
        case add_produto:
            return action.produto;
        default:
            return state;
    }
}

function categoria(state = [], action ={}){
    switch (action.type) {
        case add_categoria:
            return {busca: action.busca, item: action.item};
        default:
            return state;
    }
}

function clicados(state = [], action ={}){
    switch (action.type) {
        case add_produto:
            return [... state, action.item];
        default:
            return state;
    }
}

export const add_data = 'ADD_DATA';
export const add_produto = 'PRODUTO';
export const add_categoria = 'CATEGORIA';

export const store = createStore(data);
export const descricaoStore = createStore(descricao);
export const categoriaStore = createStore(categoria);
export const clicadosStore = createStore(clicados);



