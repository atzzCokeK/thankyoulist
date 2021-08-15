const CreatedDate = (props:{date:number}) => {
  const createdDate = new Date(props.date)
  return (<p>{createdDate.toDateString()}</p>)
}

export default CreatedDate