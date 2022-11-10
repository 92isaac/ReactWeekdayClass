import './App.css';
import {BrowserRouter as Router , Routes, Route } from 'react-router-dom'
// import Counter from './components/Counter';
// import Eight from './components/Eight';
// import Eleventh from './components/Eleventh';
// import Fifth from './components/Fifth';
// import First from './components/First';
// import FootballClub from './components/FootballClub';
// import Fouth from './components/Fouth';
// import Nineth from './components/Nineth';
// import Second from './components/Second'
// import Seventh from './components/Seventh';
// import Sixth from './components/Sixth';
// import Tenth from './components/Tenth';
// import Third from './components/Third';
// import Timer from './components/Timer';
// import Twelvth from './components/Twelvth';
// import Thirtheen1 from './components/Thirtheen1';
// import ShowMessge from './components/ShowMessge';
// import Home from './components/pages/Home';
// import About from './components/pages/About';
// import Service from './components/pages/Service';
import BootstrapNavbar from './components/BootstrapNavbar';
import { lazy, Suspense } from 'react';
import Old from './components/Old';
import New from './components/New';
import { AuthProvider } from './components/auth';
import Login from './components/loginfiles/Login';
import { RequireAuth } from './components/RequireAuth';

const Home = lazy(()=>import('./components/pages/Home'))
const About = lazy(()=>import('./components/pages/About'))
const Service = lazy(()=>import('./components/pages/Service'))

function App() {
  return (
    <AuthProvider>

    <div className="">

      <Router>
        <BootstrapNavbar />
        <Suspense fallback={<h1>Loading...</h1>}>
      <Routes >
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/service' element={<RequireAuth><Service /></RequireAuth>}>
            <Route path='old' element={<Old />}/>
            <Route path='new' element={<New/>}/>
          </Route>
      </Routes>
          </Suspense>
      </Router>
      {/* <Home />

      <h1>Hello World</h1>
      <First></First>
      <First />
      <Second />
      <Third name="Timothy" title="Full-stack Developer" location="Owerri" skills="html, css, javascript, python, oracle, "/>

      <Third name="Favour" title="Frontend Developer" location="Ajah" skills="html, css, javascript, python, oracle," />

      <FootballClub 
      clName="ola"
      name="Arsenal"
      founded="1886, Woolwich, London, United Kingdom"
      ceo=' Vinai Venkatesham (31 Oct 2018–)'
      manager="Mikel Arteta"
      description='Arsenal Football Club, commonly referred to as Arsenal, is a professional football club based in Islington, London, England. Arsenal plays in the Premier League, the top flight of English football.'
      />
      <FootballClub 
      clName="favour"
      name="Chelshit"
      founded="1906, SW6, Fulham road, West-London, United Kingdom"
      ceo='Todd Boehly'
      manager="Graham Potter"
      description='Chelsea Football Club is an English professional football club based in Fulham, West London. Founded in 1905, they play their home games at Stamford Bridge. The club competes in the Premier League, the top division of English football. They won their first major honour, the League championship, in 1955.'
      />


      <Fouth />

      <Counter />
      <Fifth />
      <Timer />
      <Sixth />
      <Seventh />
      <Eight />
      <Nineth />
      <Tenth />

      <Eleventh />

      <Twelvth />

      <Thirtheen1 />
 
      <ShowMessge /> */}
    </div>
    </AuthProvider>

  );
}

export default App;
