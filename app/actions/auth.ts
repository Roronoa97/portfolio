"use server";

import { FormState, SignInFormSchema } from "@/app/lib/definitions";
import { authenticate } from "@/app/lib/auth";
import { createSession } from "../lib/session";
import { redirect } from "next/navigation";

export async function signin(state: FormState, formData: FormData) {
    // Validate form fields
    const validatedFields = SignInFormSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password'),
    })

    //  If any form fields are invalid, return early
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const authenticatedUser = authenticate(validatedFields.data)

    if (!authenticatedUser) {
        return { message: "Invalid email or password" }
    }

    await createSession(authenticatedUser.id)

    redirect("/dashboard");
}
