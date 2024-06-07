import {PROJECTS} from '../constants/index';
import ProjectSlider from './ProjectSlider';

const Project = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h1 className='my-20 text-center text-4xl'>Projects</h1>
        <div>
            <ProjectSlider projects = {PROJECTS}/>
        </div>
    </div>
  )
}
export default Project