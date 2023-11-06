import React from "react";
import femaleProfile from "./images/femaleProfile.jpg";
import maleProfile from "./images/maleProfile.jpg";

const Employees = ({ selectedTeam, handleSelectedTeam, handleEmployeeCardClick, employees }) => {


  const newArr = employees.map((employee) => {
    return (
      <div key={employee.id} id={employee.id} className={(employee.teamName === selectedTeam ? 'card m-2 standout' : 'card m-2')} style={{ cursor: "pointer" }} onClick={handleEmployeeCardClick}>
        <img src={employee.gender === "female" ? femaleProfile : maleProfile} className="card-img-top" />
        <div className="card-body">
          <h6 className="card-title">Full Name: {employee.fullName}</h6>
          <p className="card-text"><b>Designation:</b> {employee.designation}</p>
          <p className="card-text"><b>Gender:</b> {employee.gender}</p>
          <p className="card-text"><b>Team Name:</b> {employee.teamName}</p>
        </div>
      </div>
    )
  })

  return (
    <main className="container">
      <div className="row justify-content-center align-items-center mt-3 mb-3">
        <div className="col-6">
          <select className="form-select form-select-lg" value={selectedTeam} onChange={handleSelectedTeam}>
            <option value="TeamA">TeamA</option>
            <option value="TeamB">TeamB</option>
            <option value="TeamC">TeamC</option>
            <option value="TeamD">TeamD</option>
          </select>
        </div>
        <div>
          <div className="row justify-content-center mt-3 mb-3">
            <div className="col-8">
              <div className="card-collection">
                {newArr}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Employees;

