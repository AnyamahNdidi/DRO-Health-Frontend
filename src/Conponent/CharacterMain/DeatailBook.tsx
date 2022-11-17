import react from "react"
// import DataDetails from "./DataDetails"
import {detailBooks} from './Bookinterface'
import styled from "styled-components"
import DataBooks from "./DataBooks"



const DeatailBook:React.FC<detailBooks> = ({characters}) =>{
   console.log("yewwee", characters)
    return (

        <AllCharacters>

            
            {
                characters?.length!  > 0 ? 
                <>
                {
                        characters?.map((props, i)=>(
                            <DataBooks key={i}  character={props}/>
                        ))
                }
                </> : <Loading>Loading Data...........</Loading>

              
            }
        </AllCharacters>
    )
}

export default DeatailBook



const Loading = styled.div`

width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;

`


const AllCharacters  = styled.div`
width:100%;
height:auto;

display:flex;
justify-content:space-between;
border-radius:6px;
flex-wrap:wrap;



@media screen and (max-width: 600px) {
    width:100%;
    height:auto;
    padding-bottom:30px;
    align-items: center;
    display:flex;
    justify-content: center;

    
    
    }


`