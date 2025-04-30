import './UserCard.css';
import './App.css'

type Props = {
    name: string;
    job: string;
    avatarUrl: string;
}
export function UserCard({name,job,avatarUrl}: Props){
    const handleFollow = () => {
        alert('followed')
    }

    return(
        <div className="card">
            <img src={avatarUrl} alt={`${name}Avatar`}/>
            <h2>{name}</h2>
            <p>{job}</p>
            <button onClick={handleFollow}>Follow</button>
        </div>
    )
        
}

