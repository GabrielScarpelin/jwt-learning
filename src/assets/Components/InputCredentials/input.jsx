
import './input.css'

export default function Input({ type, image, placeholder, id, setInputValue}){
    return (
        <div className="input-container">
            <img src={image} alt="" />
            <div className="input">
                <p>{type === 'email' ? 'Email' : type === 'password' ? 'Senha' : ''}</p>
                <input type={type} name="" id={id} placeholder={placeholder} onChange= {(e)=> setInputValue(e.target.value)}/>
            </div>
        </div>
    )
}