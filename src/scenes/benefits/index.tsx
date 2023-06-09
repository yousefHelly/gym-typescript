import { SelectedPage, benefitType } from '@/shared/types';
import { AcademicCapIcon, HomeModernIcon, UserGroupIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import HText from '@/shared/HText';
import Benefit from './benefit';
import { header, headerContainer, headerReversed } from '../animations/header';
import { container } from '../animations/container';
import ActionButton from '../navbar/ActionButton';
import graphicsImage from '@/assets/BenefitsPageGraphic.png'
type Props = {
    setSelectedPage: (val: SelectedPage) => void
}

const benefitsArray: Array<benefitType> = [
    {
        icon:<HomeModernIcon className='w-12 bg-primary-100 rounded-full p-3 border'/>,
        heading:'State of the art facilities',
        description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis animi rerum modi qui esse vero.'
    },
    {
        icon:<UserGroupIcon className='w-12 bg-primary-100 rounded-full p-3 border'/>,
        heading:'100% of diverse classes',
        description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis animi rerum modi qui esse vero.'
    },
    {
        icon:<AcademicCapIcon className='w-12 bg-primary-100 rounded-full p-3 border'/>,
        heading:'Expert and pro trainers',
        description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis animi rerum modi qui esse vero.'
    },
]

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <motion.section
    onViewportEnter={()=>setSelectedPage(SelectedPage.Benefits)} 
    id='benefits'
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
            <HText>MORE THAN JUST A GYM.</HText>
            <p className='py-5 text-sm'>We provide world class fitness equipments, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.</p>
        </motion.div>
        {/*Benefits Section*/}
        <motion.div
        className='grid grid-cols-1 gap-5 md:grid-cols-3'
        initial='hidden'
        whileInView='visible'
        viewport={{once:true, amount:0.5}}
        variants={headerContainer}
        >
            {
                benefitsArray.map((benefitObject: benefitType, i: number) : JSX.Element =>{
                    return(
                        <Benefit key={i} benefitObject={benefitObject}/>
                    )
                })
            }
        </motion.div>
        {/*Graphics Section*/}
        <motion.div
        className='mt-12 md:flex items-center justify-between gap-20'
        variants={container}
        initial='hidden'
        whileInView='visible'
        viewport={{once:true, amount:0.5}}
        >
            {/*Img*/}
            <motion.div 
            className='basis-1/2'
            variants={header}
            >
                <img className='mx-auto' src={graphicsImage} alt="graphics image" />
            </motion.div>
            {/*Description*/}
            <motion.div 
            className='relative basis-1/2'
            variants={headerReversed}
            >
                <div className='before:absolute before:content-abstractwaves before:z-[-1] before:-top-14 before:-left-12'>
                    {/*title*/}
                    <HText>Millions of happy members getting <span className='text-primary-300'>fit</span></HText>
                    {/*description*/}
                    <p className='py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quas quam nisi recusandae quasi facere suscipit ducimus, magni tenetur porro ullam. Corrupti porro officia, corporis saepe minima non cumque ab.</p>
                    <p className='pb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quas quam nisi recusandae quasi facere suscipit ducimusb.</p>
                </div>
                    {/*Button*/}
                <div className='relative pt-2 mb-5'>
                    <div className='before:absolute before:content-sparkles before:right-0 md:before:right-20 before:-bottom-28'>
                        <ActionButton href='contact-us' setSelectedPage={setSelectedPage}>Join us</ActionButton>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    </motion.section>
  )
}

export default Benefits