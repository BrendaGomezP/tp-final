import { z } from "zod";

const subjectSchema = z
  .object({
    name: z.string(),
    startDate: z.string().date(),
    endDate: z.string().date(),
  })
  .strict();

export function subjectValidator(data) {
  const subject = subjectSchema.safeParse(data);
  return subject;
}

const updateSubject = z
  .object({
    name: z.string().optional(),
    startDate: z.string().date().optional(),
    endDate: z.string().date().optional(),
  })
  .strict();

export function updateValidator(data) {
  const subject = updateSubject.safeParse(data);
  return subject;
}
