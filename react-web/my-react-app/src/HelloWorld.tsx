import './App.css'
type PropsHello = {
  name : string
}
export default function HelloWorld({name}: PropsHello){
    return (
        <>
          <h1>Hi Folks {name}</h1>
          <button>CLick Me!!!</button>
        </>
      )
}