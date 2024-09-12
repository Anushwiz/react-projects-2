import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.log(error);
    throw new Error(`Cabins could not br loaded`);
  }
  return data;
}

export async function createUpdateCabin(newCabin, id) {
  //we have 2 situation as we have made file upload optional in edit mode hence 1) we have file or 2) we have urlpath starts with supabseURL of previously uploaded image hence we will check that one & set imagePath according to that
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  //if we upload image in edit form 'hasImagePath will be false as we will have image file instead of imagepath hence based on that we are creatinga new URL if file has been uploaded or just keep that URLPath if no file uploaded
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  //1. create/edit cabin

  let query = supabase.from("cabins"); // this part is required by both create & update so placed in a separate let variable
  // A) CREATE
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  // B) EDIT
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single(); //to return the created record we use select() & single() is for retuening one row  not an array of rows;
  if (error) {
    console.error(error);
    throw new Error(`Cabin could not br Created`);
  }
  //2. If no error upload the image
  if (hasImagePath) return data; // if there is imagePath no need to upload the image again

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  //3. delete the created cabin if error in uploading image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.log(storageError);
    throw new Error(
      `Cabin image could not be uploaded & new cabin was not created`
    );
  }
  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error(`Cabins could not br deleted`);
  }
  return data;
}
