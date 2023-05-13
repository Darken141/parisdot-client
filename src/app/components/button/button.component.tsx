'use client'
import { motion, HTMLMotionProps } from "framer-motion"

export interface IButtonProps extends HTMLMotionProps<"button"> {
	left?: string
	right?: string
	top?: string
	bottom?: string
	width?: string
	rounded?: boolean
	loading?: boolean
	outline?: boolean | string
}

const Button = ({
	children,
	loading,
	...rest
}: IButtonProps) => {

  if (rest.outline) {
    return (
      <motion.button
        {...rest}
        className="relative cursor-pointer flex justify-center items-center min-w-[5rem] px-[5.7rem] py-[1.5rem] rounded-full font-[inherit] border-[1px] border-solid border-white text-white"
      >
        {loading ? "loading..." : children}
      </motion.button>
    )

  } 

	return (
		<motion.button
			{...rest}
      className="relative cursor-pointer flex justify-center items-center min-w-[5rem] px-[5.7rem] py-[1.5rem] rounded-full font-[inherit] button-gradient"
		>
			{loading ? "loading..." : children}
		</motion.button>
	)
}

export default Button
