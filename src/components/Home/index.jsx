import React from 'react';
import Header from '../shared/Header'
// You need to import your shared header...

const Home = () => {
  

    return (
    <>
    <Header title="Welcome Home"/>
    
   <ul>
   <form action="/about" method="get" target="_blank">
         <button type="submit">About me</button>
      </form>
     
     </ul>
     
    
    </>
   
  );
  
}

 
export default Home;