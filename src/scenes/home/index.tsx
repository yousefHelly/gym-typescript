import textImg from '@/assets/HomePageText.png'
import graphic from '@/assets/HomePageGraphic.png'
import ActionButton from '../navbar/ActionButton'
import { SelectedPage } from '@/shared/types'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion';
import { header, headerContainer } from '../animations/header'
type Props = {
    setSelectedPage:(val:SelectedPage)=>void
}

const Home = ({setSelectedPage}: Props) => {
return (
    <motion.section 
    id='home' 
    onViewportEnter={()=>setSelectedPage(SelectedPage.Home)} 
    className='w-5/6 mx-auto md:mx-24 mt-16 md:my-4 h-screen pt-8 grid md:grid-cols-2 items-center justify-center md:justify-between relative z-0'
    >
        <motion.div 
        className='col-span-1 py-2'
        initial='hidden'
        whileInView='visible'
        viewport={{once:true, amount:0.5}}
        variants={headerContainer}
        >
            <img className='h-28 object-contain' src={textImg} alt="" />
            <p className='font-bold py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ducimus optio ex natus corrupti vel</p>
            <motion.div
            className='flex flex-col py-8 xs:py-0 xs:flex-row items-center gap-6 xs:gap-3'
            initial='hidden'
            whileInView='visible'
            viewport={{once:true, amount:0.5}}
            variants={header}
            >
                <ActionButton setSelectedPage={setSelectedPage} href='contact us' customStyles='px-8'>Join Now</ActionButton>
                <AnchorLink href='#our-classes' className='underline text-primary-500 px-8 hover:text-primary-300'>Learn More</AnchorLink>
            </motion.div>
        </motion.div>
        <div className='absolute -z-10 inset-0 before:absolute before:top-36 before:-z-10 before:-left-12 md:before:content-evolvetext '>
        </div>
        <div className='col-span-1 flex justify-center md:justify-end items-center'>
            <img className='h-96 object-contain' src={graphic} alt="" />
        </div>
    </motion.section>
)
}

export default Home