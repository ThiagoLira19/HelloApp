import React, {createContext, useState, useEffect, use} from "react";
import auth from '@react-native-firebase/auth';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const usuario = auth().onAuthStateChanged(
            user => {
                if (user) {
                    setUserId(user.uid);
                }else{
                    setUserId(null)
                }
            }
        );
        return () => usuario();
    }, []);

    return (
        <AuthContext.Provider value={userId}>
            {children}
        </AuthContext.Provider>
    );
}
