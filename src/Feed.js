import React from 'react'
import styled from 'styled-components'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'

function Feed() {
    return (
        <Container>
            <StoryReel/>
            <MessageSender/>
        </Container>
    )
}

export default Feed

const Container = styled.div`
    flex : 1 ;
    padding : 30px 150px ;
    display : flex ;
    flex-direction : column ;
    justify-content : center ;
    align-items : center ;
`