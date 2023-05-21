import * as yup from 'yup';

export const validationSchemaStep1 = yup.object().shape({
  email: yup.string().email('Неверный формат email').required('Обязательное поле'),
  login: yup.string().required('Обязательное поле'),
  name: yup.string().required('Обязательное поле'),
  lastName: yup.string().required('Обязательное поле'),
});

export const validationSchemaStep2 = yup.object().shape({
  phoneNumber: yup.string().required('Обязательное поле'),
  password: yup.string().required('Обязательное поле').min(5, 'Минимум 5 символов'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Пароль не совпадает')
    .required('Обязательное поле'),
});

export const validationSchemas = [validationSchemaStep1, validationSchemaStep2];
