import { AutoComplete } from "antd";
import ReactInputMask from "react-input-mask";

export default function GlobalInput({
  label,
  placeholder,
  value,
  type,
  register,
  className,
  onSearch,
  onSelect,
  options,
  disabled,
  mask,
  errors,
  onKeyDown,
  ...other
}) {
  return (
    <label htmlFor={name} className={`w-full block  ${className && className}`}>
      {label && (
        <p className="ml-[3px] text-neutral-300 text-sm font-medium  leading-tight mb-[6px]">
          {label}
        </p>
      )}
      {type == "tel" ? (
        <ReactInputMask
          className={`w-full bg-transparent px-3.5 py-2.5 bg-zinc-800/opacity-20 rounded-lg shadow border border-zinc-700 justify-start items-center gap-2 inline-flex  ${
            errors &&
            " bg-zinc-800/opacity-20 rounded-lg shadow border border-rose-700"
          }`}
          value={value}
          type={type}
          placeholder={placeholder}
          mask={mask}
          {...register}
          {...other}
        />
      ) : type == "autocomplete" ? (
        <AutoComplete
          className="w-full  inline-flex"
          value={value}
          onSelect={onSelect}
          options={options}
          onSearch={(text) => onSearch(text)}
          placeholder={placeholder}
          {...other}
        />
      ) : type == "textarea" ? (
        <textarea
          className="w-full bg-transparent px-3.5 py-2.5 bg-zinc-800/opacity-20 rounded-lg shadow border border-zinc-700 justify-start items-center gap-2 inline-flex "
          type={type}
          cols={4}
          rows={8}
          placeholder={placeholder}
          value={value}
          {...register}
          {...other}
        ></textarea>
      ) : (
        <input
          className={`w-full bg-transparent px-3.5 py-2.5 bg-zinc-800/opacity-20 rounded-lg shadow border border-zinc-700 justify-start items-center gap-2 inline-flex ${
            disabled ? "cursor-not-allowed" : "cursor-text"
          } 
                                ${
                                  errors &&
                                  " bg-zinc-800/opacity-20 rounded-lg shadow border border-rose-700"
                                }
                                `}
          type={type}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          onKeyDown={onKeyDown}
          {...register}
          {...other}
        />
      )}

      {errors && (
        <p className="text-rose-700 text-sm font-normal  leading-tight mt-[6px] ml-[2px]">
          {errors}
        </p>
      )}
    </label>
  );
}
