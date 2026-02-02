import React from "react";
import StudentCard from "./StudentCard";
import "./App.css";

function App() {
  const students = [
    {
      name: "Radha Krishna",
      rollNo: "2303A52055",
      marks: { DevOps: 95, AiAssistedcoding: 88, DisasterMangament: 92 }
    },
    {
      name: "Mukesh Babu",
      rollNo: "2303A52061",
      marks: { DevOps: 90, AiAssistedcoding: 85, DisasterMangament: 80 }
    },
    {
      name: "Siddharth",
      rollNo: "2303A52463",
      marks: { DevOps: 34, AiAssistedcoding: 65, DisasterMangament: 50 }
    },
    {
      name: "OM Prakesh",
      rollNo: "2303A52057",
      marks: { DevOps: 70, AiAssistedcoding: 70, DisasterMangament: 90 }

    }
  ];

  return (
    <div className="app-container">
      <h1 className="title">📘 Smart Student Marks Dashboard</h1>

      <div className="card-container">
        {students.map((student, index) => (
          <StudentCard
            key={index}
            name={student.name}
            rollNo={student.rollNo}
            marks={student.marks}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
