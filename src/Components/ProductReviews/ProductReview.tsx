import './ProductReview.css';

interface Review {
  id: number;
  name: string;
  verified: boolean;
  rating: number;
  comment: string;
}

interface ProductReviewsProps {
  reviews: Review[];
}

const renderStars = (rating: number) =>
  Array.from({ length: 5 }, (_, i) => (
    <span key={i} className={`review__star ${i < rating ? 'review__star--filled' : ''}`}>
      ★
    </span>
  ));

export const ProductReviews = ({ reviews }: ProductReviewsProps) => {
  return (
    <div className="reviews">

      {/* Header */}
      <div className="reviews__header">
        <h2 className="reviews__title">Customer Reviews</h2>
        <span className="reviews__write">Write a Review ✏️</span>
      </div>

      {/* Review Cards */}
      <div className="reviews__grid">
        {reviews.map((review) => (
          <div key={review.id} className="review__card">

            {/* Reviewer Info */}
            <div className="review__top">
              <div className="review__avatar">
                {review.name.charAt(0)}
              </div>
              <div>
                <p className="review__name">{review.name}</p>
                {review.verified && (
                  <span className="review__verified">Verified Purchase</span>
                )}
              </div>
            </div>

            {/* Stars */}
            <div className="review__stars">
              {renderStars(review.rating)}
            </div>

            {/* Comment */}
            <p className="review__comment">{review.comment}</p>

          </div>
        ))}
      </div>

    </div>
  );
};