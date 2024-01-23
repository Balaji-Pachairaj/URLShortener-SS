import React from 'react'
import classes from "./User.module.css"
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollar, faEye } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
const TotalStat = () => {
    const user = useSelector((state ) => {
        return state.user
    })
  return (
    <div className={classes.stat}>
     
        <Card  className={classes.item}>
            <Card.Title>Views</Card.Title>
            <div className={classes.number}>
                <h1>{user.totalViewsCount}</h1>
                <FontAwesomeIcon icon={faEye} />
            </div>
        </Card>
        {/* <Card  className={classes.item}>
            <Card.Title>Earning</Card.Title>
            <div className={classes.number}>
                <h1>{user.totalDollars}</h1>
                <FontAwesomeIcon icon={faDollar} />
            </div>
        </Card> */}
      
    </div>
  )
}

export default TotalStat
