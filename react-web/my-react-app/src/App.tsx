import './App.css'

import { UserCard } from './UserCard'
import HelloWorld from './HelloWorld'
import Button from './Button'
import { PropsHello } from './HelloWorldDto'


function App() {
  const props: PropsHello ={
    name: "Mikha",
    age:"20",
    gender:"male"
  }

  return (
    <>
      {/* <div>
        <UserCard name= "Jhon Doe " job="Web Developer" avatarUrl='http://localhost:5173/vite.svg'/>
        <UserCard name= "Mikha " job="FullStack" avatarUrl='http://localhost:5173/vite.svg'/>
      </div> */}
      <h1>this is react app with vite</h1>
      <HelloWorld {...props}/>
      <Button flag='Hellow'/>
    </>
  )
}

export default App
