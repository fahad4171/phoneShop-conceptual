import { useEffect } from "react";
import { useState } from "react";
import FavoritesCard from "./FavoritesCard";

const Favorites = () => {

    const [favorites, setFavorites] = useState([]);

    const [NoFound, setNoFound] = useState(false);

    /* if 'see more' not clicked, by default value of this useState will be false */
    const [isShow, setIsShow] = useState(false)

    // using state to set total price of favorites item
    const [totalPrice, setTotalPrice] = useState(0);

    /* loading/getting saved items in local storage  here using useEffect*/
    useEffect(() => {
        const favoriteItems = JSON.parse(localStorage.getItem('favorites'));
        
        /* declaring a condition if there is no item available in "favoritesItems" */
        if (favoriteItems){
            setFavorites(favoriteItems)

            // using .reduce method to add all items inside favorite array
            const total = favoriteItems.reduce((PreValue, currentItem) =>  PreValue + currentItem.price, 0);

            const newTotal = total.toFixed(2);
            setTotalPrice(newTotal);
        }
        else{
            setNoFound("No data Found")
        }
    }, []);

    

    /* click on delete favorite, will clear the local storage, show empty favorite array, and also show "No data Found" */
    const HandleRemove = () =>{
        localStorage.clear();
        //updating value of state, so it renders latest value
        setFavorites([]);
        setNoFound("No data Found")
    }
    console.log(isShow)
    return (
        <div>
            {
                NoFound ? <p className="h-[80vh] flex justify-center items-center text-xl">{NoFound}</p>: 

               <div className="mt-6">
                {favorites.length > 0 && 
                <div>
                <button onClick={HandleRemove} className="px-5 bg-green-400 rounded block mx-auto">Delete all Favorites</button>  
                <h1 className="text-xl text-blue-600">Total Price: ${totalPrice}</h1>  
                </div>
                }

                {/* in default value of isShow is set false, when it is false it will show 2 items but when "see all" button clicked, value of isShow become true and shows all of the items */}
                 <div className="grid grid-cols-2 gap-5">
                    {
                        // when true
                        isShow ? favorites.map(phone => <FavoritesCard key={phone.id} phone={phone}></FavoritesCard>)
                        // when false 
                        : favorites.slice(0, 2).map(phone => <FavoritesCard key={phone.id} phone={phone}></FavoritesCard>)
                    }
                </div>
                    {/*with (!isShow) when button will clicked, it will be opposite of default value (true becomes false, click again and false become true) */}
                    {
                        favorites.length > 2 && <button onClick={()=> setIsShow(!isShow)} className="px-5 bg-green-400 rounded block mx-auto">
                        {isShow ? "See less" : "See more"}
                    </button>
                    }
               </div> 
        
            }
        </div>
    );
};

export default Favorites;