import React from 'react';
import { Text, View, Switch } from 'react-native';
import styled from 'styled-components';

import { ISwitchProps } from '../common/types';

const Row = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export default function ({ isTile, toggleSwitch }: ISwitchProps) {
  return (
    <Row>
      <Text>Tile</Text>
      <Switch onValueChange={toggleSwitch} value={isTile} />
    </Row>
  );
}
