import React from 'react' 
import styled from "styled-components"
import { ImBooks } from 'react-icons/im';
import { AiOutlineSearch } from 'react-icons/ai';
import axios from "axios"
import ReactPaginate from "react-paginate";
import { myData,myCha } from "./interface"
import "./pagination.css"
import Character24 from './Character';
import {Link} from "react-router-dom"
import { books, character } from "../Global/Global"
import {useRecoilValue, useRecoilState} from "recoil"

const Bookshelf = () =>
{
    const [viewBook, setViewBook] = useRecoilState<Array<myData>>(books)
    const [viewCharacter, setViewCharacter] = useRecoilState<Array<myCha>>(character)


  
    const [search, setSearch] = React.useState<string>("");
    const [toggle, setToogle] = React.useState<boolean>(false);
    const [textToggle, setTextToogle] = React.useState<boolean>(true);

    const [pageNumber, setPageNumber] = React.useState<number>(0);

   
    

   
    
    const getUserSearch = async () =>
    {
        await axios.get(`https://www.anapioficeandfire.com/api/books`).then((res) =>
        {
            setViewBook(res?.data)
        
        })
   
    }


    const getUserCha = async () =>
    {
        await axios.get(`https://www.anapioficeandfire.com/api/characters`).then((res) =>
        {
            setViewCharacter(res?.data)
        

        })
       
    }


 
    const usersPerPage:number = 6;
    const pagesVisited:number = pageNumber * usersPerPage;

    const displayBooks = viewBook
    .slice(pagesVisited, pagesVisited + usersPerPage)
    ?.filter((val)=> {
        if(search === ""){
            return val
        }else if( val.name.toLowerCase().includes(search.toLowerCase()) || 
        val.publisher.toLowerCase().includes(search.toLowerCase()) ||
        val.isbn.toLowerCase().includes(search.toLowerCase()) ||
        val.authors[0].toLowerCase().includes(search.toLowerCase()) ||
        val.released.toLowerCase().includes(search.toLowerCase())
        
        ){
          return val
        }
    })
    ?.map((props,i) => {
      return (

          <>
        
       
        <Card to={`/details/${props.url?.split('/')[5]}`}  bg={props.name.charAt(0) === "A" ? "#ffb703" : "#8ecae6"}>
            <ColorDark>

            <DHname>
                <span>DRO</span>{"  "} {"  "}
                  health
            </DHname>

            <ConHeight>
                <TitleBook>
               {props.name }
                </TitleBook>
                <AuthorName>
                    Author : {props.authors[0]}
                </AuthorName>

                <Publish>
                    
                   <pre>Publisher</pre> &nbsp; : {props.publisher}
                </Publish>

            </ConHeight>
            </ColorDark>
          
        
        </Card>
        
        </>

      
      );
    });
    const displayCharater = viewCharacter
    .slice(pagesVisited, pagesVisited + usersPerPage)
    ?.filter((val)=> {
        if(search === ""){
            return val
        }else if( val.name.toLowerCase().includes(search.toLowerCase()) || 
        val.culture.toLowerCase().includes(search.toLowerCase()) 
      
        ){
          return val
        }
    })
    ?.map((props, i) => {
      return (
       
        <Card to={`/character/${props.url?.split('/')[5]}`}  bg={props.name.charAt(0) === "A" ? "#ffb703" : "#8ecae6"}>
             <ColorDark>
               <DHname>
                <span>DRO</span>{"  "} {"  "}
                  health
            </DHname>

            <ConHeight>
                <TitleBook>
               {props.name }
                </TitleBook>
                <AuthorName>
                    culture : {props.culture}
                </AuthorName>

                <Publish>
                    
                   <pre>playedBy</pre> &nbsp; : {props.playedBy}
                </Publish>

            </ConHeight>
            </ColorDark>
       
     </Card>
   
 
      );
    });


     const pageCount = Math.ceil(viewBook.length / usersPerPage);

  const changePage = (event:any) => {
    setPageNumber(event.selected);

  
  }
    React.useEffect(() =>
    {
        getUserSearch() 
        getUserCha()
        
    },[])
  return (
      <Container>
          <Wrapper>
              <InputCon>
                  <FilterHold>
						<span>Sort By</span>
                        <DivHol>
                        <CanDiv onClick={()=>{
                           setToogle(!toggle)
                        }} style={{display:"flex"}}>
                            <div>{textToggle ? <>books</> : <>characters</>}</div>
                           <div>▼</div>
                        </CanDiv>

                        {toggle ? 
                        <FanDrop>
                            <Dooks
                              onClick={()=>{
                                setToogle(!toggle)
                                setTextToogle(true)
                              }}
                            >books</Dooks>
                            <Dcats
                            onClick={()=>{
                                setToogle(!toggle)
                                setTextToogle(false)
                              }}
                            >Characters</Dcats>
                        </FanDrop> : <div></div>}

                        </DivHol>
						
					</FilterHold>
                    {
                        textToggle ? (

                            <DinputType >
                            <Myholder>
                                <InputHolder placeholder='Name, Publisher, ISBN, Authors'
                                    value={search}
                                    required
                                  //   onChange={e => handleSerach(e.target.value) }
                              onChange = {(e: React.ChangeEvent<HTMLInputElement>)=> setSearch(e.target.value) }
                                />    
                            </Myholder>
                            <IconHold
                               
                            > 
                                
                  <Button type='submit' bd="" cl="white" bg="#000269" >
                     Search
                  </Button>
      
                            </IconHold>
                            
                        </DinputType>
                        ) :

                         ( <DinputType >
                      <Myholder>
                          <InputHolder placeholder='Character, Culture'
                              value={search}
                              required
                            //   onChange={e => handleSerach(e.target.value) }
                        onChange = {(e: React.ChangeEvent<HTMLInputElement>)=> setSearch(e.target.value) }
                          />    
                      </Myholder>
                      <IconHold
                         
                      >
                          
            <Button type='submit' bd="" cl="white" bg="#000269" >
               Search
            </Button>

                      </IconHold>
                      
                  </DinputType>)
                    }

                 
              </InputCon>
              <Books>

                {
                    viewBook.length  === null  ? <div>wrong search</div> : viewBook.length > 0 ? 
                    (<>
                    {textToggle ?
                     (<>{displayBooks}</>):
                     (<>{displayCharater}</>)
                    }</> )
                    : 
                    (<div>loading........</div>)
                }
                  

                   
              </Books>
               <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
              
          </Wrapper>
    </Container>
  )
}

