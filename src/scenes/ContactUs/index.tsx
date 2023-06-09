import { motion } from 'framer-motion';
import { container } from '../animations/container';
import { header, headerReversed } from '../animations/header';
import HText from '@/shared/HText';
import { SelectedPage } from '@/shared/types';
import contactUsImage from '@/assets/ContactUsPageGraphic.png'
import TextImage from '@/assets/EvolveText.png'
import Form from './Form';

type Props = {
    setSelectedPage: (page: SelectedPage)=>void
}
const ContactUs = ({setSelectedPage}: Props) => {
  return (
    <motion.section
    onViewportEnter={()=>setSelectedPage(SelectedPage.ContactUs)} 
    id='contact-us'
    className='mx-auto w-5/6 min-h-full py-20 overflow-hidden'
    initial='hidden'
    whileInView='visible'
    viewport={{once:true, amount:0.5}}
    variants={container}
    >
        {/*Header Section*/}
        <motion.div
        className='my-10 md:w-3/5'
        variants={header}
        initial='hidden'
        whileInView='visible'
        viewport={{once:true, amount:0.5}}
        >
            <HText><span className='text-primary-500'>Join Now</span> to get in shape</HText>
            <p className='py-5 text-sm'>We provide world class fitness equipments, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.</p>
        </motion.div>
        <div className='grid md:grid-cols-2 gap-5 justify-center md:gap-0 md:justify-normal'>
        {/*Form Section*/}
        <motion.div
        variants={header}
        initial='hidden'
        whileInView='visible'
        viewport={{once:true, amount:0.5}}
        className='col-span-1'
        >
            <Form/>
        </motion.div>
        {/*Image Section*/}
        <motion.div
        variants={headerReversed}
        initial='hidden'
        whileInView='visible'
        viewport={{once:true, amount:0.5}}
        className='col-span-1 flex justify-end relative'
        >
            <img className='z-10' src={contactUsImage}/>
            <img className='hidden md:block absolute -bottom-20 bg-black/15 z-0 mix-blend-multiply' src={TextImage}/>
        </motion.div>
        </div>
    </motion.section>
  )
}

export default ContactUs