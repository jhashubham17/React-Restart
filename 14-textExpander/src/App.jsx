import React from "react";
import { useState } from "react";
import './App.css'

function App() {
  return (
    <div>
      <TextExpander
        className="box">
        Web development is the process of building and maintaining websites, web applications, and mobile applications using various programming languages, technologies, and tools. It involves creating a website's or application's layout, design, functionality, and user experience.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
        className="box"
      >
        A backend developer is a professional responsible for building the server-side logic, database integration, and API connectivity for a website or web application. They use programming languages like Java, Python, Ruby, PHP, and frameworks like Node.js, Django, Ruby on Rails, and Laravel to create a robust and scalable backend infrastructure.

      </TextExpander>

      <TextExpander expanded={true} className="box">
        A frontend developer is a professional responsible for building the user interface and user experience of a website or web application. They use programming languages like HTML, CSS, and JavaScript to create a visually appealing, interactive, and responsive interface that users can interact with directly.


      </TextExpander>
    </div>
  );
}

function TextExpander({
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "#1f09cd",
  expanded = false,
  className,
  children
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";

  const buttonStyle = {
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: "6px",
    color: buttonColor
  };

  return (
    <div className={className}>
      <span>{displayText}</span>
      <button onClick={() => setIsExpanded((exp) => !exp)} style={buttonStyle}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}


export default App