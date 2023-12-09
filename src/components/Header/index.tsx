import { TouchableOpacity } from 'react-native'
import { ArrowLeft } from 'phosphor-react-native'

import { Container, Title } from './styles'
import theme from '../../theme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'


type Props = {
  title: string
}


export function Header({ title }: Props) {

  const { goBack } = useNavigation()

  const inset = useSafeAreaInsets()
  const paddingTop = inset.top + 42


  return (
    <Container
      style={{ paddingTop }}
    >

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={goBack}
      >
        <ArrowLeft 
          size={24} 
          color={theme.COLORS.BRAND_LIGHT}
          weight='bold'
        />
      </TouchableOpacity>

      <Title>
        {title}
      </Title>

    </Container>
  )
}