import React, { useState } from 'react';

import SvgReset from '../../assets/buttonReset.svg';
import SvgAdd from '../../assets/add.svg';

import { 
  Container, 
  ModalBackground,
  ModalContent,
  ModalTop,
  ModalBox,
  ModalText,
  ModalInput,
  ModalBottom,
  Title, 
  Header,
  Column,
  ButtonReset,
  SvgResetBox,
  Cards,
  Card,
  Text,
  ButtonAdd,
  SvgAddBox
} from './styles';

export function Home() {
  const [modal, setModal] = useState(false);

  function handleOpenModal() {
    setModal(true);
  }

  function handleCloseModal() {
    setModal(false);
  }

  return (
    <Container>
      <ModalBackground onClick={handleCloseModal} visible={modal}>
        {/* <ModalContent>
          dasdasd
        </ModalContent> */}
      </ModalBackground>

      {/* COLOCAR MODAL FORA  */}
      { modal && 
        <ModalContent>
          <ModalTop>
            <ModalBox>
              <ModalText>Data</ModalText>
              <ModalInput 
                placeholder='25/02/2022' 
                disabled
              />
            </ModalBox>
            <ModalBox>
              <ModalText>Hora</ModalText>
              <ModalInput 
                className='hour' 
                placeholder='13:00 as 20:00'
                disabled
              />
            </ModalBox>
            <ModalBox>
              <ModalText>Extra</ModalText>
              <ModalInput 
                placeholder='2 Horas'
                disabled
              />
            </ModalBox>
          </ModalTop>

          <ModalBottom>
            <ModalBox className="box-description">
              <ModalText>Descrição</ModalText>
              <ModalInput
                className='input-description' 
                placeholder='Site Positiva'
                disabled
              />
            </ModalBox>
          </ModalBottom>
        </ModalContent>
      }

      <Header>
        <Column></Column>

        <Column>
          <Title>OVERTIME</Title>
        </Column>

        <Column className='column3'>
          <ButtonReset>
            <SvgResetBox src={SvgReset} />
          </ButtonReset>
        </Column>
      </Header>

      <Cards>
        <Card>
          <Text className="first">
            Data: 
            <Text className='value'>15/02/2022</Text>
          </Text>
          <Text>
            Horário: 
            <Text className="value">13:30 - 20:00</Text>
          </Text>
          <Text>
            Horas extras: 
            <Text className="value">2 horas</Text>

          </Text>
          <Text>
            Descrição:  
            <Text className="value">Site Positiva</Text>
          </Text>
        </Card>
        <Card>
          <Text className="first">
            Data: 
            <Text className='value'>16/02/2022</Text>
          </Text>
          <Text>
            Horário: 
            <Text className="value">13:30 - 21:00</Text>
          </Text>
          <Text>
            Horas extras: 
            <Text className="value">3 horas</Text>

          </Text>
          <Text>
            Descrição:  
            <Text className="value">Site Positiva</Text>
          </Text>
        </Card>
        <Card>
          <Text className="first">
            Data: 
            <Text className='value'>22/02/2022</Text>
          </Text>
          <Text>
            Horário: 
            <Text className="value">13:30 - 21:00</Text>
          </Text>
          <Text>
            Horas extras: 
            <Text className="value">3 horas</Text>

          </Text>
          <Text>
            Descrição:  
            <Text className="value">Site Positiva</Text>
          </Text>
        </Card>
        <Card>
          <Text className="first">
            Data: 
            <Text className='value'>23/02/2022</Text>
          </Text>
          <Text>
            Horário: 
            <Text className="value">13:30 - 19:00</Text>
          </Text>
          <Text>
            Horas extras: 
            <Text className="value">1 horas</Text>

          </Text>
          <Text>
            Descrição:  
            <Text className="value">Site Intersolid</Text>
          </Text>
        </Card>
        <Card>
          <Text className="first">
            Data: 
            <Text className='value'>28/02/2022</Text>
          </Text>
          <Text>
            Horário: 
            <Text className="value">13:30 - 18:00</Text>
          </Text>
          <Text>
            Horas extras: 
            <Text className="value">4 horas</Text>

          </Text>
          <Text>
            Descrição:  
            <Text className="value">Site Intersolid (Dia era opcional)</Text>
          </Text>
        </Card>
      </Cards>

      <ButtonAdd onClick={handleOpenModal}>
        <SvgAddBox src={SvgAdd} />
      </ButtonAdd>
    </Container>
  );
}

