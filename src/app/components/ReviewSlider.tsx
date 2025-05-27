"use client"
import { useState } from 'react';

const reviewsData = [
  {
    id: 1,
    name: 'Jan Kowalski',
    stars: '⭐⭐⭐⭐⭐',
    text: 'Świetna obsługa, szybka diagnoza i naprawa!',
  },
  {
    id: 2,
    name: 'Anna Nowak',
    stars: '⭐⭐⭐⭐',
    text: 'Bardzo profesjonalnie i sprawnie.',
  },
  {
    id: 3,
    name: 'Marek Wiśniewski',
    stars: '⭐⭐⭐⭐⭐',
    text: 'Polecam każdemu! Solidna firma.',
  },
  {
    id: 4,
    name: 'Katarzyna Lewandowska',
    stars: '⭐⭐⭐',
    text: 'OK, ale mogłoby być szybciej.',
  },
];

export default function ReviewCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % reviewsData.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
  };

  const visibleReviews = [
    reviewsData[(index - 1 + reviewsData.length) % reviewsData.length],
    reviewsData[index],
    reviewsData[(index + 1) % reviewsData.length],
  ];

  return (
	  <section className="review-section fade-in-on-scroll">
        <h2 className="review-title">Opinie klientów</h2>

        <div className="carousel">
        
          <div className="carousel-track">
            {visibleReviews.map((review, index) => (
              <div
			  key={review.id}
			  className={`review-card ${
				index === 1 ? 'center' : index === 0 ? 'left' : 'right'
			  }`}
			  onClick={() => {
				if (index === 0) prev();
				if (index === 2) next();
			  }}
			  style={{ cursor: index !== 1 ? 'pointer' : 'default' }}
			>
			
                <div className="review-header">
                  <div className="review-avatar">👤</div>
                  <div className="review-user">
                    <p className="review-name">{review.name}</p>
                    <div className="review-stars">{review.stars}</div>
                  </div>
                </div>
                <p className="review-text">{review.text}</p>
              </div>
            ))}
          </div>
		  <div>
			<button className="carousel-btn prev" onClick={prev}>‹</button>
			<button className="carousel-btn next" onClick={next}>›</button>
		  </div>
        </div>
      </section>
  );
}
