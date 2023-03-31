import React from 'react';
import { VisualSingleReviewStarRating } from '../Stars/Index';
import { FaUserCircle } from "react-icons/fa";
import ReviewDate from '../ReviewDate/ReviewDate';
import DeleteReviewButton from '../DeleteReviewButton/DeleteReviewButton';
import UpdateReviewButton from '../UpdateReview/UpdateReview';


const Reviews = ({review, restaurantId}) => {

    if (review.restaurantId === restaurantId) {
        return (
        
            <div id="reviewItemDivWrapper">
                <div id="reviewerInfoDiv">
                    <div id="reviewerPhotoDiv">
                        <FaUserCircle id="userPhotoIconRestoShow" />
                    </div>
                    <div id="reviewerNameDiv">
                        {review.reviewerFirstName} {review.reviewerLastName[0]}.
                    </div>
                    <div>
                        <DeleteReviewButton review={review} />
                    </div>
                    <div>
                        <UpdateReviewButton review={review} />
                    </div>
                </div>
                <div id="starRatingDivRestoShow">
                    <VisualSingleReviewStarRating review={review} /> <ReviewDate datePosted={review.createdAt} />
                </div>
                
                <div id="reviewBody">
                    {review.body}
                </div>
            </div>
        )
    }
}

export default Reviews;