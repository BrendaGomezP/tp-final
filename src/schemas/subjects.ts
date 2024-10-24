import { z } from "zod";

const subjectSchema = z.object({
    name: z.string(),
    startDate: z.string().date(), 
    endDate: z.string().date(),
  }).strict();

export function subjectValidator(data) {
    const subject = subjectSchema.safeParse(data)    
    return subject    
}