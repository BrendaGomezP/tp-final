import { z } from "zod";

const authSchema = z.object({
    name: z.string(),
    startDate: z.string().date(), 
    endDate: z.string().date(),
  }).strict();

export function authValidator(data) {
    const auth = authSchema.safeParse(data)    
    return auth 
}