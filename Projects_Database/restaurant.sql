INSERT INTO reviewer (id, name, email, karma) VALUES 
    (DEFAULT, 'John Smith', 'Jsmith@gmail.com', '5'),
    (DEFAULT, 'Robert Jackson', 'RJackson@gmail.com', '3'),
    (DEFAULT, 'Jane Doe', 'JDoe@gmail.com', '6'),
    (DEFAULT, 'Mike Smith', 'Msmith@gmail.com', '7'),
    (DEFAULT, 'Ashley Williamson', 'AWilliamson@gmail.com', '2')
;

INSERT INTO review (id, reviewer_id, stars, title, review, restaurant_id) VALUES 
    (DEFAULT, 1, 4, 'Good Service', 'Friendly and quick service', 3),
    (DEFAULT, 2, 3, 'Average', 'Good food and friendly staff. But had to wait long for food', 1),
    (DEFAULT, 1, 1, 'Avoid this place', 'Rude waiter and food was not coocked properly', 10),
    (DEFAULT, 5, 5, 'Amazing food', 'Delicious food and great service', 7),
    (DEFAULT, 4, 3, 'Ok Food', 'Ok food and friendly staff', 7),
    (DEFAULT, 3, 3, 'Long wait time', 'Good food and friendly staff. But had to wait long for food', 12),
    (DEFAULT, 2, 4, 'Friendly employees', 'Friendly and quick service. Food was good.', 15),
    (DEFAULT, 1, 3, 'The food was ok', 'Ok food and friendly staff', 12),
    (DEFAULT, 5, 1, 'Terrible service', 'Avoid this place. The employee got my order wrong and then tried to charge me twice for the wrong order and second order.', 8),
    (DEFAULT, 2, 4, 'Quick Service', 'Fast sevice and friendly staff', 3),
    (DEFAULT, 3, 5, 'Good Food', 'Good food and friendly staff', 12),
    (DEFAULT, 2, 5, 'Great Food', 'Great food and friendly staff', 12),
    (DEFAULT, 2, 5, 'Good Staff and Great Food', 'Great food and good staff', 3)

;