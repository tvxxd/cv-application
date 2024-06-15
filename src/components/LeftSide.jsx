import { ClearExample } from "./ClearExample";
import { PersonalDetails } from "./PersonalDetails";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Skills } from "./Skills";

export function LeftSide({
  personalDetails, handlePersonalChange, educationDetails, handleEducationChange, experienceDetails, handleExperienceChange, skills, handleSkillsChange, onClear,
}) {
  return (
    <div className="left-side">
      <ClearExample handleClear={onClear} />
      <PersonalDetails
        details={personalDetails}
        handleChange={handlePersonalChange} />
      <Education
        details={educationDetails}
        handleChange={handleEducationChange} />
      <Experience
        details={experienceDetails}
        handleChange={handleExperienceChange} />
      <Skills details={skills} handleChange={handleSkillsChange} />
    </div>
  );
}
