import { createContext, useState } from "react";



export const MyContext = createContext();

const AppContext =  ({children}) => {
    const [activeSlideIndex, setActiveSlindeIndex] = useState(0);

    const infos = {  activeSlideIndex, setActiveSlindeIndex };

    return (
        <div>
            <MyContext.Provider value={infos}>
                {children}
            </MyContext.Provider>
        </div>
    )
}

export default AppContext