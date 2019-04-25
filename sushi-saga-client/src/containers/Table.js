import React, { Fragment } from 'react'

class Table extends React.Component{

  renderPlates(){
      return this.props.platesEaten.map((x, index) => {
        return <div className="empty-plate" key={index} style={{ top: -7 * index }}/>
      })
  }

  render(){
    return (
      <Fragment>
        <h1 className="remaining">
          You have: ${this.props.currBalance} remaining!
        </h1>
        <div className="table">
          <div className="stack">
              {this.renderPlates()}
          </div>
        </div>
      </Fragment>
    )
    }
}

export default Table