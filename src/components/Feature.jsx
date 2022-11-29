import React from 'react'
import styled from 'styled-components'
import Phone from "../images/App.png"
import AnimatedShapes from './AnimatedShapes'

const Container =styled.div`
width:100%;
display:flex;
@media only screen and (max-width:480px){
  flex-direction:column;
  padding:30px 20px;
  height:100%;
`
const Left =styled.div`
width:50%;
@media only screen and (max-width:480px){
  display:none;

`
const Right =styled.div`
padding-top:100px;
width:50%;
display:flex;
flex-direction:column;
justify-content:center;
@media only screen and (max-width:480px){
  width:100%;

`

const Image = styled.img`
width:70%;
height:130%;
`

const Title = styled.span`
font-size:70px;
@media only screen and (max-width:480px){
  font-size:40px;
`
const SubTitle = styled.span`
margin-top:30px;
font-size:24px;
font-style:italic;
color:#333;
`

const Desc = styled.p`
font-size:20px;
margin-top:30px;
color:#777;
`

const Button = styled.button`
width:170px;
border:none;
padding:15px 20px;
background-color:darkblue;
color:white;
font-size:20px;
border-radius:20px;
margin-top:20px;
cursor:pointer;
@media only screen and (max-width:480px){
 margin:auto;
}
`



const Feature = () => {
  return (
    <Container>
        <Left>
         <Image src={Phone} />
         </Left>
        <Right>
            <Title> 
            <b>Good</b> Design 
            <br />
            <b>Good</b> Business
            </Title>
            <SubTitle>We know that good design means good Business.</SubTitle>
            <Desc>We help our clients succeed by creating brand idendities, digital experiences, and print materials that communicatae clearly, achieving market Goals, and look Fantastic</Desc>
            <Desc>We care your business and gurantee you to achieve market goals</Desc>
            <Button>Learn More</Button>
        </Right>
        <AnimatedShapes />
    </Container>
  )
}

export default Feature