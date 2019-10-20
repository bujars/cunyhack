import {FETCH_FEED} from './actionTypes';


export function fetch_feed(){
    let feedData = {
        0 : {
            restaurantName : 'Little Basil', 
            foodName: 'Pad Thai', 
            pictureURL: 'https://s3-media3.fl.yelpcdn.com/bphoto/eew6imY5oO0qcpENpFRCEw/258s.jpg', 
            quantity: 3, 
            description : 'No one picked up their order. Left overs are still fresh and warm and untouched. Do not want it to go to waste!', 
            expirationDate : 'October 21', 
            postDate: 'October 19', 
            distanceAway: .05,
            longitude: 40.741180,
            latitude: -73.982200
        },
        1 : {
            restaurantName: 'Bao Bao Cafe', 
            foodName: 'Bao Bao Noodles', 
            pictureURL: 'https://s3-media2.fl.yelpcdn.com/bphoto/0H7vQlou3cOHKjfoknwTHA/o.jpg', 
            quantity: 4, 
            description : 'No one picked up their order. Left overs are still fresh and warm and untouched. Do not want it to go to waste!', 
            expirationDate : 'October 20', 
            postDate: 'October 19', 
            distanceAway: .04,
            longitude: 40.740830,
            latitude: -73.983470
        },
        2 : {
            restaurantName: 'Boqueria', 
            foodName: 'Gambas al Ajillo', 
            pictureURL: 'https://cdn-image.foodandwine.com/sites/default/files/1501086700/gambas-al-ajillo-XL-RECIPE0917.jpg', 
            quantity: 2, 
            description : 'Been in the fridge for 2 days. Still good to eat. Just warm it up', 
            expirationDate : 'Oct 23', 
            postDate: 'October 17', 
            distanceAway: .6,
            longitude: 40.740299,
            latitude: -73.993713
        },
        3 : {
            restaurantName: 'Chipotle', 
            foodName: 'Burrito Bowls', 
            pictureURL: 'https://detoxinista.com/wp-content/uploads/2019/01/chipotle-burrito-bowl-recipe.jpg', 
            quantity: 9, 
            description : 'Grubhub delivery man never picked it up. We are going to throw it away if no one picks it up', 
            expirationDate : 'October 22', 
            postDate: 'October 19', 
            distanceAway: .1,
            longitude: 41.954220,
            latitude: -75.280853
        },
        4 : {
            restaurantName: 'Di Di Dumpling', 
            foodName: 'Beef PotStickers', 
            pictureURL: 'http://dididumpling.eatintakeout.net/media/3557/3.jpg?width=1080&height=1080', 
            quantity: 6, 
            description : 'Food was frozen and left out to ice. We have too many dumplings. Please take!', 
            expirationDate : 'October 24', 
            postDate: 'October 20', 
            distanceAway: .1,
            longitude: 40.740180,
            latitude: -73.984590
        },
        5 : {
            restaurantName : 'Haandi', 
            foodName: 'Lamb Biryani', 
            pictureURL: 'https://s3-media4.fl.yelpcdn.com/bphoto/NINedu2Pb6j3TXz_kd3cCQ/o.jpg', 
            quantity: 1, 
            description : 'No one picked up their order. Left overs are still fresh and warm and untouched. Do not want it to go to waste!', 
            expirationDate : 'October 21', 
            postDate: 'October 19', 
            distanceAway: .2,
            longitude: 40.742400,
            latitude: -73.982340
        },
        6 : {
            restaurantName: 'Tacombi', 
            foodName: 'Fish Tacos', 
            pictureURL: 'https://s3-media1.fl.yelpcdn.com/bphoto/KpC1h8QFhBFXJfENxuZ6ZQ/o.jpg', 
            quantity: 2, 
            description : 'Just got cooked up, but customers cancelled their order. We do not want these to go to waste!', 
            expirationDate : 'October 21', 
            postDate: 'October 20', 
            distanceAway: .5,
            longitude: 40.742670,
            latitude: -73.990330
        },
        7 : {
            restaurantName: 'Zuma NYC', 
            foodName: 'Corn on Cob', 
            pictureURL: 'https://s3-media4.fl.yelpcdn.com/bphoto/tgKHteMZvAqGRfR6KVf1BQ/o.jpg', 
            quantity: 10, 
            description : 'No one picked up their order. Left overs are still fresh and warm and untouched. Do not want it to go to waste!', 
            expirationDate : 'October 20', 
            postDate: 'October 20', 
            distanceAway: .7,
            longitude: 40.750420,
            latitude: -73.980621
        },
        8 : {
            restaurantName: 'miss KOREA BBQ', 
            foodName: 'Beef', 
            pictureURL: 'https://s3-media4.fl.yelpcdn.com/bphoto/_RplZ_hTmM9trnhgJlQsMQ/o.jpg', 
            quantity: 10, 
            description : 'Beef is still fresh and left over from today. We do not like to use day old meat for tomorrow, but it will stil be good to eat. Someone pick it up!', 
            expirationDate : 'October 22', 
            postDate: 'October 20', 
            distanceAway: .5,
            longitude: 40.747230,
            latitude: -73.986480
        },
        9 : {
            restaurantName: 'Jackson Hole Burgers', 
            foodName: 'Bacon and Fries', 
            pictureURL: 'https://s3-media2.fl.yelpcdn.com/bphoto/LG_dFiqNKg1L2v25qSLdwQ/o.jpg', 
            quantity: 2, 
            description : 'The customers orderd the food, but left and paid for the check before receiving it. The food is still warm and good for the next day!', 
            expirationDate : 'October 22', 
            postDate: 'October 21', 
            distanceAway: .5,
            longitude: 40.746140,
            latitude: -73.977478
        }
    }

    return {
        type: FETCH_FEED,
        payload: feedData
    }
}