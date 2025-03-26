import * as yup from 'yup';
export const schemaregister = yup.object().shape({
    username: yup
        .string()
        .required('Username is required')
        .min(3, 'Username is too short - should be 3 chars minimum.'),
    
    email: yup
        .string()
        .email('Invalid email format ')
        .required('Email is required'),
    
    password: yup
        .string()
        .required('No password provided.') 
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter.')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter.')
        .matches(/[0-9]/, 'Password must contain at least one number.')
        .matches(/[\W_]/, 'Password must contain at least one special character.'),
    
    confirmpassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Password confirm is required'),
    tandc: yup.boolean()
        .oneOf([true], "You must accept the terms and conditions")

})