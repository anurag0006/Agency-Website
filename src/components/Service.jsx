import React,{useState} from 'react'
import styled from 'styled-components'
import How from "../images/How.png"
import MiniCard from './MiniCard'
import Play from "../images/play.png"

const Container = styled.div`
display:flex;
@media only screen and (max-width:480px){
  flex-direction:column;
  text-align:center;
}
`

const Wrapper = styled.div`
display :flex;
padding:50px;
flex-direction:column;
height:100%;
@media only screen and (max-width:480px){
  padding:20px;
}
`
const Left = styled.div`
width:50%;
position :relative;
@media only screen and (max-width:480px){
  display:none;
}
`


const Right = styled.div`
width:50%;
@media only screen and (max-width:480px){
  width:100%;
}
`

const Image = styled.img`
display: ${(props) => props.open && "none"};
width:99%;
height:100 vh;
`

const Title = styled.h1`
font-weight:bold;
font-size:43px;
@media only screen and (max-width:480px){
  font-size:30px;
}
`

const Desc = styled.p`
font-size:20px;
margin-top:50px;
color:#555;
`


const CardContainer = styled.div`
display:flex;
justify-content:space-between;
margin-top:50px;
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
@media only screen and (max-width:480px){
  margin:auto;
}

`

const Icon = styled.img`
width:10%;
padding-right:3px;
`

const Video = styled.video`
display: ${(props) => !props.open && "none"};
height:300px;
position:absolute;
top:0;
bottom:0;
right:0;
margin:auto;
@media only screen and (max-width:480px){
width:100%;
}

`


const Model = styled.div`
width:100wh;
height:100vh;
position:absolute;
top:0;
left:0;
background-color:rgba(0,0,0,0.5);
`

const CloseButton = styled.button`
position:absolute;
background-color:white;
padding:5px;
border:none;
border-radius:5px;
right:5px;
top:30px;

`






const Service = () => {
    const smallScreen = window.screen.width <=480 ? true:false;

    const [open,setOpen] = useState(false);

    return (
        <Container>
            <Left>
                <Image open = {open} src={How} />
                <Video open = {open} autoPlay loop controls src="https://www.youtube.com/embed/tgbNymZ7vqY" />
            </Left>
            <Right>
                <Wrapper>
                    <Title>Simple Process To Start</Title>
                    <Desc>We Provide digital experienced services to startups and small businesses to looking for a partner of their digital media, design & Development, lead generation and communication requirements. We Work with you, not for you. Although We have a great resources.</Desc>
                
                <CardContainer>
                    <MiniCard />
                    <MiniCard />
                    <MiniCard />
                </CardContainer>
                <Button onClick ={() => setOpen(true)}><Icon src={Play} />How it Works</Button>
                </Wrapper>  
            </Right>
            {smallScreen && open &&(
                <Model>
                <Video open = {open} autoPlay loop controls src="https://www.youtube.com/embed/tgbNymZ7vqY"/>
                 <CloseButton onClick ={()=>setOpen(false)}>Close</CloseButton>
                </Model>
            )}
        </Container>
    )
}

export default Service