const InputField = ({ field, value, onChange }) => {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">
        {field.label}
      </label>
      <input
        type={field.type}
        name={field.name}
        placeholder={field.placeholder}
        value={value || ""}
        onChange={onChange}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
    </div>
  );
};

export default InputField;
