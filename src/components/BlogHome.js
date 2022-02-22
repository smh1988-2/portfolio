import React from "react";
import BlogImage1 from "./blog-image-1.png";
import BlogImage2 from "./sample-flow.png"

function BlogHome() {
  return (
    <div style={{ backgroundColor: "#565554" }}>
      <div className="blog-container">
        <div></div>
        <div className="project-center">
          <h3>
            Oh, So That’s How It Works: What I Learned About Marketing
            Automation After 2 Weeks in a Coding Bootcamp
          </h3>
          <p>
            I worked in marketing automation for the last ten years. After
            hitting a wall in my marketing career and the pandemic bringing some
            things into perspective, I decided to leaving marketing and try my
            hand at being a software engineer.
          </p>
          <p>
            I was already “coding” emails and landing pages with HTML and CSS,
            using logic to define automated user flows, and working with product
            managers to define new user stories. Those were my favorite parts of
            my job. I no longer cared about advertising, brand exercises or
            three-letter acronyms (ROI, CPA, LTV, CPC… I could go on).
          </p>
          <p>
            After a week at Flatiron School, I realized that I’d been using some
            of the basic concepts of coding but I didn’t know it. So, this is my
            attempt to refactor a simple user flow into (non-working)
            JavaScript.
          </p>
          <p>
            A user flow is a set of steps that a user goes through, based on set
            conditions. They can be as simple as sending certain customers 3
            emails one week apart, or incredibly complex with dozens of
            conditions, actions, and paths.
          </p>
          <p>Here is a simple flow:</p>
          <img src={BlogImage2} alt="code" width="50%" />
          <p>
            It selects all the customers in California and sends them Email #1.
            Then it waits a certain amount of time and sends them Email #2 or
            stops. First, let’s find all of users in California. We can use a
            .filter() method on our array of users.
          </p>
          <p>
            Next we need some functions that send our emails. It’ll take two
            arguments, the audience and the email.
          </p>
          <img src={BlogImage1} alt="code" />
          <p>
            Obviously this code won’t work. But the lessons I’ve learned
            from creating hundreds of these automations in Pardot and Hubspot
            has unknowingly helped me as I begin my journey into software
            engineering:
          </p>
          <ul>
            <li>Breaking complex ideas into smaller chunks</li>
            <li>Figuring out scope</li>
            <li>Using conditionals to trigger actions</li>
            <li>Knowing how data moves through my code</li>
          </ul>

          <p>
            You probably don’t come from a marketing automation background, but
            you’ve had your own experiences that translate into the world of
            software engineering, you just need to find them and use them.
          </p>
          <p>
            So, what have I really learned about marketing automation after 2
            weeks of coding bootcamp? There’s a reason marketing automation
            platforms cost thousands of dollars a month — software is hard!
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogHome;
