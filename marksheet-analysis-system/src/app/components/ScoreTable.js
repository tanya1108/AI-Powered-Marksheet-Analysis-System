import React from "react";

const ScoreTable = ({ scores = [] }) => {
  return (
    <table
      className="w-100 mt-4"
      style={{ border: "1px solid black", borderCollapse: "collapse" }}
    >
      <thead>
        <tr>
          <th style={{ border: "1px solid black", padding: "8px" }}>Subject</th>
          <th style={{ border: "1px solid black", padding: "8px" }}>Score</th>
        </tr>
      </thead>
      <tbody>
        {scores?.map(
          (score, index) =>
            score && (
              <tr key={index}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {score?.subject}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {score?.score}
                </td>
              </tr>
            )
        )}
      </tbody>
    </table>
  );
};

export default ScoreTable;
