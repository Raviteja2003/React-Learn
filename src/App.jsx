//import Car from "./components/classComponents/Car"

import {BrowserRouter as Router, Route,Routes } from "react-router-dom"
import Home from "./components/functionalComponents/ReactRouter/Home"

//import UnCountrolledForm from "./components/functionalComponents/React Forms/UnControlledForm"

//import SelectTextAreaForm from "./components/functionalComponents/React Forms/TextAreaHandling"

//import FormValidations from "./components/functionalComponents/React Forms/FormValidations"

//import MultiInput from "./components/functionalComponents/React Forms/MutliInput"

//import SimpleForm from "./components/functionalComponents/React Forms/SimpleForm"

//import StyledList from "./components/functionalComponents/React List/StyledList"

//import Goal from "./components/functionalComponents/conditionalRendering/Goal";

//import Garage from "./components/functionalComponents/Garage"

//import Football from "./components/functionalComponents/Football"

//import Counter2 from "./components/classComponents/ComponentDidUpdate"

//import Timer from "./components/classComponents/ComponentWillUnmount"

//import NumberList from "./components/classComponents/GetSnapShotBeforeUpdate"

//import Counter from "./components/classComponents/ShouldComponentUpdate"

//import UserProfile from "./components/ComponentDidMount"

//import GetDerivedStateFromProps from "./components/classComponents/GetDerivedStateFromProps"

//import Constructor from "./components/classComponents/Constructor"

//import NameList from './components/functionalComponents/React List/NameList';

//import ProductList from './components/functionalComponents/React List/ProductList';
import About from './components/functionalComponents/ReactRouter/About';
import Contact from './components/functionalComponents/ReactRouter/Contact';
import Navbar from "./components/functionalComponents/ReactRouter/Navbar";

//const cars = ["Ford","Toyato","Wolkswagen"];

//const isGoal = true;

function App() {

  return (
    /*<Car/>
      <Constructor/>
      <GetDerivedStateFromProps favco="BLUE"/>
      <UserProfile/>
      <Counter/>
      <NumberList/>
      <Counter2/>
      <Timer/>
      <Football/>
      <Garage cars={cars}/>
      <Goal isGoal = {isGoal}/>
      <NameList/>
      <ProductList/>
      <StyledList/>
      <SimpleForm/>
      <MultiInput/>
      <FormValidations/>
      <SelectTextAreaForm/>
      < UnCountrolledForm/>
    */
      <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
   

  )
}

export default App
