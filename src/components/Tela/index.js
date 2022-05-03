import React from 'react'
import { Container, BlocoUm, Header, Lab, TextH2, TextH3, Tabela, Botao, InputGroup } from './Elements'
import { Link } from 'react-router-dom'
import api from "../services/api"


const ControleHardware = () => {


    async function Requisicao() {
        const resposta = await api.get('/tela')
        console.log(resposta.data)
    }

    async function Publicar() {
        const pub = await api.post('/tabela', { "id": 2, "monitor": "v", "teclado": "v", "mouse": "n", "cabos": "z", "gabinete": "e" })
        console.log(pub)
    }

    return (

        <
        Container >
        <
        Header >
        <
        TextH2 > Controle de hardware laboratório de informática < /TextH2>  < /
        Header >

        <
        Lab >
        <
        div scope = "row" > Laboratório < /div>  <
        select name = "choice" >
        <
        option value = "first"
        selected > N° < /option>  <
        option value = "third" > 1 < /option>  <
        option value = "second" > 2 < /option>  <
        option value = "third" > 3 < /option>  <
        option value = "third" > 4 < /option>  < /
        select > <
        /Lab>

        <
        BlocoUm >
        <
        h2 > Dispositivo < /h2>  <
        select >
        <
        option value = "first" > 1 < /option>  <
        option value = "first" > 1 < /option>  <
        option value = "first" > 2 < /option>  <
        option value = "first" > 3 < /option>  < /
        select >

        <
        Tabela >
        <
        div >
        <
        TextH3 > Monitor < /TextH3>  <
        select name = "choice" >
        <
        option value = "first" > N° < /option>  <
        option value = "second"
        selected > Estado < /option>  <
        option value = "third" > Third Value < /option>  < /
        select > <
        /div>  <
        div >
        <
        TextH3 > Teclado < /TextH3>  <
        select name = "choice" >
        <
        option value = "first" > N° < /option> <
        option value = "second"
        selected > Estado < /option>  <
        option value = "third" > Third Value < /option>  < /
        select > <
        /div>  <
        div >
        <
        TextH3 > Mouse < /TextH3>  <
        select name = "choice" >
        <
        option value = "first" > N° < /option> <option value = "second" selected> Estado </option >
        <
        option value = "third" > Third Value < /option>  < /
        select > <
        /div>  <
        div >
        <
        TextH3 > Cabos < /TextH3>  <
        select name = "choice" >
        <
        option value = "first" > N° < /option>  <
        option value = "second"
        selected > Estado < /option>  <
        option value = "third" > Third Value < /option>  < /
        select > <
        /div>  <
        div >
        <
        TextH3 > Gabinete < /TextH3>  <
        select name = "choice" >
        <
        option value = "first" > N° < /option> <option value = "second" selected> Estado </option >
        <
        option value = "third" > Third Value < /option> </select >
        <
        /div>

        <
        Botao >
        <
        /Botao>

        <
        /Tabela> <h4> Observações Gerais </h
        4 >
        <
        InputGroup >
        <
        textarea / >
        <
        h3 > Data < /h3>  <
        input type = "date" / >
        <
        /InputGroup> < /
        BlocoUm >


        <
        Link to = '/tabela' >
        <
        button onClick = {
            () => { Requisicao() }
        } > Visualizar relação completa < /button>  < /
        Link >

        <
        /Container>

    )
}
export default ControleHardware