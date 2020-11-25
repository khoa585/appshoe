import React from 'react'
import { View, Text, TextInput, StyleSheet, Dimensions, FlatList, Image, Platform } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const { width: Wwidth } = Dimensions.get('window')

import * as Animatable from 'react-native-animatable';

function Profile({ navigation }: any) {

    return (
        <Animatable.View
            animation="fadeInRight"


        >

        </Animatable.View>
    )
}
export default React.memo(Profile)
const styles = StyleSheet.create({

})