import { Avatar, IconButton } from '@material-ui/core'
import { Add, 
    ExpandMore, 
    Flag, 
    Forum, 
    Home, 
    NotificationsActive, 
    Search, 
    StorefrontOutlined, 
    SubscriptionsOutlined, 
    SupervisedUserCircle } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Container>
            <Header_left>
                <img src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png" />
                <Header_input>
                    <Search/>
                    <input placeholder='Search Facebook' type="text" />
                </Header_input>
            </Header_left>

            <Header_middle>
                <Header_option>
                    <Home fontSize="large" />
                </Header_option>
                <Header_option>
                    <Flag fontSize="large" />
                </Header_option>
                <Header_option >
                    <SubscriptionsOutlined fontSize="large" />
                </Header_option>
                <Header_option>
                    <StorefrontOutlined fontSize="large" />
                </Header_option>
                <Header_option>
                    <SupervisedUserCircle fontSize="large" />
                </Header_option>
            </Header_middle>

            <Header_right>
                <Header_info>
                    <Avatar />
                    <h4>sanket</h4>
                </Header_info>

                <IconButton>
                    <Add/>
                </IconButton>
                <IconButton>
                    <Forum/>
                </IconButton>
                <IconButton>
                    <NotificationsActive/>
                </IconButton>
                <IconButton>
                    <ExpandMore/>
                </IconButton>
            </Header_right>
        </Container>
    )
}

export default Header

const Container = styled.div`
    padding : 15px 20px ;
    display: flex ;
    justify-content: space-between ;
    position: sticky ;
    background-color: white ;
    z-index: 100;
    top: 0 ;
    box-shadow: 0px 5px 8px -9px rgba(0 , 0 , 0 , 0.75);
`

const Header_left = styled.div`
    display : flex ;
    justify-content : space-evenly;

    img {
        height : 40px ;
    }
`

const Header_middle = styled.div`
    display:flex ;
    flex: 1 ;
    justify-content: center ; 
`

const Header_option = styled.div`
    display : flex ;
    align-items: center ;
    padding : 0 30px ;
    cursor: pointer;

    :hover {
        background-color : #eff2f5 ;
        border-radius : 10px ; 
        align-items: center ;
        padding: 0 30px ;
        border-bottom : none; 
    }

    .MuiSvgIcon-root {
        color : gray ;

        :hover {
            color : #2e81f4 ;
        }
    }

    :active {
        border-bottom : 4px solid #2e81f4;

        .MuiSvgIcon-root {
            color : #2e81f4 ;
        }
    }

`

const Header_right = styled.div`
    display : flex ;
`

const Header_input = styled.div`
    display: flex ;
    align-items: center; 
    background-color: #eff2f5 ;
    padding: 10px ;
    margin-left: 10px ;
    border-radius: 999px ;

    input {
        border : none ;
        background-color: transparent ;

        :focus {
            outline: none ;
        }
    }
`

const Header_info = styled.div`
    display : flex ;
    align-items: center ;

    h4 {
        margin-left: 10px ;
    }
`