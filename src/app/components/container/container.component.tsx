import React from 'react'

export interface IProps {
  children: React.ReactNode | React.ReactNode[]
}

const Container = ({ children }: IProps) => {
  return <div className="max-w-[124rem] w-full mx-auto px-[3rem]">{children}</div>
}

export default Container
