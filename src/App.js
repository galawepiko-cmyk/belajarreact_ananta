import './App.css';
import Labelnama from './components/labelnama';
import Labelalamat from './components/labelalamat';
import EventExample from './components/eventexample';
function App() {
  return (
    <div>
      <header>

        <h1>Profile</h1>
        <Labelnama nama="Ananta" />
        <Labelalamat alamat="jl. Mangga besar XIX" />

        <EventExample />
  
      </header>
    </div>
  );
}

export default App;
