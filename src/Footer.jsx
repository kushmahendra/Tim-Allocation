import React from "react"

const Footer = () => {
  var today = new Date();
  return (
    <footer className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <h3>Team Allocation App - {today.getFullYear()}</h3>
        </div>
      </div>
    </footer>
  )
}

export default Footer


