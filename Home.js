import React from 'react'
import { View,StyleSheet,Text } from 'react-native'
import Background from './Background'
import Btn from './Btn'
import { darkGreen, darkGrey } from './Constants'
import Field from './Field'
import Field2 from './Field2'
import { FacebookLoginButton,GoogleLoginButton,TwitterLoginButton } from "react-social-login-buttons";

function Home() {
    return (
        <Background>
         <View style={{marginHorizontal:"40", marginVertical:"100",alignItems:'center'}}>

         <Text style = {{color:"#FF0000" ,fontSize:44,marginBottom:60,marginTop:10,width:270,paddingLeft:20,textAlign:'center',fontWeight:'bold',textShadowColor: '#D3D3D3', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 1}}>Welcome</Text>

         <Text style = {{color:"#3A3B3C" ,fontSize:16,marginBottom:5,marginTop:0}}>Login to your account</Text>
         
         
         <Field placeholder = " Email/Username " keyboardType={"email-address"} />

         <Field2 placeholder = 'Password' secureTextEntry={true}/>
         
         <View style={{alignItems:'flex-end'}}>
            <Text style={{textAlign:'right', color:'#FF0000',paddingLeft:126}}>Forgot Password?</Text>
         </View>
         </View>


         <Btn bgColor='#FF0000' textColor='white' btnLabel="Continue" />
         <View >
            <Text style={{color:'#3A3B3C',marginBottom:20, textAlign:'center'}}>Don't have an account?<span style={{color:'#FF0000'}}> Sign up</span></Text>
         </View>
         <View style={{alignItems:'center'}}>
            <Text style={{color:'grey',marginBottom:10}}>Or login with social media</Text>
         </View>
         {/* <Btn bgColor='white' textColor={darkGreen} btnLabel="Sign Up"/> */}
         {/* <Btn bgColor={darkGreen} textColor='white' btnLabel="Login with Google" />
         <Btn bgColor={darkGreen} textColor='white' btnLabel="Login with Twitter" /> */}

         <View style={{alignItems:'center',marginBottom:20}}>
         <FacebookLoginButton style={{width:280,borderRadius:100,paddingLeft:40,height:42,marginBottom:10}}>
         <Text style={{fontSize:16,color:'white',paddingLeft:10}}>
          Login with Facebook
          </Text>
        </FacebookLoginButton>
        <GoogleLoginButton style={{width:280,borderRadius:100,paddingLeft:40,height:42,marginBottom:10}}>
         <Text style={{fontSize:16,color:'grey',paddingLeft:10}}>
          Login with Google
          </Text>
        </GoogleLoginButton>
        <TwitterLoginButton style={{width:280,borderRadius:100,paddingLeft:40,height:42}}>
         <Text style={{fontSize:16,color:'white',paddingLeft:10}}>
          Login with Twitter
          </Text>
        </TwitterLoginButton>
        </View>
        </Background>
    )
}

const styles = StyleSheet.create({})

export default Home
