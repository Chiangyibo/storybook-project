/*
 * @Autor: jyb
 * @Description: 
 * @LastEditTime: 2021-01-04 13:08:54
 */
import logo from './logo.svg';
import  { YonButton }  from './comonents/YonButton';
import './App.less';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <YonButton yontype="primary">primary</YonButton>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
