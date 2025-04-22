// components/AboutMe.tsx

import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <div className="bg-[rgba(255,245,225,0.7)] rounded-3xl shadow-xl overflow-hidden text-[#004777] p-6 md:p-10 backdrop-blur-lg border border-[rgba(255,255,255,0.3)]">
      <h2 className="text-3xl font-semibold mb-4 animated-gradient-text">About Me</h2>
      <p className="mb-4">
        I'm a third year CS student at Wilfrid Laurier University studying Computer Science  
        and planning to do a concentration in Artificial Intelligence. Some of my favourite 
        courses were/are Software Engineering Principles, Databases, E-commerce, and Machine Learning. 
      </p>
      
      <h3 className="text-2xl font-semibold mb-4 animated-gradient-text">My Passion</h3>
      <p className="mb-4">
        I'm in Computer Science because I have a strong desire to improve the world through technology. 
        Since I was a child, I loved everything about technology, building a competition ready robot in 
        grade 6 for the robotics club was what set things in motion. Today, I think what sets me apart is 
        my well-roundedness. I'm not just diverse in my technical skill sets, but I am constantly engaged with the business side. 
        I'm confident that I can succeed at any job due to my ability to ask the right questions and learn 
        quickly.
      </p>
      
      <h3 className="text-2xl font-semibold mb-4 animated-gradient-text">In my free time</h3>
      <p className="mb-4">
        Beyond my technical pursuits, I love cooking. As an avid gym goer I like to meal prep 
        for the week and am always experimenting with new recipes and adding in my own 
        creativity to the meal. I also love to read and listen to podcasts. I'll occasionally
        binge a good novel but mostly I will read books about history, self-development, and 
        tech. Some of my favourite books are Atomic Habits, The Life and Legend of The 
        Sultan Saladin, and Percy Jackson (The Sea of Monsters). 
      </p>

    </div>
  );
};

export default AboutMe;
