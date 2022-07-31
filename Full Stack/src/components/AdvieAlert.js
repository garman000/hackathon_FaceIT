import React from "react";
import { Button } from "react-bootstrap";
import "./AdviceAlert.css";
function AdvieAlert() {
  const sentences = [
    "“CREATE WHAT WORKS FOR YOU”",
    "“HAVE SOME FUN IN CREATING HABITS",
    "“TRY HAVE ATLEAST 7 HOURS OF QUALITY SLEEP EACH NIGHT”",
    "“DO SOMETHING PHYSICALLY ACTIVE EVERY DAY”",
    "“MAINTAIN A SUSTAINABLE HEALTHY DIET”",
    "“COUNT YOUR STEPS, GRADUALLY IMPROVE DISTANCE”",
    "“LIMIT YOUR ALCOHOL INTAKE”",
  ];
  function renderSentence() {
    const sentence = sentences[Math.floor(Math.random() * sentences.length)];
    return sentence;
  }
  return (
    // <div  className='advice'>
    //     {/* <p>Daily advice: {renderSentence()}</p> */}
    //     <p>Are you ready to start your health journey:<br/>
    //         - Tracking over time<br/>
    //         - Monthly report<br/>
    //         - See how each individual habit affects you<br/>
    //         - habit building</p>
    //         <button>Sign Up Now!</button>
    // </div>
    <div className="main-container">
      <div className="heading">
        <h1 className="heading__title">Daily advice</h1>
        <p className="heading__credits">
          <a
            className="heading__link"
            target="_blank"
            href="https://dribbble.com/sl"
          >
            {renderSentence()}
          </a>
        </p>
      </div>
      <div className="cards">
        <div className="card card-1">
          <h1 style={{fontSize: "1.2rem", fontWeight: "bold", color: "var(--lightGray)"}}>Are you ready to start your health journey?</h1>
          <div className="testDF">
          <div className="givenAdvice">
            <h2>◉ Personalised Tracking</h2>
            <h2>◉ Monthly report with recalculated photo!</h2>
            <h2>◉ Track current trends</h2>
            <h2>◉ Habit building</h2>
          </div>
          <button className="adviceBtn"> Sign up now!</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvieAlert;
{
  /* <div class="card__icon"><i class="fas fa-bolt"></i></div>
<p class="card__exit"><i class="fas fa-times"></i></p>
<h2 class="card__title">Are you ready to start your health journey:<br />
    - Tracking over time<br />
    - Monthly report<br />
    - See how each individual habit affects you<br />
    - habit building</h2>
<p class="card__apply">
    <a class="card__link" href="#">Sign up now! <i class="fas fa-arrow-right"></i></a>
</p> */
}
