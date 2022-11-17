import react from "react"
import DataDetails from "./DataDetails"
import {detailCharater} from './detailInterFace'
import styled from "styled-components"




const DetailCharacter:React.FC<detailCharater> = ({characters, url}) =>{
   console.log("yewwee", characters)
    return (

        <AllCharacters>
            {
             
             characters?.length! > 0 ? <>
             { characters?.map((props, i)=>(
                    <>
                     
                    <DataDetails key={i}   character={props}  />
                    </>
                ))}
             </> :<><Loading>loading Data............</Loading></>


               
            }
        </AllCharacters>
    )
}

export default DetailCharacter

const Loading = styled.div`

width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;

`


const AllCharacters  = styled.div`
width:;
height:auto;

display:flex;
flex-wrap:wrap;
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