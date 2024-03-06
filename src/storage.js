import { useEffect, useState } from "react";

//add a local storage 
const NAME = '-code-pen'

export default function useLocalStorage(key, initialValue) {
    const codeKey = key + NAME;

    // exist cook
    const [ value, setValue ] = useState(()=> {

        const jsonValue = localStorage.getItem( codeKey )
        if ( jsonValue != null ) return JSON.parse(jsonValue)

        if( typeof initialValue === 'function'){
            return initialValue()
        }
        else{
            return initialValue
        }
    })

    useEffect(()=> {
        localStorage.setItem(codeKey, JSON.stringify(value))
    }, [ codeKey, value])
    return [ value, setValue]

}