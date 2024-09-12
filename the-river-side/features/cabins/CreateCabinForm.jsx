/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
import { useCreateCabin } from "./useCreateCabin";
import { useUpdateCabin } from "./useUpdateCabin";

function CreateCabinForm({ cabinToEdit = {}, onCloseModal }) {
  const { id: editId, ...editValues } = cabinToEdit;
  //state for checking whether form is for editing or not
  const isEditSession = Boolean(editId);
  //adding the previous values in the form as ddfault values in edit mode otherwise keeping it empty by passing default value in useForm()
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  //formState will conatain all the forminput enclosed in object. below we are destructuring the data & giving name as errors
  const { errors } = formState;
  const { isCreating, createCabin } = useCreateCabin();
  const { isUpdating, updateCabin } = useUpdateCabin();

  const isWorking = isCreating || isUpdating;
  function onSubmit(data) {
    //checking whether we have uploaded the image or not in edit mode. if there is image uploaded it will be in array named image in data obj hence image: data.image[0] if no file uploaded (which will be only in edit mode) then image: data.image whch conatins the URLpath of image
    const image = typeof data.image === "string" ? data.image : data.image[0];
    //destructuring the input data as in above declaration of updateCabin function
    if (isEditSession)
      updateCabin(
        { newCabinData: { ...data, image }, id: editId },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
    //we not only pass the onSuccess handler in useMutaion() but also inside the mutate function call that was returned by the useMutation() by passing an object of options along with the actual data & the onSuccess handler will get access to the data which was returned in createEditCabin function i.e, the data which was created
    else
      createCabin(
        { ...data, image: image },
        {
          onSuccess: (/* data */) => {
            /*  console.log(data); */
            //this reset was provided from react-hook-form as the result og calling useForm hook
            reset();
            onCloseModal?.();
          },
        }
      );
  }
  function onError(/* error */) {
    /* console.log(error); */
  }
  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label={"Cabin name"} error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", {
            required: "This field is Required",
          })}
        />
      </FormRow>

      <FormRow label={"Maximum Capacity"} error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isWorking}
          {...register("maxCapacity", {
            required: "This field is Required",
            min: {
              value: 1,
              message: "Capacity should be atleast 1",
            },
          })}
        />
      </FormRow>

      <FormRow label={"Regular price"} error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isWorking}
          {...register("regularPrice", {
            required: "This field is Required",
            min: {
              value: 1,
              message: "Regular Price should be atleast 1",
            },
          })}
        />
      </FormRow>

      <FormRow label={"Discount"} error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          disabled={isWorking}
          defaultValue={0}
          {...register("discount", {
            required: "This field is Required",
            validate: (curVal) =>
              curVal <= getValues().regularPrice ||
              `Discount should be less than regular price`,
          })}
        />
      </FormRow>

      <FormRow
        label={"Description for website"}
        error={errors?.description?.message}
      >
        <Textarea
          type="text"
          id="description"
          disabled={isWorking}
          defaultValue=""
          {...register("description", {
            required: "This field is Required",
          })}
        />
      </FormRow>

      <FormRow label={"Cabin photo"}>
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: isEditSession ? false : "This field is Required",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isEditSession ? "Edit Cabin" : "create new cabin"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
