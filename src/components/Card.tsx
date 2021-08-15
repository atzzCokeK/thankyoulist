import CreatedDate from "./Card/CreatedDate";
import Todo from "./Card/Todo";

const Card = (props:{id : number, createdAt: number,content:string, onDeleted: (id:number) => void}) => {
  const {id,createdAt, content, onDeleted} = props
  return(
    <div>
      <CreatedDate date={createdAt}/>
      <Todo content={content}/>
      <button onClick={(e) => onDeleted(id)}>delete</button>
    </div>
  )
}

export default Card


