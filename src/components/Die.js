export default function Die(props){
    return(
        <div className="die-face" style={{backgroundColor: props.isHeld ? "#59E391" : "white"}}>
            <h2>{props.value}</h2>
        </div>
    
    )
}