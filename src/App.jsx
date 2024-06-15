import { useState } from "react";

function App() {
  const [fullname, setFullname] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [phoneNumber, setPhoneNumber] = useState("(555) 123-4567");
  const [address, setAddress] = useState(
    "1234 Elm Street, Springfield, IL 62704"
  );
  const [jobtitle, setJobTitle] = useState("Software Engineer");

  const [university, setUniversity] = useState("Springfield University");
  const [fieldofstudy, setFieldOfStudy] = useState("Computer Science");
  const [location, setLocation] = useState("Springfield, IL");

  const [companyname, setCompanyName] = useState("TechCorp Inc.");
  const [positiontitle, setPositionTitle] = useState("Senior Developer");
  const [description, setDescription] = useState(
    "Led a team of developers to create scalable web applications, improved performance by 30%, and mentored junior developers."
  );

  const [language, setLanguage] = useState("JavaScript, Python, Java");
  const [tools, setTools] = useState("Git, Docker, Jenkins");
  const [frameworks, setFrameworks] = useState("React, Node.js, Django");

  function handleClear() {
    setFullname("");
    setEmail("");
    setPhoneNumber("");
    setAddress("");
    setJobTitle("");
    setUniversity("");
    setFieldOfStudy("");
    setLocation("");
    setCompanyName("");
    setPositionTitle("");
    setDescription("");
    setLanguage("");
    setTools("");
    setFrameworks("");
  }
  return (
    <div className="app">
      <LeftSide
        onClear={handleClear}
        setFullname={setFullname}
        setEmail={setEmail}
        setPhoneNumber={setPhoneNumber}
        setAddress={setAddress}
        setJobTitle={setJobTitle}
        setUniversity={setUniversity}
        setFieldOfStudy={setFieldOfStudy}
        setLocation={setLocation}
        setCompanyName={setCompanyName}
        setPositionTitle={setPositionTitle}
        setDescription={setDescription}
        setLanguage={setLanguage}
        setTools={setTools}
        setFrameworks={setFrameworks}
      />
      <Preview
        fullname={fullname}
        email={email}
        phoneNumber={phoneNumber}
        address={address}
        jobtitle={jobtitle}
        university={university}
        location={location}
        fieldofstudy={fieldofstudy}
        companyname={companyname}
        positiontitle={positiontitle}
        description={description}
        language={language}
        tools={tools}
        frameworks={frameworks}
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

function InputField({ labelText, placeholder, setState }) {
  return (
    <div className="input-field">
      <label>{labelText}</label>
      <input
        onChange={(e) => setState(e.target.value)}
        placeholder={placeholder}
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

function PersonalDetails({
  setFullname,
  setEmail,
  setPhoneNumber,
  setAddress,
  setJobTitle,
}) {
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
          <InputField
            setState={setFullname}
            placeholder="Full name"
            labelText="Full name"
          />
          <InputField
            setState={setEmail}
            placeholder="Email"
            labelText="Email"
          />
          <InputField
            setState={setPhoneNumber}
            placeholder="Phone number"
            labelText="Phone number"
          />
          <InputField
            setState={setAddress}
            placeholder="Address"
            labelText="Address"
          />
          <InputField
            setState={setJobTitle}
            placeholder="Job title"
            labelText="Job title"
          />
        </>
      )}
    </div>
  );
}

function Education({ setUniversity, setFieldOfStudy, setLocation }) {
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
          <InputField
            setState={setUniversity}
            placeholder="University"
            labelText="University"
          />
          <InputField
            setState={setFieldOfStudy}
            placeholder="Location"
            labelText="Location"
          />
          <InputField
            setState={setLocation}
            placeholder="Field of Study"
            labelText="Field of Study"
          />
        </>
      )}
    </div>
  );
}

function Experience({ setCompanyName, setPositionTitle, setDescription }) {
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
          <InputField
            setState={setCompanyName}
            placeholder="Company name"
            labelText="Company name"
          />
          <InputField
            setState={setPositionTitle}
            placeholder="Position title"
            labelText="Position title"
          />
          <InputField
            setState={setDescription}
            placeholder="Description"
            labelText="Description"
          />
        </>
      )}
    </div>
  );
}

function Skills({ setLanguage, setTools, setFrameworks }) {
  const [showMore, setShowMore] = useState(false);

  function handleToggle() {
    setShowMore((prev) => !prev);
  }
  return (
    <div className="experience">
      <DisplayMore showMore={showMore} onToggle={handleToggle}>
        Skills
      </DisplayMore>
      {showMore && (
        <>
          <InputField
            setState={setLanguage}
            placeholder="Languages"
            labelText="Languages"
          />
          <InputField
            setState={setTools}
            placeholder="Tools"
            labelText="Tools"
          />
          <InputField
            setState={setFrameworks}
            placeholder="Frameworks"
            labelText="Frameworks"
          />
        </>
      )}
    </div>
  );
}

function LeftSide({
  setFullname,
  setEmail,
  setPhoneNumber,
  setAddress,
  setJobTitle,
  setUniversity,
  setFieldOfStudy,
  setLocation,
  setCompanyName,
  setPositionTitle,
  setDescription,
  setLanguage,
  setTools,
  setFrameworks,
  onClear,
}) {
  return (
    <div className="left-side">
      <ClearExample handleClear={onClear} />
      <PersonalDetails
        setAddress={setAddress}
        setPhoneNumber={setPhoneNumber}
        setEmail={setEmail}
        setFullname={setFullname}
        setJobTitle={setJobTitle}
      />
      <Education
        setLocation={setLocation}
        setFieldOfStudy={setFieldOfStudy}
        setUniversity={setUniversity}
      />
      <Experience
        setDescription={setDescription}
        setPositionTitle={setPositionTitle}
        setCompanyName={setCompanyName}
      />
      <Skills
        setFrameworks={setFrameworks}
        setTools={setTools}
        setLanguage={setLanguage}
      />
    </div>
  );
}

function Preview({
  fullname,
  email,
  phoneNumber,
  address,
  jobtitle,
  university,
  location,
  fieldofstudy,
  companyname,
  positiontitle,
  description,
  language,
  tools,
  frameworks,
}) {
  return (
    <div className="preview">
      {(fullname || email || phoneNumber || address || jobtitle) && (
        <div className="for-personal-details">
          {fullname && <h3>{fullname}</h3>}
          {jobtitle && <span>{jobtitle}</span>}
          {email && <p>{email}</p>}
          {phoneNumber && <p>{phoneNumber}</p>}
          {address && <p>{address}</p>}
        </div>
      )}
      {(university || location || fieldofstudy) && (
        <div className="for-education">
          <h4>Education</h4>
          <div className="e-details">
            {university && <p>{university}</p>}
            {location && <p>{location}</p>}
          </div>
          {fieldofstudy && <p>{fieldofstudy}</p>}
        </div>
      )}
      {(companyname || positiontitle || description) && (
        <div className="for-experience">
          <h4>Experience</h4>
          {companyname && <span>{companyname}</span>}
          {positiontitle && <span> | {positiontitle}</span>}
          {description && <p>{description}</p>}
        </div>
      )}
      {(language || frameworks || tools) && (
        <div className="for-skills">
          <h4>Skills</h4>
          {language && (
            <div className="flex">
              <span>Programming Languages:</span>
              <span>{language}</span>
            </div>
          )}
          {frameworks && (
            <div className="flex">
              <span>Frameworks:</span>
              <span>{frameworks}</span>
            </div>
          )}
          {tools && (
            <div className="flex">
              <span>Tools:</span>
              <span>{tools}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
