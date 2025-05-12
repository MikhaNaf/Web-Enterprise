export type ButtonProps = {
    flag : string
    handleClick: () => void
    handleClickTrue: () => void
}
export function handleClick(){
    alert('Tombol Diclik')
}
export function handleClickTrue(){
    alert('Tombol With True Value')
}