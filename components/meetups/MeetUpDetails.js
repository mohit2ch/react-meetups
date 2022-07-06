import classes from './MeetUpDetails.module.css'
export default function MeetUpDetails(props){
    
    return <section className={classes.details}>
        <img src={props.image} alt={props.title}></img>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <p>{props.description}</p>
    </section>
}