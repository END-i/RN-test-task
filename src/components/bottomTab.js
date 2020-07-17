import React from 'react';
import styled from 'styled-components';
import { Text, View, TouchableOpacity } from 'react-native';

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
const ButtonText = styled(Text)`
  color: ${({ isFocused }) => (isFocused ? '#000' : '#888')};
`;

export default function ({ state, descriptors, navigation }) {
  return (
    <Wrapper>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

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

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Button
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <ButtonText isFocused={isFocused}>{label}</ButtonText>
          </Button>
        );
      })}
    </Wrapper>
  );
}
