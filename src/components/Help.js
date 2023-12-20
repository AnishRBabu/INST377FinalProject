import React from "react";
import "./Help.css"; // Ensure you create and link this CSS file

function Help() {
  return (
    <div className="help-page">
      <h1>Help Page</h1>
      <div className="card">
        <h2>How to use:</h2>
        <ol>
          <li> Visit the homepage and explore job categories</li>
          <li> Use the "show filters" button to access our search bar to find specific jobs and categories</li>
          <li> Take the job quiz to discover personalized job recomendations</li>
        </ol>
      </div>
      <div className="card">
        <h2>FAQs:</h2>
        <h3> Q: How can I search for jobs?</h3>
        <p>A: You can use the "show filters" button on the homepage to search for jobs based on keywords, locations, or category.</p>
        <h3> Q: What is the best way to contact you guys? </h3>
        <p>A: You can head over to our "Help" page where you can see our contact information.</p>
        <h3>Q: What if I am struggling to find a job?</h3>
        <p> No worries! Jobs are refreshed everyday! Also, make sure you take our job quiz to ensure you find the perfect fit for you.</p>
      </div>
      <div className="card">
        <h2>Contact Us:</h2>
        <p>If you have any questions or need any assistance, feel free to reach out to our support team.</p>
        <ul> 
            <li> Email: GlobalCareerHub@gmail.com </li>
            <li> Phone: +123-456-7890 </li>
        </ul>
      </div>
    </div>
  );
}

export default Help;
