import React, { useState } from 'react';
import './App.css'; // Add some CSS for styling if necessary

const App = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [timezone, setTimezone] = useState('local');
  const [widgetType, setWidgetType] = useState('bar');

  const handleGoClick = () => {
    const apiUrl = `https://ihr98s7x0f.execute-api.us-east-1.amazonaws.com/testing/yamlcloudwatchtest?connectARN=True&contactFlowARN=True&timeframeLength=False&timeframeUnit=False`;
    console.log('Fetching data from API:', apiUrl);
    // You can use fetch or axios to call the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log('API Response:', data);
        // Process and display the data as needed
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>CDW Metric Vision</h1>
      </header>

      <main>
        <div className="form-group">
          <label>Start Date:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>End Date:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Start Time:</label>
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>End Time:</label>
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Timezone:</label>
          <select
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
          >
            <option value="local">Local</option>
            <option value="UTC">UTC</option>
          </select>
        </div>

        <div className="form-group">
          <label>Widget Type:</label>
          <select
            value={widgetType}
            onChange={(e) => setWidgetType(e.target.value)}
          >
            <option value="bar">Bar</option>
            <option value="graph">Graph</option>
            <option value="count">Count</option>
          </select>
        </div>

        <button onClick={handleGoClick}>Go</button>
      </main>
    </div>
  );
};

export default App;
