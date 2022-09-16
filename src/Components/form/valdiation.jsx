import * as yup from 'yup'
const schema = yup.object().shape({
    name: yup
        .string()
        .min(2, 'Minimum 2 characters')
        .lowercase()
        .required('Required field !'),
    surName: yup
        .string()
        .min(2, 'Minimum 2 characters')
        .lowercase()
        .required('Required field !'),
    lastName: yup
        .string()
        .min(2, 'Minimum 2 characters')
        .lowercase()
        .required('Required field !'),
    birthDate: yup
        .string()
        .required('Required field !'),
    email: yup
        .string()
        .email('Enter a valid email')
        .required('Required field !'),
    DDD: yup
        .string()
        .min(2, 'DDD invalid !')
        .max(2, 'DDD invalid !')
        .required('DDD invalid !'),
        
    tel: yup
        .string()
        .min(9, 'Enter 9 characters')
        .max(9, 'Enter 9 characters')
        .required('Required field !'),
    aboutLanguage: yup
        .string()
        .required('Required field !'),

});

export default schema;
