import { detailsInfo } from "./constants";

export const functions = (details: detailsInfo, date:Date) => {
    const dayList = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const monthList = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const day = dayList[date.getDay()];
    const month = monthList[date.getMonth()];
    let riseTime: string = "";
    let setTime: string = "";

    if(details.weather?.sys.sunrise !== undefined && details.weather?.sys.sunset !==undefined) {
        const sunrise  = new Date(details.weather?.sys.sunrise * 100);
        const sunset  = new Date(details.weather?.sys.sunset * 100);
        const riseHour = sunrise.getHours().toString();
        const riseMinutes = "0" + sunrise.getMinutes().toString();
        riseTime  = riseHour+": "+riseMinutes.substring(riseMinutes.length-2);
        const setHour = sunset.getHours().toString();
        const setMinutes = "0" + sunset.getMinutes().toString();
        setTime  = setHour+": "+setMinutes.substring(riseMinutes.length-2);
    }


    return [day, month, riseTime, setTime];

}
