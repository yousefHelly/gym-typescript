import { SelectedPage } from '@/shared/types'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    page: string,
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage)=>void,
    setNav?: (value: boolean)=>void
}

const Link = ({page, selectedPage, setSelectedPage, setNav}: Props) => {
    const lowerCasedPage = page.toLocaleLowerCase().replace(/\s/ig,'-') as SelectedPage
    return (
    <AnchorLink
    className={`${selectedPage===lowerCasedPage?'text-primary-500':'hover:text-primary-300'} transition capitalize px-4 md:px-0`} 
    href={`#${lowerCasedPage}`}
    onClick={()=>{
        setSelectedPage(lowerCasedPage)
        setNav&&setNav(false)
    }}
    >{page}</AnchorLink>
    )
}

export default Link