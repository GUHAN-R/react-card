
import {FoodCard} from './FoodCard';
import Briyani from './Assests/Briyani.jpg';
import ChickenRice from './Assests/Chicken_Rice.jpg';
import Chicken65 from './Assests/Chicken_65.jpg';

const Menu = [
    {image:Briyani,
     time:"25 min",
     km:5,
     food:"Briyani",
     rating: "3.6",
     hotelname: "Kongu panju parota",
     price: "$120",
     offer: "30% flat offer",
},
{
    image:ChickenRice,
     time:"20 min",
     km:3,
     food:"Chicken Rice",
     rating: "4.0",
     hotelname: "Kumar mess",
     price: "$100",
     offer: "20% flat offer",

},
{
    image:Chicken65,
     time:"10 min",
     km:5,
     food:"Chicken 65",
     rating: "3.8",
     hotelname: "Amman mess",
     price: "$60",
     offer: "40% flat offer",
},

];

export const FoodMenu = () =>{
    return (
        <>
            {Menu.map((item,index)=>(
            <FoodCard key={index} image={item.image} time={item.time} km = {item.km} food={item.food} rating={item.rating} hotelname={item.hotelname} price={item.price} offer={item.offer} />
            ))}
        </>
        
        
    );
};