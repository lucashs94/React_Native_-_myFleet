import { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { Realm, useApp } from '@realm/react'

import { Container, Slogan, Title } from './styles'

import bgImage from '../../assets/background.png'
import { Button } from '../../components/Button'

import { IOS_CLIENT_ID, WEB_CLIENT_ID } from '@env'


GoogleSignin.configure({
  scopes: ['email', 'profile'],
  webClientId: WEB_CLIENT_ID,
  iosClientId: IOS_CLIENT_ID,
})


export function SignIn() {

  const app = useApp()
  const [isAuthenticating, setIsAuthenticating] = useState(false)


  async function handleGoogleSignIn(){
    try {
      setIsAuthenticating(true)

      const { idToken } = await GoogleSignin.signIn()
      
      if(idToken){
        const credentials = Realm.Credentials.jwt(idToken)

        await app.logIn(credentials)
      }else{
        Alert.alert('Entrar', 'Nao foi possivel conectar-se')
      }

    } catch (error) {
      console.log(error)
    }finally{
      setIsAuthenticating(false)
    }
  }


  return (
    <Container
      source={bgImage}
    >
      <Title>myFleet</Title>

      <Slogan>
        Gestão no uso de frotas
      </Slogan>

      <Button 
        title='Entrar com Google' 
        onPress={handleGoogleSignIn}
        isLoading={isAuthenticating}
      />
    </Container>
  );
}