import { z } from "zod";

const authSchema = z
  .object({
    username: z
      .string({
        required_error: "El nombre de usuario es requerido",
      })
      .min(5, {
        message: "El nombre de usuario debe tener un MÍNIMO de 5 caracteres",
      })
      .max(20, {
        message: "El nombre de usuario debe tener un MAXIMO de 20 caracteres",
      }),
    fullname: z
      .string({
        required_error: "El nombre es requerido",
      })
      .min(5, {
        message: "El nombre y apellido debe tener un MÍNIMO de 5 caracteres",
      })
      .max(20, {
        message: "El nombre  y apellido debe tener un MAXIMO de 20 caracteres",
      }),
    password: z
      .string({
        required_error: "La contraseña es requerida",
      })
      .min(8, { message: "La contraseña debe tener un MÍNIMO de 8 caracteres" })
      .max(20, {
        message: "La contraseña debe tener un MAXIMO de 20 caracteres",
      })
      .refine((value) => /[a-z]/.test(value), {
        message: "La contraseña debe contener al menos una letra minúscula",
      })
      .refine((value) => /[A-Z]/.test(value), {
        message: "La contraseña debe contener al menos una letra mayúscula",
      })
      .refine((value) => /\d/.test(value), {
        message: "La contraseña debe contener al menos un número",
      })
      .refine((value) => /[!@#$%^&*(),.?":{}|<>]/.test(value), {
        message: "La contraseña debe contener al menos un carácter especial",
      }),
    email: z.string({ required_error: "El email es requerido" }).email(),
    birthdate: z
      .string({ required_error: "La fecha de nacimiento es requerida" })
      .date(),
    nationality: z.string({ required_error: "La nacionalidad es requerida" }),
  })
  .strict();

export function authValidator(data) {
  const auth = authSchema.safeParse(data);
  return auth;
}

const loginSchema = z
  .object({
    password: z
      .string({
        required_error: "La contraseña es requerida",
      })
      .min(8, { message: "La contraseña debe tener un MÍNIMO de 8 caracteres" })
      .max(20, {
        message: "La contraseña debe tener un MAXIMO de 20 caracteres",
      })
      .refine((value) => /[a-z]/.test(value), {
        message: "La contraseña debe contener al menos una letra minúscula",
      })
      .refine((value) => /[A-Z]/.test(value), {
        message: "La contraseña debe contener al menos una letra mayúscula",
      })
      .refine((value) => /\d/.test(value), {
        message: "La contraseña debe contener al menos un número",
      })
      .refine((value) => /[!@#$%^&*(),.?":{}|<>]/.test(value), {
        message: "La contraseña debe contener al menos un carácter especial",
      }),
    email: z.string({ required_error: "El email es requerido" }).email(),
  })
  .strict();

export function loginValidator(data) {
  const login = loginSchema.safeParse(data);
  return login;
}
