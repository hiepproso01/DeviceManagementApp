import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import users from './../data/userData';
import Icons from 'react-native-vector-icons/Ionicons';


const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = () => {
    // Login conditions user or admin
    const user = users.find(user => user.email === email && user.password === password && user.role === 'user');
    const admin = users.find(user => user.email === email && user.password === password && user.role === 'admin');

    if ((user && user.password === password) || (admin && admin.password === password)) {
      // Successful login processing
      navigation.navigate('Tabs', { isAdmin: admin !== undefined });
    } else {
      setError('Invalid email or password');
    }
  };
  const handlerForgotPassword = () => {
    navigation.navigate('ForgotPassword')
  }

  const handlerSignUp = () => {
    navigation.navigate('SignUp')
  }



  return (

    <View style={styles.headerContainer}>
      <View style={styles.TopImageContainer}>
        <Image source={require('./../assets/logo.png')} style={styles.TopImage} />
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.bodyText}>Welcome to my app</Text>
      </View>

      <View style={styles.inputContainer}>
        <Icons name="mail-outline" size={24} color="gray" style={styles.InputIcon} />
        <TextInput
          style={styles.textInput}
          placeholder='Nhập email của bạn'
          value={email}
          onChangeText={setEmail} />
      </View>

      <View style={styles.inputContainer}>
        <Icons name="lock-closed-outline" size={24} color="gray" style={styles.inputIcon} />
        <TextInput
          style={styles.textInput}
          placeholder='Nhập mật khẩu'
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Icons name={showPassword ? "eye-outline" : "eye-off-outline"} size={24} color="gray" />
        </TouchableOpacity>
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}

      <View style={{ marginTop: 100 }} />

      <TouchableOpacity onPress={handleSignIn}>
        <View style={styles.signinButtonContainer}>
          <Text style={styles.signinText}>Đăng nhập</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handlerSignUp}>
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}> Bạn chưa có tài khoản?<Text style={{ color: 'blue' }}>Đăng ký</Text> </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlerForgotPassword}>
        <View style={styles.forgotPassword}>
          <Text style={{ color: 'blue', textAlign: 'center', fontSize: 16 }}>Quên mật khẩu</Text>
        </View>
      </TouchableOpacity>

    </View>

  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  TopImageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  TopImage: {
    height: 200,
    width: 200,
  },
  bodyContainer: {
    marginBottom: 80,
  },
  bodyText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    textAlign: 'center',

  },

  inputContainer: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderRadius: 10,
    elevation: 10,
    marginVertical: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,

  },
  inputIcon: {
    marginHorizontal: 0,
  },
  textInput: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal:15,
    color: 'black',
  },
  signinButtonContainer: {
    alignItems: 'center',
    backgroundColor: '#1fde99',
    marginHorizontal: 40,
    elevation: 10,
    borderRadius: 10,
  },
  signinText: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
    padding: 10,
  },
  signupText: {
    color: "black",
    textAlign: "center",
    fontSize: 16,
    marginTop: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default SignInScreen;
