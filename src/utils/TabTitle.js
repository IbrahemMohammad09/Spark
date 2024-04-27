import { useEffect } from "react"

const TabTitle = (newTitle)=> {
    useEffect(()=>{
        document.title= newTitle;
    },[newTitle]);
    return null
}

export default TabTitle