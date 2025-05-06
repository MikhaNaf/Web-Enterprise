import './UserCard.css';

type Props = {
    nameProduct : string
    image: string
    price: string
}

export default function ProductCard({nameProduct,image,price}:Props){
    const handleBuy = () =>{
        alert("Thanks For Buying")

    }
    return(
        <div className="card">
            <img src={image} alt={`${nameProduct}Avatar`} />
            <h2>{nameProduct}</h2>
            <p>{price}</p>
            <button onClick={handleBuy}>Buy!!!</button>
        </div>
        
    )
}