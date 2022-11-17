import React from "react"
import {dataCharater, iDetail} from './detailInterFace'
import axios from "axios"
import styled from "styled-components"
import {NavLink} from "react-router-dom"

const DataDetails:React.FC<dataCharater> = ({character, url})=>{

    const [characterset, setCharactersSet] =React.useState<iDetail>({})

    const fetchData = async() => {
        await axios.get(`${character}`).then(res => {
            console.log("getting single Data: ", res)
            setCharactersSet(res.data)
            
        })
    }

    console.log("get ID: ", characterset.url?.split('/')[5])
 
    console.log("oloe", characterset)
    React.useEffect(() => {
        fetchData()
    }, [])


    return(
       
         <NavLink to={`/character/${characterset.url?.split('/')[5]}`}>

            
                
                 <Container  >
               <ChaData>
                                  <PixHolder>
                                      <Pix>
                                      <img src="/assets/10.jpg"/>
                                  </Pix>
                                  <DName>
                                  {
                characterset?.name
                                   }
                                  </DName>
                                  </PixHolder>
                                  
                </ChaData>
        </Container>
        </NavLink>
     
    

      
    )
}

export default DataDetails


const AllCharacters  = styled.div`
width:100%;
height:350px;

width:700px;

display:flex;
flex-direction:column;
border-radius:6px;


@media screen and (max-width: 600px) {
    width:100%;
    height:auto;
    padding-bottom:30px;
    align-items: center;
    display:flex;
    justify-content: center;

    
    
    }


`

const Character = styled.div`
width:95%;
height:70px;
margin-top:3px;
overflow-x:auto;
display:flex;

justify-content:space-between;
`

const Container  = styled.div`
display:flex;
`

const ChaData = styled.div`
margin-right:5px;
margin-bottom:2px;
width:80px;
`
const Pix = styled.div`
 width:35px;
 height:35px;
 border-radius:50%;


 img{
    width:100%;
    height:100%;
     border-radius:50%;
     object-fit:cover;
 }
`


const PixHolder = styled.div`
height:auto;
width:70px;
display:flex;
flex-direction:column;
align-items: center;
justify-content:center;
`

const DName = styled.div`
font-size:10px;
width:70px;
height:auto;
overflow:hidden;
white-space:nowrap;
text-overflow:ellipsis;
text-align:center;
`
