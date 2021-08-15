import CreatedDate from "./Card/CreatedDate";
import Todo from "./Card/Todo";

const Card = (props:{createdAt: number,content:string}) => {
  return(
    <div>
      <CreatedDate date={props.createdAt}/>
      <Todo content={props.content}/>
    </div>
  )
}

export default Card