export default Bookshelf

const Publish = styled.div`
width:90%;
height:50px;
color:#F3F8FE;
display:flex;
justify-content:flex-end;
margin-top:70px;
display:flex;
font-size:15px;

pre{
line-height:1px;
margin-top:11px;
}
`

const ColorDark = styled.div`
width:100%;
height:100%;
position: absolute;
background-color:rgba(0,0,0,0.38);
border-radius:6px;

`


const TitleBook = styled.div`
color:#F3F8FE;
font-size:25px;
margin-top:90px;
`
const AuthorName = styled.div`
font-size:13px;
color:#F3F8FE;
font-weight:600;
`

const DHname = styled.div`
width:100%;
height:50px;
color:#F3F8FE;
margin-left:10px;
margin-top:10px;
font-weight:800;


`

const ConHeight = styled.div`

width:100%;
height:250px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:ceneter;
`



const Dooks = styled.div`
padding:7px;
cursor:pointer;
width:90%;

:hover{
    background-color:white;
    color:blue;
}
`
const Dcats = styled.div`
padding:7px;
cursor:pointer;
width:90%;

:hover{
    background-color:white;
    color:blue;
}
`

const FanDrop = styled.div`
width:150px;
height:100px;
background-color:white;
margin-left:10px;
display:flex;
flex-direction:column;
border-radius:5px;
background-color:whitesmoke;

align-items:center;
z-index:10;
`

const DivHol  = styled.div`
display:flex;
flex-direction:column;
width:150px;


`

const CanDiv = styled.div`
width:150px;
height:30px;
display:flex;
margin-left:10px;
justify-content:space-around;
background-color:white;
cursor:pointer;
`

const FilterHold = styled.div`
	
margin-top:5px;
display:flex;
	select {
		width: 200px;
		height: 30px;
		background-color: #f8f8f8;
		border: none;
		margin-left: 10px;
		border-radius: 5px;
        outline: #525824
		:hover {
			border-color: #525824;
			cursor: pointer;
		}
       
       
	}
`;

const Button = styled.button<{ bg: string; cl: string; bd: string }>`
  
  line-height: 1;
  text-align: center;
  text-decoration: none;
  height: 30px;
  width: 120px;
  display: flex;
  cursor: pointer;
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

const IconHold = styled.div`
position:absolute;
right:0;
margin-top:4px;
`

const InputHolder = styled.input`
width:400px;
height:35px;
outline:none;
border:none;
padding-left:10px;

@media screen and (max-width:600px){
    width:290px;
}
`

const Myholder = styled.div``

const DinputType = styled.form`
position:relative;
width:500px;
background-color:white;
display:flex;

@media screen and (max-width:600px){
    width:90%;
}
`

const Card = styled(Link)<{bg:string}>`
width:290px;
height:300px;
margin:10px;
border-radius:6px;
position:relative;
cursor:pointer;
background-color:${({bg})=>bg};
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
display:flex;
justify-content:space-around;
flex-direction:column;
transition:all 350ms;

:hover{
    transform: scale(0.98);
    
}

@media screen and (max-width: 600px) {
    width:98%;
    margin-top:10px;

    
    
    }
`


const Container = styled.div`
width: 100%;
height: auto;
display:flex;
justify-content: center;
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
 padding-top:20px;
 
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
const Books = styled.div`
width:1000px;
height:auto;


display:flex;
flex-wrap: wrap;
justify-content:center;
align-items:center;

margin-top:20px;

@media screen and (max-width: 600px) {
    width:100%;
    height:auto;
    padding-bottom:30px;
    align-items: center;
    display:flex;
    justify-content: center;

    
    
    }

`
const InputCon = styled.div`
height:30px;
display:flex;
justify-content:space-between;
margin-bottom:5px;
width:980px;



@media screen and (max-width: 600px) {
    width:100%;
    height:auto;
    
    align-items: center;
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    
    
    }
`