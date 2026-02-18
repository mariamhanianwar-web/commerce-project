import * as z from "zod";
export const schemaaa = z.object({
    email:z.email('invalid mail').nonempty("this field required"),
    password:z.string().nonempty("This field required").min(6,'password required'),
})

