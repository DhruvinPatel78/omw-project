const TextArea = ({
  label,
  placeholder,
  border = true,
  className,
  required = false,
  onChange,
  value,
  name,
  rest,
}) => {
  return (
    <div className={"flex flex-col gap-2 w-full"}>
      <label
        className={
          "text-[12px] sm:text-base md:text-lg lg:text-xl font-semibold"
        }
      >
        {label}
        <span className={"text-primary"}>{required && "*"}</span>
      </label>
      <textarea
        value={value}
        placeholder={placeholder}
        className={`bg-transparent sm:rounded-[14px] rounded-[6px] sm:py-3.5 py-2 px-4 outline-0 text-[12px] sm:text-base md:text-lg lg:text-xl ${
          border ? "border-2 border-primary" : "border-0"
        } ${className}`}
        required={required}
        onChange={onChange}
        name={name}
        {...rest}
        rows={2}
      />
    </div>
  );
};
export default TextArea;
