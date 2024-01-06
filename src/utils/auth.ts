import { navigate } from "gatsby"
import { supabase } from "./supabase";

export const useAuth = () => {
    const loginWithPassword = async(email: string, password: string) => {
        try{
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password
            });
            if (error) {
                throw new Error(error.message)
            }
            return data
        } catch (error) {
            console.error(error as Error)
            throw error;
        }
    }

    const isLogin = async () => {
        try {
            const { data: { user } , error} = await supabase.auth.getUser()
            if(error) navigate("/login")
            
        } catch (error) {
            console.error(error as Error)
        }
        

    }
    return {
        loginWithPassword,
        isLogin
    }
}
