import './App.css';
import Counter from './components/Counter';
import Eight from './components/Eight';
import Eleventh from './components/Eleventh';
import Fifth from './components/Fifth';
import First from './components/First';
import FootballClub from './components/FootballClub';
import Fouth from './components/Fouth';
import Nineth from './components/Nineth';
import Second from './components/Second'
import Seventh from './components/Seventh';
import Sixth from './components/Sixth';
import Tenth from './components/Tenth';
import Third from './components/Third';
import Timer from './components/Timer';
import Twelvth from './components/Twelvth';
import Thirtheen1 from './components/Thirtheen1';
import ShowMessge from './components/ShowMessge';
import Home from './components/pages/Home';

function App() {
  return (
    <div className="">
      <Home />

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
 
      <ShowMessge />
    </div>
  );
}

export default App;
