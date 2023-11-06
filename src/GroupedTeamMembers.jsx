
import { useState } from "react"


const GroupTeamMembers = ({ setTeam, selectedTeam, employees }) => {

  function handleTeamClick(event) {
    var transformedGroupData = groupedEmployees.map((groupedData) => groupedData.team === event.currentTarget.id
      ? { ...groupedData, collapsed: !groupedData.collapsed }
      : groupedData);
    setGroupedData(transformedGroupData);
    setTeam(event.currentTarget.id);
  }

  const groupTeamMembers = () => {
    const teamNames = ['TeamA', 'TeamB', 'TeamC', 'TeamD'];

    const teams = teamNames.map((teamName) => {
      const teamMembers = employees.filter((employee) => employee.teamName === teamName);
      const team = {
        team: teamName,
        members: teamMembers,
        collapsed: selectedTeam === teamName ? false : true,
      };
      return team;
    });

    return teams;
  };

  const [groupedEmployees, setGroupedData] = useState(groupTeamMembers())


  return (
    <main className="container">
      {
        groupedEmployees.map((item) => {
          return (
            <div key={item.team} className="card mt-2" style={{ cursor: "pointer" }}>
              <h4 id={item.team} className="card-header text-secondary bg-white" onClick={handleTeamClick}>
                Team Name: {item.team}
              </h4>
              <div id={"collapse_" + item.team} className={item.collapsed === true ? "collapse" : ""}>
                <hr />
                {
                  item.members.map(member => {
                    return (
                      <div className="mt-2" key={member.fullName}>
                        <h5 className="card-title mt-2">
                          <span className="text-dark">Full Name: {member.fullName}</span>
                        </h5>
                        <p>Designation: {member.designation}</p>
                      </div>
                    );
                  })
                }
              </div>
            </div>
          );
        })
      }
    </main>


  )


}

export default GroupTeamMembers
