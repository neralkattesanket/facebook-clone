import { Chat, 
    EmojiFlags, 
    LocalHospital, 
    People, 
    Storefront, 
    VideoLibrary , 
    ExpandMoreOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import SidebarRow from './SidebarRow'



function Sidebar({user}) {

    const data = [
        {
            src : 'jkn' ,
            title : "sanket U neralkatte" ,
        } ,
        {
            Icon : LocalHospital ,
            title : "COVID-19 Information Center"
        } ,
        {
            Icon : EmojiFlags , 
            title : 'Pages'
        } , 
        {
            Icon : People , 
            title : "Friends"
        } ,
        {
            Icon : Chat ,
            title : "Messenger"
        } ,
        {
            Icon : Storefront ,
            title : "Marketplace"
        } ,
        {
            Icon : VideoLibrary ,
            title : "Videos"
        } , 
        {
            Icon : ExpandMoreOutlined , 
            title : "Marketplace"
        }
    ]

    return (
        <Container>
            {data.map(item => (
                <SidebarRow src={item.src} Icon={item.Icon} title={item.title} />
            ))}
        </Container>
    )
}

export default Sidebar

const Container = styled.div`
    padding : 25px 10px ;
    flex : 0.33 ;
`