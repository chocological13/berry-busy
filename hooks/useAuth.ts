import { useState } from "react";
import { supabase } from "@/utils/supabase/client";
import { toast } from "sonner";
import { useAuthContext } from "@/context/auth-provider";

export const useAuth = () => {
  const { setUser } = useAuthContext();
  const [loading, setLoading] = useState<boolean>(false);
  const handleAuth = async (
    authMode: string,
    email: string,
    password: string,
  ) => {
    setLoading(true);
    try {
      let error;
      if (authMode == "signin") {
        const signInResponse = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        error = signInResponse.error;
      } else {
        const signUpResponse = await supabase.auth.signUp({
          email,
          password,
        });
        error = signUpResponse.error;
      }
      if (error) {
        throw error;
      } else {
        if (authMode == "signin") {
          toast.success("Signed in!!");
        } else {
          toast.success(
            "Success signing up! Check your email for confirmation!",
          );
        }
      }
    } catch (error: any) {
      console.error(error.message);
      toast.error("Authentication error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        throw error;
      } else {
        toast.success("Signed out! See you~");
      }
    } catch (error: any) {
      console.error(error.message);
      toast.error("Signing out failed: ", error.message());
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    handleAuth,
    signOut,
  };
};
