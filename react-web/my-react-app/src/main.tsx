import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import ProductCard from './ProductCard.tsx'
// import { UserCard } from './UserCard.tsx'
import App from './App.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <UserCard name= "Jhon Doe " job="Web Developer" avatarUrl='http://localhost:5173/vite.svg'/>
    <UserCard name= "Mikha " job="FullStack" avatarUrl='http://localhost:5173/vite.svg'/> */}
    {/* <ProductCard nameProduct='Kue' price="Rp.50.000" image='https://imgs.search.brave.com/j9LgWJJzzA61X_G8fYNT3xBQbyIkGCP0-QE4SjkXAmI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzExL0t1ZV9hcGUu/anBn'/>
    <ProductCard nameProduct='Baju' price="Rp.30.000" image='https://imgs.search.brave.com/78SXSIOXD2U3S-cwXKi8T_0lm16f9uHY6UnEl4TtoIY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9raGF0/YW0uY29tLm15L2Nk/bi9zaG9wL2ZpbGVz/L1BpbmsyX2NvcHlf/YTBmZjU3OTAtYjcw/MS00YTIyLTgzZWMt/NTY1YmNiOTRlMTNi/LmpwZz92PTE3Mzc5/NzU4ODYmd2lkdGg9/NDEyOQ'/> */}
    <App/>
  </StrictMode>,
)
