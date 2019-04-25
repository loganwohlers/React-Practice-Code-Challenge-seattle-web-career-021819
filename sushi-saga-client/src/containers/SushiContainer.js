import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.currRolls.map(rr => {
            return <Sushi 
                      key={rr.id} 
                      roll={rr}
                      platesEaten={props.platesEaten}
                      eatSushi={props.eatSushi} />
          })
        }
        <MoreButton moreSushi={props.moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer