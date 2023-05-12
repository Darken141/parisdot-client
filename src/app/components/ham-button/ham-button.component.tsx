import React from 'react'

// Types
interface IHamButtonProps {
	isOpen: boolean
}
export interface IProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		IHamButtonProps {}

const HamButton = ({ ...props }: IProps) => {
  return (
    <button
      {...props}
      className='relative cursor-pointer flex justify-center items-center w-[5rem] h-[5rem] border-[1px] border-solid border-white rounded-[50%]'
    >
      <div className={`absolute w-[1.8rem] h-[0.2rem] bg-white transition-all ease-in-out duration-300 ${props.isOpen ? "top-[2.3rem] rotate-[45deg]" : "top-[1.5rem] left-[1.4rem]"}`} />
      <div className={`absolute w-[1.8rem] h-[0.2rem] bg-white transition-all ease-in-out duration-300 ${props.isOpen ? "opacity-0" : "top-[50%] left-[1.4rem] translate-y-[-50%]"}`} />
      <div className={`absolute w-[1.8rem] h-[0.2rem] bg-white transition-all ease-in-out duration-300 ${props.isOpen ? "bottom-[2.3rem] rotate-[-45deg]" : "bottom-[1.5rem] left-[1.4rem]"}`} />
    </button>
  )
}

export default HamButton
