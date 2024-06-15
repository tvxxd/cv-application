export function InputField({ label, name, value, onChange }) {
  return (
    <div className="input-field">
      <label>{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={label}
        type="text" />
    </div>
  );
}
