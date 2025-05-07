import './App.css'
import { PropsHello } from './HelloWorldDto'
export default function HelloWorld({name,age,gender}: PropsHello){
    return (
        <>
          <h1>Hi Folks {name}</h1>
          <h2>{age}</h2>
          <h3>{gender}</h3>
        </>
      )
}