import RestaurantCard from "./RestaurantCard";
import {useState, useEffect} from "react";


const Body =()=>{

//Local State Variable
const [listofRestaurants, setlistofRestaurants] =useState([{
    "info": {
        "id": "258199",
        "name": "Great Indian Khichdi by EatFit",
        "cloudinaryImageId": "6e44fd7f1e5cd9967edfe47c10247671",
        "costForTwo": "₹200 for two",
        "cuisines": [
            "Home Food",
            "Indian",
            "North Indian",
            "Healthy Food",
            "Snacks",
            "Desserts",
            "Rajasthani",
            "South Indian",
            "Maharashtrian",
            "Sweets"
        ],
        "avgRating": 4.5,
        "deliveryTime": 34,
},
},
{
    "info": {
        "id": "258769",
        "name": "Dominos",
        "cloudinaryImageId": "6e44fd7f1e5cd9967edfe47c10247671",
        "costForTwo": "₹200 for two",
        "cuisines": [
            "Pizza"
        ],
        "avgRating": 3.9,
        "deliveryTime": 34,
    },
},
{
    "info": {
        "id": "253499",
        "name": "KFC",
        "cloudinaryImageId": "6e44fd7f1e5cd9967edfe47c10247671",
        "costForTwo": "₹200 for two",
        "cuisines": [
            "Burger",
            "Fast Food"
        ],
        "avgRating": 3.7,
        "deliveryTime": 34,
},
},
]);

useEffect();

    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{const filteredList=listofRestaurants.filter(
                    (res)=> res.info.avgRating > 4
                );
                setlistofRestaurants(filteredList);
                }}>Top Rated Restaurants</button>
            </div>

            <div className="res-container">
                {listofRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
                
            </div>
            
        </div>

    );
};

export default Body;