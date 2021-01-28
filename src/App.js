import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomepageScreen from './components/homepage/HomepageScreen'
import Navbar from './components/Nav/Navbar'
import RegisterScreen from './components/Auth/RegisterScreen'
import LoginScreen from './components/Auth/LoginScreen'
import ForgotPasswordScreen from './components/Auth/ForgotPasswordScreen'
import Footer from './components/Footer/Footer'
import ContactPage from "./components/ContactPage/ContactPage";
import AboutPage from "./components/AboutPage/AboutPage";

import NotFound from "./components/NotFound/NotFound";
import Dashboard from "./components/Dashboard/Dashboard";


function App() {


const isAuth = false ;

  return (
 
           <Router>
     

<Navbar/>

       <Switch>
         <Route exact path="/" component={HomepageScreen}/>
         <Route exact path="/register" component={RegisterScreen}/>
         <Route exact path="/login" component={LoginScreen}/>
         <Route exact path="/contact" component={ContactPage}/>
         <Route exact path="/about" component={AboutPage}/>
         <Route exact path="/admindashboard" component={Dashboard}/>
     
         <Route exact path="/resetpassword" component={ForgotPasswordScreen}/>
         <Route component={NotFound} />
       </Switch>
       <Footer/>

     </Router>

  
  );
}

export default App;
