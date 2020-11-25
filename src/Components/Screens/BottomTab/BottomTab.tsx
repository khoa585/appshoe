import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import TouchableScale from 'react-native-touchable-scale';
import { RectButton } from 'react-native-gesture-handler';
const BottomTab = (props: any) => {
    return (
        <View>
            <View style={styles.container}>
                <View style={[styles.col1, { borderTopRightRadius: 120 }]}>
                    <TouchableScale
                        onPress={() => true}
                        activeScale={1.3}
                        tension={50}
                        friction={7}
                        useNativeDriver
                    >
                        <AntDesign name="home" size={25} color="#fff" />
                    </TouchableScale>
                    <TouchableScale
                        onPress={() => true}
                        activeScale={1.3}
                        tension={50}
                        friction={7}
                        useNativeDriver
                    >
                        <Feather name="file-text" size={25} color="#fff" />
                    </TouchableScale>

                </View>
                <View style={[styles.col1, { borderTopLeftRadius: 120 }]}>
                    <TouchableScale
                        onPress={() => true}
                        activeScale={1.3}
                        tension={50}
                        friction={7}
                        useNativeDriver
                    >
                        <MaterialIcons name="history" size={30} color="#fff" />
                    </TouchableScale>
                    <TouchableScale
                        onPress={() => true}
                        activeScale={1.3}
                        tension={50}
                        friction={7}
                        useNativeDriver
                    >
                        <EvilIcons name="user" size={30} color="#fff" />
                    </TouchableScale>
                </View>
            </View>
            <View style={styles.center} />
            <View style={styles.center2} />
            <View style={styles.volumnCon}>
                <TouchableScale
                    onPress={() => true}
                    activeScale={1.3}
                    tension={50}
                    friction={7}
                    useNativeDriver
                >
                    <AntDesign name="hearto" size={30} color="#fff" />
                </TouchableScale>
            </View>
        </View>
    );
};

export default BottomTab;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
    },
    col1: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '47%',
        padding: 11,
        alignItems: 'center',
        backgroundColor: '#ffa69e',
    },
    center: {
        alignSelf: 'center',
        backgroundColor: '#ffa69e',
        position: 'absolute',
        width: 50,
        height: 50,
        top: 10,
        borderRadius: 40,
    },
    center2: {
        alignSelf: 'center',
        backgroundColor: '#fff',
        position: 'absolute',
        width: 60,
        height: 60,
        top: -30,
        borderRadius: 100,
    },
    volumnCon: {
        alignSelf: 'center',
        backgroundColor: '#ffa69e',
        position: 'absolute',
        width: 50,
        height: 50,
        top: -25,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 1,
    },
});