import React from 'react'
import styled from 'styled-components'
import Map from '../images/map.png'
import Phone from "../images/Phone.png"
import Send from "../images/Send.png"

const Container = styled.div`
height:90%;
background-color: #fbffc2;
background-image: url("https://www.transparenttextures.com/patterns/ag-square.png");
@media only screen and (max-width:480px){
 text-align:center;
}

`

const Wrapper = styled.div`
height:100%;
padding:20px;
display:flex;
align-items:center;
justify-content:center;
@media only screen and (max-width:480px){
  flex-direction:column;
}
`

const FormContainer = styled.div`
 width:50%;
 @media only screen and (max-width:480px){
  width:100%; 
}
`

const Form = styled.form`
height:250px;
display:flex;
align-items:center;
justify-content:center;
@media only screen and (max-width:480px){
  flex-direction: column; 
}
`

const LeftForm = styled.div`
height:100%;
display:flex;
flex-direction: column;
justify-content:space-between;
margin-right:20px;
@media only screen and (max-width:480px){
  margin-right:0;
}
`


const RightForm = styled.div`
height:100%;
display:flex;
flex-direction: column;
justify-content:space-between;
`


const Input = styled.input`
width:200px;
padding:20px;
@media only screen and (max-width:480px){
  
  padding:5px;
`

const TextArea = styled.textarea`
width:200px;
height:60%;
padding:20px;
@media only screen and (max-width:480px){
  padding:5px;
  margin-top:15px;
}
`


const Button = styled.button`
width:180px;
border:none;
border-radius:10px;
background-color:darkblue;
color:white;
font-size:20px;
padding:15px;
margin-top:30px;
cursor:pointer;
display:flex;
align-items:center;
`

const AddresContainer = styled.div`
width:50%;
display:flex;
flex-direction:column;
align-items:center;
@media only screen and (max-width:480px){
  width:100%;
}
`

const AddressItem = styled.div`
display:flex;
align-items:center;
margin-bottom:50px;
@media only screen and (max-width:480px){
  margin-bottom:15px;
}
`

const Icon = styled.img`
width:20px;
margin-right:20px;
`
const Text = styled.span`
font-size:20px;
margin-right:15px;
@media only screen and (max-width:480px){
  margin-right:5px;
  font-size:10px;
}
`


const Title = styled.h1`
margin:50px;
margin-top:0px;
@media only screen and (max-width:480px){
  margin:20px; 
}
`


const Contact = () => {
    return (
       <Container>
        <Wrapper>
          <FormContainer>
          <Title>Questions? <br/> Let's Get in Touch</Title>
          <Form>
            <LeftForm>
                <Input placeholder='Your Name' />
                <Input placeholder='Your Email' />
                <Input placeholder='Subject' />

            </LeftForm>
            <RightForm>
                <TextArea placeholder='Your Message' />
                <Button>Send</Button>
            </RightForm>
          </Form>
          </FormContainer>
          <AddresContainer>
           <AddressItem>
            <Icon src={Map}/>
            <Text>123 , BHU Road , IIT BHU, Varanasi</Text>
           </AddressItem>

           <AddressItem>
            <Icon src={Phone}/>
            <Text>9877240866</Text>
           </AddressItem>

           <AddressItem>
            <Icon src={Send}/>
            <Text>contact @anurag.com</Text>
            <Text>akkamboj006@gmail.com</Text>
           </AddressItem>
          </AddresContainer>
        </Wrapper>
       </Container>
    )
}

export default Contact