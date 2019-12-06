import React, { Component } from 'react';
import {Row} from 'reactstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {Link} from 'react-router-dom';
import {store, cadastroStore, add_user} from '../../store';
import {Provider} from 'react-redux';



class CadastroPage extends Component {
    constructor(props){
        super(props);
        this.state= {
            email:'',
            name:'',
            password:''
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    render() {

        
        const Cadastrar =(evento) =>{
            
            cadastroStore.dispatch({
                type: add_user,
                email: this.state.email,
                name: this.state.name,
                password: this.state.password

            });
            evento.preventDefault();
        }
        return (
            <Provider store={store}>
            <React.Fragment>
                <Row  style={{alignItems: "center", justifyContent: "center"}}>
                <div className="register-box">
                    <h1> Venha bater o martelo conosco</h1>
                    <Form onSubmit={Cadastrar}>
                <FormGroup>
                    <Label for="Name">Nome</Label>
                    <Input type="name" name="name" id="Name" placeholder="nome" />
                </FormGroup>
                <FormGroup>
                    <Label for="Email">Email</Label>
                    <Input type="email" name="email" id="Email" placeholder="email" />
                </FormGroup>
                <FormGroup>
                    <Label for="Password">Senha</Label>
                    <Input type="password" name="password" id="Password" placeholder="senha" />
                </FormGroup>
                <FormGroup>
                    <Label for="Password">Confirmar senha</Label>
                    <Input type="password" name="password" id="Password" onChange={this.onChange} value={this.state.password} placeholder="confirmar senha" />
                </FormGroup>
                <Button><Link to="/" style={{color: "#E4E8EA"}}>Finalizar Cadastro</Link></Button>
                </Form>
                </div>
                </Row>
            </React.Fragment>
            </Provider>
        );
    }
}

export default CadastroPage;