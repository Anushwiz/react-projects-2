import { useQueryClient, useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createUpdateCabin } from "../../services/apiCabins";
export function useUpdateCabin() {
  const queryClient = useQueryClient();
  //for editing the cabin
  const { mutate: updateCabin, isLoading: isUdating } = useMutation({
    //here we could pass only one param hence using arrow fun where we will distructure the data from 'onSubmit' function below & then calling our fun with those 2 params :)
    mutationFn: ({ newCabinData, id }) => createUpdateCabin(newCabinData, id),
    onSuccess: () => {
      console.log("entered edit function");
      toast.success(`Cabin Edited Successfully`);
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUdating, updateCabin };
}
