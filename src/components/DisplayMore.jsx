export function DisplayMore({ children, onToggle, showMore }) {
  return (
    <div className="display-more">
      <h3>{children}</h3>
      <button onClick={onToggle}>{showMore ? "-" : "+"}</button>
    </div>
  );
}
