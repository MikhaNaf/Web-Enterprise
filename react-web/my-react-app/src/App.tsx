import './App.css'
import { UserCard } from './UserCard'

function App() {
  

  return (
    <>
      <div>
        <UserCard name= "Jhon Doe " job="Web Developer" avatarUrl='http://localhost:5173/vite.svg'/>
        <UserCard name= "Mikha " job="FullStack" avatarUrl='http://localhost:5173/vite.svg'/>
      </div>
    </>
  )
}

export default App
