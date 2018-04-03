-- 1. List all the reviews for a given restaurant given a specific restaurant ID.
SELECT review.id, restaurant2.id, restaurant2.name, review.stars, review.review FROM review
    INNER JOIN restaurant2
    ON restaurant2.id = review.restaurant_id
    WHERE restaurant2.id = 12
;
-- 2. List all the reviews for a given restaurant, given a specific restaurant name.
SELECT review.id, restaurant2.id, restaurant2.name, review.stars, review.review FROM review
    INNER JOIN restaurant2
    ON restaurant2.id = review.restaurant_id
    WHERE restaurant2.name = 'Good Dog'
;
-- 3. List all the reviews for a given reviewer, given a specific author name.
SELECT review.id, restaurant2.id, restaurant2.name, reviewer.name, review.stars, review.review FROM review
    INNER JOIN restaurant2
    ON restaurant2.id = review.restaurant_id
    INNER JOIN reviewer
    ON review.reviewer_id = reviewer.id
    WHERE reviewer.name = 'John Smith'
;
-- 4. List all the reviews along with the restaurant they were written for. In the query result, select the restaurant name and the review text.
SELECT restaurant2.name, reviewer.name, review.stars, review.review FROM review
    INNER JOIN restaurant2
    ON restaurant2.id = review.restaurant_id
    INNER JOIN reviewer
    ON review.reviewer_id = reviewer.id
;
-- 5. Get the average stars by restaurant. The result should have the restaurant name and its average star rating.
SELECT restaurant2.name, AVG(review.stars) FROM review
    INNER JOIN restaurant2
    ON restaurant2.id = review.restaurant_id
    INNER JOIN reviewer
    ON review.reviewer_id = reviewer.id
    GROUP BY restaurant2.name
;
-- 6. Get the number of reviews written for each restaurant. The result should have the restaurant name and its review count.
SELECT restaurant2.name, Count(review.review) FROM review
    INNER JOIN restaurant2
    ON restaurant2.id = review.restaurant_id
    INNER JOIN reviewer
    ON review.reviewer_id = reviewer.id
    GROUP BY restaurant2.name
;
-- 7. List all the reviews along with the restaurant, and the reviewer's name. The result should have the restaurant name, the review text, and the reviewer name. Hint: you will need to do a three-way join - i.e. joining all three tables together.
SELECT restaurant2.name, review.review, reviewer.name FROM review
    INNER JOIN restaurant2
    ON restaurant2.id = review.restaurant_id
    INNER JOIN reviewer
    ON review.reviewer_id = reviewer.id
    ORDER BY restaurant2.name
;
-- 8. Get the average stars given by each reviewer. (reviewer name, average star rating)
SELECT reviewer.id, reviewer.name, AVG(review.stars) FROM review
    INNER JOIN restaurant2
    ON restaurant2.id = review.restaurant_id
    INNER JOIN reviewer
    ON review.reviewer_id = reviewer.id
    GROUP BY reviewer.name, reviewer.id
    ORDER BY reviewer.id
;
-- 9. Get the lowest star rating given by each reviewer. (reviewer name, lowest star rating)
SELECT reviewer.id, reviewer.name, MIN(review.stars) FROM review
    INNER JOIN restaurant2
    ON restaurant2.id = review.restaurant_id
    INNER JOIN reviewer
    ON review.reviewer_id = reviewer.id
    GROUP BY reviewer.name, reviewer.id
    ORDER BY reviewer.id
;
-- 10. Get the number of restaurants in each category. (category name, restaurant count)
SELECT count(restaurant2.name), restaurant2.category FROM restaurant2
    GROUP BY restaurant2.category
    ORDER BY restaurant2.category
;
-- 11. Get number of 5 star reviews given by restaurant. (restaurant name, 5-star count)
SELECT restaurant2.name, count(review.stars) FROM review
    INNER JOIN restaurant2
    ON restaurant2.id = review.restaurant_id
    INNER JOIN reviewer
    ON review.reviewer_id = reviewer.id
    WHERE review.stars = 5
    GROUP BY restaurant2.name
;
-- 12. Get the average star rating for a food category. (category name, average star rating)
SELECT restaurant2.category, AVG(review.stars) FROM review
    INNER JOIN restaurant2
    ON restaurant2.id = review.restaurant_id
    INNER JOIN reviewer
    ON review.reviewer_id = reviewer.id
    GROUP BY restaurant2.category
;