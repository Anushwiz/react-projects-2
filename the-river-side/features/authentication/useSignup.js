import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      console.log(user);
      toast.success(
        "Sign up of new user Successfull, please verify it by signing in by new user's credentials"
      );
    },
    onError: () => {
      toast.error("problem in singup");
    },
  });

  return { signup, isLoading };
}
