import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import { useLocation } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

// const myDomain = ''
// const myLocalDomain = ''

function Torrents() {
    // const [torrents, setTorrents] = useState([])
    // const params = useLocation().search
    // useEffect(() => {
    //     const searchParams = new URLSearchParams(params);
    //     fetch(`${myDomain}/search?`+ searchParams.toString())
    //     .then(res => res.json())
    //     .then(res => setTorrents(res))
    //     .catch(err => console.error(err))
    // }, [torrents,params])
    return (
        <>
            <Form style={{display: 'flex', marginBottom:'10px'}} action='/search' method='get'>
                    <Form.Control type='search' name='search' placeholder='Procurar Torrents!'/>
                    <Button variant='dark' style={{height:'38px'}} type='submit'>Procurar</Button>
            </Form>
            <Table striped bordered hover size='sm'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Fonte:</th>
                        <th>Nome:</th>
                        <th>Tamanho:</th>
                        <th>Seeders</th>
                        <th>Leechers</th>
                        <th>Data de Upload:</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // torrents.map((itr, i) => (
                        //     <tr>
                        //         <td>{i+1}</td>
                        //         <td>{itr.source}</td>
                        //         <td><a href={itr.link}>{itr.Name}</a></td>
                        //         <td>{itr.Size}</td>
                        //         <td>{itr.Seeders}</td>
                        //         <td>{itr.Leechers}</td>
                        //         <td>{itr.UploadDate}</td>
                        //     </tr>
                        // ))
                    }
                            <tr>
                                <td>1</td>
                                <td>Qualquer</td>
                                <td><a href='#'>asasdadsa</a></td>
                                <td>asasdadsa</td>
                                <td>asasdadsa</td>
                                <td>asasdadsa</td>
                                <td>asasdadsa</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Qualquer</td>
                                <td><a href='#'>asasdadsa</a></td>
                                <td>asasdadsa</td>
                                <td>asasdadsa</td>
                                <td>asasdadsa</td>
                                <td>asasdadsa</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Qualquer</td>
                                <td><a href='#'>asasdadsa</a></td>
                                <td>asasdadsa</td>
                                <td>asasdadsa</td>
                                <td>asasdadsa</td>
                                <td>asasdadsa</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Qualquer</td>
                                <td><a href='#'>asasdadsa</a></td>
                                <td>asasdadsa</td>
                                <td>asasdadsa</td>
                                <td>asasdadsa</td>
                                <td>asasdadsa</td>
                            </tr>
                </tbody>
            </Table>
        </>
    )
}

export default Torrents
