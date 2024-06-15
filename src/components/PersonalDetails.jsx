import { useState } from "react";
import { InputField } from "./InputField";
import { DisplayMore } from "./DisplayMore";

export function PersonalDetails({ details, handleChange }) {
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
              onChange={handleChange} />
          ))}
        </>
      )}
    </div>
  );
}
