import * as yup from 'yup';

export const validationSchemas = [
  yup.object().shape({
    email: yup.string().email('Неверный формат email').required('Обязательное поле'),
    login: yup.string().required('Обязательное поле'),
    name: yup.string().required('Обязательное поле'),
    lastName: yup.string().required('Обязательное поле'),
  }),
  yup.object().shape({
    phoneNumber: yup.string().required('Обязательное поле'),
    password: yup.string().required('Обязательное поле').min(5, 'Минимум 5 символов'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Пароль не совподает')
      .required('Обязательное поле'),
  }),
];
