import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';

import { useForm } from '../../common/hooks';
import { getData, storeData } from '../../common/utils';
import { Input } from '../../components';
import avatar from '../../assets/images/avatar.jpg';
import { Avatar, Button, ButtonText, Field, Label, ProfileValue } from './styled.js';

export default function () {
  const [edit, setEdit] = useState(false);

  useEffect(async () => {
    const data = await getData('@profile_data');
    if (data) {
      setValues(JSON.parse(data));
    }
  }, []);

  const onSubmit = (values) => {
    storeData('@profile_data', values);
    setEdit(false);
  };

  const showEditForm = () => {
    setEdit(true);
  };

  const { values, errors, touched, handleChange, handleBlur, handleSubmit, setValues } = useForm({
    initialValues: {
      username: '',
      email: '',
    },
    onSubmit,
  });

  const fields = [
    {
      label: 'Username',
      placeholder: 'username',
      name: 'username',
      type: 'text',
      required: true,
    },
    {
      label: 'E-mail',
      placeholder: 'example@mail.com',
      name: 'email',
      type: 'email',
      required: true,
    },
  ];

  const renderField = ({ label, name, type, placeholder }) => {
    if (edit) {
      return (
        <Input
          key={name}
          onChangeText={(text) => handleChange(name, text)}
          onBlur={() => handleBlur(name)}
          value={values[name]}
          error={touched[name] ? errors[name] : ''}
          {...{ placeholder, name, type }}
        />
      );
    }
    return (
      <Field key={name}>
        <Label>{label}:</Label>
        <ProfileValue key={name}>{values[name] || 'empty'}</ProfileValue>
      </Field>
    );
  };

  return (
    <SafeAreaView>
      <Avatar source={avatar} />
      {fields.map((props) => renderField(props))}
      <Button onPress={edit ? handleSubmit : showEditForm}>
        <ButtonText>{edit ? 'Save' : 'Edit'}</ButtonText>
      </Button>
    </SafeAreaView>
  );
}
