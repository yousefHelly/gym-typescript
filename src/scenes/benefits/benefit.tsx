import { benefitType } from '@/shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';
import { benefits } from '../animations/benefits';

type Props = {
    benefitObject:  benefitType;
}

const Benefit = ({benefitObject}: Props) => {
  return (
    <motion.div
    className='col-span-1 border rounded shadow-sm flex flex-col items-center justify-center gap-3 p-6'
    variants={benefits}
    >
        {benefitObject.icon} 
        <h2 className='font-bold capitalize font-montserrat text-sm'>{benefitObject.heading}</h2>
        <p className='text-sm text-center'>
            {benefitObject.description}
        </p>
        <AnchorLink className='underline text-sm text-primary-300 hover:text-primary-500 cursor-pointer'>Learn More</AnchorLink>
    </motion.div>
  )
}

export default Benefit