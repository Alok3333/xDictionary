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
  // State to store the table data
  const [data, setData] = useState(tableData);

  // Function to sort by date and views
  const sortByDate = () => {
    const sortedData = [...data].sort((a, b) => {
      if (new Date(b.date) !== new Date(a.date)) {
        return new Date(b.date) - new Date(a.date);
      }
      // If dates are the same, compare by views
      return b.views - a.views;
    });
    // console.log(sortedData, "sort data");
    setData(sortedData);
  };

  // Function to sort by views and date
  const sortByViews = () => {
    const sortedData = [...data].sort((a, b) => {
      if (b.views !== a.views) {
        return b.views - a.views;
      }
      // If views are same, compare by date
      return new Date(b.date) - new Date(a.date);
    });
    // console.log(sortedData, "sort data")
    setData(sortedData);
  };

  return (
    <div className="App">
      <h1>Date and Views Table</h1>
      <div>
        <button onClick={sortByDate}>Sort by Date</button>
        <button onClick={sortByViews}>Sort by Views</button>
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
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.date}</td>
                <td>{row.views}</td>
                <td>{row.article}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
