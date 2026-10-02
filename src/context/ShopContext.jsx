import{ createContext } from "react";
import {products} from "../assets/frontend_assets/assets";
export const shopContext = createContext();

const ShopContextProvider = (props)=>{

const currency='$';
const deliveryfee=10;


    const shopContextValue = {  
        products,
        currency,
        deliveryfee  
    };  

    return (
        <shopContext.Provider value={shopContextValue}>
            {props.children}
        </shopContext.Provider>
    );
}

export default ShopContextProvider;