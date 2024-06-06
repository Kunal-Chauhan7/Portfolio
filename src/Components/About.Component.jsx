import AboutMe from '../assets/Kunal Chauhan About.jpg';
import {ABOUT_TEXT} from '../constants/index';
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className='my-20 text-center text-4xl'>
            About
            <span className='text-neutral-500'> Me</span>
        </h1>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center'>
                    <img src={AboutMe} alt="About Me Pic" className='h-[30rem] w-[25rem] rounded-3xl'/>
                </div>
            </div>
            <div className='w-full lg:w-1/2'>
                    <div className='flex justify-center lg:justify-center'>
                        <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
                    </div>
                </div>
        </div>
    </div>
  );
}
export default About