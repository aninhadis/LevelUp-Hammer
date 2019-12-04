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
            return state
    }
}

export const add_data = 'ADD_DATA';
export const add_produto = 'PRODUTO';
export const store = createStore(data);
export const descricaoStore = createStore(descricao);


