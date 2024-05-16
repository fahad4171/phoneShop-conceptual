import Rating from "react-rating";
import { Link } from "react-router-dom";


const PhonesCard = ({ phone }) => {
    console.log(phone)

    const { brand_name, id, image, phone_name, price, rating } = phone || {}

    return (
        <div>
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
                    <img
                        src={image}
                        alt="card-image" className="object-cover w-full h-full" />
                </div>
                <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                        <p className="bg-green-500 rounded px-1 block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                            {brand_name}
                        </p>
                        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                            ${price}
                        </p>
                    </div>
                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                        {phone_name}
                    </p>
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                        <Rating initialRating={rating}
                            readonly
                        />
                    </p>
                </div>
                <div className="p-6 pt-0">
                    <Link to={`/phones/${id}`}>
                        <button
                            className="bg-gray-300 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                            type="button">
                            See Details
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default PhonesCard;