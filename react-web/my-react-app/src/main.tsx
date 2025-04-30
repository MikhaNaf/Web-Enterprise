import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import HelloWorld from './HelloWorld.tsx'
import { UserCard } from './UserCard.tsx'
import Button from './Button.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <UserCard name= "Jhon Doe " job="Web Developer" avatarUrl='http://localhost:5173/vite.svg'/>
    <UserCard name= "Mikha " job="FullStack" avatarUrl='http://localhost:5173/vite.svg'/> */}
    {/* <App/> */}
    <Button/>
  </StrictMode>,
)
