import DownArrow from "../images/downArrow.png";

const DropDown = ({
  label,
  placeholder,
  border = true,
  className,
  required = false,
  options = [],
}) => {
  return (
    <div className={"flex flex-col gap-2 w-full"}>
      <label
        className={"text-sm sm:text-base md:text-lg lg:text-xl font-semibold"}
      >
        {label}
        <span className={"text-primary"}>{required && "*"}</span>
      </label>
      <select
        className={`w-full bg-transparent rounded-[14px] py-3.5 px-4 outline-0 text-sm sm:text-base md:text-lg lg:text-xl  ${
          border ? "border-2 border-primary" : "border-0"
        } ${className} appearance-none pr-8 bg-no-repeat`}
        placeholder={placeholder}
        style={{
          backgroundImage: `url(${DownArrow})`,
          backgroundSize: "1rem",
          backgroundPosition: "right 0.7rem center",
        }}
      >
        <option value={""} className={"bg-primary"}>
          {placeholder}
        </option>
        {options?.map((item, index) => (
          <option
            value={item.value}
            key={`OP-${index}`}
            className={"bg-primary"}
          >
            {item?.label}
          </option>
        ))}
      </select>
    </div>
  );
};
export default DropDown;
