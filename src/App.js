import './App.css';
import Counter from './components/Counter'

function App() {
  return (
    <div className="container">
      <h1>Hello React</h1>
      <hr/>

      <div className="grid-3">
        <Counter />
        <Counter />
        <Counter />
      </div>

      <hr/>
    </div>
  );
}

export default App;
