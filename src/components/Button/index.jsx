import './style.css'

export const Button = ({text, onclick, disabled}) =>(
    <div className="button-container">
        <button className="button-load-more" 
        onClick={onclick}
        disabled = {disabled}>
            {text}
        
        </button>
    </div>
)