import '../assets/styles/About.css'
import img7 from '../assets/images/img7-bg.png'


function About() {
  return (
    <>
    <section id="about">
      <div className="about-left">
        <h2 className="about-left-h2">
           About TaskHub
        </h2>
        <p className="about-left-p">
           TaskHub was built with a simple mission: to help individuals and teams organize their tasks and achieve more together. We believe that productivity comes from clarity and the right tools.
        </p>
        <button className="about-button">
           Learn More
        </button>
      </div>
      <div className="about-right">
         <img src={img7} alt="" className='about-right-img'/>
      </div>
    </section>
    
    </>
  )
}

export default About