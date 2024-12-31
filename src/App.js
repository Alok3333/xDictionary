import { useState } from "react";
import "./App.css";

const tableData = [
  { date: "2022-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-02", views: 150, article: "Article 2" },

  { date: "2023-09-02", views: 120, article: "Article 3" },

  { date: "2020-09-03", views: 200, article: "Article 4" },
];

function App() {
  return (
    <div className="App">
      <h1>Date and Views Table</h1>
      <div>
        <button>Sort by Date</button>
        <button>Sort by Views</button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Views</th>
              <th>Article</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2022-09-01</td>
              <td>100</td>
              <td>Article 1</td>
            </tr>
            <tr>
              <td>2022-09-01</td>
              <td>100</td>
              <td>Article 1</td>
            </tr>
            <tr>
              <td>2022-09-01</td>
              <td>100</td>
              <td>Article 1</td>
            </tr>
            <tr>
              <td>2022-09-01</td>
              <td>100</td>
              <td>Article 1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
