import React from 'react'
import Updates from '../Updates/Updates'
import CustomerReview from '../CustomerReview/CustomerReview'
import './RightSide.css'

const RightSide = () => {
  return (
    <div className="RightSide">
        <div>
            <h3>Updates</h3>
            <Updates/>
            <CustomerReview/>
        </div>
    </div>
  )
}

export default RightSide