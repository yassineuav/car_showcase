'use client';

import { CustomButtonProps } from "@/types";


const CustomButton = ({title, containerStyles, btnType, handleClick}: CustomButtonProps) => {
  return (
    <button
        disabled={false}
        type={ btnType ||'button'}
        className={`custom-btn`}
        onClick={handleClick}>
            <span
            className={`flex-1 p-2 ${containerStyles}`}>
                {title}
            </span>
    </button>
  )
}

export default CustomButton
