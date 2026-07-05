import { useEffect, useMemo, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
} from 'lucide-react';

import './Reviews.css';

const reviewsTranslations = {
  he: {
    label: 'לקוחות ממליצים',
    title: 'מה אומרים עלינו ב-Google',
    intro:
      'לקוחות שבחרו באקסודוס הובלות משתפים בחוויה שלהם.',
    googleText: 'Google Reviews',
    readMore: 'לצפייה בביקורות ב-Google',
    reviewsCountText: 'ביקורות',
    previous: 'ביקורת קודמת',
    next: 'ביקורת הבאה',
    loading: 'טוען ביקורות...',
    fallbackName: 'לקוח Google',
    noReviews: 'בקרוב יוצגו כאן ביקורות Google.',
  },

  ru: {
    label: 'Отзывы клиентов',
    title: 'Что говорят о нас в Google',
    intro:
      'Клиенты, которые выбрали Exodus Moving, делятся своим опытом.',
    googleText: 'Google Reviews',
    readMore: 'Смотреть отзывы в Google',
    reviewsCountText: 'отзывов',
    previous: 'Предыдущий отзыв',
    next: 'Следующий отзыв',
    loading: 'Загружаем отзывы...',
    fallbackName: 'Пользователь Google',
    noReviews: 'Скоро здесь появятся отзывы Google.',
  },

  en: {
    label: 'Customer Reviews',
    title: 'What people say about us on Google',
    intro:
      'Customers who chose Exodus Moving share their experience.',
    googleText: 'Google Reviews',
    readMore: 'See reviews on Google',
    reviewsCountText: 'reviews',
    previous: 'Previous review',
    next: 'Next review',
    loading: 'Loading reviews...',
    fallbackName: 'Google User',
    noReviews: 'Google reviews will appear here soon.',
  },
};

const defaultGoogleData = {
  businessName: 'הובלות אקסודוס',
  rating: 5,
  userRatingCount: 0,
  googleMapsUri: 'https://maps.google.com/?cid=11758236863288535219',
  reviews: [],
};

const reviewsApiUrl =
  import.meta.env.VITE_GOOGLE_REVIEWS_API_URL ||
  '/api/google-reviews';

