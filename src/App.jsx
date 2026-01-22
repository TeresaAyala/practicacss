import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './MyStylesheet.css';
import styles from './mystyle.module.css';
import styled from 'styled-components';

function App() {
  const [count, setCount] = useState(0)
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };


  const MyHeader = styled.h1`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
`;
  const MyLabel = styled.label`
  background-color: #0dc545;
  color: white;
  font-size: 100px;
`;

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <input type="text" style={{backgroundColor:"red", color:"white"}} placeholder="Type something..." />
        <h1 style={myStyle}>Hello Style!</h1>
        <h2 style={myStyle}>Elena Ayala</h2>
        <h3 className="miestilo">Hello Style from CSS file!</h3>
         <label>Soy un label</label>
          <h1 className={styles.bigred}>Hello Car!</h1>
         <label className={styles.tamo}>Estamos Juntos</label>
          <MyHeader>Welcome!</MyHeader>
          <MyLabel>Styled Components Label</MyLabel>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App