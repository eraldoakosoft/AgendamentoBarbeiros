import React from 'react'
import { Text } from 'react-native'
import { 
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold
} from './styles'
import BarberLogo from '../../assets/barber.svg'

export default () => {
    return(
        <Container>
            <BarberLogo width="100%" height="160" />


            <InputArea>
                
                <CustomButton>
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton>
            </InputArea>
            <SignMessageButton>
                <SignMessageButtonText>Ainda não tem uma conta? </SignMessageButtonText>
                <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
            </SignMessageButton>

        </Container>
    )
}