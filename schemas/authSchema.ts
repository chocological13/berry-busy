import { z } from "zod";

export const formSchema = z.object({
  email: z.string().min(1, { message: "Email must be provided" }).email({
    message: "Must be a valid email",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters long",
  }),
});

export type FormSchemaType = z.infer<typeof formSchema>;
