
import './App.css';
import EmployeeForm from './components/EmployeeForm';
import Home from "./components/Home"
import {Link,Routes,Route} from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employeeform" element={<EmployeeForm />} />
      </Routes>
    </>
  );
}

export default App;
