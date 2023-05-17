const Header = (props) => {
 return (
  <>
   <h1>{props.course}</h1>
  </>
 )
}

const Part = (props) => {
 return (
  <>
   <p>
    {props.partname} {props.partexercises}
   </p>
 
  </>
 )
}

const Content = ({parts}) => {
 return (
  <>
   <p>
    <Part partname={parts[0].partname} partexercises={parts[0].partexercises} />
    <Part partname={parts[1].partname} partexercises={parts[1].partexercises} />
    <Part partname={parts[2].partname} partexercises={parts[2].partexercises} />
   </p>
 
  </>
 )
}

const Total = (props) => {
 return (
  <>
   <p>{props.totalexercises}</p>
  </>
 )
}



const App=() => {
const course='Half stack application development 1'
const part1='Fundamentals of react'
const exercises1=10
const part2='Using props to pass data'
const exercises2=7
const part3='State of a component'
const exercises3=14
const parts=[
  {partname:part1,partexercises:exercises1},
  {partname:part2,partexercises:exercises2},
  {partname:part3,partexercises:exercises3}
]
return (
 <div>
   <Header course={course} />
   <Content parts={parts} />
   <Total totalexercises={exercises1 + exercises2 + exercises3} />
 </div>
)
}

export default App;
