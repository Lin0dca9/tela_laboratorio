import React, {useState, useEffect}from 'react'
import { Container, BlocoUm, Header, Lab, TextH2, TextH3, Tabela, Botao, InputGroup } from './Elements'
import { Link } from 'react-router-dom'
import api from "../services/api"
import axios from 'axios'

const ControleHardware = () => {
    const [Monitor, setMonitor] = useState('')
    const [dispositivos, setDispositivos] = useState([])
    const [Dispositivo, setDispositivo] = useState({ 
        id:null,
        monitor:null,
        teclado:null,
        mouse:null,
        cabos:null,
        gabinete:null,
        area: null
      })
    const [dados, setDados] = useState (null)
    const [moni, setMoni] = useState(null)
    const [teclado, setTeclado] = useState (null)
    const [mouse, setMouse] = useState (null)
    const [cabos, setCabos] = useState (null)
    const [gabinetes, setGabinetes] = useState (null)
    const [texto, setTexto] = useState (null)
    const [calendario, setCalendario] = useState ('')
    const [resp, setResp] = useState ('')
  
      
  
    useEffect(() => {
        Req()
       
    }, []);

    const getDisp=(id)=>{
        let b
        dispositivos.forEach((item)=>{
            if (item.id==id){
                setDispositivo(item)
            }
        })
    }


    // async function Requi([],
    //     {gabinete:gabinetes, area: texto}

    //     })
    //     if(moni && teclado && mouse&& cabos&& gabinetes&& texto){
            
    //         const resposta = await api.post('https://sheetdb.io/api/v1/29x6x13au6zpf',{
    //             monitor:moni,
    //             teclado:teclado,
    //             mouse:mouse,
    //             cabos:cabos,
    //             gabinete:gabinetes,
    //             area: texto
        
    //             })
    //             console.log(resposta)
    //     }else{
    //         alert('nao foi')
    //     }
       
    // }

   
    async function Get (){
        api.get ('https://sheetdb.io/api/v1/29x6x13au6zpf', {
           
        })
        .then( response => {
            console.log(response)
        })
       
       
        
    }
    const resposta =  () =>{
        let aux = {
            Monitor:moni,
            Teclado:teclado,
            Mouse: mouse,
            Cabos:cabos,
            Gabinete:gabinetes,
            Texto:texto,
            id:1,
            area:texto,
            laboratorio_id:2
        }
        

         api.post ('https://sheetdb.io/api/v1/29x6x13au6zpf', aux).then((response)=>{console.log(response)})
        // setResp(item)
        // resp()
        
    }

    async function Req (){
         try {
            const resposta = await api.get('https://sheetdb.io/api/v1/29x6x13au6zpf')
            console.log(resposta)
            setDispositivos(resposta.data)
        }catch(error){
            console.error(error)
        }
    }

    return (

    <Container>
    <Header>
        <TextH2> Controle de hardware laboratório de informática </TextH2>
    </Header>

    <Lab>
        <div scope = "row"> Laboratório </div>  
        <select name = "choice" value={dados} onChange={(event)=>setDados(event.currentTarget.value)}>
            <option value = "first"selected> N°</option>  
            <option value="1"> 1 </option>
            <option value="2"> 2 </option>
            <option value="3"> 3 </option>
            <option value="4"> 4 </option>
        </select>
    </Lab>
    <BlocoUm>
        <h2> Dispositivo </h2>
        <select onChange={(e)=>{
            console.log(e.target.value)
            getDisp(e.target.value)
            }}>

            {dispositivos.map((item,index)=>{
                return(
                <option key={index} value={item.id}> {item.id} </option>
                )
                })}
                    
        </select>

    <Tabela>
        <div>
        <TextH3> Monitor </TextH3>
        <select name = "choice" value={moni} onChange={(event)=>setMoni(event.currentTarget.value)}>
            <option selected>Possui</option>
            <option selected>Não possui</option>
            <option selected>Boa condição</option>
            <option selected>Má condição</option>
            <option selected>Bom</option>
        </select>
                    
        </div>
        <div>
        <TextH3> Teclado </TextH3>
        <select name = "choice" value={teclado} onChange={(event)=>setTeclado(event.currentTarget.value)}>
            <option selected>Possui</option>
            <option selected>Não possui</option>
            <option selected>Boa condição</option>
            <option selected>Má condição</option>
            <option selected>Bom</option>
        </select>
        </div>
        <div>
        <TextH3>Mouse</TextH3>
        <select name = "choice" value={mouse} onChange={(event)=>setMouse(event.currentTarget.value)}>
            <option selected>Possui</option>
            <option selected>Não possui</option>
            <option selected>Boa condição</option>
            <option selected>Má condição</option>
            <option selected>Bom</option>
        </select> 
        </div>  
        <div>
        <TextH3>Cabos</TextH3>
        <select name = "choice" value={cabos} onChange={(event)=>setCabos(event.currentTarget.value)}>
            <option selected>Possui</option>
            <option selected>Não possui</option>
            <option selected>Boa condição</option>
            <option selected>Má condição</option>
            <option selected>Bom</option>  
        </select >
        </div>
        <div>
        <TextH3>Gabinete</TextH3>
        <select name = "choice" value={gabinetes} onChange={(event)=>setGabinetes(event.currentTarget.value)}>
            <option selected>Possui</option>
            <option selected>Não possui</option>
            <option selected>Boa condição</option>
            <option selected>Má condição</option>
            <option selected>Bom</option>           
        </select >
        </div>
        <Botao >
        </Botao>

        </Tabela> <h4>Observações Gerais</h4>
        <InputGroup>
        <textarea name="text" value={texto} onChange ={(event)=>{
            setTexto(event.currentTarget.value)
            }}/>
            <h3>Data</h3>
            <input type="date" value={calendario} onChange={(event)=>{setCalendario(event.currentTarget.value)}}/>
        </InputGroup>
        </BlocoUm>


        <Link to = '/tabela' >
        <button onClick = {
            () => { resposta() }
        } > Visualizar relação completa </button>
        </Link >
        </Container>
    )
}
export default ControleHardware