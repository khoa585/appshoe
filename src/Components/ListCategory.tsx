import * as React from 'react';
import { View, FlatList, Image, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { SharedElement } from 'react-navigation-shared-element';
const { width, height } = Dimensions.get('window');
const ListCategory = (props: any) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f7f7f7' }}>
            <View style={{ marginHorizontal: 10, flex: 1 }}>
                <View style={{
                    flexDirection: 'row',
                    paddingVertical: 15
                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: "100%"
                    }}>
                        <TouchableOpacity activeOpacity={0.9} onPress={() => true}>
                            <View >
                                <AntDesign name="left" size={25} color="#000"></AntDesign>
                            </View>
                        </TouchableOpacity>
                        <View>
                            <AntDesign name="hearto" size={25} color="#000"></AntDesign>
                        </View>
                    </View>
                </View>
                <View style={{ paddingVertical: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Our Product</Text>
                    <AntDesign name="hearto" size={25} color="#000"></AntDesign>
                </View>
                <View>
                    <FlatList
                        horizontal
                        data={CATEGORY}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => (
                            <View style={{
                                marginRight: 10,
                                backgroundColor: '#ffffff',
                                paddingVertical: 10,
                                paddingHorizontal: 15,
                                borderRadius: 20,
                            }}>
                                <Text style={{ color: "#000", fontSize: 15 }}>{item.name}</Text>
                            </View>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
                <FlatList
                    data={DATA}
                    numColumns={2}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={() => props.navigation.navigate('DetailItem', { item })}
                        >
                            <View style={[
                                {
                                    backgroundColor: "pink",
                                    borderRadius: 20,
                                    width: (width / 2) - 15,
                                    height: width * 0.8,
                                    marginVertical: 15,
                                    justifyContent: 'center',
                                    borderColor: "#fff",
                                    shadowColor: '#000',
                                    shadowOffset: { width: 0, height: 2 },
                                    shadowOpacity: 0.2,
                                    shadowRadius: 4,
                                    elevation: 1,
                                },
                                index % 2 === 1 && { marginLeft: 5, marginTop: 30, marginBottom: 0 },
                                index % 2 === 0 && { marginRight: 5 }
                            ]}>
                                <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Text style={{ padding: 10, backgroundColor: '#9ad1eb', borderRadius: 10 }}>30%</Text>
                                        <AntDesign name="heart" size={25} color="#fff"></AntDesign>
                                    </View>
                                </View>
                                <View 
                                    style={[{
                                        ...StyleSheet.absoluteFillObject,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        height: "100%",
                                        zIndex:1
                                    }]}
                                >
                                    <View style={{
                                        width: "62%",
                                        height: "35%",
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: 200,
                                        borderColor:'#fff',
                                        borderWidth:2
                                    }}>
                                    </View>
                                </View>
                                <SharedElement id={`item.${item.id}.bg`}
                                    style={[{
                                        ...StyleSheet.absoluteFillObject,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        height: "100%"
                                    }]}
                                >
                                    <View style={{
                                        width: "70%",
                                        height: "40%",
                                        backgroundColor: item.color,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: 200
                                    }}>
                                    </View>
                                </SharedElement>
                                <SharedElement id={`item.${item.id}.img`}
                                    style={[{
                                        alignItems: 'center',
                                        justifyContent: 'center',

                                    }]}
                                >
                                    <Image source={item.img} style={{
                                        width: 100,
                                        height: 100,
                                        resizeMode: 'contain',
                                    }}></Image>
                                </SharedElement>
                                <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 10 }}>
                                    <Text style={{ color: "#fff", fontSize: 18, fontWeight: "800" }}>{item.name}</Text>
                                    <Text style={{ color: "#fff", fontSize: 16, fontWeight: "800" }}>${item.price}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />

            </View>
        </SafeAreaView>
    )
}
export default ListCategory
const styles = StyleSheet.create({

})
const CATEGORY = [
    {
        "_id": "5f16750cbd39ae51e43a6177",
        "name": "Action",
    },
    {
        "_id": "5f168e428eaebd246008fc82",
        "name": "Adult",
    },
    {
        "_id": "5f168e638eaebd246008fc83",
        "name": "Adventure",
    },
    {
        "_id": "5f168e8f8eaebd246008fc84",
        "name": "Anime",
    },
    {
        "_id": "5f168ea58eaebd246008fc85",
        "name": "Chuyển Sinh",
    },
    {
        "_id": "5f168ede8eaebd246008fc86",
        "name": "Comedy",
    },
    {
        "_id": "5f32608bbde62a7d0729bdd7",
        "name": "Comic"
    },
    {
        "_id": "5f325a14bde62a7d0729bdaf",
        "name": "Cooking",
    }
]
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