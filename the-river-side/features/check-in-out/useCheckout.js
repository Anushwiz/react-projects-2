import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useCheckout() {
  const queryClient = useQueryClient();

  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),

    onSuccess: (data) => {
      toast.success(` Booking #${data.id} Successfully checked Out`);
      //instead of passing quetKey below we pass active:true which will invalidate all the currect active queries, so no need to remember query name :)
      queryClient.invalidateQueries({ active: true });
    },

    onError: () => toast.error("There was an error while checking Out"),
  });

  return { checkout, isCheckingOut };
}