export default function Reviews({ language = 'he' }) {
  const content =
    reviewsTranslations[language] ?? reviewsTranslations.he;

  const direction = language === 'he' ? 'rtl' : 'ltr';

  const [googleData, setGoogleData] =
    useState(defaultGoogleData);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadReviews() {
      try {
        const response = await fetch(reviewsApiUrl);

        if (!response.ok) {
          throw new Error('Failed to load Google reviews');
        }

        const data = await response.json();

        if (!isMounted) {
          return;
        }

        setGoogleData({
          businessName:
            data.businessName ?? defaultGoogleData.businessName,
          rating: data.rating ?? defaultGoogleData.rating,
          userRatingCount: data.userRatingCount ?? 0,
          googleMapsUri:
            data.googleMapsUri ??
            defaultGoogleData.googleMapsUri,
          reviews: Array.isArray(data.reviews)
            ? data.reviews
            : [],
        });

        setActiveIndex(0);
      } catch (error) {
        console.error(error);

        if (isMounted) {
          setGoogleData(defaultGoogleData);
          setActiveIndex(0);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadReviews();

    return () => {
      isMounted = false;
    };
  }, []);

  const reviews = googleData.reviews;
  const reviewsCount = reviews.length;

  const roundedRating = useMemo(() => {
    if (!googleData.rating) {
      return '5.0';
    }

    return Number(googleData.rating).toFixed(1);
  }, [googleData.rating]);

  useEffect(() => {
    if (reviewsCount <= 1) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) =>
        currentIndex === reviewsCount - 1
          ? 0
          : currentIndex + 1,
      );
    }, 5000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [reviewsCount]);

  const goToPreviousReview = () => {
    if (reviewsCount <= 1) {
      return;
    }

    setActiveIndex((currentIndex) =>
      currentIndex === 0
        ? reviewsCount - 1
        : currentIndex - 1,
    );
  };

  const goToNextReview = () => {
    if (reviewsCount <= 1) {
      return;
    }

    setActiveIndex((currentIndex) =>
      currentIndex === reviewsCount - 1
        ? 0
        : currentIndex + 1,
    );
  };

  return (
    <section
      className="reviews"
      id="reviews"
      dir={direction}
      aria-labelledby="reviews-title"
    >
      <div className="container reviews__container">
        <header className="reviews__heading">
          <div>
            <p className="reviews__label">
              {content.label}
            </p>

            <h2
              className="reviews__title"
              id="reviews-title"
            >
              {content.title}
            </h2>
          </div>

          <p className="reviews__intro">
            {content.intro}
          </p>
        </header>

        <div className="reviews__body">
          <div className="reviews__slider">
            {isLoading && (
              <div className="reviews__state">
                {content.loading}
              </div>
            )}

            {!isLoading && reviewsCount === 0 && (
              <div className="reviews__state">
                {content.noReviews}
              </div>
            )}

            {!isLoading && reviewsCount > 0 && (
              <>
                {reviewsCount > 1 && (
                  <button
                    className="reviews__arrow reviews__arrow--prev"
                    type="button"
                    aria-label={content.previous}
                    onClick={goToPreviousReview}
                  >
                    {language === 'he' ? (
                      <ChevronRight
                        size={24}
                        aria-hidden="true"
                      />
                    ) : (
                      <ChevronLeft
                        size={24}
                        aria-hidden="true"
                      />
                    )}
                  </button>
                )}

                <div className="reviews__viewport">
                  <div
                    className="reviews__track"
                    style={{
                      transform:
                        direction === 'rtl'
                          ? `translateX(${activeIndex * 100}%)`
                          : `translateX(-${activeIndex * 100}%)`,
                    }}
                  >
                    {reviews.map((review) => (
                      <article
                        className="review-card"
                        key={review.id}
                      >
                        <Quote
                          className="review-card__quote"
                          size={42}
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />

                        <div className="review-card__stars">
                          {Array.from({
                            length: review.rating ?? 5,
                          }).map((_, index) => (
                            <Star
                              key={index}
                              size={18}
                              fill="currentColor"
                              strokeWidth={0}
                              aria-hidden="true"
                            />
                          ))}
                        </div>

                        <p
                          className="review-card__text"
                          dir="auto"
                        >
                          {review.text}
                        </p>

                        <footer className="review-card__footer">
                          <div className="review-card__avatar">
                            {(review.authorName ||
                              content.fallbackName
                            ).charAt(0)}
                          </div>

                          <div>
                            <strong
                              className="review-card__name"
                              dir="auto"
                            >
                              {review.authorName ||
                                content.fallbackName}
                            </strong>

                            <span className="review-card__date">
                              {review.timeDescription}
                            </span>
                          </div>
                        </footer>
                      </article>
                    ))}
                  </div>
                </div>

                {reviewsCount > 1 && (
                  <button
                    className="reviews__arrow reviews__arrow--next"
                    type="button"
                    aria-label={content.next}
                    onClick={goToNextReview}
                  >
                    {language === 'he' ? (
                      <ChevronLeft
                        size={24}
                        aria-hidden="true"
                      />
                    ) : (
                      <ChevronRight
                        size={24}
                        aria-hidden="true"
                      />
                    )}
                  </button>
                )}

                {reviewsCount > 1 && (
                  <div className="reviews__dots">
                    {reviews.map((review, index) => (
                      <button
                        className={`reviews__dot${
                          index === activeIndex
                            ? ' reviews__dot--active'
                            : ''
                        }`}
                        key={review.id}
                        type="button"
                        aria-label={`Review ${index + 1}`}
                        onClick={() => setActiveIndex(index)}
                      />
                    ))}
                  </div>
                )}
              </>
            )}
          </div>

          <div className="reviews__summary">
            <div
              className="reviews__google-badge"
              dir="ltr"
              aria-label="Google"
            >
              <span className="reviews__google-letter reviews__google-letter--blue">
                G
              </span>
              <span className="reviews__google-letter reviews__google-letter--red">
                o
              </span>
              <span className="reviews__google-letter reviews__google-letter--yellow">
                o
              </span>
              <span className="reviews__google-letter reviews__google-letter--blue">
                g
              </span>
              <span className="reviews__google-letter reviews__google-letter--green">
                l
              </span>
              <span className="reviews__google-letter reviews__google-letter--red">
                e
              </span>
            </div>

            <strong className="reviews__score">
              {roundedRating}
            </strong>

            <div
              className="reviews__stars"
              aria-label={`${roundedRating} stars`}
            >
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  size={22}
                  fill="currentColor"
                  strokeWidth={0}
                  aria-hidden="true"
                />
              ))}
            </div>

            <p className="reviews__google-text">
              {content.googleText}
            </p>

            {googleData.userRatingCount > 0 && (
              <p className="reviews__count">
                <bdi>{googleData.userRatingCount}</bdi>{' '}
                {content.reviewsCountText}
              </p>
            )}

            <a
              className="reviews__link"
              href={googleData.googleMapsUri}
              target="_blank"
              rel="noopener noreferrer"
            >
              {content.readMore}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}