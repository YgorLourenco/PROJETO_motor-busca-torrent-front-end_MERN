import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import  Container from 'react-bootstrap/Container'
import styled from 'styled-components'
import Nav from 'react-bootstrap/Nav'

const Wrapper = styled(Container)`
    padding-left: 25px;
    padding-right: 25px;
    display: flex;
`
const Navi = styled(Nav)`
    margin-left: auto;
`

const Header = () => {
    return(
        <Navbar bg='dark' variant='dark' fixed='top' style={{marginBottom:'10px', display:'block'}}>
            <Wrapper>
                <Navbar.Brand href='/'>Motor de Busca de Torrent</Navbar.Brand>
                <Navi>
                    <Nav.Link href='/about'>Sobre</Nav.Link>
                    <Nav.Link href='/feedback'>Feedback</Nav.Link>
                    <Nav.Link href='https://github.com/YgorLourenco'>Github</Nav.Link>
                </Navi>
            </Wrapper>
        </Navbar>
    )
}
export default Header