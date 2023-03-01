import { createContext, useState } from "react";

type UserContextProps = {
    children: JSX.Element | JSX.Element[];
}

export interface IUserContext {
    currentFace: number;
    setCurrentFace: Function;
    currentQuantity: number;
    setCurrentQuantity: Function;
}

const defaultUserValue = () => {
    const [currentFace, setCurrentFace] = useState(1);
    const [currentQuantity, setCurrentQuantity] = useState(6);

    return {
        currentFace,
        setCurrentFace,
        currentQuantity,
        setCurrentQuantity
    }
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserContextProvider = ({ children }: UserContextProps) => {
    return (<UserContext.Provider value={defaultUserValue()}>
        {children}
    </UserContext.Provider>);
}