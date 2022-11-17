import axios from "axios"
import React, { useState } from "react"
import styled from "styled-components"
import {useParams} from "react-router-dom"
import DetailCharacter from "./DetailsCharacter"
// import {DetailsData} from "./detailInterFace"



interface DetailsData
{
    url: string,
    name: string,
    isbn: string,
    authors: string[],
    numberOfPages: number,
    publisher: string,
    country: string,
    mediaType: string,
    released: string,
    characters: string[],
    povCharacters:string[],
    to?:any
   
}

const Details = () => {
    let {id} = useParams()
   
    let bookId = parseInt(id!) 
    
    const [bookDetails, setBookDetails] = React.useState({} as DetailsData)

       
    const getUserSearch = async () =>
    {
        await axios.get(`https://www.anapioficeandfire.com/api/books/${bookId}`).then((res) =>
        {
            setBookDetails(res?.data)

            console.log("i won see this", res?.data)
            console.log("this is deatials books",bookDetails)
        })
     
    }

    React.useEffect(()=>{
        getUserSearch ()
       //  editUser()
     },[])
     return (
        <Container>
            <Wrapper>
                <HeaderHold>
                    <DetailsImg bg={bookDetails?.name?.charAt(0) === "A" ? "#ffb703" : "#8ecae6"}>
                        <BlackHolder>
                             <DHname>
                <span>DRO</span>{"  "} {"  "}
                  health
            </DHname>

            <ConHeight>
                <TitleBook>
                {bookDetails.name}
                </TitleBook>
                <AuthorName>
                    Author : {bookDetails.authors}
                </AuthorName>

                <Publish>
                    
                   <pre>Publisher</pre> &nbsp; : {bookDetails.publisher}
                </Publish>

            </ConHeight>

                        </BlackHolder>

                    </DetailsImg>

                    <Title>
                        Title : {" "}
                       <span>{bookDetails.name}</span>
                       {/* {i} */}
                    </Title>

                    <Character>
                           Characers {" "}
                    </Character>

                    
                    <AllCharacters>   
                    <DetailCharacter characters={bookDetails.characters} />
            </AllCharacters>
                </HeaderHold>
           
            
            </Wrapper>
           
        </Container>
    )
}

export default Details

const AllCharacters  = styled.div`
width:50px;;
height:auto;

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
font-weight:600;
`

const Title  = styled.div`
height:40px;
width:100%;
font-size:20px;

span{
    font-size:25px;
    font-weight:600;
}
`

const Publish = styled.div`
width:90%;
height:50px;
color:#F3F8FE;
display:flex;
justify-content:flex-end;
margin-top:10px;
display:flex;
font-size:15px;

pre{
line-height:1px;
margin-top:11px;
}
`

const AuthorName = styled.div`
font-size:13px;
color:#F3F8FE;
font-weight:600;
`


const TitleBook = styled.div`
color:#F3F8FE;
font-size:25px;
margin-top:90px;
`
const ConHeight = styled.div`

width:100%;
height:250px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:ceneter;
`

const DHname = styled.div`
width:100%;
height:50px;
color:#F3F8FE;
margin-left:10px;
margin-top:10px;
font-weight:800;


`

const BlackHolder = styled.div`
width:100%;
height:100%;
position: absolute;
background-color:rgba(0,0,0,0.38);
border-radius:6px;
`

const DetailsImg = styled.div<{bg:string}>`
width:100%;
height:250px;
background-color:${({bg})=>bg};
position:relative;
`

const HeaderHold = styled.div`
width:700px;
height:auto;
padding-buttom:30px;

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
const Container = styled.div`
width: 100%;
min-height:100vh;
height:100%;
display:flex;
justify-content: center;
align-items: center;
margin-top:30px;

@media screen and (max-width: 786px) {
   
margin-top:0px;
    
    
    }
`
const Wrapper = styled.div`

width:1000px;
 height:auto;
 background-color:#F3F8FE;
 border-radius:6px;
 display: flex;
 padding-top:20px;
 padding-bottom:20px;
 flex-direction: column;

 justify-content: center;
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