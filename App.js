import React from 'react';
import { Icon, Card, Text } from 'react-native-elements';
import { StyleSheet, View, Button } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


export default function App() {
  return (
    <View style={styles.container}>
      <Icon 
        size ={60}
        name='rocket'
        color="#123752"
        type='font-awesome'/>
      <Text h1>Houston Cafe</Text>
      <Text h4>Your local coffee shop experts</Text>

      <Card 
        title="Join Houston Coffee® Rewards"
        backgroundColor ="#FFDAAA"
      >
          <Text style={{margin: 10}}>Get points towards free coffee. Each purchase qualifies for at least 100 points. </Text>
          <Button title='JOIN NOW!' color='#AA5839' />
      </Card>

      <Card 
        title="You are what you eat"
          {headerTitleStyle: {
            color: '#fff'
          }}
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
                        <Text>
                            Email: houston@cafe.com 
                        </Text>
      </Card> 

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Card: {
    backgroundColor: '#AA5839',
    color: '#fff'
  }
});
