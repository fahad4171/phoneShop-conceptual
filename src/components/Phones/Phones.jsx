/* we will load the data of phones from <home> element in main.jsx and send the props here and receive it */

import PhonesCard from "./PhonesCard";

const Phones = ({phones}) => {
    
    //console.log(phones)

    return (
        <div className="mt-8">
            <h1 className="text-2xl text-center underline">All Category Phones</h1>
             {/* mapping or loop through to get each phone details */} 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {
                phones?.map(phone => <PhonesCard key={phone.id} phone={phone}></PhonesCard>)
            }


            {/* Note: we can also show the card directly here, while looping, like this:
            but for cleanliness we show create and show card on different file as a separate component.
                {
                phones?.map(phone => {
                    return(
                        <div> card </div>
                    )
                } )
            }
            */}
        </div>
        </div>

        
    );
};

export default Phones;