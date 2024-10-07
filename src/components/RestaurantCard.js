import {CDN_URL} from "../utils/constant";

const RestaurantCard=(props)=>{
    const {resData}=props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,deliveryTime} = resData?.info;
    return(
        <div className="res-card" style={{ backgroundColor:"#f0f0f0"}}>
            <img className="res-logo" alt="res-logo" src={CDN_URL + cloudinaryImageId}/>
            <h3>{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{avgRating} stars</h5>
            <h5>{costForTwo}</h5>
            <h5>{deliveryTime} minutes</h5>
        </div>
    );
};

export default RestaurantCard;