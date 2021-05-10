import { Avatar } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'

function SidebarRow({ src , Icon , title}) {
    return (
        <Container>
            {src && <Avatar src={src} />}
            {Icon && <Icon/>}
            <h4>{title}</h4>
        </Container>
    )
}

export default SidebarRow

const Container = styled.div`
    padding : 10px ;
    display : flex ;
    align-items : center ;
    cursor: pointer;

    h4 {
        font-weight : 600; 
        margin-left : 20px ;
    }

    .MuiSvgIcon-root {
        font-size : xx-large ;
        color : #2e81f4 ;
    }
    
    :hover {
        background-color : lightgray ;
        border-radius : 10px ;
    }
`