import './App.css'
import HelloWorld from './HelloWorld'
import { UserCard } from './UserCard'


function App() {
  

  return (
    <>
      {/* <div>
        <UserCard name= "Jhon Doe " job="Web Developer" avatarUrl='http://localhost:5173/vite.svg'/>
        <UserCard name= "Mikha " job="FullStack" avatarUrl='http://localhost:5173/vite.svg'/>
      </div> */}
      <h1>this is react app with vite</h1>
      <HelloWorld name='Mikha' />
      <HelloWorld name='Andi' />
      <HelloWorld name='Udin' />
    </>
  )
}

export default App
