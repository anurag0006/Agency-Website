import React from 'react'
import styled from 'styled-components'


const Square = styled.div`
width:60px;
height:60px;
position:absolute;
background-color:#4e6bff;
opacity:0.7;
top:-60px;
left:-60px;
z-index:-1;
animation: square 25s linear alternate infinite;

@keyframes square{
    to{
        transform : translate(100vw,100vh);
    }
}
`


const Circle = styled.div`
width:100px;
height:100px;
border-radius:50px;
position:absolute;
background-color:#ff97af;
top:200px;
left:-100px;
z-index:-1;
animation: circle 25s linear alternate infinite;

@keyframes circle{
    to{
        transform : translate(100vw,-100vh);
    }
}
`


const Rect = styled.div`
width:50px;
height:100px;
position:absolute;
background-color:#4e6bff;
opacity:0.5;
top:400px;
left:-50px;
z-index:-1;
animation: rect 25s linear alternate infinite;

@keyframes rect{
    to{
        transform : translate(100vw,-100vh);
    }
}
`

const AnimatedShapes = () => {
  return (
    <div>
 <Square/>
    <Circle />
    <Rect />
    </div>
   
  )
}

export default AnimatedShapes