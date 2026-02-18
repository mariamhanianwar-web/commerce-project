import * as z from "zod";
export const schema= z.object({
    name:z
    .string()
    .nonempty("this field required")
    .min(3, "min length must be at least 3 char")
    .max(10,"max length must be 10 char"),
    email: z
  .string()
  .nonempty("this field required")
  .email("invalid mail"),
    password:z.string().nonempty("This field required").min(6,'password required'),
    rePassword:z.string(),
    phone:z.string().regex(/^01[0125][0-9]{8}$/)
})
.refine((object) => object.password === object.rePassword, {
  path: ['rePassword'],
  message: 'password and repassword must be same'
})

