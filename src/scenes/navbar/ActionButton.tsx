import { SelectedPage } from '@/shared/types';
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    children: React.ReactNode,
    href: string,
    customStyles?:string,
    setSelectedPage: (value:SelectedPage)=>void,
    setNav?: (value: boolean)=>void
}

const ActionButton = ({children,href,customStyles, setSelectedPage, setNav}: Props) => {
    const lowerCasedPage = href.toLocaleLowerCase().replace(/\s/ig,'-') as SelectedPage
  return (
    <AnchorLink
    onClick={()=>{
        setSelectedPage(lowerCasedPage)
        setNav&&setNav(false)
    }}
    href={`#${lowerCasedPage}`}
    className={`bg-yellow-400 hover:bg-primary-500 hover:text-gray-20 transition px-4 py-2 rounded-md ${customStyles}`}>
        {children}
    </AnchorLink>
    )
}

export default ActionButton