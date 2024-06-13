import React from "react";
import "./App.css";

const skills = [
    {
        skill: "HTML+CSS",
        level: "advanced",
        color: "#2662EA"
    },
    {
        skill: "JavaScript",
        level: "advanced",
        color: "#EFD81D"
    },
    {
        skill: "Web Design",
        level: "advanced",
        color: "#C3DCAF"
    },
    {
        skill: "Git and GitHub",
        level: "intermediate",
        color: "#E84F33"
    },
    {
        skill: "React",
        level: "advanced",
        color: "#60DAFB"
    },
    {
        skill: "Svelte",
        level: "beginner",
        color: "#FF3B00"
    }
];

function App() {
    return (
        <div className="card">
            <Avatar />
            <div className="data">
                <Intro />
                <SkillList />
            </div>
        </div>
    )
}

function Avatar() {
    return (
        <div>
            <img className="avatar" src="/IMG_20240117_121418.jpg" alt="img" />
        </div>
    )
}

function Intro() {
    return (
        <div>
            <h1>Shubham Jha</h1>
            <p>Full stack web developer and youtuber. When not coding or preparing a course, I like to play board games, to cook (and eat), or to just enjoy the Indian enviroment</p>
        </div>
    )
}

function SkillList() {
    return (
        <div className="skill-list">
            {skills.map((skill) => (
                <Skill skill={skill.skill}
                    color={skill.color}
                    level={skill.level}
                    key={skill.skill}
                />
            ))}
        </div>
    )
}

function Skill({ skill, color, level }) {
    return (
        <div className="skill" style={{ backgroundColor:color }}>
            <span>{skill}</span>
            <span>
                {level ==='beginner' && "🥉"}
                {level ==='intermediate' && "🥈"}
                {level ==='advanced' && "🥇"}
            </span>
        </div>
    )
}
export default App