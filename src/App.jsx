import './App.css';
import {Component} from 'react';
import Post from './post';
import FilterMenu from './filtermenu';
import $ from 'jquery';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import Shelter from './Writeups/Shelter';
import Wander from './Writeups/Wander';
import Development from './Writeups/Development';
import Iterative from './Writeups/Iterative';
import ABTest from './Writeups/ABTest';
import Redesign from './Writeups/Redesign';
import Personas from './Writeups/Personas';
import About from './About';
import Resume from './Resume';
import Forage from './Writeups/Forage';
import APL from './Writeups/APL';
import PCI from './Writeups/PCI';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        posts: [
          {title: 'FORAGE PROJECT', key: 0, date: '2024-1-24', subject: 'UI/UX', format: 'website', photo: 'forage.png', desc: 'enable people to be more connected to their environment and their food supply through an app that uses Duolingo-style gamification to encourage learning.', link: 'forage'},
          {title: 'PRINCETON CONSULTANTS', key: 0, date: '2022-5-1', subject: 'job experience', format: 'web apps', photo: 'pci.png', desc: 'Optimizing information delivery and processes for industry clients', link: 'pci'},
          {title: 'JOHNS HOPKINS APL', key: 0, date: '2019-5-1', subject: 'job experience', format: 'application', photo: 'apl.png', desc: 'data visualization, simulations, user interfaces, cloud services, and more', link: 'apl'},
          {title: 'SHELTER IN A SUITCASE', key: 2, date: '2021-4-19', subject: 'engineering', format: 'interactive prototype', photo: 'shelter.png', desc: 'design and prototype a portable shelter to provide a temporary solution to homelessness', link: 'shelter'},
          {title: 'WANDER', key: 1, date: '2021-5-1', subject: 'UI/UX', format: 'website', photo: 'wanderhome.png', desc: 'a travel-planning web app for exploring new destinations, creating itineraries, and organizing and sharing trips with friends and family', link: 'wander'},
          {title: 'STOREFRONT', key: 3, date: '2020-12-1', subject: 'UI/UX', format: 'website', photo: 'dev.png', desc: 'an online store made with React and Material UI', link: 'storefront'},
          {title: 'ITERATIVE DESIGN', key: 6, date: '2020-11-10', subject: 'UI/UX', format: 'interactive prototype', photo: 'iterative.png', desc: 'interface design process for an emerging startup', link: 'iterative'},
          {title: 'A/B TESTING', key: 5, date: '2020-10-27', subject: 'UI/UX', format: 'case study', photo: 'ab.png', desc: 'compare two UI designs using statistical analysis', link: 'abtest'},
          {title: 'RESPONSIVE REDESIGN', key: 4, date: '2020-10-20', subject: 'UI/UX', format: 'website', photo: 'redesign.png', desc: 'a responsive website redesigned for a local company', link: 'redesign'},
          {title: 'PERSONAS & STORYBOARDING', key: 7, date: '2020-10-6', subject: 'UI/UX', format: 'case study', photo: 'persona.png', desc: 'personas and storyboard for users of a keyboard interface', link: 'personas'},
        ],
        total: 0,
        sort: "featured",
        subject: "all",
        format: "all",
        showComponent: false,
    }
  }
  handleSort = (event) => {
    // change sort to new value
    let sort = event.target.value;
    this.setState({sort});
  };
  handleFilterSubject = (event) => {
    // change subject to new value
    let subject = event.target.value;
    this.setState({subject});
  };
  handleFilterFormat = (event) => {
    // change format to new value
    let format = event.target.value;
    this.setState({format});
  };
  componentDidMount() {
    window.addEventListener('load', this.goBolt);
  };
  componentWillUnmount() { 
    window.removeEventListener('load', this.goBolt);
  };

  goBolt = () => {
    $("#imgAnimate").attr("src", "/bolt.gif");
    setTimeout(() => $("#imgAnimate").attr("src", "/stillbolt.png"), 3000);
  };

  render () { return (
    <Router><Route render={({ location }) => (<div className="app">
      <header>
        <div className="headerDiv"><Link to='/' onClick={this.goBolt}><div className="headerText"><h1 className="headerTitle">Olivia Banks</h1></div><img src="/stillbolt.png" className="bolt" alt="lightning bolt graphic" id="imgAnimate"></img></Link></div>
        <nav>
          <Link to='/' className="navLink" onClick={this.goBolt}>Projects</Link>
          <Link to='/about' className="navLink" onClick={this.goBolt}>About</Link>
        </nav>
      </header>
      <br/>
      <TransitionGroup><CSSTransition key={location.key} timeout={350} classNames="transition" unmountOnExit><Switch location={location}>
        <Route path="/forage"><Forage/></Route>
        <Route path="/pci"><PCI/></Route>
        <Route path="/apl"><APL/></Route>
        <Route path="/shelter"><Shelter/></Route>
        <Route path="/wander"><Wander/></Route>
        <Route path="/storefront"><Development/></Route>
        <Route path="/iterative"><Iterative/></Route>
        <Route path="/abtest"><ABTest/></Route>
        <Route path="/redesign"><Redesign/></Route>
        <Route path="/personas"><Personas/></Route>
        <Route path ="/about"><About/></Route>
        <Route path="/resume"><Resume/></Route>
        <Route path="/">
          <div className="portfolio">
            <div className="sideBar">
              <p className="aboutBlurb">hi! I'm an engineer and designer based in baltimore</p>
              {/* <p className="aboutBlurb about2"><em>currently:</em> computer engineering concentrator <b>@brown university</b></p> */}
              <FilterMenu sort={this.state.sort} subject={this.state.subject} format={this.state.format} handleSort={this.handleSort} handleFilterSubject={this.handleFilterSubject} handleFilterFormat={this.handleFilterFormat}/>
            </div>
            <div className="postList">
              <Post posts={this.state.posts} subject={this.state.subject} format={this.state.format} sort={this.state.sort} goBolt={this.goBolt}/>
            </div>
          </div>
        </Route>
      </Switch></CSSTransition></TransitionGroup>
    </div>)}/></Router>
  ) }
}

export default App;
