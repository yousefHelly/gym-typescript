import React from 'react'

type Props = {
    children: React.ReactNode
}

const HText = ({children}: Props) => {
  return (
    <h1 className='basis-4/5 text-2xl font-bold font-montserrat uppercase'>{children}</h1>
    )
}

export default HText