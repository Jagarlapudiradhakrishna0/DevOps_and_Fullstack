import React from "react";

function StudentCard(props) {
  const { name, rollNo, marks } = props;

  const total = marks.DevOps + marks.AiAssistedcoding + marks.DisasterMangament;

  let grade = "";
  let gradeColor = "";

  if (total >= 270) {
    grade = "A+";
    gradeColor = "green";
  } else if (total >= 240) {
    grade = "A";
    gradeColor = "blue";
  } else if (total >= 200) {
    grade = "B";
    gradeColor = "orange";
  } else {
    grade = "C";
    gradeColor = "red";
  }

  return (
    <div className="student-card">
      <h2>{name}</h2>
      <p><strong>Roll No:</strong> {rollNo}</p>

      <div className="marks">
        <p>DevOps: {marks.DevOps}</p>
        <p>AiAssistedcoding: {marks.AiAssistedcoding}</p>
        <p>DisasterMangament: {marks.DisasterMangament}</p>
      </div>

      <div className="total">Total: {total} / 300</div>

      <div className="grade" style={{ backgroundColor: gradeColor }}>
        Grade: {grade}
      </div>
    </div>
  );
}

export default StudentCard;
