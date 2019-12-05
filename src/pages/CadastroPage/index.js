import React, { Component } from 'react';
import {Row} from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {Link} from 'react-router-dom';



class CadastroPage extends Component {

    render() {
        const Cadastrar =(evento) =>{
            evento.preventDefault();
        }
        return (
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
                    <Input type="password" name="password" id="Password" placeholder="confirmar senha" />
                </FormGroup>
                <Button><Link to="/">Finalizar Cadastro</Link></Button>
                </Form>
                </div>
                </Row>
                

            </React.Fragment>
        );
    }
}

export default CadastroPage;