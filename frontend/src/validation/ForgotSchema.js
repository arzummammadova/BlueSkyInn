import * as yup from 'yup';
export const schemaforgot = yup.object().shape({
    email: yup
        .string()
        .email('Invalid email format ')
        .required('Email is required')
})