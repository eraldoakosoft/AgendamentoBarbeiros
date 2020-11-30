import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native'
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
import PersonIcon from '../../assets/person.svg'


import SignInput from '../../components/SignInput'

export default () => {

    const navigation = useNavigation()

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [nameField, setNamedField] = useState('');

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignIn'}]
        })
    }

    const handleSignClick = () => {

    }

    return (
        <Container>
            <BarberLogo width="100%" height="160" />

            <InputArea>

                <SignInput IconSvg={PersonIcon} placeholder="Digite o seu nome" value={nameField} onChangeText={ t => setNameField(t)  } />
                <SignInput IconSvg={EmailIcon} placeholder="Digite o seu Email" value={emailField} onChangeText={ t => setEmailField(t)  } />
                <SignInput IconSvg={LockIcon} placeholder="Digite o sua senha" value={passwordField} onChangeText={ t => setPasswordField(t) } password={true} />

                <CustomButton onPress={handleSignClick} >
                    <CustomButtonText>CADASTRAR</CustomButtonText>
                </CustomButton>
            </InputArea>
            <SignMessageButton onPress={handleMessageButtonClick} >
                <SignMessageButtonText>Já possui uma conta? </SignMessageButtonText>
                <SignMessageButtonTextBold>Faça login</SignMessageButtonTextBold>
            </SignMessageButton>

        </Container>
    )
}