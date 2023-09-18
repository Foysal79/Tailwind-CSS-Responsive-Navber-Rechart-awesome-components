import { AiFillCheckCircle } from "react-icons/ai";

const Feature = ({feature}) => {
    return (
        <div>
            <p className=" flex items-center gap-2"> <AiFillCheckCircle className="text-green-400"></AiFillCheckCircle> {feature}</p>
        </div>
    );
};

export default Feature;