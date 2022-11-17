import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CharacterMain from './Conponent/CharacterMain/CharacterMain';
import Details from './Conponent/DetailsBooks/Details';
import Header from './Conponent/Header/Header';
import Home from './Conponent/Home/Home';
import ScrollToTop from './Conponent/SrollToTop';



function App() {
  return (
    <div >
      <BrowserRouter>
         <Header/>
         <ScrollToTop> 
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/details/:id' element={<Details/>}/>
          <Route path='/character/:id' element={<CharacterMain/>}/>

        </Routes>
        </ScrollToTop>
      </BrowserRouter>
    
      
    </div>
  );
}

export default App;
