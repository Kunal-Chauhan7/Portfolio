import { RiReactjsLine } from "react-icons/ri"
import { FaPython , FaJava , FaHtml5 , FaCss3 , FaJsSquare , FaNodeJs} from "react-icons/fa"
import { SiArduino , SiCplusplus , SiMongodb , SiMysql} from "react-icons/si"
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h1 className="my-20 text-center text-4xl ">Technologies</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 bg-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </div>
            <div className="rounded-2xl border-4 bg-neutral-800 p-4">
                <FaPython className="text-7xl text-yellow-400"/>
            </div>
            <div className="rounded-2xl border-4 bg-neutral-800 p-4">
                <FaJava className="text-7xl text-cyan-800"/>
            </div>
            <div className="rounded-2xl border-4 bg-neutral-800 p-4">
                <SiArduino className="text-7xl text-cyan-800"/>
            </div>
            <div className="rounded-2xl border-4 bg-neutral-800 p-4">
                <FaHtml5 className="text-7xl text-orange-500"/>
            </div>
            <div className="rounded-2xl border-4 bg-neutral-800 p-4">
                <FaCss3 className="text-7xl text-cyan-400"/>
            </div>
            <div className="rounded-2xl border-4 bg-neutral-800 p-4">
                <FaJsSquare className="text-7xl text-yellow-400"/>
            </div>
            <div className="rounded-2xl border-4 bg-neutral-800 p-4">
                <SiCplusplus className="text-7xl text-blue-400"/>
            </div>
            <div className="rounded-2xl border-4 bg-neutral-800 p-4">
                <SiMongodb className="text-7xl text-green-500"/>
            </div>
            <div className="rounded-2xl border-4 bg-neutral-800 p-4">
                <SiMysql className="text-7xl text-cyan-300"/>
            </div>
            <div className="rounded-2xl border-4 bg-neutral-800 p-4">
                <FaNodeJs className="text-7xl text-green-600"/>
            </div>
        </div>
    </div>
  )
}
export default Technologies