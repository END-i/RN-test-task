import { useEffect, useState } from 'react';

import { UseFormProps } from './types';

export const useForm = ({ initialValues, onSubmit }: UseFormProps) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [onSubmitting, setOnSubmitting] = useState<boolean>(false);

  useEffect(() => {
    setTouched({});
    setOnSubmitting(false);
    setValues(initialValues);
  }, []);

  useEffect(() => {
    let i: string;
    for (i in values) {
      if (values[i]) {
        const value = values[i];
        const error: string | undefined = validation(i, value);
        setErrors((prev) => {
          if ((!error && prev[i]) || !error) {
            const newPrev: any = { ...prev };
            delete newPrev[i];
            return newPrev;
          }
          return { ...prev, [i]: error };
        });
      }
    }
  }, [values]);

  useEffect(() => {
    setOnSubmitting(!Object.keys(errors).length);
  }, [errors, touched]);

  const handleChange = (name: string, value: string) => {
    setValues({ ...values, [name]: value.replace(/\s+/g, ' ').trim() });
  };

  const handleBlur = (name: string) => {
    setTouched({ ...touched, [name]: true });
  };

  const handleSubmit = () => {
    const touchedField: { [key: string]: boolean } = {};
    for (let i in initialValues) {
      touchedField[i] = true;
    }
    setTouched(touchedField);

    if (onSubmitting) {
      onSubmit(values);
    }
  };

  return {
    values,
    setValues,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};

export const validation = (name: string, value: string) => {
  const rules: {
    [key: string]: {
      message: string;
      regex: RegExp;
    }[];
  } = {
    username: [
      { message: 'Name is too short', regex: /^.{2,}$/g },
      { message: 'Name is too long', regex: /^.{2,128}$/g },
      {
        message: 'Valid characters are a-z and 0-9',
        regex: /^[a-zA-Z0-9]{2,128}$/g,
      },
    ],
    email: [
      {
        message: 'Invalid Email',
        regex: /^([a-zA-Z0-9._+-]{2,})+@([a-zA-Z0-9.-]{2,})+\.[A-Za-z]{2,3}$/g,
      },
    ],
  };
  if (rules[name]) {
    for (let idx in rules[name]) {
      const { message, regex } = rules[name][idx];
      if (!value.match(regex)) {
        return message;
      }
    }
  }
};
