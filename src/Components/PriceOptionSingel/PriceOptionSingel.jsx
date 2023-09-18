import Feature from "../Feature/Feature";


const PriceOptionSingel = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className="bg-blue-500 rounded-lg p-4 text-white text-center flex flex-col">
            <h2>
                <span className="text-7xl font-extrabold">
                     {price}
                </span>
                <span className="text-2xl">
                    /Month
                </span>
            </h2>
            <h4 className="text-3xl my-4">
                {name}
            </h4>
            <div className="pl-6 flex-grow">
            {
                features.map((feature, index) => <Feature key={index} feature={feature}></Feature>  )
            }
            </div>
               <button className="mt-12 bg-green-600 w-full py-2 font-bold rounded-lg ">Buy Now</button>
        </div>
    );
};

export default PriceOptionSingel;