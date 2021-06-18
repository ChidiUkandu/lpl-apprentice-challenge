import React, { useState, useEffect } from 'react'
import './styles.css'
import axios from 'axios'

const App = () => {
  //react
  const [reactStars, setReactStars] = useState([])
  const [reactForks, setReactForks] = useState([])
  const [reactIssues, setReactIssues] = useState([])
  const [reactDescription, setReactDescription] = useState([])
  //angular
  const [angularStars, setAngularStars] = useState([])
  const [angularForks, setAngularForks] = useState([])
  const [angularIssues, setAngularIssues] = useState([])
  const [angularDescription, setAngularDescription] = useState([])
  //emberjs
  const [emberjsStars, setEmberjsStars] = useState([])
  const [emberjsForks, setEmberjsForks] = useState([])
  const [emberjsIssues, setEmberjsIssues] = useState([])
  const [emberjsDescription, setEmberjsDescription] = useState([])

  const fetchData = () => {
    const reactAPI = 'https://api.github.com/repos/facebook/react'
    const angularAPI = 'https://api.github.com/repos/angular/angular.js'
    const emberjsAPI = 'https://api.github.com/repos/emberjs/ember.js'

    const getReact = axios.get(reactAPI)
    const getAngular = axios.get(angularAPI)
    const getEmberjs = axios.get(emberjsAPI)
    axios.all([getReact, getAngular, getEmberjs]).then(
      axios.spread((...allData) => {
        //stars
        const reactStars = allData[0].data.stargazers_count
        const angularStars = allData[1].data.stargazers_count
        const emberjsStars = allData[2].data.stargazers_count

        //forks
        const reactForks = allData[0].data.forks_count
        const angularForks = allData[1].data.forks_count
        const emberjsForks = allData[2].data.forks_count

        //open issues count
        const reactIssues = allData[0].data.open_issues_count
        const angularIssues = allData[1].data.open_issues_count
        const emberjsIssues = allData[2].data.open_issues_count

        //descriptions
        const reactDescription = allData[0].data.description
        const angularDescription = allData[1].data.description
        const emberjsDescription = allData[2].data.description

        setReactStars(reactStars)
        setReactForks(reactForks)
        setReactIssues(reactIssues)
        setReactDescription(reactDescription)

        setAngularStars(angularStars)
        setAngularForks(angularForks)
        setAngularIssues(angularIssues)
        setAngularDescription(angularDescription)

        setEmberjsStars(emberjsStars)
        setEmberjsForks(emberjsForks)
        setEmberjsIssues(emberjsIssues)
        setEmberjsDescription(emberjsDescription)
      })
    )
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Frameworks</th>
            <th>Description</th>
            <th>Stargazers_count</th>
            <th>Forks</th>
            <th>Open Issues</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Reactjs</td>
            <td>{reactDescription}</td>
            <td>{reactStars}</td>
            <td>{reactForks}</td>
            <td>{reactIssues}</td>
          </tr>
          <tr>
            <td>Angular</td>
            <td>{angularDescription}</td>
            <td>{angularStars}</td>
            <td>{angularForks}</td>
            <td>{angularIssues}</td>
          </tr>
          <tr>
            <td>Emberjs</td>
            <td>{emberjsDescription}</td>
            <td>{emberjsStars}</td>
            <td>{emberjsForks}</td>
            <td>{emberjsIssues}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App
/*
  function processJSON(data) {
    console.log(data.stargazers_count)
    console.log(data)
  }

  function sortByStars() {}

  function sortByForks() {}

  function sortByIssues() {}

  function Container(props) {
    callAPI()
    //validation/processing
    return (
      <div>
        <h2>{props.name}</h2>
        <ul>
          <li>{props.stars}</li>
        </ul>
      </div>
    )
  }
  return (
    <div className="App">
      <h1>Frameworks</h1>
      <Container name="React" stars="200" />
      <Container name="Angular" stars="600" />
      <Container name="Ember" stars="400" />
    </div>
  );
  */
