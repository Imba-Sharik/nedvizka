"use client";

interface FilterGroupProps {
  label: string;
  from: string;
  to: string;
  fromPlaceholder: string;
  toPlaceholder: string;
  onFromChange: (v: string) => void;
  onToChange: (v: string) => void;
}

const inputClass =
  "relative w-[69px] h-full bg-transparent text-center font-sans text-[14px] font-medium leading-4.25 text-white placeholder:text-white border-0 outline-none appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]";

export function FilterGroup({
  label, from, to, fromPlaceholder, toPlaceholder, onFromChange, onToChange,
}: FilterGroupProps) {
  return (
    <div className="flex flex-col gap-1.5 min-[750px]:flex-row min-[750px]:items-center min-[750px]:gap-2.25">
      <span className="font-sans text-[14px] font-medium leading-4.25 text-black dark:text-white">
        {label}
      </span>
      <div className="flex items-center gap-px">
        <div
          className="relative flex items-center justify-center rounded-l-[68px] overflow-hidden"
          style={{ width: 69, height: 39 }}
        >
          <div
            className="absolute inset-0 bg-[rgba(0,0,0,0.41)] dark:bg-[rgba(255,255,255,0.41)]"
            style={{ backdropFilter: "blur(22px)", opacity: 0.55 }}
          />
          <input
            type="number"
            value={from}
            placeholder={fromPlaceholder}
            onChange={(e) => onFromChange(e.target.value)}
            className={inputClass}
          />
        </div>
        <div
          className="relative flex items-center justify-center rounded-r-[68px] overflow-hidden"
          style={{ width: 69, height: 39 }}
        >
          <div
            className="absolute inset-0 bg-[rgba(0,0,0,0.41)] dark:bg-[rgba(255,255,255,0.41)]"
            style={{ backdropFilter: "blur(22px)", opacity: 0.55 }}
          />
          <input
            type="number"
            value={to}
            placeholder={toPlaceholder}
            onChange={(e) => onToChange(e.target.value)}
            className={inputClass}
          />
        </div>
      </div>
    </div>
  );
}
