import * as z from "zod";
export const validateImageFile = () => {
  const maxUploadSize = 1024 * 1024;
  const acceptedFile = ["image/"];
  return z
    .instanceof(File)
    .refine((file) => {
      return !file || file.size <= maxUploadSize;
    }, `File size must be less then 1mb`)
    .refine((file) => {
      return !file || acceptedFile.some((type) => file.type.startsWith(type));
    }, `File must be an image`);
};

export const imageSchema = z.object({
  image: validateImageFile(),
});

export function validateWithZodSchema<T>(schema: z.ZodSchema<T>, data: any): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errors = result.error.errors.map((err) => err.message);
    console.log(errors);
    throw new Error(errors.join(","));
  }
  return result.data;
}

export const tourSchema = z.object({
  name: z.string().min(3),
  price: z.coerce
    .number()
    .int()
    .min(0, { message: "price must be a positive number" }),
  info: z.string(),
});
