import { TouchableOpacityProps } from 'react-native'
import { Key, Car } from 'phosphor-react-native'

import theme from '../../theme'

import { Container, IconBox, Message, TextHigh } from './styles'


type CarProps = TouchableOpacityProps & {
  licensePlate?: string | null
}

export function CarStatus({ licensePlate = null, ...rest }: CarProps) {

  const Icon = licensePlate ? Key : Car
  const message = licensePlate ? `Veiculo ${licensePlate} em uso. ` : 'Nenhum veículo em uso. '
  const status = licensePlate ? `Chegada` : 'Saída'

  return (
    <Container {...rest}>

      <IconBox>
        <Icon 
          size={32}
          color={theme.COLORS.BRAND_LIGHT}
        />
      </IconBox>

      <Message>
        {message}

        <TextHigh>
          Clique aqui para registrar a {status}
        </TextHigh>
      </Message>

    </Container>
  );
}