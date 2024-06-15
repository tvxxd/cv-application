import { useState } from "react";

function App() {
  const [personalDetails, handlePersonalChange] = useInputChange({
    fullname: "John Doe",
    email: "john.doe@example.com",
    phoneNumber: "(555) 123-4567",
    address: "1234 Elm Street, Springfield, IL 62704",
    jobtitle: "Software Engineer",
  });

  const [educationDetails, handleEducationChange] = useInputChange({
    university: "Springfield University",
    fieldofstudy: "Computer Science",
    location: "Springfield, IL",
  });

  const [experienceDetails, handleExperienceChange] = useInputChange({
    companyname: "TechCorp Inc.",
    positiontitle: "Senior Developer",
    description:
      "Led a team of developers to create scalable web applications, improved performance by 30%, and mentored junior developers.",
  });

  const [skills, handleSkillsChange] = useInputChange({
    language: "JavaScript, Python, Java",
    tools: "Git, Docker, Jenkins",
    frameworks: "React, Node.js, Django",
  });

  function handleClear() {
    console.log("click")
    handlePersonalChange({
      fullname: "",
      email: "",
      phoneNumber: "",
      address: "",
      jobtitle: "",
    });

    handleEducationChange({
      university: "",
      fieldofstudy: "",
      location: "",
    });

    handleExperienceChange({
      companyname: "",
      positiontitle: "",
      description: "",
    });

    handleSkillsChange({
      language: "",
      tools: "",
      frameworks: "",
    });
  }

  return (
    <div className="app">
      <LeftSide
        personalDetails={personalDetails}
        handlePersonalChange={handlePersonalChange}
        educationDetails={educationDetails}
        handleEducationChange={handleEducationChange}
        experienceDetails={experienceDetails}
        handleExperienceChange={handleExperienceChange}
        skills={skills}
        handleSkillsChange={handleSkillsChange}
        onClear={handleClear}
      />
      <Preview
        personalDetails={personalDetails}
        educationDetails={educationDetails}
        experienceDetails={experienceDetails}
        skills={skills}
      />
    </div>
  );
}
function ClearExample({ handleClear }) {
  return (
    <button onClick={handleClear} className="clear-example">
      Clear Example
    </button>
  );
}

function useInputChange(initialState) {
  const [state, setState] = useState(initialState);

  function handleChange(e) {
    console.log(e);
    console.log(e.target);
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return [state, handleChange];
}

function InputField({ label, name, value, onChange }) {
  return (
    <div className="input-field">
      <label>{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={label}
        type="text"
      />
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

function PersonalDetails({ details, handleChange }) {
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
          {Object.keys(details).map((key) => (
            <InputField
              key={key}
              name={key}
              label={key.charAt(0).toUpperCase() + key.slice(1)}
              value={details[key]}
              onChange={handleChange}
            />
          ))}
        </>
      )}
    </div>
  );
}

function Education({ details, handleChange }) {
  const [showMore, setShowMore] = useState(false);

  function handleToggle() {
    setShowMore((prev) => !prev);
  }

  return (
    <div className="education">
      <DisplayMore showMore={showMore} onToggle={handleToggle}>
        Education
      </DisplayMore>
      {showMore && (
        <>
          {Object.keys(details).map((key) => (
            <InputField
              key={key}
              name={key}
              label={key.charAt(0).toUpperCase() + key.slice(1)}
              value={details[key]}
              onChange={handleChange}
            />
          ))}
        </>
      )}
    </div>
  );
}

function Experience({ details, handleChange }) {
  const [showMore, setShowMore] = useState(false);

  function handleToggle() {
    setShowMore((prev) => !prev);
  }

  return (
    <div className="experience">
      <DisplayMore showMore={showMore} onToggle={handleToggle}>
        Experience
      </DisplayMore>
      {showMore && (
        <>
          {Object.keys(details).map((key) => (
            <InputField
              key={key}
              name={key}
              label={key.charAt(0).toUpperCase() + key.slice(1)}
              value={details[key]}
              onChange={handleChange}
            />
          ))}
        </>
      )}
    </div>
  );
}

function Skills({ details, handleChange }) {
  const [showMore, setShowMore] = useState(false);

  function handleToggle() {
    setShowMore((prev) => !prev);
  }

  return (
    <div className="skills">
      <DisplayMore showMore={showMore} onToggle={handleToggle}>
        Skills
      </DisplayMore>
      {showMore && (
        <>
          {Object.keys(details).map((key) => (
            <InputField
              key={key}
              name={key}
              label={key.charAt(0).toUpperCase() + key.slice(1)}
              value={details[key]}
              onChange={handleChange}
            />
          ))}
        </>
      )}
    </div>
  );
}

function LeftSide({
  personalDetails,
  handlePersonalChange,
  educationDetails,
  handleEducationChange,
  experienceDetails,
  handleExperienceChange,
  skills,
  handleSkillsChange,
  onClear,
}) {
  return (
    <div className="left-side">
      <ClearExample handleClear={onClear} />
      <PersonalDetails
        details={personalDetails}
        handleChange={handlePersonalChange}
      />
      <Education
        details={educationDetails}
        handleChange={handleEducationChange}
      />
      <Experience
        details={experienceDetails}
        handleChange={handleExperienceChange}
      />
      <Skills details={skills} handleChange={handleSkillsChange} />
    </div>
  );
}

function Preview({
  personalDetails,
  educationDetails,
  experienceDetails,
  skills,
}) {
  return (
    <div className="preview">
      {(personalDetails.fullname ||
        personalDetails.email ||
        personalDetails.phoneNumber ||
        personalDetails.address ||
        personalDetails.jobtitle) && (
        <div className="for-personal-details">
          {personalDetails.fullname && <h3>{personalDetails.fullname}</h3>}
          {personalDetails.jobtitle && <span>{personalDetails.jobtitle}</span>}
          {personalDetails.email && <p>{personalDetails.email}</p>}
          {personalDetails.phoneNumber && <p>{personalDetails.phoneNumber}</p>}
          {personalDetails.address && <p>{personalDetails.address}</p>}
        </div>
      )}
      {(educationDetails.university ||
        educationDetails.location ||
        educationDetails.fieldofstudy) && (
        <div className="for-education">
          <h4>Education</h4>
          <div className="e-details">
            {educationDetails.university && (
              <p>{educationDetails.university}</p>
            )}
            {educationDetails.location && <p>{educationDetails.location}</p>}
          </div>
          {educationDetails.fieldofstudy && (
            <p>{educationDetails.fieldofstudy}</p>
          )}
        </div>
      )}
      {(experienceDetails.companyname ||
        experienceDetails.positiontitle ||
        experienceDetails.description) && (
        <div className="for-experience">
          <h4>Experience</h4>
          {experienceDetails.companyname && (
            <span>{experienceDetails.companyname}</span>
          )}
          {experienceDetails.positiontitle && (
            <span> | {experienceDetails.positiontitle}</span>
          )}
          {experienceDetails.description && (
            <p>{experienceDetails.description}</p>
          )}
        </div>
      )}
      {(skills.language || skills.frameworks || skills.tools) && (
        <div className="for-skills">
          <h4>Skills</h4>
          {skills.language && (
            <div className="flex">
              <span>Programming Languages:</span>
              <span>{skills.language}</span>
            </div>
          )}
          {skills.frameworks && (
            <div className="flex">
              <span>Frameworks:</span>
              <span>{skills.frameworks}</span>
            </div>
          )}
          {skills.tools && (
            <div className="flex">
              <span>Tools:</span>
              <span>{skills.tools}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
