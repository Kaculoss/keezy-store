import clsx from "clsx"

interface IProps {
  children: React.ReactNode
  tooltip: string
  position: "top" | "bottom" | "left" | "right"
}

const ToolTip = ({ children, tooltip, position }: IProps) => {
  return (
    <div id="tooltip" className="group/tooltip relative cursor-pointer">
      {children}
      <span
        className={clsx(
          "absolute hidden whitespace-nowrap rounded bg-neutral-900 p-2 text-xs text-white group-hover/tooltip:inline-block",
          position === "top"
            ? "bottom-[calc(100%+5px)] left-1/2 -translate-x-1/2"
            : "",
          position === "bottom"
            ? "left-1/2 top-[calc(100%+5px)] -translate-x-1/2"
            : "",
          position === "left"
            ? "right-[calc(100%+5px)] top-1/2 -translate-y-1/2"
            : "",
          position === "right"
            ? "left-[calc(100%+5px)] top-1/2 -translate-y-1/2"
            : ""
        )}
      >
        {tooltip}
      </span>
      <span
        className={clsx(
          "absolute hidden border-[6px] group-hover/tooltip:inline-block",
          position === "top"
            ? "bottom-full left-1/2 -translate-x-1/2 border-b-0 border-l-transparent border-r-transparent border-t-neutral-900"
            : "",
          position === "bottom"
            ? "left-1/2 top-full -translate-x-1/2 border-t-0 border-b-neutral-900 border-l-transparent border-r-transparent"
            : "",
          position === "left"
            ? "right-full top-1/2 -translate-y-1/2 border-r-0 border-b-transparent border-l-neutral-900 border-t-transparent"
            : "",
          position === "right"
            ? "left-full top-1/2 -translate-y-1/2 border-l-0 border-b-transparent border-r-neutral-900 border-t-transparent"
            : ""
        )}
      ></span>
    </div>
  )
}

export default ToolTip
