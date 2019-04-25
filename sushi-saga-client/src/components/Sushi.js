import React, { Fragment } from 'react'

const Sushi = (props) => {

  const sushiCheck=()=>{
    return props.platesEaten.includes(props.roll)
  }

  return (
    <div className="sushi">
      <div className="plate" >
        {sushiCheck() ? null : <img  onClick={()=>props.eatSushi(props.roll)} src={props.roll.img_url} width="100%"/> }       
      </div>
      <h4 className="sushi-details">
        {props.roll.name} - ${props.roll.price}
      </h4>
    </div>
  )
}

export default Sushi