import React from 'react';
import './App.css';
import Jobs from './Jobs'

// const mockJobs = [
//   { title: 'SWE 1', company: 'Google'},
//   { title: 'SWE 2', company: 'Google'}
// ]

const JOBS_API_URL = 'http://localhost:3001/jobs'

async function fetchJobsFromAPI(updateJobsCallback) {
  const res = await fetch(JOBS_API_URL)
  const json = await res.json()
  console.log(json)

  updateJobsCallback(json)
}

function App() {

  const [jobList, updateJobs] = React.useState([])

  React.useEffect(() => {
    fetchJobsFromAPI(updateJobs)
  }, [])

  return (
    <div className="App">
      <Jobs jobs={jobList}/>
    </div>
  );
}

export default App;
