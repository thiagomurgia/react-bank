import React, {useRef, useState} from 'react'
import {View, Text,TouchableOpacity, StyleSheet, Image, Alert} from 'react-native'
import styled from 'styled-components/native'
import Slider from '@react-native-community/slider'
import CheckBox from '@react-native-community/checkbox'
import LinearGradient from 'react-native-linear-gradient'
import TextInputMask from 'react-native-text-input-mask'
import {Modalize} from 'react-native-modalize'

const Body = styled.View`
  flex:1;
  background-color:#171926;
`

const DataHeader = styled.View`
  height: 40px;
  justify-content: space-between;
  align-items:center;
  flex-direction: row;
  padding-left: 29px;
  padding-right: 29px;  
`

const DataHeaderText = styled.Text`
  font-weight:bold;
  font-size:14px;
  color:#4A53A8;
`
const Form = styled.View`
align-items:center;
margin-top: 8px;
`
const Input = styled.TextInput`
  width: 88%;
  height: 40px;
  background-color: #565973;
  border-radius: 8px;
  margin-bottom: 20px;
  padding-left: 14px;
  padding-top: 8px;
  font-size: 18px;
  font-weight:bold;
  color: #bdbfc9;
`

const LimitArea = styled.View`

`

const LimitAreaHeader = styled.Text`
  font-size:18px;
  font-weight:bold;
  color: #BDBFC9;
  margin-left:29px;
  margin-bottom: 12px;
`

const LimitAreaSlider = styled.View`
  width: 88%;
  margin-left: 29px;
`

const ValueSlider = styled.View`
  width: 100%;
  height: 30px;
  justify-content:center;
  align-items:center;
`

const ValueSliderText = styled.Text`
  font-size:12px;
  font-weight:bold;
  color: #bdbfc9;
`

const CardArea = styled.View`
  width:100%;
  height:200px;
  align-items:center;
  justify-content:center;
`

const Card = styled.View`
  width: 344px;
  height: 195px;
  border-radius:16px;
`

const CardHeader = styled.Text`
  font-size:24px;
  font-weight:bold;
  color: #171926;
  margin-left:16px;
`

const CardNumberContent = styled.View`
  flex-direction:row;
  margin-left:16px;
`

const CardNumber = styled.Text`
  font-size:24px;
  font-weight:bold;
  color:#BDBFC9;
  margin-top: 50px;
  margin-left: 24px;
`

const CardNameValidContent = styled.View`
  width:100%;
  align-items:center;
  justify-content:space-between;
`

const CardNameValid = styled.View`
  width:75%;
  margin-left: -8px;
  height: 20px;
  margin-top:36px;
  color: #171926;
  font-size: 14px;
  flex-direction:row;
  justify-content: space-between;
`

const TouchArea = styled.View`
  width:100%;
  align-items:center;
  margin-top: 8px;
`

