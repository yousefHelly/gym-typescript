import { Bars3Icon } from '@heroicons/react/20/solid'
import { XMarkIcon } from '@heroicons/react/24/solid'
import logo from '@/assets/Logo.png'
import Link from './Link'
import { useState } from 'react'
import { SelectedPage } from '@/shared/types'
import { Dialog } from '@headlessui/react'
import { motion , AnimatePresence} from 'framer-motion'
import ActionButton from './ActionButton'
type Props = {
    selectedPage: SelectedPage,
    isTopOfPage: boolean,
    setSelectedPage: (value: SelectedPage)=>void
}
const Index = ({selectedPage, isTopOfPage, setSelectedPage}: Props) => {
    
    const [nav,setNav] = useState<boolean>(false)
    const flexBetween = 'flex items-center justify-between'
    const bg = isTopOfPage?'':'bg-primary-300/50 backdrop-blur-xl drop-shadow'
    return (
    <nav>
        <div className={`${flexBetween} w-full ${ bg } fixed top-0 py-6 px-12 md:px-24 z-30`}>
            <img src={logo} alt="gym logo" />
                <div onClick={()=>setNav(!nav)} className='md:hidden p-2 bg-yellow-400 rounded-full cursor-pointer'><Bars3Icon className='w-6'/></div>
            <div className={`${flexBetween} w-full hidden md:flex`}>
                <div className='flex items-center me-auto gap-10 font-bold ml-16'>
                    <Link page='home' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    <Link page='benefits' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    <Link page='our classes' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    <Link page='contact us' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                </div>
                <div className='flex items-center gap-4 font-bold'>
                <button className='hover:text-primary-500 transition px-4 py-2 rounded-md'>Sign In</button>
                <button className='bg-yellow-400 hover:bg-primary-500 hover:text-gray-20 transition px-4 py-2 rounded-md'>Become a Member</button>
                </div>
            </div>
            <AnimatePresence mode='wait'>
            {
                    nav&&
                    <Dialog static as={motion.div} open={nav} onClose={() => setNav(!nav)} className='fixed w-full h-full inset-0 bg-slate-500/25 backdrop-blur-sm z-40'>
                        <Dialog.Panel>
                            <motion.div initial={{x:100}} animate={{x:0}} exit={{x:'100%'}} className='fixed top-0 px-4 py-6 right-0 w-50 bg-primary-100 h-screen'>
                                <div onClick={()=>setNav(!nav)} className='p-2 absolute right-12 bg-yellow-400 rounded-full cursor-pointer'><XMarkIcon className='w-6'/></div>
                                <div className='flex flex-col items-start justify-start me-auto gap-10 font-bold mx-8 my-4 py-4'>
                                    <Link page='home' selectedPage={selectedPage} setSelectedPage={setSelectedPage} setNav={setNav}/>
                                    <Link page='benefits' selectedPage={selectedPage} setSelectedPage={setSelectedPage} setNav={setNav}/>
                                    <Link page='our classes' selectedPage={selectedPage} setSelectedPage={setSelectedPage} setNav={setNav}/>
                                    <Link page='contact us' selectedPage={selectedPage} setSelectedPage={setSelectedPage} setNav={setNav}/>
                                    </div>
                                    <div className='flex flex-col justify-start items-start mx-8 gap-4 font-bold'>
                                    <button className='hover:text-primary-500 transition px-4 py-2 rounded-md'>Sign In</button>
                                    <ActionButton setSelectedPage={setSelectedPage} setNav={setNav} href='contact us'>Become a Member</ActionButton>
                                </div>
                            </motion.div>
                        </Dialog.Panel>
                    </Dialog>

                }
                </AnimatePresence>
        </div>
    </nav>
    )
}

export default Index