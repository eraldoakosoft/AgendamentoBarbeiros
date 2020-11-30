import React, {useState} from 'react'
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
import EmailIcon from '../../assets/email.svg'
import LockIcon from '../../assets/lock.svg'


import SignInput from '../../components/SignInput'

export default () => {

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleMessageButtonClick = () => {

    }

    const handleSignClick = () => {
        
    }

    return (
        <Container>
            <BarberLogo width="100%" height="160" />

            <InputArea>

                <SignInput IconSvg={EmailIcon} placeholder="Digite o seu Email" value={emailField} onChangeText={ t => setEmailField(t)  } >

                </SignInput>
                <SignInput IconSvg={LockIcon} placeholder="Digite o sua senha" value={passwordField} onChangeText={ t => setPasswordField(t)  } password={true} >

                </SignInput>

                <CustomButton onPress={handleSignClick} >
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton>
            </InputArea>
            <SignMessageButton onPress={handleMessageButtonClick} >
                <SignMessageButtonText>Ainda não tem uma conta? </SignMessageButtonText>
                <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
            </SignMessageButton>

        </Container>
    )
}