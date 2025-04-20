import React, { useEffect } from "react";

function Skills() {
  useEffect(() => {
    const progressCircles = document.querySelectorAll(".progress-circle");
    progressCircles.forEach((circle) => {
      const radius = circle.r.baseVal.value;
      const circumference = 2 * Math.PI * radius;
      const progressValue = circle.dataset.progress;

      circle.style.strokeDasharray = `${circumference} ${circumference}`;
      circle.style.strokeDashoffset = circumference;

      setTimeout(() => {
        const offset = circumference - (progressValue / 100) * circumference;
        circle.style.strokeDashoffset = offset;
      }, 200);
    });
  }, []);

  const skillData = [
    { name: "HTML", progress: 90 },
    { name: "Python", progress: 85 },
    { name: "React", progress: 80 },
    { name: "Node.js", progress: 85 },
    { name: "JavaScript", progress: 90 },
    { name: "C", progress: 80 },
  ];

  return (
    <div className="skills-page-container">
      <h2>Technical Skills</h2>
      <div className="skills">
        {skillData.map((skill, index) => (
          <div className="skill" key={index}>
            <p>{skill.name}</p>
            <svg className="circle" width="100" height="100">
              <defs>
                <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#007bff" />
                  <stop offset="100%" stopColor="#00c3ff" />
                </linearGradient>
              </defs>
              <circle className="bg-circle" cx="50" cy="50" r="45"></circle>
              <circle
                className="progress-circle"
                data-progress={skill.progress}
                cx="50"
                cy="50"
                r="45"
                style={{ stroke: `url(#gradient-${index})` }}
              ></circle>
              <text x="50" y="55" textAnchor="middle" fontSize="20px" fill="#333">
                {skill.progress}%
              </text>
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
