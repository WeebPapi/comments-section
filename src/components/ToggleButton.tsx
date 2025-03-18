import React from "react"
import { ToggleButtonProps } from "../interfaces/componentInterfaces"

const ToggleButton: React.FC<ToggleButtonProps> = ({
  enableVirtualizer,
  setEnableVirtualizer,
}) => {
  return (
    <div className="sm:h-[60px] h-[55px] flex flex-col justify-between">
      <div
        className={`${
          enableVirtualizer ? "bg-amber-300" : "bg-neutral-800"
        } transition-colors duration-500 rounded-[50px] sm:w-[50px] sm:h-[30px] w-[40px] h-[25px] flex items-center cursor-pointer`}
        onClick={() => {
          setEnableVirtualizer((prev) => !prev)
        }}
      >
        <div
          className={`${
            enableVirtualizer ? "ml-1" : "sm:ml-[25px] ml-[20px]"
          } sm:w-[20px] sm:h-[20px] w-[15px] h-[15px] rounded-full bg-white transition-all duration-400`}
        ></div>
      </div>
      <p
        className={`${
          enableVirtualizer ? "text-amber-300" : "text-neutral-800"
        } transition-colors duration-500 text-sm w-[81px]`}
      >
        {enableVirtualizer ? "Virtualized" : "Unvirtualized"}
      </p>
    </div>
  )
}

export default ToggleButton
