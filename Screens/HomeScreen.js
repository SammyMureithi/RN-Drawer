import { useNavigation } from '@react-navigation/native'
import *  as React from 'react'
import { Button, Text } from 'react-native'

function HomeScreen({navigation}) {
    const navigate = useNavigation();
    return (
        <>
            <Text>Home Screen</Text>
            <Button title='To Detailed' onPress={() => navigation.navigate( "Detailed" )} />
            <Button title='To Settings' onPress={() => navigation.navigate( "Settings" )} />
        </>
      
  )
}

export default HomeScreen