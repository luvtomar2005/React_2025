import { useEffect  , useState} from "react";
/* AS WE KNOW FOR CREATING ANY HOOK WE DECIDE WHAT THE CONTRACT FOR THE
PROGRAM MEANS WHAT IS THE INPUT AND OUTPUT OF THE PROGRAM SO IN THIS WE DON'T 
HAVE TO WORRRY ABOUT THE INPUT AND THE OUTPUT BECAUSE THIS PROGRAM ONLY CARE ABOUT THE ONLINE OR OFFLINE STATUS */
const useOnlineStatus = () => {
    const [onlineStatus , setOnlineStatus] = useState(true);
    // check if online -> we will use a eventlistener
    useEffect(() => {
        window.addEventListener("offline" , () => {
            setOnlineStatus(false);
        });
        window.addEventListener("online" , () => {
            setOnlineStatus(true);
        })
    } , []);

    // boolean value
    return onlineStatus;
}

export default useOnlineStatus;