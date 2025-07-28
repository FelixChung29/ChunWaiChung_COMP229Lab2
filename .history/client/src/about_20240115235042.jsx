import BBG from '../src/assets/BBG.jpeg';
import hire from '../src/assets/hire.jpg';
import { Link } from 'react-router-dom';
import '../src/index.css'
export default function About() {
     return <>
     
     <section id="skill">
          <div className="introContent">
          <span className="skillTitle">What I do</span><br/>
          <span className="skillDesc">I am <span className="introName">Blessing Ajiboye</span> 
          <img src={BBG} alt="profile" className="bbg" width="750" height="750" align="right" />
          <br/>Website Designer</span>
          <p className="introPara">I am a skilled web designer with experience in creating visually appealing user friendly websites.</p>
          <Link><button className="btn"><img src={hire} alt="Hire me" /></button></Link>
          
          </div>
          
     </section>
    

     </>
    }
    