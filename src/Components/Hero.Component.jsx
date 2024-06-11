import { HERO_CONTENT } from '../constants/index';
import picture from '../assets/Kunal Chauhan Profile.jpg';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { delay, motion } from 'framer-motion';

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    },
});


const Hero = () => {
    const [text] = useTypewriter({
        words: ['Web Developer','IoT Engineer','AI/ML Engineer','Python Developer','Java Developer','Researcher'],
        loop: {},
        typeSpeed:230,
    });

    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Kunal Chauhan</motion.h1>
                        <motion.span
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                            {text}
                            <Cursor cursorStyle="|" cursorColor='aqua' />
                        </motion.span>
                        <motion.p
                        variants={container(1)}
                        initial="hidden"
                        animate="visible" 
                        className="my-2 max-w-xl py-6 font-light tracking-tighter">
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img src={picture}
                        initial={{x:100 , opacity:0}}
                        animate={{x:0,opacity:1}}
                        transition={{duration:1,delay:1.2}}
                        alt="profile picture" className='rounded-xl w-[32rem]'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
