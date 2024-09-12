import { useQueryClient, useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: ({ user }) => {
      toast.success(`Updated User data Successfully`);
      //this will set the user data to the cache memory of react-query
      queryClient.setQueryData(["user"], user);
      /* queryClient.invalidateQueries({
        queryKey: ["user"],
      }); */
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUdating, updateUser };
}
