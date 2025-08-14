import React from 'react';
import './About.css';
import Footer from './Footer';

const About = () => {
  return (
    <div className='about'>

      <div className='paragraphs'>

        <p>
          Hi, I’m <b>Sanskar Gupta</b> — passionate about helping people achieve
          <b> better health, personal growth, and financial freedom</b>.
          I believe everyone deserves the chance to live a life full of
          energy, purpose, and independence.
        </p>

        <p>
          Through my work, I share <b>simple yet powerful strategies </b>
          for improving wellness, building confidence, and creating additional
          income streams. This is not just about products or business —
          it’s about creating a lifestyle that gives you more
          <b> time, choices, and freedom</b>.
        </p>

        <p>
          I connect with people from all walks of life to explore
          opportunities that align with their <b>goals, values, and vision</b>.
          Together, we work on creating realistic, actionable steps toward
          long-term success.
        </p>

        <p>
          On this platform, you’ll find resources, ideas, and inspiration
          designed to help you:
        </p>

        <ul>
          <li>Improve daily health and energy naturally</li>
          <li>Develop skills for personal and professional growth</li>
          <li>Explore income opportunities for a more secure future</li>
        </ul>

        <p>
          If you’re ready to make a change, let’s connect and explore
          how we can build your success story together.
        </p>

        <div className="cta">
          <a href="/register" className="cta-btn">Let’s Connect</a>
        </div>

      </div>

    </div>
  );
};

export default About;
