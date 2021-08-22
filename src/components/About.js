import React from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

function About() {
    return (
        <>
            <Tabs defaultActiveKey='facts'>
                <Tab eventKey='facts' title='Fatos'>
                    <ol>
                        <li>Esse site é um agregador e multi-procura. Isso diz que nos apenas procuramos em outros motores de busca</li>
                        <li>Esse site é uma poderosa ferramenta de procura</li>
                        <li>Este site não hospeda ou "cria disponibilidade", de qualquer arquivo ou torrent em qualquer formato.</li>
                        <li>Este site procura por links de sites de torrents de terceiros. Nos não temos o controle sob estes dominios.</li>
                        <li>Processo de indexamento e completamente automatico. Nos não checamos isso.</li>
                        <li>Os arquivos são simples metadados e não podem ter direitos autorais</li>
                        <li>Nos não hospedamos torrents, nos não nem mesmo salvamos torrents. Nos apenas extraimos o nome do arquivo e o tamanho das fontes</li>
                        <li>Este site e similar ao Google</li>
                    </ol>
                </Tab>
                <Tab eventKey='privacy' title='Privacidade'>
                    <ol>
                        <li>Nos não temos registros</li>
                        <li>Nos não somos responsaveis pela a privacidade da sua internet</li>
                        <li>Nos não estamos interessados em o que você faz online</li>
                    </ol>
                </Tab>
                <Tab eventKey='takedown' title='Propriedade intelectual'>
                    <ol>
                        <li>Lembre que isso e apenas uma ferramenta de procura e indexação, seu conteudo não e hospedado aqui. Por favor seja educado. Não existe motivo para ameaças.</li>
                        <li>Nos não conseguimos derrubar seu conteudo, porque nos não hospedamos isso. Você pode redirecionar você mesmo a fonte real e pedir para derrubarem o seu conteúdo.</li>
                        <li>Nos não temos nada que foi pirateado.</li>  
                    </ol>
                </Tab>
            </Tabs>
        </>
    )
}

export default About
