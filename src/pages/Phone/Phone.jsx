import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PhoneCard from "./PhoneCard";


const Phone = () => {

    const [phone, setPhone] = useState();

    const { id } = useParams();

    const phones = useLoaderData();

    /* with 'find loop' we will find id of each phone. if id of 'clicked' items matches with it, it will give us the details of that item. and show on the Ui */
    useEffect(() => {
        const findPhone = phones?.find(phone => phone.id === id);

        setPhone(findPhone)

    }, [id, phones]);

    /* showing details of clicked id in UI (we can show it here but for cleanliness we create card in another component and sending phone details as props from here*/
    return (
        <div>
            <PhoneCard phone={phone}></PhoneCard>
        </div>
    );
};

export default Phone;