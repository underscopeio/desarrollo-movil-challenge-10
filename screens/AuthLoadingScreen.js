import React from 'react'
import { ActivityIndicator, AsyncStorage, Button, Text, StatusBar, StyleSheet, View } from 'react-native'
import TextInput from 'react-native-spotlight-input'

import { getCurrentUser } from '../firebase'
import { registerForPushNotificationsAsync } from '../notifications'

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props)
    this._bootstrapAsync()
    this.state = {
      name: '',
    }
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const currentUser = await getCurrentUser()
    await registerForPushNotificationsAsync()
    this.props.navigation.navigate('App')
  }

  handleChangeText = name => this.setState({ name })

  handleSubmit = () => {
    if (this.state.name) {
      this.props.navigation.navigate('App')
    }
  }

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
        {/* <View style={styles.bottomSection}>
          <View style={styles.row}>
            <Text style={styles.label}>Tu nombre</Text>
            <TextInput
              style={styles.input}
              returnKeyType="done"
              underlineColorAndroid="transparent"
              autoCorrect={false}
              onChangeText={this.handleChangeText}
              value={this.state.name}
              header={() => <Text style={styles.header}>Elegí tu nombre de usuario</Text>}
              selectionColor="#888"
              overlayColor="#F05D5E"
            />
          </View>
          <Button title="Continuar" onPress={this.handleSubmit} />
        </View> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSection: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
    textAlign: 'left',
    marginTop: 15,
    marginBottom: 5,
    fontWeight: '500',
  },

  input: {
    width: 150,
    height: 40,
    borderRadius: 7,
    backgroundColor: '#e8e8e8',
    textAlign: 'center',
    paddingVertical: 0,
  },

  header: {
    fontSize: 25,
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontFamily: 'Avenir',
    paddingTop: '15%',
    paddingBottom: '10%',
  },
})
