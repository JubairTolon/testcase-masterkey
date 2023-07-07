import { useEffect, useState } from "react";
import Hotdeals from "./Hotdeals";


const Home = () => {
    const [data, setData] = useState();

    useEffect(() => {
        const dataFetch = async () => {
            const data = await (
                await fetch(
                    "https://api.hiring.masterkey.tech/api/v1/products?product_type=hot deals for you"
                )
            ).json();

            setData(data);
        };
        dataFetch();
    }, []);

    return (
        <div>
            <Hotdeals products={data?.products[0].productData}></Hotdeals>
        </div>
    );
};

export default Home;