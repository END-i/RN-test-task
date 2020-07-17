import React, { useState } from 'react';
import { Text, ScrollView, Switch } from 'react-native';

import fakeData from '../../assets/fakeData';
import { Wrapper, Header, ItemWrapper, Img, Column, Title, Description, Date, Row } from './styled';

const Item = ({ title, image, desc, date, isTile }) => {
  return (
    <ItemWrapper isTile={isTile}>
      <Img source={image} isTile={isTile} />
      <Column isTile={isTile}>
        <Title isTile={isTile}>{title}</Title>
        <Description isTile={isTile}>{desc}</Description>
        <Date isTile={isTile}>{date}</Date>
      </Column>
    </ItemWrapper>
  );
};

export default function () {
  const [isTile, setIsTile] = useState(false);

  const toggleSwitch = () => setIsTile((prev) => !prev);

  return (
    <Wrapper>
      <Header>
        <Text>News</Text>
        <Row>
          <Text>Tile</Text>
          <Switch onValueChange={toggleSwitch} value={isTile} />
        </Row>
      </Header>
      <ScrollView>
        {fakeData.map(({ id, ...rest }) => (
          <Item key={id} isTile={isTile} {...rest} />
        ))}
      </ScrollView>
    </Wrapper>
  );
}
