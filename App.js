import React from 'react';
import { Icon, Card, Text } from 'react-native-elements';
import { StyleSheet, View, Button, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { ScrollView } from 'react-native-gesture-handler';


export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Icon 
          size ={20}
          name='rocket'
          color="#FFDAAA"
          type='font-awesome'
          style={{margin: 10}}/>
        <Icon 
          size ={60}
          name='rocket'
          color="#123752"
          type='font-awesome'
          style={{margin: 10}}/>
          <Icon 
          size ={20}
          name='rocket'
          color="#FFDAAA"
          type='font-awesome'
          style={{margin: 10}}/>
        <View style={styles.myView}>
          <Text h1 style={styles.title}>  Houston Café  </Text>
          <Text h4 style={styles.title}> "Your local coffee shop experts" </Text>
        </View>
        <Card 
          title="Join Houston Coffee® Rewards"
          backgroundColor ="#FFDAAA"
          //image={require('images/coffee-shop.jpg')}
          >
            <Text style={{margin: 10}}>Get points towards free coffee. Each purchase qualifies for at least 100 points. </Text>
            <Button title='JOIN NOW!' color='#AA5839' />
        </Card>

        <Card 
          title="You are what you eat"
          backgroundColor ="#FFDAAA"
        >
            <Text style={{margin: 10}}>In Houston Café we care about your well-being. This is why we recommend daily exercise and a balanced nutrition. </Text>
            <Button title='Nutritional Information' color='#AA5839' />
        </Card>

        <Card
        title="Contact Information"
        backgroundColor ="#FFDAAA"
        >
          <Text> 1234 Westheimer Road </Text>
          <Text> Houston, TX 77032 </Text>
          <Text> U.S.A. </Text>
          <Text> Phone: 1-206-555-1234 </Text>
          <Text> Email: houston@cafe.com </Text>
        </Card> 
        <Icon 
          size ={20}
          name='rocket'
          color="#FFDAAA"
          type='font-awesome'
          style={{margin: 10}}/>
      </ View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFDAAA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  myView: {
    backgroundColor: '#AA5839',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  title: {
    backgroundColor: '#AA5839',
    color: 'white',
  },
  Card: {
    color: '#FFDAAA',
  },
});
