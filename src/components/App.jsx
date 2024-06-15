import { Preview } from "./Preview";
import { useInputChange } from "./useInputChange";
import { LeftSide } from "./LeftSide";

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
export default App;
