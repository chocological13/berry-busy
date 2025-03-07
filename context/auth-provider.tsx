"use client"
import { supabase } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import {createContext, useContext, useEffect, useState} from "react";

const AuthContext = createContext<{ user: any } | null>(null);

export const AuthProvider = ({children}:{children:React.ReactNode}) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const getUser = async() => {
            const { data : {session} } = await supabase.auth.getSession();
            setUser(session?.user || null);
        };

        getUser();

        const {data : authListener} = supabase.auth.onAuthStateChange(
            (_event, session) => {
                setUser(session?.user || null);
            }
        )

        return () => {
            authListener.subscription.unsubscribe();
        }

    }, []);

    return (
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuthContext must be used within an AuthProvider");
    return context;
}