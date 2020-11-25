import * as React from 'react'
import { View, FlatList, Image, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from 'react-native-vector-icons/AntDesign';
import TouchableScale from 'react-native-touchable-scale';
const { width, height } = Dimensions.get('window');
const Cart = (props: any) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
                    <View>
                        <TouchableOpacity activeOpacity={0.9}
                            onPress={() => props.navigation.goBack()}>
                            <AntDesign name="left" size={25} color="#000"></AntDesign>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingVertical: 10,
                            borderBottomWidth: 1,
                            borderColor: 'gray'
                        }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>My Bag</Text>
                            <Text>Total item</Text>
                        </View>
                        <View style={{ paddingVertical: 10 }}>
                            {
                                DATA.map((item, index) => {
                                    return (
                                        <TouchableOpacity
                                            activeOpacity={0.9}
                                            onPress={() => true}
                                            key={index}
                                        >
                                            <View style={[
                                                {
                                                    // backgroundColor: "pink",
                                                    borderRadius: 10,
                                                    marginVertical: 10,
                                                    flexDirection: 'row',
                                                    // paddingVertical:10
                                                }
                                            ]}>
                                                <View style={{
                                                    width: '40%',
                                                    backgroundColor: '#dee4eb',
                                                    borderRadius: 20,
                                                    justifyContent: 'center',
                                                    alignItems: 'center'
                                                }}>
                                                    <Image source={item.img} style={[{
                                                        width: 150,
                                                        resizeMode: 'contain',
                                                        height: 100
                                                    }, {
                                                        transform: [{ rotate: '-25deg' }, { translateX: 20 }]
                                                    }]}></Image>
                                                </View>
                                                <View style={{
                                                    width: "60%",
                                                    justifyContent: 'space-around',
                                                    paddingLeft: 40
                                                }}>
                                                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.name}</Text>
                                                    <Text style={{ fontWeight: 'bold' }}>{item.price}</Text>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                        <Text style={styles.add}>-</Text>
                                                        <Text style={{ fontWeight: 'bold', paddingHorizontal: 15 }}> 1 </Text>
                                                        <Text style={styles.add}>+</Text>
                                                    </View>
                                                </View>

                                            </View>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </View>
                    </View>
                    <View>
                        <View style={{ flexDirection: 'row', paddingBottom: 15, justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text>TOTAL</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>1000</Text>
                        </View>
                        <TouchableScale
                            activeScale={0.9}
                            useNativeDriver
                            onPress={() => true}
                            style={styles.appButtonContainer}>
                            <Text style={styles.appButtonText}>Đăng Nhập</Text>
                        </TouchableScale>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Cart
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    appButtonContainer: {
        backgroundColor: "#c83455",
        borderRadius: 5,
        paddingVertical: 15,
        paddingHorizontal: 12
    },
    appButtonText: {
        fontSize: 12,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    add: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        backgroundColor: '#dee4eb',
        borderRadius: 5
    }
});
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: 'Air-Max-20',
        color: "#727bea",
        category: "Nike",
        price: "199",
        img: require("../../assets/blue.png")
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        name: 'Air-Max-20',
        color: '#fbbf56',
        category: "Nike",
        price: "199",
        img: require("../../assets/black.png")
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29sd72',
        name: 'Air-Max-20',
        color: '#d61b5a',
        category: "Nike",
        price: "199",
        img: require("../../assets/nike-metcon-3.png")
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb228ba',
        name: 'Air-Max-20',
        color: '#fd7124',
        category: "Nike",
        price: "199",
        img: require("../../assets/nike-metcon-4.png")
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd913aa97f63',
        name: 'Air-Max-20',
        color: '#f4a261',
        category: "Nike",
        price: "199",
        img: require("../../assets/nike-metcon-5-black.png")
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e229d72',
        name: 'Air-Max-20',
        color: '#fdecaf',
        category: "Nike",
        price: "199",
        img: require("../../assets/orange.png")
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e2229d72',
        name: 'Air-Max-20',
        color: '#b2dff6',
        category: "Nike",
        price: "199",
        img: require("../../assets/nike-metcon-5-purple.png")
    }
];