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
     <Part part={props.parts[0].name} exercise = {props.parts[0].exercise} />
     <Part part={props.parts[1].name} exercise = {props.parts[2].exercise} />
     <Part part={props.parts[2].name} exercise = {props.parts[2].exercise} />
    </>
  )
}
function Total (props){
  return(
  <>
  <p>
        Number of exercises {props.parts[0].exercise+props.parts[1].exercise+props.parts[2].exercise}
      </p>
  </>
  );
}

function App() {
  const course ='Half Stack application development';
  const parts =[{
    name:'Fundamentals of React',
    exercise:10,
  },
   {
    name:'Using props to pass data',
    exercise:7
  },
  {
    name:'State of a component',
    exercise:14
  }]
  // const exercise1 =10
  // const exercise2 =7
  // const exercise3 =14
  return (
    <div>
      <Header course={course}/>
      <Content parts={parts} 
     />
      <Total parts={parts} />
    </div>
  );
}

export default App;
