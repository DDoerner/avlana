/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { redirect } from '@sveltejs/kit'
// import { generateUsername } from '$lib/utils.ts'


export const actions = {
    login: async ({ locals, request }) => {
        const data = Object.fromEntries(await request.formData());

        const authData = await locals.pb.collection('users').authWithPassword(
            data.email,
            data.password,
        );

        console.log(locals.pb.authStore.isValid);
        console.log(locals.pb.authStore.token);
        console.log(locals.pb.authStore.model.id);

        throw redirect(303, `/${authData.record.id}`)
    }
}
