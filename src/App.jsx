import './App.css'
import Header from "./Header"
import Footer from "./Footer"
import Employees from './Employees'
import TeamMembersData from "./TeamMembersData";
import { useEffect, useState } from "react";
import GroupTeamMembers from "./GroupedTeamMembers";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import NotFound from "./NotFound";




export default function App() {
  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeesList')) || TeamMembersData);

  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || "TeamA");

  const handleSelectedTeam = (event) => {
    console.log(event.target.value);
    setTeam(event.target.value);
  }

  const handleEmployeeCardClick = (event) => {
    const transformedEmployees = employees.map((employee) => employee.id === parseInt(event.currentTarget.id)
      ? (employee.teamName === selectedTeam) ? { ...employee, teamName: '' } : { ...employee, teamName: selectedTeam }
      : employee);
    setEmployees(transformedEmployees);


  }
  useEffect(() => {
    localStorage.setItem('employeesList', JSON.stringify(employees));
  }, [employees]);

  useEffect(() => {
    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam));
  },)

  return (
    <main>
      <Router>
        <Nav />
        <Header
          selectedTeam={selectedTeam}
          SelectedTeamCount={employees.filter((employee) => employee.teamName === selectedTeam).length}
        />
        <Routes>
          <Route path='/'
            element={
              <Employees
                selectedTeam={selectedTeam}
                handleSelectedTeam={handleSelectedTeam}
                handleEmployeeCardClick={handleEmployeeCardClick}
                employees={employees} />}>
          </Route>
          <Route path='/GroupedTeamMembers' element={<GroupTeamMembers
            selectedTeam={selectedTeam}
            employees={employees}
            setTeam={setTeam}
          ></GroupTeamMembers>}>
          </Route>
          <Route path='*' element={<NotFound />}>
          </Route>
        </Routes>
        <Footer />
      </Router>
    </main>

  )
}
