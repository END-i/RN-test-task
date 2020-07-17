import styled from 'styled-components/native';
import { Text, View, SafeAreaView, Image } from 'react-native';

export const Wrapper = styled(SafeAreaView)`
  margin-bottom: 50px;
`;
export const Header = styled(View)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  height: 50px;
  padding: 20px;
  background-color: #cef0fd;
`;
export const Date = styled(Text)`
  color: gray;
  font-size: 12px;
  text-align: right;
`;
export const Img = styled(Image)`
  ${({ isTile }) => {
    if (isTile) {
      return `
      width: 100%;
      height: 300px;
      margin-bottom: 10px;
    `;
    }
    return `
      width: 30%;
      height: 100px;
  `;
  }}
`;
export const ItemWrapper = styled(View)`
  background-color: #fff;
  padding: 20px;
  margin: 5px 10px;
  ${({ isTile }) => {
    if (!isTile) {
      return `
     flex-direction: row;
    `;
    }
  }}
`;
export const Title = styled(Text)`
  font-size: 16px;
  font-weight: bold;
`;
export const Description = styled(Text)`
  width: auto;
`;
export const Column = styled(View)`
  flex: 1;
  margin-left: 10px;
`;
export const Row = styled(View)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;
`;
