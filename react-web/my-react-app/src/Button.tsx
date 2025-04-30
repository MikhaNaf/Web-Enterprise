import './Button.css'
type ButtonProps = {
    flag : string
}

export default function Button({flag}:ButtonProps){
    function handleClick(){
        alert('Tombol Diclik')
    }
    function handleClickTrue(){
        alert('Tombol With True Value')
    }
    return <button className="tombol"
    onClick={flag == "Hello" ? handleClickTrue : handleClick}>Click Me</button>
}
