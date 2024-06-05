const TextField = ({
  label,
  placeholder,
  border = true,
  className,
  required = false,
  type = "text",
}) => {
  return (
    <div className={"flex flex-col gap-2 w-full"}>
      <label
        className={"text-sm sm:text-base md:text-lg lg:text-xl font-semibold"}
      >
        {label}
        <span className={"text-primary"}>{required && "*"}</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={`bg-transparent rounded-[14px] py-3.5 px-4 outline-0 text-sm sm:text-base md:text-lg lg:text-xl ${
          border ? "border-2 border-primary" : "border-0"
        } ${className}`}
        required={required}
      />
    </div>
  );
};
export default TextField;
