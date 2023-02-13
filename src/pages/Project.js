import React, { useState } from 'react'
import { Button, Table } from 'react-bootstrap';
import ModalComp from '../components/ModalComp';
import Bar from '../components/Navbar';
import _img from '../images/Imagen1.png'

const Project = () => {
    const [showModal, setshowModal] = useState(false)
    const tramos = [
        {id:1, tramo:'Amozoc - Perote y Lib. de Perote', long:'135.000', caseta:'---', location:'---'},
        {id:2, tramo:'Amozoc - Perote', long:'117.000',caseta:'---', location:'---'},
        {id:3, tramo:'Amozoc - Ent. Ixtenco', long:'25.700',caseta:'Amozoc II', location:'1+000'},
        {id:4, tramo:'Ent. Ixtenco - Ent. Oriental', long:'35.800',caseta:'Cuapiaxtla', location:'---'},
        {id:5, tramo:'Ent. Ixtenco - Ent. Cuapiaxtla', long:'14.000',caseta:'Cuapiaxtla A1', location:'---'},
        {id:6, tramo:'Ent. Cuapiaxtla - Ent. Oriental', long:'21.800',caseta:'Cuapiaxtla A2', location:'---'},
        {id:7, tramo:'Ent. Oriental - Ent. Perote II', long:'55.500',caseta:'Cantona', location:'---'},
        {id:8, tramo:'Ent. Oriental - Ent. Cantona', long:'18.800',caseta:'Cantona A1', location:'---'},
        {id:9, tramo:'Ent. Cantona - Ent. Perote II', long:'36.700',caseta:'Cantona A2', location:'---'},
        {id:10, tramo:'Libramiento de Perote', long:'18.000',caseta:'Perote', location:'3+000'},
        {id:11, tramo:'Ent. Ixtenco - Ent. 35.640 Audi', long:'10.380',caseta:'---', location:'---'}
    ]

    const tarifas = [
        {id:1, tramo:'Amozoc - Perote y Lib. de Perote', motos:191, Automv:382, Autob:567, Autob2: 580, cam1:600, cam2:567, cam3:580, cam4:600, cam5:755, cam6:755, ca7:1047, cam8:1047, cam9:1047},
        {id:2, tramo:'Amozoc - Perote', motos:163,Automv:325, Autob:495, Autob2:506, cam1:521, cam2:495, cam3:506, cam4:521, cam5:650, cam6:650, ca7:914, cam8:914, cam9:914},
        {id:3, tramo:'Amozoc - Ent. Ixtenco', motos:35,Automv:72, Autob:104, Autob2:107, cam1:110, cam2:107, cam3:107, cam4:110, cam5:139, cam6:139, ca7:192, cam8:192, cam9:192},
        {id:4, tramo:'Ent. Ixtenco - Ent. Oriental', motos:48,Automv:97, Autob:158, Autob2:162, cam1:169, cam2:158, cam3:162, cam4:169, cam5:207, cam6:207, ca7:291, cam8:291, cam9:291},
        {id:5, tramo:'Ent. Ixtenco - Ent. Cuapiaxtla', motos:21,Automv:42, Autob:50, Autob2:53, cam1:57, cam2:50, cam3:53, cam4:57, cam5:65, cam6:65, ca7:99, cam8:99, cam9:99},
        {id:6, tramo:'Ent. Cuapiaxtla - Ent. Oriental', motos:27,Automv:55, Autob:108, Autob2:109, cam1:112, cam2:108, cam3:109, cam4:112, cam5:142, cam6:142, ca7:192, cam8:192, cam9:192},
        {id:7, tramo:'Ent. Oriental - Ent. Perote II', motos:78,Automv:156, Autob:233, Autob2:237, cam1:242, cam2:233, cam3:237, cam4:242, cam5:304, cam6:304, ca7:431, cam8:431, cam9:431},
        {id:8, tramo:'Ent. Oriental - Ent. Cantona', motos:25,Automv:50, Autob:81, Autob2:84, cam1:86, cam2:81, cam3:84, cam4:86, cam5:116, cam6:116, ca7:157, cam8:157, cam9:157},
        {id:9, tramo:'Ent. Cantona - Ent. Perote II', motos:53,Automv:106, Autob:152, Autob2:153, cam1:156, cam2:152, cam3:153, cam4:156, cam5:188, cam6:188, ca7:274, cam8:274, cam9:274},
        {id:10, tramo:'Libramiento de Perote', motos:28,Automv:57, Autob:72, Autob2:74, cam1:79, cam2:72, cam3:74, cam4:79, cam5:105, cam6:105, ca7:133, cam8:133, cam9:133},
        {id:11, tramo:'Ent. Ixtenco - Ent. 35.640 Audi', motos:14,Automv:28, Autob:35, Autob2:37, cam1:40, cam2:35, cam3:37, cam4:40, cam5:46, cam6:46, ca7:71, cam8:71, cam9:71}
    ]

    const handleShowModal = () => setshowModal(true)
    const closeButton = () => setshowModal(false)
    
    return (
        <div>
            <Bar />
            <section className='container mt-3'>
                <Table striped bordered hover variant="light" size="sm"  className='text-center'>
                    <thead>
                        <tr >
                            <th colSpan={4}>Amozoc - Perote y Libramiento de Perote <Button onClick={handleShowModal} className='mx-5'>Ver croquis</Button> </th>
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
                <Table striped bordered hover variant="light" size="sm"  className='text-center'>
                    <thead>
                        
                        
                        <tr>
                                <th rowSpan={2}>Tramo</th>
                                <th rowSpan={2}>Motos</th>
                                <th rowSpan={2}>Automoviles</th>
                                <th colspan="2">Autobuses</th>
                                <th colspan="9">Camiones</th>
                        </tr>
                        <tr>
                                <th>2 Ejes</th>
                                <th>3 Ejes</th>
                                <th>4 Ejes</th>
                                <th>2 Ejes</th>
                                <th>3 Ejes</th>
                                <th>4 Ejes</th>
                                <th>5 Ejes</th>
                                <th>6 Ejes</th>
                                <th>7 Ejes</th>
                                <th>8 Ejes</th>
                                <th>9 Ejes</th>
                        </tr>
                    </thead>
                    <tbody>
                    {/* {id:1, tramo:'Ent. Ixtenco - Ent. 35.640 Audi', motos:14,Automv:28, Autob:35, Autob2:37, cam1:40, cam2:35, cam3:37, cam4:40, cam5:46, cam6:46, ca7:71, cam8:71, cam9:71} */}
                        {
                            tarifas.map(item => 
                                <tr key={item.id}>
                                    <td>{item.tramo}</td>
                                    <td>{item.motos}</td>
                                    <td>{item.Automv}</td>
                                    <td>{item.Autob}</td>
                                    <td>{item.Autob2}</td>
                                    <td>{item.cam1}</td>
                                    <td>{item.cam2}</td>
                                    <td>{item.cam3}</td>
                                    <td>{item.cam4}</td>
                                    <td>{item.cam5}</td>
                                    <td>{item.cam6}</td>
                                    <td>{item.ca7}</td>
                                    <td>{item.cam8}</td>
                                    <td>{item.cam9}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
                <hr />
            </section>
            {
                showModal && <ModalComp
                    onClose={closeButton}
                    title="Croquis Capsa"
                    body={<img src={_img} style={{ width: '100%' }} alt='croquis'  />}
                    size='lg'
                />
            }
        </div>
    )
}

export default Project