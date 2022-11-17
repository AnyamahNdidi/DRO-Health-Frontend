import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <LeftContainer>
          
          <Title>
             DRO Health Book Inventory
          </Title>
          <Content>
            You can search by Author,Publisher,
            <br/>
            Name and ISBN.
          </Content>

            <Button bd="" cl="white" bg="#000269" to="/">
                Check  Catalog
            </Button>

        </LeftContainer>

        <RightContainer >
          <img src="/assets/3.png"/>

        </RightContainer>

      </Wrapper>  
    </Container>
  )
}

export default Hero

const Button = styled(Link)<{ bg: string; cl: string; bd: string }>`
  
  line-height: 1;
  text-align: center;
  text-decoration: none;
  height: 43px;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1.5px solid ${(props) => props.bd};
  background-color: ${(props) => props.bg};
  color: ${(props) => props.cl};
  transition: all 350ms;
  cursor: pointer;
  border-radius: 5px;
  margin-buttom: 5px;
  
 
  :hover {
    transform: scale(0.98);
  }
  @media screen and (max-width: 786px) {
    width: 100px;
    font-size: 12px;
   
  }
`;

const Title = styled.div`
margin-top:60px;
font-weight:700;
font-size:35px;
height:auto;

 @media screen and (max-width: 600px) {
    margin-top:0px;
    height:auto;
  }
`
const Content = styled.pre`
font-size:15px;
font-weight:600;
`


const LeftContainer = styled.div`
width:500px;
height:300px;
display:flex;
flex-direction:column;

@media screen and (max-width: 600px) {
    width:90%; 
    height:auto;
    }
`
const RightContainer = styled.div`
width:500px;
height:300px;



img{
  width:80%;
  height:100%;
  object-fit:contain;
}


@media screen and (max-width: 600px) {
    width:90%; 
    display:flex;
    justify-content: center;
    align-items: center;
    height:auto;
    margin-top:10px;
    }
`


const Container = styled.div`
width: 100%;
height: auto;
display:flex;
justify-content: space-around;
align-items: center;
margin-top:30px;

@media screen and (max-width: 786px) {
   
margin-top:0px;
    
    
    }
`
const Wrapper = styled.div`
 width:1200px;
 height:auto;
 background-color:#F3F8FE;
 border-radius:6px;

  display: flex;
 flex-wrap: wrap;


 justify-content: space-around;
 align-items: center;


@media screen and (max-width: 600px) {
    width:100%;
    height:auto;
    padding-bottom:30px;
    align-items: center;
    display:flex;
    justify-content: center;

    
    
    }

`