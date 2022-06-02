import React, { useEffect, useState } from 'react';
import { Table } from '@material-ui/core';
import { TableBody } from '@material-ui/core';
import { TableCell } from '@material-ui/core';
import { TableContainer } from '@material-ui/core';
import { TableHead } from '@material-ui/core';
import { TableRow } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import api from '../services/api';
import ControleHardware from '../Tela';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}



export default function BasicTable() {
  const [dados, setDados] = useState([])

  useEffect(() => {
    Tabela()

  }, []);

  async function Tabela() {
    try {
      const resposta = await api.get('https://sheetdb.io/api/v1/29x6x13au6zpf')
      console.log(resposta)
      setDados(resposta.data)
    } catch (error) {
      console.error(error)
    }
  }
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Teclado</TableCell>
            <TableCell align="center">Mouse</TableCell>
            <TableCell align="center">Cabos</TableCell>
            <TableCell align="center">Gabinete</TableCell>
            <TableCell align="center">Observação</TableCell>
            <TableCell align="center">laboratorio id</TableCell>
          </TableRow>
        </TableHead>
        <TableHead >
          {dados.map((element) => (
            <TableRow key={element.id}>
              <TableCell align="center">{element.id}</TableCell>
              <TableCell align="center">{element.Teclado}</TableCell>
              <TableCell align="center">{element.Mouse}</TableCell>
              <TableCell align="center">{element.Cabos}</TableCell>
              <TableCell align="center">{element.Gabinete}</TableCell>
              <TableCell align="center">{element.Observacoes}</TableCell>
              <TableCell align="center">{element.laboratorio_id}</TableCell>
            </TableRow>
          ))
          }
        </TableHead>
      </Table>

    </TableContainer>
  );
}

