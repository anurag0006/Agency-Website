import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
padding :20px;
margin-right:50px;
-webkit-box-shadow: 0px 0px 17px -11px rgba(0,0,0,0.58); 
box-shadow: 0px 0px 17px -11px rgba(0,0,0,0.58);
background-color:white;
border-radius:10px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
@media only screen and (max-width:480px){
margin-right:0;
margin-bottom:10px;
padding:10px;
width:55%;

}
`

const PriceContainer = styled.div`
display:flex;
align-items:center;
`

const Price = styled.span`
font-weight:bold;
font-size:50px;
@media only screen and (max-width:480px){
font-size:30px;

}
`

const Type = styled.button`
padding:10px;
margin:10px 0px;
border:1.5px solid crimson;
border-radius:15px;
color:crimson;
background-color:white;
@media only screen and (max-width:480px){
  display:none;
}
`

const List = styled.ul`
list-style:none;
`

const ListItem = styled.li`
margin:30px;
@media only screen and (max-width:480px){
  margin:10px;
  font-size:12px;
}
`

const Button = styled.button`
border:none;
background-color:darkblue;
color:white;
font-size:16px;
padding:15px;
font-weight:bold;
border-radius:10px;
cursor:pointer;
@media only screen and (max-width:480px){
  padding:5px;
  font-size:12px;
}
`



const PriceCard = ({price,type}) => {
    return (
        <Container>
            <PriceContainer>
                $<Price>{price}</Price>/month
                </PriceContainer>
                <Type>{type} Plan</Type>
           
            <List>
                <ListItem>200 Hand-Crafted Templates</ListItem>
                <ListItem>Exclusive Support</ListItem>
                <ListItem>50+ Prebuilt Websites</ListItem>
                <ListItem>Premium Plugins</ListItem>
            </List>
            <Button>Join Now</Button>

        </Container>
    )
}

export default PriceCard