import { z } from "zod";

export const userSchema = z.object({
    name : z.string().min(1),
    email : z.string().email({message: "email is required"}),
    phoneNum : z.number().min(10),
});
