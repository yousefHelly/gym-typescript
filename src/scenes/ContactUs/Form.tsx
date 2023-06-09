import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik';
import * as Yup from 'yup'
const Form = () => {
  return (
    <Formik
    validationSchema={
        Yup.object({
            name: Yup.string().required().min(2, 'name must be at least 2 characters'),
            email: Yup.string().required().email('Wrong Email'),
            message:Yup.string().required().min(15, 'message must be at least 15 characters')
        })
    }
    initialValues={{
        name:'',
        email:'',
        message:''
    }}
    onSubmit={
        (values)=>{
            console.log(values);
        }
    }
    >
        <FormikForm
        action='https://formsubmit.io/send/yousef.helly@gmail.com'
        method='POST'
        className='flex flex-col gap-5'
        >
            <Field className="bg-primary-300 text-slate-50 placeholder:text-slate-50 placeholder:uppercase px-3 py-2 rounded-md focus-within:outline-none" id='name' name='name' placeholder='name'/>
            <ErrorMessage component='p' className='text-red-900 -mt-3 capitalize font-montserrat font-bold text-sm' name='name'/>
            <Field className="bg-primary-300 text-slate-50 placeholder:text-slate-50 placeholder:uppercase px-3 py-2 rounded-md focus-within:outline-none" id='email' name='email' placeholder='email'/>
            <ErrorMessage component='p' className='text-red-900 -mt-3 capitalize font-montserrat font-bold text-sm' name='email'/>
            <Field as='textarea'  className="bg-primary-300 text-slate-50 placeholder:text-slate-50 placeholder:uppercase px-3 py-2 rounded-md min-h-[150px] resize-none focus-within:outline-none" id='message' name='message' placeholder='message'/>
            <ErrorMessage component='p' className='text-red-900 -mt-3 capitalize font-montserrat font-bold text-sm' name='message'/>
            <button className='bg-yellow-500 font-bold md:self-start px-20 py-2 rounded-md' type="submit">Submit</button>
        </FormikForm>
    </Formik>
  )
}

export default Form