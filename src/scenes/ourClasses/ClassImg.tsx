import { Class } from '@/shared/types'

type Props = {
    classData: Class
}

const ClassImg = ({classData}: Props) => {
  return (
    <div className='mx-3 w-[375px] h-full my-auto relative'>
        <img className='w-full h-full object-cover' src={classData.img} alt=""/>
        <div className='absolute opacity-0 transition duration-300 hover:opacity-100 inset-0 bg-primary-500/50 backdrop-blur-sm text-slate-50 flex flex-col items-center justify-center gap-4'>
            <h4 className='text-2xl font-bold'>{classData.classType}</h4>
            <p className='text-center'>{classData.description}</p>
        </div>
    </div>
  )
}

export default ClassImg