const Confirmation = styled.View`
  flex:1;
  height:400px;
  background-color: #fcfcfc;
  border-radius: 16px;
  ;
`

 const CloseArea = styled.View`
  flex-direction:row;
  justify-content:flex-end;
 `

 const TextModal = styled.View`
  padding: 16px;
 `

 const CheckBoxArea = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
 `

 const ButtonArea = styled.View`
  width: 100%;
  align-items:center;
  justify-content:center;
 `

const styles = StyleSheet.create({
  lineargradient:{
    borderRadius: 16
  },
  touch:{
    backgroundColor:"#4A53A8",
    width: 344,
    height:40,
    marginTop:8,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:8,
  },
  touchClose:{
  
    width: 40,
    height:40,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:8,
  },
  touchFont:{
    fontSize:24,
    fontWeight:'bold',
    color:'rgba(46,49,67,0.8)'
  },
  touchFontClose:{
    fontSize:24,
    fontWeight:'bold',
    color:'#333'
  },
  tinyLogo: {
    width: 65,
    height: 63,
    borderRadius:16,
    marginTop:21,
    marginLeft:29,
  },
  input:{
    width:363,
    height:40,
    backgroundColor:'#565973',
    borderRadius:8,
    fontSize:18,
    fontWeight:'bold',
    paddingLeft:14,
    color: '#bdbfc9',
    marginBottom: 12
  },
  textModal:{
    marginBottom:8,
    marginLeft: 12,
  }
})

export default() =>{

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')

  const[valueMoney, setValueMoney] = useState(500)
  const[cardNumber, setCardNumber] = useState('')
  const[monthValidate, setMonthValidade] = useState('')


  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  const modalizeRef = useRef(null)
    
  const NumberGenerate = ()=> {
      setCardNumber(Math.floor(Math.random() * 3000 + 1000 )+1)
      setMonthValidade(Math.floor(Math.random() * 12 +1))
    modalizeRef.current?.close()
      if(setCardNumber != ''){
        alert('Cadastro realizado com sucesso!')
      }
  }

  function openModal(){
    if(name && email && cpf != '' ){
      modalizeRef.current?.open()
    }else{
      alert('Complete as informações para poder realizar o cadastro!')
    }
  }

  function closeModal(){
    modalizeRef.current?.close()
  }
  
  return(
    <Body>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://source.unsplash.com/collection/1514114/',
        }}
      />

      <DataHeader>
        <DataHeaderText>
          <Text>Meus Dados</Text>
        </DataHeaderText>
        <DataHeaderText>
          <Text>Bank of Internet</Text>
        </DataHeaderText>
      </DataHeader>

      <Form>
      
        <Input
        placeholder="Nome completo"
        placeholderTextColor="#bdbfc9"
        value= {name}
        onChangeText={n=>setName(n)}
        />
        <Input
        placeholder="E-mail"
        placeholderTextColor="#bdbfc9"
        keyboardType="email-address"
        onChangeText={n=>setEmail(n)}/>
        <TextInputMask
        mask={"[000].[000].[000]-[00]"}
        style={styles.input}
        placeholder="CPF"
        placeholderTextColor="#bdbfc9"
        keyboardType="numeric"
        onChangeText={n=>setCpf(n)}
         />
      </Form>

      <LimitArea>
        <LimitAreaHeader>
          <Text>Limite Desejado</Text>
        </LimitAreaHeader>
        <LimitAreaSlider>
          <Slider
          minimumValue={500}
          maximumValue={1500}
          thumbTintColor="#4A53A8"
          onValueChange={(n) =>setValueMoney(n) }
          value={valueMoney}
          />
        </LimitAreaSlider>
        <ValueSlider>
          <ValueSliderText><Text>R$ {valueMoney.toFixed(0)}</Text></ValueSliderText>
        </ValueSlider>
      </LimitArea>

      <CardArea>
        
          <LinearGradient
            colors={['#454C8F', '#565973']}
            style={styles.lineargradient}
            >
              <Card>
                <CardHeader>Bank of Internet</CardHeader>

                  <CardNumberContent>
                    <CardNumber>****</CardNumber>
                    <CardNumber>****</CardNumber>
                    <CardNumber>****</CardNumber>
                    <CardNumber>{cardNumber}</CardNumber>
                  </CardNumberContent>

                  <CardNameValidContent>
                    <CardNameValid>
                      <Text>{name.toUpperCase()}</Text>
                      <Text>{monthValidate}/2027</Text>
                    </CardNameValid>
                  </CardNameValidContent>
                  
              </Card>
          </LinearGradient>
        
      </CardArea>

      <TouchArea>
        <TouchableOpacity
        style={styles.touch} onPress={openModal}>

            <Text
            style={styles.touchFont}
            >CADASTRAR
            </Text>

        </TouchableOpacity>
      </TouchArea>

      <Modalize ref={modalizeRef}
      snapPoint={370}
      >
        <Confirmation>
          <CloseArea>
          <TouchableOpacity
          style={styles.touchClose} onPress={closeModal}>

              <Text
              style={styles.touchFontClose}
              >X
              </Text>
          </TouchableOpacity>
          </CloseArea>
        
          <TextModal>
            <Text style={{
              color: '#333',
              fontWeight:'bold',
              marginBottom:12,
              fontSize:20
            }}>Olá! Seja Bem vindo ao Bank of Internet!</Text>
            <Text style={styles.textModal}><Text style={{
              color: '#ff00ff',
              fontWeight:'bold'
            }}>{name}</Text>, este é seu nome?</Text>
            <Text style={styles.textModal}><Text style={{
              color: '#ff00ff',
              fontWeight:'bold'
            }}>{email}</Text>, este é seu e-mail?</Text>
            <Text style={styles.textModal}><Text style={{
              color: '#ff00ff',
              fontWeight:'bold'
            }}>{cpf}</Text>, este é seu CPF?</Text>
            <Text style={styles.textModal}><Text style={{
              color: '#ff00ff',
              fontWeight:'bold'
            }}>R${Math.round(valueMoney).toFixed(2)}</Text>, este é limite desejado?</Text>
            <Text style={styles.textModal} style={{
              color: '#333',
              fontWeight:'bold'
            }}>Se todos os seus dados estiverem corretos, basta apenas aceitar os termos de uso para realizar seu cadastro.</Text>
            <Text style={styles.textModal} style={{
              color: '#333',
              fontWeight:'bold'
            }}></Text>
          </TextModal>
          <CheckBoxArea>
            <CheckBox
                value={toggleCheckBox}
                onValueChange={(n) => setToggleCheckBox(n)}
                style={{
                  padding:12,
                  marginLeft: 12
                }}
                checkColor='#00ff00'
                
              /><Text style={{
                color: '#333',
                fontWeight:'bold'}}>Eu aceito os termos de uso</Text>
          </CheckBoxArea>
          {toggleCheckBox===true &&
          <ButtonArea>
            <TouchableOpacity
            style={styles.touch}
            onPress={NumberGenerate}
            >

            <Text
            style={styles.touchFont}
            >CONFIRMAR
            </Text>

        </TouchableOpacity>
        </ButtonArea>
          }
          
          
          
        
        </Confirmation>
      </Modalize>
      



    </Body>
  )
  

}

