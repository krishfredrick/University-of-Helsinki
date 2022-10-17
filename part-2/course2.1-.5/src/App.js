// import logo from './logo.svg';
import './App.css';

function App() {
  const course={
    id: 1,
    name:'Half Stack application development',
    parts:[
      {
        name:'Fundamentals of React',
        exercise:10,
        id:1,
      },
      {
        name:'Using Props to pass data',
        exercise:7,
        id:2,
      },{
        name:'State of a component',
        exercise:14,
        id:3
      }
    ]
  }
  return (
    <div className="App">
      <Course course={course}/>
    </div>
  );
}

export default App;
