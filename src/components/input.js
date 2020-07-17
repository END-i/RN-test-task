import React from 'react';
import { TextInput, Text, View } from 'react-native';
import styled from 'styled-components/native';

const Input = styled(TextInput)`
  background: #fff;
  color: #000;
  border-color: ${({ error }) => (error ? '#f7737380' : '#ccc')};
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  font-size: 13px;
  width: 100%;
  line-height: 14px;
  padding: 7px 11px;
`;
const ErrorInput = styled(Text)`
  color: #f77171;
  min-height: 20px;
`;
const InputWrapper = styled(View)`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 80%;
`;

export default function ({ error = '', type = 'text', ...rest }) {
  return (
    <InputWrapper>
      <Input error={error} {...rest} />
      <ErrorInput>{error}</ErrorInput>
    </InputWrapper>
  );
}
