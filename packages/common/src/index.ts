import { z } from "zod";

export const signupSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string()
});
