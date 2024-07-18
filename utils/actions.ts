"use server";
import db from "./db";
import { uploadImage } from "./supabase";
import { redirect } from "next/navigation";
import { imageSchema, tourSchema, validateWithZodSchema } from "./schemas";
import { revalidatePath } from "next/cache";

const renderError = (error: unknown): { message: string } => {
  console.log(error);
  return {
    message: error instanceof Error ? error.message : "an error occurred",
  };
};

export const createTour = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  try {
    const rawData = Object.fromEntries(formData);
    const image = formData.get("image") as File;
    const validatedFields = validateWithZodSchema(tourSchema, rawData);
    const validatedFile = validateWithZodSchema(imageSchema, { image });
    const fullPath = await uploadImage(validatedFile.image);
    await db.tours.create({
      data: { ...validatedFields, image: fullPath },
    });
  } catch (error) {
    // console.log(error);
    return renderError(error);
  }
  redirect("/");
};

export const fetchToursAction = async () => {
  try {
    const tours = await db.tours.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return tours;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const singleTour = async (id: string) => {
  const tours = await db.tours.findUnique({
    where: { id },
  });
  return tours;
};

export const deleteTour = async (formData: FormData) => {
  const id = formData.get("id") as string;
  try {
    await db.tours.delete({
      where: {
        id,
      },
    });
    revalidatePath("/");
    return { message: "Tour deleted..." };
  } catch (error) {
    return renderError(error);
  }
};

export const updateTour = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const id = formData.get("id") as string;
  try {
    const rawData = Object.fromEntries(formData);
    const validatedFields = validateWithZodSchema(tourSchema, rawData);
    await db.tours.update({
      where: {
        id,
      },
      data: {
        ...validatedFields,
      },
    });
  } catch (error) {
    return renderError(error);
  }
  redirect("/");
};

export const updateTourImageAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const image = formData.get("image") as File;
  const id = formData.get("id") as string;
  const validatedFields = validateWithZodSchema(imageSchema, { image });
  const fullPath = await uploadImage(validatedFields.image);
  try {
    await db.tours.update({
      where: {
        id,
      },
      data: {
        image: fullPath,
      },
    });
    revalidatePath(`/tours/${id}/edit`);
    return { message: "Image updated successfully." };
  } catch (error) {
    return renderError(error);
  }
};
