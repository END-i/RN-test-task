import styled from 'styled-components/native';
import { Text, View, Image, TouchableOpacity } from 'react-native';

export const Avatar = styled(Image)`
  width: 100px;
  height: 100px;
  margin: 50px auto 20px;
  border-radius: 100px;
`;
export const Button = styled(TouchableOpacity)`
  width: 50%;
  margin: 0 auto;
`;
export const ButtonText = styled(Text)`
  text-align: center;
  padding: 10px 0;
  font-size: 16px;
`;
export const Field = styled(View)`
  width: 80%;
  padding: 10px 0;
  margin: 0 auto;
  flex-direction: row;
`;
export const Label = styled(Text)`
  font-weight: bold;
  text-decoration: underline;
  width: 80px;
`;

export const ProfileValue = styled(Text)`
  flex: 1;
`;
