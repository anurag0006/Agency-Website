import React from 'react'
import styled from 'styled-components'
import Woman from "../images/woman.png"
import AnimatedShapes from './AnimatedShapes'



const Container = styled.div`
height: calc(100vh - 50px);
display:flex;
padding:20px;

@media only screen and (max-width:480px){
  flex-direction: column;
}
`

const Left = styled.div`
width:60%;
display : flex;
flex-direction : column;
 align-items:center;
 justify-content:center;

@media only screen and (max-width:480px){
  width:100%;
  height:100%;
}
`

const Right = styled.div`
width:40%;

@media only screen and (max-width:480px){
  display:none;
}
`

const Title = styled.h1`
font-size:60px;
width:60%;
padding-top:20px;
padding-bottom:25px;

@media only screen and (max-width:480px){
  width:100%;
  ${'' /* padding:0 25px 15px 0; */}
  font-size:50px;
  text-align:center;
}

`

const Desc = styled.p`
font-size:20px;
width:60%;
@media only screen and (max-width:480px){
  width:100%;
`

const Info = styled.div`
width:60%;
margin-top:50px;
display:flex;
justify-content:space-between;
align-items:center;
@media only screen and (max-width:480px){
  width:100%;
  flex-direction:column;
`

const Button= styled.button`
padding:15px;
background-color:darkblue;
color:white;
border-radius:10px;
font-weight: bold;
border:none;
letter-spacing:2px;
cursor:pointer;
@media only screen and (max-width:480px){
  margin-bottom:20px;
`

const Contact = styled.div`
display :flex;
flex-direction:column;
`
const Phone = styled.span`
color:#f0667d;
font-weight:bold;
`

const ContactText = styled.span`
color:gray;
margin-top:5px;
`

const Image = styled.img`
margin-top:50px; 
width:100%;
`







const Intro = () => {
  return (
    <Container>
        <Left>
         <Title>
            Adventures of Creative Age
         </Title>
         <Desc>
            We Belive that dsigning products and services in close partnership with our clients is the only way to have a real impact on their business
         </Desc>
         <Info>
           <Button>Start New Project</Button>
           <Contact>
              <Phone>Call us at 9877240866</Phone>
              <ContactText>For any Questions or Concern</ContactText>
           </Contact>
         </Info>
        </Left>

        <Right>
        <Image src={Woman} />
        </Right>
        <AnimatedShapes />
    </Container>
  )
}

export default Intro