import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import searchBottleBtn from '../../../assets/images/searchBottleBtn.png'
import addClient from '../../../assets/images/addClient.png'
import { styles } from './styles'

interface MainButtonProps {
    type: string
    onPress: () => void
}



export default function MainButton({type, onPress}: MainButtonProps) {
  return (
    <View>
      <Pressable
        style={{
          marginTop: 20,
          width: 200,
          height:200,
        }}
        onPress={onPress}
        >
            {type === 'garrafas' && <Image source={searchBottleBtn} style={ styles.button}  />}
            {type === 'clientes' && <Image source={addClient} style={styles.button}  />}
        </Pressable>
    </View>
  )
}