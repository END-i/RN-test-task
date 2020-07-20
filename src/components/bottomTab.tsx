import React from 'react';
import styled from 'styled-components';
import { View, TouchableOpacity } from 'react-native';

import { BottomTabProps } from '../common/types';

const Wrapper = styled(View)`
  flex-direction: row;
`;
const Button = styled(TouchableOpacity)`
  flex: 1;
  align-items: center;
  padding-bottom: 10px;
  padding-top: 10px;
  background-color: #cef0fd;
`;

export default function ({ state, descriptors, navigation }: BottomTabProps) {
  return (
    <Wrapper>
      {state.routes.map((route: any, index: string) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <Button
            key={index}
            accessibilityRole="button"
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
          />
        );
      })}
    </Wrapper>
  );
}
