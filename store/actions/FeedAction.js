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
            expirationDate : 'aasa', 
            postDate: 213123123, 
            distanceAway: 232321,
            longitude: 21321321,
            latitude:312312312
        },
        // 4 : {
        //     restaurantName, 
        //     foodName: 'Pad Thai', 
        //     pictureURL: 'https://s3-media3.fl.yelpcdn.com/bphoto/eew6imY5oO0qcpENpFRCEw/258s.jpg', 
        //     quantity: 4, 
        //     description : 'No one picked up their order. Left overs are still fresh and warm and untouched. Do not want it to go to waste!', 
        //     expirationDate : '', 
        //     postDate: , 
        //     distanceAway: ,
        //     longitude: ,
        //     latitude:
        // },
        // 5 : {
        //     restaurantName, 
        //     foodName: 'Pad Thai', 
        //     pictureURL: 'https://s3-media3.fl.yelpcdn.com/bphoto/eew6imY5oO0qcpENpFRCEw/258s.jpg', 
        //     quantity: 4, 
        //     description : 'No one picked up their order. Left overs are still fresh and warm and untouched. Do not want it to go to waste!', 
        //     expirationDate : '', 
        //     postDate: , 
        //     distanceAway: ,
        //     longitude: ,
        //     latitude:
        // },
        // 6 : {
        //     restaurantName, 
        //     foodName: 'Pad Thai', 
        //     pictureURL: 'https://s3-media3.fl.yelpcdn.com/bphoto/eew6imY5oO0qcpENpFRCEw/258s.jpg', 
        //     quantity: 4, 
        //     description : 'No one picked up their order. Left overs are still fresh and warm and untouched. Do not want it to go to waste!', 
        //     expirationDate : '', 
        //     postDate: , 
        //     distanceAway: ,
        //     longitude: ,
        //     latitude:
        // },
        // 7 : {
        //     restaurantName, 
        //     foodName: 'Pad Thai', 
        //     pictureURL: 'https://s3-media3.fl.yelpcdn.com/bphoto/eew6imY5oO0qcpENpFRCEw/258s.jpg', 
        //     quantity: 4, 
        //     description : 'No one picked up their order. Left overs are still fresh and warm and untouched. Do not want it to go to waste!', 
        //     expirationDate : '', 
        //     postDate: , 
        //     distanceAway: ,
        //     longitude: ,
        //     latitude:
        // },
        // 8 : {
        //     restaurantName, 
        //     foodName: 'Pad Thai', 
        //     pictureURL: 'https://s3-media3.fl.yelpcdn.com/bphoto/eew6imY5oO0qcpENpFRCEw/258s.jpg', 
        //     quantity: 4, 
        //     description : 'No one picked up their order. Left overs are still fresh and warm and untouched. Do not want it to go to waste!', 
        //     expirationDate : '', 
        //     postDate: , 
        //     distanceAway: ,
        //     longitude: ,
        //     latitude:
        // },
        // 9 : {
        //     restaurantName, 
        //     foodName: 'Pad Thai', 
        //     pictureURL: 'https://s3-media3.fl.yelpcdn.com/bphoto/eew6imY5oO0qcpENpFRCEw/258s.jpg', 
        //     quantity: 4, 
        //     description : 'No one picked up their order. Left overs are still fresh and warm and untouched. Do not want it to go to waste!', 
        //     expirationDate : '', 
        //     postDate: , 
        //     distanceAway: ,
        //     longitude: ,
        //     latitude:
        // },
        // 10 : {
        //     restaurantName, 
        //     foodName: 'Pad Thai', 
        //     pictureURL: 'https://s3-media3.fl.yelpcdn.com/bphoto/eew6imY5oO0qcpENpFRCEw/258s.jpg', 
        //     quantity: 4, 
        //     description : 'No one picked up their order. Left overs are still fresh and warm and untouched. Do not want it to go to waste!', 
        //     expirationDate : '', 
        //     postDate: , 
        //     distanceAway: ,
        //     longitude: ,
        //     latitude:
        // },
        // 11 : {
        //     restaurantName, 
        //     foodName: 'Pad Thai', 
        //     pictureURL: 'https://s3-media3.fl.yelpcdn.com/bphoto/eew6imY5oO0qcpENpFRCEw/258s.jpg', 
        //     quantity: 4, 
        //     description : 'No one picked up their order. Left overs are still fresh and warm and untouched. Do not want it to go to waste!', 
        //     expirationDate : '', 
        //     postDate: , 
        //     distanceAway: ,
        //     longitude: ,
        //     latitude:
        // },
        // 12 : {
        //     restaurantName, 
        //     foodName: 'Pad Thai', 
        //     pictureURL: 'https://s3-media3.fl.yelpcdn.com/bphoto/eew6imY5oO0qcpENpFRCEw/258s.jpg', 
        //     quantity: 4, 
        //     description : 'No one picked up their order. Left overs are still fresh and warm and untouched. Do not want it to go to waste!', 
        //     expirationDate : '', 
        //     postDate: , 
        //     distanceAway: ,
        //     longitude: ,
        //     latitude:
        // },
        // 13 : {
        //     restaurantName, 
        //     foodName: 'Pad Thai', 
        //     pictureURL: 'https://s3-media3.fl.yelpcdn.com/bphoto/eew6imY5oO0qcpENpFRCEw/258s.jpg', 
        //     quantity: 4, 
        //     description : 'No one picked up their order. Left overs are still fresh and warm and untouched. Do not want it to go to waste!', 
        //     expirationDate : '', 
        //     postDate: , 
        //     distanceAway: ,
        //     longitude: ,
        //     latitude:
        // },
        // 14 : {
        //     restaurantName, 
        //     foodName: 'Pad Thai', 
        //     pictureURL: 'https://s3-media3.fl.yelpcdn.com/bphoto/eew6imY5oO0qcpENpFRCEw/258s.jpg', 
        //     quantity: 4, 
        //     description : 'No one picked up their order. Left overs are still fresh and warm and untouched. Do not want it to go to waste!', 
        //     expirationDate : '', 
        //     postDate: , 
        //     distanceAway: ,
        //     longitude: ,
        //     latitude:
        // }

        
    }
}