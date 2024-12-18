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

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        try {
          const response = await fetch(
            "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
          );
      
          // Check if the response is not ok (i.e., 2xx status)
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
      
          const json = await response.json();
          console.log(json);
          setlistofRestaurants(json.data.cards[2].data.data.cards); 
        } catch (error) {
          console.error("Error fetching restaurant data:", error);
          alert("Failed to fetch restaurant data. Please try again later.");
        }
      };



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