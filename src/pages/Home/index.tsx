import React from 'react';

import SvgReset from '../../assets/buttonReset.svg';
import SvgAdd from '../../assets/add.svg';

import { 
  Container, 
  Title, 
  Header,
  HeaderInnerBox,
  ButtonReset,
  SvgResetBox,
  Cards,
  Card,
  Text,
  ButtonAdd,
  SvgAddBox
} from './styles';

export function Home() {
  return (
    <Container>
      <Header>
        <HeaderInnerBox></HeaderInnerBox>

        <HeaderInnerBox>
          <Title>OVERTIME</Title>
        </HeaderInnerBox>

        <HeaderInnerBox className='column3'>
          <ButtonReset>
            <SvgResetBox src={SvgReset} />
          </ButtonReset>
        </HeaderInnerBox>
      </Header>

      <Cards>
        <Card className='card'>
          <Text className='text first'>Data: 15/02/2022</Text>
          <Text className='text'>Horário: 13:30 - 20:00</Text>
          <Text className='text'>Horas extras: 2 horas</Text>
        </Card>
        <Card className='card'>
          <Text className='text first'>Data: 16/02/2022</Text>
          <Text className='text'>Horário: 13:30 - 21:00</Text>
          <Text className='text'>Horas extras: 3 horas</Text>
        </Card>
        <Card className='card'>
          <Text className='text first'>Data: 22/02/2022</Text>
          <Text className='text'>Horário: 13:30 - 21:00</Text>
          <Text className='text'>Horas extras: 3 horas</Text>
        </Card>
        <Card className='card'>
          <Text className='text first'>Data: 23/02/2022</Text>
          <Text className='text'>Horário: 13:30 - 19:00</Text>
          <Text className='text'>Horas extras: 1 horas</Text>
        </Card>
      </Cards>

      <ButtonAdd>
        <SvgAddBox src={SvgAdd} />
      </ButtonAdd>
    </Container>
  );
}

