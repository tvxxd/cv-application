export function Preview({
  personalDetails, educationDetails, experienceDetails, skills,
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
