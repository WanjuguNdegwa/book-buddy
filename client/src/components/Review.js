import React from 'react'
import {default as Rating} from "react-rating-stars-component";

import './Review.css';

function Review({review}) {
  return (
    <div className='review my-3'>
      <div className="d-flex justify-content-between">
        <p className='reviewer'>{review.user_details.email}</p>
        <Rating
          count={5}
          size={12}
          edit={false}
          value={review.rating}
          activeColor="#ffd700"
        />
      </div>
      <p className='comment'>{review.comment}</p>
    </div>
  )
}

export default Review
