import { RiReactjsLine } from "react-icons/ri"
import { FaPython , FaJava , FaHtml5 , FaCss3 , FaJsSquare , FaNodeJs} from "react-icons/fa"
import { SiArduino , SiCplusplus , SiMongodb , SiMysql} from "react-icons/si"
import { animate, motion, reverseEasing } from "framer-motion"
const iconVariants =(duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse",
        },
    },
})
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}} 
        className="my-20 text-center text-4xl ">Technologies</motion.h1>
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}} 
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
            variants={iconVariants(2)}
            initial = "initial"
            animate = "animate"
            className="rounded-2xl border-4 bg-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div
            variants={iconVariants(3)}
            initial = "initial"
            animate = "animate"
            className="rounded-2xl border-4 bg-neutral-800 p-4">
                <FaPython className="text-7xl text-yellow-400"/>
            </motion.div>
            <motion.div
            variants={iconVariants(5)}
            initial = "initial"
            animate = "animate"
            className="rounded-2xl border-4 bg-neutral-800 p-4">
                <FaJava className="text-7xl text-cyan-800"/>
            </motion.div>
            <motion.div
            variants={iconVariants(2)}
            initial = "initial"
            animate = "animate"
            className="rounded-2xl border-4 bg-neutral-800 p-4">
                <SiArduino className="text-7xl text-cyan-800"/>
            </motion.div>
            <motion.div
            variants={iconVariants(3)}
            initial = "initial"
            animate = "animate"
            className="rounded-2xl border-4 bg-neutral-800 p-4">
                <FaHtml5 className="text-7xl text-orange-500"/>
            </motion.div>
            <motion.div
            variants={iconVariants(5)}
            initial = "initial"
            animate = "animate"
            className="rounded-2xl border-4 bg-neutral-800 p-4">
                <FaCss3 className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div
            variants={iconVariants(2)}
            initial = "initial"
            animate = "animate"
            className="rounded-2xl border-4 bg-neutral-800 p-4">
                <FaJsSquare className="text-7xl text-yellow-400"/>
            </motion.div>
            <motion.div
            variants={iconVariants(3)}
            initial = "initial"
            animate = "animate"
            className="rounded-2xl border-4 bg-neutral-800 p-4">
                <SiCplusplus className="text-7xl text-blue-400"/>
            </motion.div>
            <motion.div
            variants={iconVariants(5)}
            initial = "initial"
            animate = "animate"
            className="rounded-2xl border-4 bg-neutral-800 p-4">
                <SiMongodb className="text-7xl text-green-500"/>
            </motion.div>
            <motion.div
            variants={iconVariants(2)}
            initial = "initial"
            animate = "animate"
            className="rounded-2xl border-4 bg-neutral-800 p-4">
                <SiMysql className="text-7xl text-cyan-300"/>
            </motion.div>
            <motion.div
            variants={iconVariants(3)}
            initial = "initial"
            animate = "animate"
            className="rounded-2xl border-4 bg-neutral-800 p-4">
                <FaNodeJs className="text-7xl text-green-600"/>
            </motion.div>
        </motion.div>
    </div>
  )
}
export default Technologies