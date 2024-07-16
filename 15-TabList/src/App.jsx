import React, { useState } from "react";
import './App.css'

const content = [
  {
    summary: "Web development!",
    details:
      "Web development is the process of building and maintaining websites, web applications, and mobile applications using various programming languages, technologies, and tools. It involves creating a website's or application's layout, design, functionality, and user experience.",
  },
  {
    summary: "Frontend development! (client-side)",
    details:
      "Frontend development (client-side): Focuses on creating the user interface, user experience, and interactive elements using HTML, CSS, JavaScript, and frameworks like React, Angular, or Vue.",
  },
  {
    summary: "Backend development! (server-side)",
    details:
      "Backend development (server-side): Involves building the server-side logic, database integration, and API connectivity using languages like Python, Ruby, PHP, Java, and frameworks like Django, Ruby on Rails, or Laravel.",
  },
  {
    summary: "Full-stack development!",
    details:
      "Full-stack development: Combines both frontend and backend development skills to create a complete web application.",
  },
];

function App() {
  return (
    <div>
      <Tabbed content={content} />
    </div>
  )
}

function Tabbed({ content }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="tabs">
        <Tab num={0} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={1} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={2} activeTab={activeTab} onClick={setActiveTab} />

        <Tab num={3} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={4} activeTab={activeTab} onClick={setActiveTab} />
      </div>

      {activeTab <= 3 ? (
        <TabContent
          item={content.at(activeTab)}
          key={content.at(activeTab).summary}
        />
      ) : (
        <DifferentContent />
      )}
    </div>
  );
}

function Tab({ num, activeTab, onClick }) {
  return (
    <button
      className={activeTab === num ? "tab active" : "tab"}
      onClick={() => onClick(num)}
    >
      Tab {num + 1}
    </button>
  );
}

function TabContent({ item }) {

  const [showDetails, setShowDetails] = useState(true);
  const [likes, setLikes] = useState(0);

  function handleInc() {
    setLikes((likes) => likes + 1);
  }

  function handleTripleInc() {
    setLikes((likes) => likes + 1);
    setLikes((likes) => likes + 1);
    setLikes((likes) => likes + 1);
  }

  function handleUndo() {
    setShowDetails(true);
    setLikes(0);
    console.log(likes);
  }

  function handleUndoLater() {
    setTimeout(handleUndo, 2000);
  }

  return (
    <div className="tab-content">
      <h4>{item.summary}</h4>
      {showDetails && <p>{item.details}</p>}

      <div className="tab-actions">
        <button onClick={() => setShowDetails((h) => !h)}>
          {showDetails ? "Hide" : "Show"} details
        </button>

        <div className="hearts-counter">
          <span>{likes}💖</span>
          <button onClick={handleInc}>+</button>
          <button onClick={handleTripleInc}>+++</button>
        </div>
      </div>

      <div className="tab-undo">
        <button onClick={handleUndo}>Undo</button>
        <button onClick={handleUndoLater}>Undo in 3s</button>
      </div>
    </div>
  )
}

function DifferentContent(){
  return(
    <div className="tab-content">
      <h4>I'm a DIFFERENT tab, so I reset state.</h4>
    </div>
  )
}

export default App