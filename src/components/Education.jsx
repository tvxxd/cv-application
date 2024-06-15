import { useState } from "react";
import { InputField } from "./InputField";
import { DisplayMore } from "./DisplayMore";

export function Education({ details, handleChange }) {
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
              onChange={handleChange} />
          ))}
        </>
      )}
    </div>
  );
}
