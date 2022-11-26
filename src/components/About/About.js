import './About.css';
import yogaPose from '../../images/yoga-pose.png'

function About() {
    return (
      <div id="about">
        <header id="about-header">
        </header>
        <div id="about-div">
            {/* <h1>The condition of your body is the reflection of your life</h1> */}
            <h1>What would your supreme self do?</h1>
            <div id="intro">
                <div id="intro-content">
                    <h1>Hi, I'm Manami</h1>
                    <p>I started practicing yoga in 2018 with a simple reason of wanting a hobby and to become good at something. I still remember my first yoga class, my upper body was so weak, I couldn't even bend my arms to go down in chaturanga nor touch my toes in a forward bend! Throughout the years, I've practiced under many indredible instructors and practiced various forms of yoga. Fast forward, I had the opportunity to complete my 200hr Yoga Teacher Training at Dharma Yoga Center in New York City under Sri Dharma Mittra in 2022.   </p>
                    <br></br>
                    <p>Through yoga, I've learned so much about myself - whatever you are going through in life, it will show up in yoga. Your good days, your bad days, your worries, your happiness, your present, your future. Do you ever ask yourself, "why is this happening to me?" "why do I feel this way?" - with deep consistant practice, the answers will always show up in yoga. Yoga helps me advance my knowldege of myself and self discovery. I am forever a constant work in progress and I am so happy to be. Let's connect and practice together! </p>
                </div>
                <img src={yogaPose} id="intro-img" alt="image"></img>
            </div>

            <h3>My Stlye</h3> 

            <p>I currently teach a Dharma style flow - a mix of what I leanred in my teacher training as well as incorporating other postures I've learned in my own practices. Dharma style yoga is yoga through the lens of Yogi Sri Dharma Mittra’s experience with his guru and his half-century of practice and teaching. There are also Hatha and Ashtanga yoga components mixed in which follows the eight limbs of yoga. This could mean that poses are held on longer, pranayama breathing exersise before practicing the asanas, headstands, arm balances, meditation at the end, etc. </p>
            <h3>My Current Practice</h3>
            <p>Master Class with Sri Dharma Mittra at Dharma Yoga (90 min)</p>
            <p>Traditional Hot Yoga at Hot Yoga Chelsea (60 min & 90 min)</p>
            
        </div>
      </div>
    );
}
  
export default About;