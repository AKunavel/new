// import { BrowserRouter as Router, Route, Link, Switch }
// 	from "react-router-dom";

// // Import the pages

// import Page1 from "./Components/page1"
// import Page2 from "./Components/page2"
// import Page3 from "./Components/page3"

// // Import css
// import "./app.css"

// function App() {
// 	return (
// 		<div className="App">
// 			<Router>
// 				<Switch>
// 					<Route exact path="/" element={<h1>Home Page</h1>} />
// 					<Route exact path="page1" element={<Page1 />} />
// 					<Route exact path="page2" element={<Page2 />} />
// 					<Route exact path="page3" element={<Page3 />} />
// 				</Switch>
// 				<div className="list">
// 					<ul>
// 						<li><Link to="/">Home</Link></li>
// 						<li><Link to="page1">Page 1</Link></li>
// 						<li><Link to="page2">Page 2</Link></li>
// 						<li><Link to="page3">Page 3</Link></li>
// 					</ul>
// 				</div>
// 			</Router>
// 		</div>
// 	);
// }
// export default App;
import React from 'react';
import{BrowserRouter,Route,Routes,Link} from 'react-router-dom';
import './style.css';

function HomePage() {
  return (
    <div className='homepage'>
      <h3>Home:</h3> 
     
    <div className="homes">
    <p>Lets Go</p>
     
    </div>
    </div>
  )
}

function AboutPage() {
  return (
    <div>
      <h2>About:</h2>
      <h4> React application.</h4>

    </div>
  )
}

function ContactPage() {
  return (
    <div>
      <h3>Contact :</h3>
      <h5>9789636219,
        bhuvanagiri.
      </h5>
    </div>
  )
}

function Navigation() {
  return (
   <nav id='navbar'>  
    <ul>
      <li><Link to='/' >Home</Link></li>
      <li><Link to='/AboutPage' >About</Link></li>
      <li><Link to='/ContactPage'>Contact</Link></li>
    </ul>
   </nav>
  )
}

export default function App() {
  return (
<BrowserRouter>
      <div className='landingpage'>
        <Navigation/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/AboutPage' element={<AboutPage/>}/>
          <Route path='/ContactPage' element={<ContactPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    );
}