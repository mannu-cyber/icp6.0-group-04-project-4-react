import { MY_PROJECTS } from './config';
import './Story.css';

function Story() {
    return (
        <div>
            <div className='container'>
            <div className='img-box ' >{
                MY_PROJECTS.map((project, index) => {
                    const { id, img } = project;
                    return (<div className='img-con '>
                    <img id='storyimg' src={img} className='main-img '/>
                </div>);
                })
            }
            </div>
            </div>
        </div>
    );
}
export default Story