import DownArrow from "../images/downArrow.png";

const DropDown = ({
  label,
  placeholder,
  border = true,
  className,
  required = false,
  options = [],
  onChange,
  name,
  onBlur,
  error,
  value,
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
      <select
        className={`w-full bg-transparent sm:rounded-[14px] rounded-[6px] sm:py-3.5 py-2 px-4 outline-0 text-[12px] sm:text-base md:text-lg lg:text-xl ${
          border ? "border-2 border-primary" : "border-0"
        } ${className} appearance-none pr-8 bg-no-repeat`}
        placeholder={placeholder}
        style={{
          backgroundImage: `url(${DownArrow})`,
          backgroundSize: "1rem",
          backgroundPosition: "right 0.7rem center",
        }}
        value={value}
        name={name}
        onChange={onChange}
        required={required}
        onBlur={onBlur}
      >
        {placeholder && (
          <option value={""} className={"bg-white text-black hover:text-white"}>
            {placeholder}
          </option>
        )}
        {options?.map((item, index) => (
          <option
            value={item.value}
            key={`OP-${index}`}
            className={"bg-white text-black hover:text-white"}
          >
            {item?.label}
          </option>
        ))}
      </select>
      {error && <span className="text-red-500">{error}</span>}
    </div>
  );
};
export default DropDown;
