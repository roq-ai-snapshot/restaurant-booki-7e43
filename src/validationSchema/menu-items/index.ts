import * as yup from 'yup';

export const menuItemValidationSchema = yup.object().shape({
  menu_id: yup.string().nullable().required(),
});
