import React from 'react';
import './AboutPage.css';


// simply <p> tags to display info that will be used for presenting
function AboutPage() {
  return (
    <div className="container">
      <div className="aboutPageInfo">
        <h1>Technologies Used</h1>
        <br />
        <p>Javascript</p>
        <p>React</p>
        <p>Redux</p>
        <p>Accuweather API</p>
        <p>SQL</p>
        <p>Nodejs</p>
        <br />
        <h1>Thanks</h1>
        <p>Prime Digital Academy</p>
        <p>Adams Cohort</p>
      </div>
    </div>
  );
}

export default AboutPage;
