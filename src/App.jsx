import { useState } from "react";

function App() {
  return (
    <div className="app">
      <div className="left-side">
        <PersonalDetails />
        <Education />
      </div>
      <div className="preview">RIGHT SIDE</div>
    </div>
  );
}

function PersonalDetails() {
  return (
    <div className="personal-details">
      <h3>Personal Details</h3>
      <label htmlFor="">Full name</label>
      <input placeholder="First and last name" type="text" name="" id="" />
      <label htmlFor="">Email</label>
      <input placeholder="Email" type="text" name="" id="" />
      <label htmlFor="">Phone number</label>
      <input placeholder="Phone number" type="text" name="" id="" />
      <label htmlFor="">Address</label>
      <input placeholder="Address" type="text" name="" id="" />
      <label htmlFor="">Job title</label>
      <input placeholder="Job title" type="text" name="" id="" />
    </div>
  );
}

function Education() {
  return (
    <div className="education">
      <h3>Education</h3>
      <label htmlFor="">University</label>
      <input placeholder="University" type="text" name="" id="" />

      <label htmlFor="">Location</label>
      <input placeholder="Location" type="text" name="" id="" />

      <label htmlFor="">Field of Study</label>
      <input placeholder="Field of Study" type="text" name="" id="" />
    </div>
  );
}
export default App;
