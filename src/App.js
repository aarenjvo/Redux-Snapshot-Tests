import React from 'react'
import { useState } from 'react'
import './App.css';
import GitHubCard from './Components/GitHubCard';
import Input from './Components/Input'

function App() {
  const [userData, setUserData] = useState(null)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch('https://api.github.com/users/aarenjvo')
  //     const data = await response.json()
  //     console.log(data)
  //     setUserData(data)
  //   }
  // })

  const displayGitHubCard = userData && <GitHubCard userData={userData} />
  return (
    <div className="App">
      <h1>GitHub</h1>
      <Input setUserData={setUserData} />
      { displayGitHubCard }
      </div>
  );
}
export default App;
