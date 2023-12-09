import { useRef } from 'react'
import { KeyboardAvoidingView, Platform, ScrollView, TextInput } from 'react-native'

import { Button } from '../../components/Button';
import { Header } from '../../components/Header'
import { PlateInput } from '../../components/PlateInput'
import { TextAreaInput } from '../../components/TextAreaInput';

import { Container, Content } from './styles'


const KeyboardBehavior = Platform.OS === 'android' ? 'height' : 'position'


export function Departure() {

  const descRef = useRef<TextInput>(null)


  function handleDepartureRegister(){

  }


  return (
    <Container>

      <Header title='Saída'/>

      <KeyboardAvoidingView 
        style={{ flex: 1 }}
        behavior={KeyboardBehavior}
      >
        <ScrollView>
          <Content>
            <PlateInput 
              label='Placa'
              placeholder='BRA1234'
              onSubmitEditing={() => descRef.current?.focus() }
              returnKeyType='next'
            />

            <TextAreaInput
              ref={descRef}
              label='Finalidade'
              placeholder='Vou utilizar o veiculo para ...'
              onSubmitEditing={handleDepartureRegister}
              returnKeyType='send'
              blurOnSubmit
            />

            <Button
              title='Registrar Saída'
              onPress={handleDepartureRegister}
            />
          </Content>
        </ScrollView>
      </KeyboardAvoidingView>

    </Container>
  );
}