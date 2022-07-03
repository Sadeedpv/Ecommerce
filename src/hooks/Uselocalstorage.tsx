import { useEffect, useState } from "react";

export function uselocalstorage<T>(key:string, initialValue:T | (() => T)){
    const [value, setvalue] = useState<T>(() => {
        const jsonvalue = localStorage.getItem(key);
        if (jsonvalue != null){
            return JSON.parse(jsonvalue);
        }
        if(typeof initialValue == 'function'){
            return (initialValue as () => T)();
        }else{
            return initialValue
        }
    })

    useEffect(() =>{
        localStorage.setItem(key, JSON.stringify(value));
    }, [key,value])

    return [value, setvalue] as [typeof value, typeof setvalue];

}