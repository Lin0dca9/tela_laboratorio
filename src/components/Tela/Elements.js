import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
   
    /* display: flex;
    flex-wrap: wrap;
    text-align: center;
    flex-direction: row; */
    display: flex;
    flex-direction: column;

    button{
    background:#213925;
    border:none;
    border-radius:8px;
    padding: 16px 16px;
    font-size:0.9rem;
    color:white;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5%;
    height: 15;
    width: 150px;
    cursor: pointer;
    
    }  
`
export const BlocoUm = styled.div`
    width: 100%;
    height: 100%;
    max-width: 360px;
    border-radius: 15px;
    margin-top:50px;
    background: #E3EAE2;
    display: block;
    margin-left: auto;
    margin-right: auto;
    min-width: 30%;
    align-items: center;
    padding: 1.5rem;
    box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.25);
    
    
    h2{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    margin: 2rem;
    font-family: 'Roboto', sans-serif;
    }

    input{
    left: 12.08%;
    right: 11.84%;
    top: 68.86%;
    bottom: 12.83%;
    background: #FFFFFF;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    margin-top: 10%;
 
    }

    h4{

    width: auto;
    height:auto;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 19px;
    line-height: 24px;
    /* identical to box height, or 150% */
    color: #070D08;
    text-decoration: none;

    text-align: center;
    }

    select{
        margin-left: 45%;
        margin-top: -80px;
        border-radius: 4px;
        background: #D6E2D4;
        
       
    }
`;

export const Data = styled.div`
    font-size: 40px;
`

export const Header = styled.div`
    width: 100%;
    /* height: 9%; */
    background:#213925;
    color: white;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
`

export const TextH2 = styled.h2`
    font-size: 1.5rem;
    margin-top: 4px;
    min-width: 30%;
    align-items: center;
    
`
export const Lab = styled.div`
    font-family: 'Roboto', sans-serif;
    margin-left: 8%;
    margin-top: 1rem;
    display: flex;
    max-width: 360px;
   


    select{
        flex-direction: row;
        align-items: center;
        padding: 4px;
        width: 30%;
        height:max-content;
        margin-left: 4%;
        background:#213925 ;
    
        /* margin-top:-40px; */

        background: #E3EAE2;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.12);
        border-radius: 4px;
    }
    div{
        font-size: 20px;
        /* margin-top: -40px; */
    }
`
export const Texto = styled.div`
    margin-right: 40px;
    margin-top: 6.5%;
`
export const TextH3 = styled.h3`
    font-family: 'Roboto', sans-serif;

`
export const Tabela = styled.div`
    display: flex;
    flex-direction:column;

    justify-content:center;

    margin-left: auto;
    margin-right: auto;

    select{
    margin-bottom: 10px;
    margin-top: 8px;
    }

    div{
        display: flex;
        justify-content: space-between;
    }
`



export const Botao = styled.div`
      margin-left: 40px;
      margin-top: 8%;
      display: flex;
      flex-direction: column;
`


// export const BlocoDois = styled.div`
//     background: bisque;
//     width: 80%;
//     height: 15%;
//     border-radius: 15px;
//     margin-left: auto;
//     margin-right: auto;
//     min-width: 30%;
//     align-items: center;

// `
export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    textarea{
        padding: 0.5rem 1.5rem;
    }

    h3{
    width: auto;
    height:auto;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 19px;
    line-height: 24px;
    /* identical to box height, or 150% */
    color: #070D08;
    text-decoration: none;
    text-align: center;
    margin-top: 18px;
    }
`