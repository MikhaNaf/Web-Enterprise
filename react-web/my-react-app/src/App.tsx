import './App.css'

// import { UserCard } from './UserCard'
import HelloWorld from './HelloWorld'
import Button from './Button'
import { PropsHello } from './HelloWorldDto'
import { handleClick, handleClickTrue } from './ButtonDto'



function App() {
  const props: PropsHello ={
    name: "Mikha",
    age:"20",
    gender:"male"
  }
  const buttonProps = {
    flag : "Hello",
    handleClick,
    handleClickTrue
  }
 
  return (
    <>
      {/* <div>
        <UserCard name= "Jhon Doe " job="Web Developer" avatarUrl='http://localhost:5173/vite.svg'/>
        <UserCard name= "Mikha " job="FullStack" avatarUrl='http://localhost:5173/vite.svg'/>
      </div> */}
      <h1>this is react app with vite</h1>
      <HelloWorld {...props}/>
      <Button {...buttonProps} />

    </>
  )
}

export default App
