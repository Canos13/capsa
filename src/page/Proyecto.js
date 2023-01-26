import React from 'react'
import { Table } from 'react-bootstrap'
import Layout from '../components/Layout'

const Proyecto = () => {

    const tramos = [
        {id:1, tramo:'Amozoc - Perote y Lib. de Perote', long:'135.000', caseta:'---', location:'---'},
        {id:1, tramo:'Amozoc - Perote', long:'117.000',caseta:'---', location:'---'},
        {id:1, tramo:'Amozoc - Ent. Ixtenco', long:'25.700',caseta:'Amozoc II', location:'1+000'},
        {id:1, tramo:'Ent. Ixtenco - Ent. Oriental', long:'35.800',caseta:'Cuapiaxtla', location:'---'},
        {id:1, tramo:'Ent. Ixtenco - Ent. Cuapiaxtla', long:'14.000',caseta:'Cuapiaxtla A1', location:'---'},
        {id:1, tramo:'Ent. Cuapiaxtla - Ent. Oriental', long:'21.800',caseta:'Cuapiaxtla A2', location:'---'},
        {id:1, tramo:'Ent. Oriental - Ent. Perote II', long:'55.500',caseta:'Cantona', location:'---'},
        {id:1, tramo:'Ent. Oriental - Ent. Cantona', long:'18.800',caseta:'Cantona A1', location:'---'},
        {id:1, tramo:'Ent. Cantona - Ent. Perote II', long:'36.700',caseta:'Cantona A2', location:'---'},
        {id:1, tramo:'Libramiento de Perote', long:'18.000',caseta:'Perote', location:'3+000'},
        {id:1, tramo:'Ent. Ixtenco - Ent. 35.640 Audi', long:'10.380',caseta:'---', location:'---'}
    ]

    return (
        <Layout route='Proyectos'>
            <Table striped bordered hover variant="light" size="sm"  className='text-center'>
                <thead>
                    <tr >
                        <th colSpan={4}>Amozoc - Perote y Libramiento de Perote</th>
                    </tr>
                    <tr>
                        {
                            ['Concesionario:','Operador:','Logitud (KM):','Tipo de vía:'].map((head, i) => <th key={i} >{head}</th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Grupo de Autopistas Nacionales S.A. de C.V.</td>
                        <td>Grupo Autopistas Nacionales, S.A.</td>
                        <td>135.000</td>
                        <td>Autopista</td>
                    </tr>
                </tbody>
            </Table>
            <hr />
            <Table striped bordered hover variant="light" size="sm"  className='text-center'>
                <thead>
                    <tr><th colSpan={4}>Tramos de operación</th></tr>
                    <tr>
                    {
                        ['Tramo:','Longitud(KM):','Caseta:','Ubicación caseta:'].map((head, i) => <th key={i} >{head}</th>)
                    }
                    </tr>
                </thead>
                <tbody>
                    {
                        tramos.map((tramo, i)=>    
                            <tr key={i}>
                                <td>{tramo.tramo}</td>
                                <td>{tramo.long}</td>
                                <td>{tramo.caseta}</td>
                                <td>{tramo.location}</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
            <hr />
        </Layout>
    )
}

export default Proyecto