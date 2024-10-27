import { z } from "zod";

const userSchema = z
  .object({
    username: z.string({
      required_error: "El nombre de usuario es requerido",
    }).min(5, { message: "El nombre de usuario debe tener un MÍNIMO de 5 caracteres" })
    .max(20, { message: "El nombre de usuario debe tener un MAXIMO de 20 caracteres" }).optional(),
    fullname: z.string({
      required_error: "El nombre es requerido",
    }).min(5, { message: "El nombre y apellido debe tener un MÍNIMO de 5 caracteres" })
    .max(20, { message: "El nombre  y apellido debe tener un MAXIMO de 20 caracteres" }).optional(),
    birthdate: z.string({required_error: "La fecha de nacimiento es requerida"}).date().optional(),
    nationality: z.string({required_error: "La nacionalidad es requerida"}).optional(),
  })
  .strict();

export function userValidator(data) {
  const user = userSchema.safeParse(data);
  return user;
}
