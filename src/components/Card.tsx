import CreatedDate from "./Card/CreatedDate";
import Text from "./Card/Text";

const Card = (props:{id : number, createdAt: number,content:string, onDeleted: (id:number) => void}) => {
  const {id,createdAt, content, onDeleted} = props
  return(
    <div>
      <CreatedDate date={createdAt}/>
      <Text content={content}/>
      <button onClick={(e) => onDeleted(id)}>delete</button>
    </div>
  )
}

export default Card


