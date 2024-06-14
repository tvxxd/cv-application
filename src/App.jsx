import { useState } from "react";
import { button } from "telegraf/markup";

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

function InputField({ labelText, placeholder }) {
  return (
    <div className="input-field">
      <label>{labelText}</label>
      <input placeholder={placeholder} type="text" />
    </div>
  );
}

function DisplayMore({ children }) {
  return (
    <div className="display-more">
      <h3>{children}</h3>
      <button>+</button>
    </div>
  );
}

function PersonalDetails() {
  return (
    <div className="personal-details">
      <DisplayMore>Personal details</DisplayMore>
      <InputField placeholder="Full name" labelText="Full name" />
      <InputField placeholder="Email" labelText="Email" />
      <InputField placeholder="Phone number" labelText="Phone number" />
      <InputField placeholder="Address" labelText="Address" />
      <InputField placeholder="Job title" labelText="Job title" />
      <InputField placeholder="Email" labelText="Email" />
    </div>
  );
}

function Education() {
  return (
    <div className="education">
      <DisplayMore>Education</DisplayMore>
      <InputField placeholder="University" labelText="University" />
      <InputField placeholder="Location" labelText="Location" />
      <InputField placeholder="Field of Study" labelText="Field of Study" />
      <InputField placeholder="Email" labelText="Email" />
    </div>
  );
}
export default App;
