import React, { useState, useEffect } from 'react';
import { Navigation } from 'react-native-navigation';
import { SafeAreaView, ScrollView } from 'react-native';

import fakeData from '../../assets/fakeData';
import { ItemProps } from '../../common/types';
import { ItemWrapper, Img, Column, Title, Description, Date } from './styled';

const Item = ({ title, image, desc, date, isTile }: ItemProps) => {
  return (
    <ItemWrapper isTile={isTile}>
      <Img source={image} isTile={isTile} />
      <Column>
        <Title>{title}</Title>
        <Description>{desc}</Description>
        <Date>{date}</Date>
      </Column>
    </ItemWrapper>
  );
};

export default function () {
  const [isTile, setIsTile] = useState(false);

  const toggleSwitch = () => {
    setIsTile((prev) => !prev);
  };

  useEffect(() => {
    Navigation.updateProps('TopBarSwitchId', {
      isTile,
      toggleSwitch,
    });
  }, [isTile]);

  return (
    <SafeAreaView>
      <ScrollView>
        {fakeData.map(({ id, ...rest }) => (
          <Item key={id} isTile={isTile} {...rest} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
