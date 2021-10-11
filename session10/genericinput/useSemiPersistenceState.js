import {useEffect,useState} from "react";

const useSemiPersistenceState=() => {
    const [state,setState]=useState(
        localStorage.getItem("state") || " "
 );

    useEffect(() => {
        localStorage.setItem("state",state);
    },[state]);

    return([state,setState]);
}

export default useSemiPersistenceState;