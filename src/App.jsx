import { useState } from "react";

function App() {
  return (
    <div className="app">
      <LeftSide />
      <Preview />
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

function DisplayMore({ children, onToggle, showMore }) {
  return (
    <div className="display-more">
      <h3>{children}</h3>
      <button onClick={onToggle}>{showMore ? "-" : "+"}</button>
    </div>
  );
}

function PersonalDetails() {
  const [showMore, setShowMore] = useState(true);

  function handleToggle() {
    setShowMore((prev) => !prev);
  }
  return (
    <div className="personal-details">
      <DisplayMore showMore={showMore} onToggle={handleToggle}>
        Personal details
      </DisplayMore>
      {showMore && (
        <>
          <InputField placeholder="Full name" labelText="Full name" />
          <InputField placeholder="Email" labelText="Email" />
          <InputField placeholder="Phone number" labelText="Phone number" />
          <InputField placeholder="Address" labelText="Address" />
          <InputField placeholder="Job title" labelText="Job title" />
          <InputField placeholder="Email" labelText="Email" />
        </>
      )}
    </div>
  );
}

function Education() {
  const [showMore, setShowMore] = useState(false);
  function handleToggle() {
    setShowMore((prev) => !prev);
  }

  return (
    <div className="education">
      <DisplayMore showMore={showMore} onToggle={handleToggle}>Education</DisplayMore>
      {showMore && (
        <>
          <InputField placeholder="University" labelText="University" />
          <InputField placeholder="Location" labelText="Location" />
          <InputField placeholder="Field of Study" labelText="Field of Study" />
        </>
      )}
    </div>
  );
}

function Experience() {
  const [showMore, setShowMore] = useState(false);

  function handleToggle() {
    setShowMore((prev) => !prev);
  }
  return (
    <div className="experience">
      <DisplayMore showMore={showMore} onToggle={handleToggle}>Experience</DisplayMore>
      {showMore && (
        <>
          <InputField placeholder="Company name" labelText="Company name" />
          <InputField placeholder="Position title" labelText="Position title" />
          <InputField placeholder="Description" labelText="Description" />
        </>
      )}
    </div>
  );
}

function Skills() {
  const [showMore, setShowMore] = useState(false);

  function handleToggle() {
    setShowMore((prev) => !prev);
  }
  return (
    <div className="experience">
      <DisplayMore showMore={showMore} onToggle={handleToggle}>Skills</DisplayMore>
      {showMore && (
        <>
          <InputField placeholder="Languages" labelText="Languages" />
          <InputField placeholder="Tools" labelText="Tools" />
          <InputField placeholder="Frameworks" labelText="Frameworks" />
        </>
      )}
    </div>
  );
}

function LeftSide() {
  return (
    <div className="left-side">
      <PersonalDetails />
      <Education />
      <Experience />
      <Skills />
    </div>
  );
}

function Preview() {
  return (
    <div className="preview">
      <div className="for-personal-details">
        <h3>Test Tavdgiridze</h3>
        <span>Software Developer</span>
        <p>gmail213123@gmail.com</p>
        <p>39248324923</p>
        <p>Tbilisi,Georgia</p>
      </div>
      <div className="for-education">
        <h4>Education</h4>
        <div className="e-details">
          <p>Caucasus University</p>
          <p>Tbilisi, Georgia</p>
        </div>
        <p>Computer Science, Bachelors</p>
        <p></p>
      </div>
      <div className="for-experience">
        <h4>Experience</h4>
        <span>companyname | fullstack web developer</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          delectus recusandae ipsum nesciunt rerum est, labore repellendus
          beatae animi nam molestiae vel eveniet fugiat debitis cupiditate velit
          explicabo dolorum quisquam.
        </p>
      </div>
      <div className="for-skills">
        <h4>Skills</h4>
        <div className="flex">
          <span>Programming Languages:</span>
          <span>Javascript</span>
        </div>

        <div className="flex">
          <span>Frameworks:</span>
          <span>ReactJS</span>
        </div>

        <div className="flex">
          <span>Tools:</span>
          <span>Git</span>
        </div>
      </div>
    </div>
  );
}
export default App;
