import { data } from "autoprefixer";
import axios from "axios";
import { useEffect, useState } from "react";

 

const Phone = () => {
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        axios.get("https://openapi.programming-hero.com/api/phones?search=iphone")
        .then(data =>{
            const phoneData = data.data.data;
            const phonesWithFakeData = phoneData.map(phone=>{
                const obj = {
                    name : phone.pnone_name,
                    price : parseInt(phone.slug.split('-')[1])
                }
                return obj;
            })
            setPhones(phonesWithFakeData);
        })
    },[])

    return (
        <div>
            
        </div>
    );
};

export default Phone;