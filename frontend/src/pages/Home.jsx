import '../assets/styles/Home.css'
import img9 from '../assets/images/img9-bg.png'


function Home() {
  return (
    <>
    <section id="home">
      <div className="home-left">
         <h2 className="home-h2">Organize Your Tasks</h2>
         <h2 className="home-h2-2">Achieve Your Goals</h2>
         <p className="home-p">TaskHub is a powerful and intuitive task management platform that helps you stay productive and focused every day.</p>
         <div className="home-btns">
          <button className="home-btn1">Get Started</button>
          <button className="home-btn2">Learn More</button>
         </div>
      </div>
      <div className="home-right">
        <img src={img9} alt="" className='home-img'/>
      </div>
    </section>
    </>
  )
}

export default Home