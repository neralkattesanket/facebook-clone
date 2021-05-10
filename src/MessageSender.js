import { Avatar } from '@material-ui/core'
import { InsertEmoticon, PhotoLibrary, Videocam } from '@material-ui/icons'
import React, { useState } from 'react'
import styled from 'styled-components'

function MessageSender() {

    const [ input , setInput ] = useState('')
    const [ imageUrl , setImageUrl ] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <Container>
            <Top>
                <Avatar/>
                <form>
                    <input 
                    value = {input}
                    onChange = {e => setInput(e.target.value)}
                    className = "messageSender" 
                    placeholder = "What's on your mind" />
                    <input 
                    value = {imageUrl}
                    onChange = {e => setImageUrl(e.target.value)}
                    placeholder = "image URL (Optional)" />
                    <button onClick = {handleSubmit} >Hidden submit</button>
                </form>
            </Top>

            <Bottom>
                <Option>
                    <Videocam style = {{color :'red'}} />
                    <h3>Live Video</h3>
                </Option>
                <Option>
                    <PhotoLibrary style = {{color :'green'}} />
                    <h3>Photo/Video</h3>
                </Option>
                <Option>
                    <InsertEmoticon style = {{color :'orange'}} />
                    <h3>Feeling/Activity</h3>
                </Option>
            </Bottom>
        </Container>
    )
}

export default MessageSender

const Container = styled.div`
    display : flex ;
    flex-direction : column ;
    margin-top : 30px ;
    background-color : white ;
    border-radius : 15px ;
    box-shadow : 0px 5px 7px -7px rgba(0 , 0 , 0 , 0.75) ;
    width : 100% ;
`

const Top = styled.div`
    display : flex ;
    border-bottom : 1px solid #eff2f5 ;
    padding : 15px ;

    form {
        flex : 1 ;
        display : flex ;

        input {
            outline-width : 0 ;
            border : none ;
            padding : 5px 20px ;
            margin : 0 10px ;
            border-radius : 999px ;
            background-color : #eff2f5 ;
        }

        button {
            display : none ;
        }
    }

    .messageSender {
        flex : 1 ;
    }
`

const Bottom = styled.div`
    display : flex ;
    justify-content : space-evenly ;
`

const Option = styled.div`
    padding : 20px ;
    display : flex ;
    align-items : center ;
    color: gray ;
    margin : 5px ;
    cursor : pointer ;

    h3 {
        font-size : medium ;
        margin-left : 10px ;
    }

    :hover {
        background-color : #eff2f5 ;
        border-radius : 20px ;
    }
`
