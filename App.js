import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

function SignIn({ onGoBack }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.signInContainer}>
      <Text style={styles.signInTitle}>Sign In</Text>
      <TextInput 
        placeholder="Username" 
        value={username} 
        onChangeText={setUsername} 
        style={styles.input} 
      />
      <TextInput 
        placeholder="Password" 
        value={password} 
        onChangeText={setPassword} 
        secureTextEntry 
        style={styles.input} 
      />
      <Button title="Sign In" onPress={() => { /* handle sign-in logic here */ }} />
      <Button title="Back" onPress={onGoBack} />
    </View>
  );
}

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [activeTab, setActiveTab] = useState('home'); // State to track active tab

  // Content rendering based on activeTab
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Text>Home Screen</Text>;
      case 'calendar':
        return <Text>Calendar Screen</Text>;
      case 'information':
        return <Text>Information Screen</Text>;
      case 'profile':
        return <Text>Profile Screen</Text>;
      case 'hamburger':
        return <Text>Hamburger Bar Screen</Text>;
      default:
        return <Text>Home Screen</Text>;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {isSignedIn ? (
        <>
          <View style={styles.header}>
            <Text style={styles.time}>7:32</Text>
            <Text style={styles.title}>Konnect Transit</Text>
            <MaterialIcons name="mail-outline" size={24} color="#4A90E2" />
          </View>
          <View style={styles.content}>
            {renderContent()}
            <TouchableOpacity style={styles.buttonContainer} onPress={() => console.log('Book Now Pressed')}>
              <Text style={styles.buttonText}>Book Now</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => setIsSignedIn(false)}>
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity onPress={() => setActiveTab('home')}>
              <MaterialIcons 
                name="home" 
                size={24} 
                color={activeTab === 'home' ? '#4A90E2' : 'grey'}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveTab('calendar')}>
              <MaterialIcons 
                name="calendar-today" 
                size={24} 
                color={activeTab === 'calendar' ? '#4A90E2' : 'grey'}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveTab('information')}>
              <MaterialIcons 
                name="info-outline" 
                size={24} 
                color={activeTab === 'information' ? '#4A90E2' : 'grey'}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveTab('profile')}>
              <MaterialIcons 
                name="account-circle" 
                size={24} 
                color={activeTab === 'profile' ? '#4A90E2' : 'grey'}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveTab('hamburger')}>
              <MaterialIcons 
                name="menu" 
                size={24} 
                color={activeTab === 'hamburger' ? '#4A90E2' : 'grey'}
              />
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <SignIn onGoBack={() => setIsSignedIn(true)} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 32,
    paddingVertical: 20,
    paddingHorizontal: 48,
    borderRadius: 48,
    backgroundColor: '#4A90E2',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 0.38,
    shadowRadius: 18,
    elevation: 11,
    transform: [{ scale: 1.06 }],
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 23,
    fontFamily: 'Avenir Next',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1.9,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 37,
    paddingTop: 25,
    paddingBottom: 19,
    borderBottomLeftRadius: 37,
    borderBottomRightRadius: 37,
    backgroundColor: 'rgba(255,255,255,0.9)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.27,
    shadowRadius: 19,
    elevation: 8,
  },
  time: {
    color: '#4A90E2',
    fontSize: 25,
    fontFamily: 'Avenir Next',
  },
  title: {
    color: '#4A90E2',
    fontSize: 35,
    fontFamily: 'Avenir Next',
    fontWeight: 'bold',
    letterSpacing: 2.2,
  },
  subheading: {
    color: '#4A90E2',
    fontSize: 31,
    fontFamily: 'Avenir Next',
    fontWeight: 'bold',
    marginBottom: 21,
    letterSpacing: 1.9,
  },
  description: {
    color: '#4A90E2',
    fontSize: 26,
    fontFamily: 'Avenir Next',
    marginBottom: 42,
    letterSpacing: 1.7,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 37,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 21,
    paddingHorizontal: 34,
    borderTopLeftRadius: 37,
    borderTopRightRadius: 37,
    backgroundColor: 'rgba(255,255,255,0.9)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -8 },
    shadowOpacity: 0.27,
    shadowRadius: 19,
    elevation: 8,
  },
  signInContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  signInTitle: {
    color: '#4A90E2',
    fontSize: 32,
    fontFamily: 'Avenir Next',
    fontWeight: 'bold',
    marginBottom: 42,
    letterSpacing: 1.7,
  },
  input: {
    width: '100%',
    borderColor: '#4A90E2',
    borderWidth: 1,
    padding: 12,
    marginVertical: 12,
    borderRadius: 12,
  },
});

