import logo from '../assets/kunalChauhanLogo.jpg'
import hackerrank from '../assets/hackerrank.png'
import leetcode from '../assets/leetcode.png'
import codingNinjas from '../assets/CodingNinjas.jpeg'

import { FaLinkedin , FaGithub , FaTwitter , FaInstagram} from 'react-icons/fa'
const NavBar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img src={logo} alt="Logo" className='w-24 rounded-full'/>
        </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                <FaLinkedin/>
                <FaGithub/>
                <FaTwitter/>
                <FaInstagram/>
                <img src={leetcode} alt="leetcode" className='w-6' />
                <img src={hackerrank} alt="hackkerank" className='w-6'/>
                <img src={codingNinjas} alt="leetcode" className='w-6 rounded-full' />
            </div>
    </nav>
  )
}
export default NavBar