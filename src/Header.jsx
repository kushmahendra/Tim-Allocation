import React from "react"


const Header = (props) => {
  return (
    <header className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8"><h1>Team Member Allocation</h1>
          <h3>{props.selectedTeam + " has " + props.SelectedTeamCount} {props.SelectedTeamCount > 1 ? "members" : "member"}</h3></div>
      </div>

    </header>
  )
}

export default Header


