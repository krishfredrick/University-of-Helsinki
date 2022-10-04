// import logo from './logo.svg';
// import './App.css';
function Header(props){
  return(
    <>
    <h1>{props.course}</h1>
    </>
  );
}
function Part(props){
  return(
  <>
  <p>
  {props.part} {props.exercise}
  </p>
  </>
  );
}
function Content (props) {
  return(
    <>
     <Part part={props.part1} excercise = {props.exercise1} />
     <Part part={props.part2} excercise = {props.exercise2} />
     <Part part={props.part3} excercise = {props.exercise3} />
    </>
  )
}
function Total (props){
  return(
  <>
  <p>
        Number of exercises {props.exercise1+props.exercise2+props.exercise3}
      </p>
  </>
  );
}

function App() {
  const course ='Half Stack application development';
  const part1 ='Fundamentals of React'
  const part2 ='Using props to pass data'
  const part3 ='State of a component'
  const exercise1 =10
  const exercise2 =7
  const exercise3 =14
  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} exercise1 = {exercise1} 
      part2= {part2} exercise2 = {exercise2}
      part3={part3} exercise3 = {exercise3} />
      <Total exercise1={exercise1} exercise2={exercise2} exercise3={exercise3} />
    </div>
  );
}

export default App;
