export default function Input({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="flex w-full flex-col">
      <label htmlFor="name" className="text-lg font-bold">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="h-10 w-full rounded-3xl bg-red-50 px-5 py-6 outline-none ring-gray-500 focus:ring-1 sm:w-80"
      />
    </div>
  );
}
