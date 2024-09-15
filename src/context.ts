import { createContext, useContext } from "react";
import { detailsInfo } from "./constants";

export const Appcontext  = createContext<detailsInfo| undefined>(undefined);

export const useDetailsContext = () => {
    const details = useContext(Appcontext);

    if(details === undefined) {
        throw new Error("useDetailsContext must be used with a DashboardContext ");
    }

    return details;
}