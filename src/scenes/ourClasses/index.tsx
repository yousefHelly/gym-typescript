import { Class, SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion';
import { container } from '../animations/container';
import { header } from '../animations/header';
import HText from '@/shared/HText';
import ClassImg from './ClassImg';
import img1 from '@/assets/image1.png'
import img2 from '@/assets/image2.png'
import img3 from '@/assets/image3.png'
import img4 from '@/assets/image4.png'
import img5 from '@/assets/image5.png'
import img6 from '@/assets/image6.png'

type Props = {
    setSelectedPage: (value: SelectedPage)=>void
}

const OurClasses = ({setSelectedPage}: Props) => {
  const classes: Class[] = [
    {
      img: img1,
      classType: 'Weight training classes',
      description:'We provide world class fitness equipments, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.'
    },
    {
      img: img2,
      classType: 'Weight training classes',
      description:'We provide world class fitness equipments, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.'
    },
    {
      img: img3,
      classType: 'Weight training classes',
      description:'We provide world class fitness equipments, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.'
    },
    {
      img: img4,
      classType: 'Weight training classes',
      description:'We provide world class fitness equipments, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.'
    },
    {
      img: img5,
      classType: 'Weight training classes',
      description:'We provide world class fitness equipments, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.'
    },
    {
      img: img6,
      classType: 'Weight training classes',
      description:'We provide world class fitness equipments, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.'
    },
  ]
  return (
    <motion.div
    onViewportEnter={()=>setSelectedPage(SelectedPage.OurClasses)}
    id='our-classes'
    className='min-h-full py-20 overflow-hidden bg-primary-100'
    initial='hidden'
    whileInView='visible'
    viewport={{once:true, amount:0.5}}
    variants={container}
    >
    <div className='w-5/6 mx-auto'>
      {/*Header Section*/}
        <motion.div
        className='my-10 md:w-3/5'
        variants={header}
        initial='hidden'
        whileInView='visible'
        viewport={{once:true, amount:0.5}}
        >
          <HText>Our Classes</HText>
          <p className='py-5 text-sm'>We provide world class fitness equipments, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.</p>
        </motion.div>
      </div>
      <div className='h-80 overflow-x-auto'>
        {/*Gallery Section*/}
          <div className='flex items-center flex-row flex-nowrap min-w-max h-full'>
            {
              classes.map((classData: Class, i: number): JSX.Element=>{
                return(
                  <ClassImg key={i} classData={classData}/>
                )
              })
            }
          </div>
        </div>
    </motion.div>
  )
}

export default OurClasses