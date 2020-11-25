import * as React from 'react';
import {
    StatusBar,
    Text,
    View,
    StyleSheet,
    FlatList,
    Image,
    Dimensions,
    Animated,
    TouchableOpacity,
    Platform,
    Easing,
} from 'react-native';
const { width, height } = Dimensions.get('window');
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import BottomTab from './Screens/BottomTab/BottomTab';
import { SharedElement } from 'react-navigation-shared-element';
import TouchableScale from 'react-native-touchable-scale';
import * as Animatable from 'react-native-animatable';
import auth from '@react-native-firebase/auth';
const ITEM_SIZE = width * 0.74;
const CELL_WIDTH = width * 0.64;
const CELL_HEIGHT = width * 0.64;
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
export default function ListItem({ navigation }: any) {
    const scrollX = React.useRef(new Animated.Value(0)).current;
    const sacle = React.useRef(new Animated.Value(1)).current
    // React.useEffect(() => {
    //     auth()
    //         .createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
    //         .then(() => {
    //             console.log('User account created & signed in!');
    //         })
    //         .catch(error => {
    //             if (error.code === 'auth/email-already-in-use') {
    //                 console.log('That email address is already in use!');
    //             }

    //             if (error.code === 'auth/invalid-email') {
    //                 console.log('That email address is invalid!');
    //             }

    //             console.error(error);
    //         });
    // }, []);
    const clickIten = React.useCallback(() => {

        const animated1 = Animated.timing(
            sacle, {
            toValue: 0.9,
            duration: 200,
            easing: Easing.ease,
            useNativeDriver: true
        })
        const animated2 = Animated.timing(
            sacle, {
            toValue: 1,
            duration: 150,
            easing: Easing.ease,
            useNativeDriver: true
        })
        Animated.sequence([animated1, animated2]).start()

    }, [sacle])
    return (
        <>
            <View style={styles.container}>
                <StatusBar hidden />
                <View style={styles.backgroudContainer}>
                </View>
                <View style={styles.header}>
                    <Text style={styles.title}>Discover</Text>
                    <View style={styles.action}>
                        <View style={[styles.iconAction, { marginHorizontal: 10 }]}>
                            <AntDesign name="search1" size={25}></AntDesign>
                        </View>
                        <View style={styles.iconAction}>
                            <SimpleLineIcons name="bell" size={25}></SimpleLineIcons>
                        </View>
                    </View>
                </View>
                <View style={styles.container_Slide}>
                    <View
                        style={{
                            paddingHorizontal: 20
                        }}>
                        <FlatList
                            horizontal
                            data={CATEGORY}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) => (
                                <View style={{
                                    marginRight: 20,
                                    paddingHorizontal:10,
                                    paddingVertical:10,
                                    borderRadius:50,
                                    backgroundColor:'#fff'
                                }}>
                                    <Text style={{ color: "#000", fontSize: 16 }}>{item.name}</Text>
                                </View>
                            )}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                    <Animated.FlatList
                        showsHorizontalScrollIndicator={false}
                        data={DATA}
                        keyExtractor={(item) => item.id}
                        horizontal
                        bounces={false}
                        style={{

                        }}
                        decelerationRate={Platform.OS === 'ios' ? 0 : 0.28}
                        renderToHardwareTextureAndroid
                        contentContainerStyle={{ alignItems: 'center' }}
                        snapToInterval={ITEM_SIZE}
                        snapToAlignment='start'
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                            { useNativeDriver: true }
                        )}
                        scrollEventThrottle={16}
                        renderItem={({ item, index }) => {
                            // console.log(item.img)
                            // if (!item.title) {
                            //     return <View style={{ width: ITEM_SIZE / 2.9 }} />;
                            // }
                            const inputRange = [
                                (index - 1) * ITEM_SIZE,
                                (index - 0.5) * ITEM_SIZE,
                                (index - 0.2) * ITEM_SIZE,
                                (index - 0.1) * ITEM_SIZE,
                                (index - 0.05) * ITEM_SIZE,
                                (index) * ITEM_SIZE,
                                (index + 0.5) * ITEM_SIZE,
                                (index + 1) * ITEM_SIZE,
                            ]

                            const rotateY = scrollX.interpolate({
                                inputRange,
                                outputRange: ['0deg', "-12deg", "10deg", "10deg", "8deg", "0deg", "20deg", "0deg"],
                                extrapolate: "clamp"
                            })

                            const translateX = scrollX.interpolate({
                                inputRange: [
                                    (index - 1) * ITEM_SIZE,
                                    (index - 0.05) * ITEM_SIZE,
                                    (index) * ITEM_SIZE,
                                    (index + 0.5) * ITEM_SIZE,
                                    (index + 1) * ITEM_SIZE
                                ],
                                outputRange: [ITEM_SIZE, 20, 20, -ITEM_SIZE / 4, -ITEM_SIZE],
                                extrapolate: "clamp"
                            })
                            const translateicon = scrollX.interpolate({
                                inputRange: [
                                    (index - 1) * ITEM_SIZE,
                                    (index - 0.05) * ITEM_SIZE,
                                    (index) * ITEM_SIZE,
                                    (index + 0.5) * ITEM_SIZE,
                                    (index + 1) * ITEM_SIZE
                                ],
                                outputRange: [ITEM_SIZE, 0, 0, -ITEM_SIZE / 4, -ITEM_SIZE],
                                extrapolate: "clamp"
                            })
                            const rotate = scrollX.interpolate({
                                inputRange: [
                                    (index - 0.6) * ITEM_SIZE,
                                    (index - 0.4) * (ITEM_SIZE),
                                    (index) * ITEM_SIZE,
                                    (index + 0.5) * ITEM_SIZE,
                                    (index + 1) * ITEM_SIZE,
                                ],
                                outputRange: ['-50deg', "-40deg", "0deg", "0deg", "0deg"],
                                extrapolate: "clamp"
                            })
                            const opacity = scrollX.interpolate({
                                inputRange: [
                                    (index - 0.2) * ITEM_SIZE,
                                    (index) * ITEM_SIZE,
                                    (index + 0.2) * ITEM_SIZE,
                                ],
                                outputRange: [0, 1, 0],
                                extrapolate: "clamp"
                            })
                            return (
                                <TouchableScale
                                    onPress={() => clickIten()}
                                    activeScale={0.95}
                                    tension={50}
                                    friction={7}
                                    useNativeDriver
                                    style={{
                                        width: CELL_WIDTH,
                                        height: CELL_HEIGHT,
                                        margin: 20,
                                    }}
                                >
                                    <View style={{ flex: 1 }}>
                                        <SharedElement id={`item.${item.id}.bg`}
                                            style={[StyleSheet.absoluteFillObject]}
                                        >
                                            <Animated.View style={[StyleSheet.absoluteFillObject, {
                                                backgroundColor: item.color,
                                                borderRadius: 16,
                                                // shadowColor: '#000',
                                                // shadowOffset: { width: 0, height: 1 },
                                                // shadowOpacity: 0.2,
                                                // shadowRadius: 4,
                                                // elevation: 1,
                                            },
                                            { transform: [{ rotateY }, { perspective: 200 }] }
                                            ]} />
                                        </SharedElement>
                                        <SharedElement id={`item.${item.id}.img`}
                                            style={[{
                                                ...StyleSheet.absoluteFillObject,
                                                alignItems: 'center',
                                                justifyContent: 'center',

                                                height: '100%'
                                            }]}
                                        >
                                            <Animated.Image
                                                source={item.img}
                                                resizeMode="contain"
                                                style={[{
                                                    width: "100%",
                                                    height: "100%",
                                                }, {
                                                    transform: [{ translateX }, { perspective: 200 }, { rotate }, {
                                                        scale: sacle
                                                    }]
                                                }]}
                                            />
                                        </SharedElement>
                                        <View style={{
                                            paddingHorizontal: 10,
                                            paddingVertical: 10,
                                            height: "100%",
                                            width: "100%",
                                            flexDirection: "column",
                                            justifyContent: "space-between",

                                        }}>
                                            <View style={styles.headerShoe}>
                                                <Animated.View style={{opacity}}>
                                                    <SharedElement id={`item.${item.id}.category`}>
                                                        <Text style={styles.namecategory}>{item.category}</Text>
                                                    </SharedElement>
                                                    <Text style={styles.priceShoe}>${item.price}</Text>
                                                </Animated.View>
                                                <View>
                                                    <Animated.View style={{
                                                        backgroundColor: '#62aec5',
                                                        borderRadius: 30,
                                                        padding: 8,
                                                        borderWidth: 1,
                                                        borderColor: "#fff",
                                                        shadowColor: '#000',
                                                        shadowOffset: { width: 0, height: 2 },
                                                        shadowOpacity: 0.2,
                                                        shadowRadius: 4,
                                                        elevation: 3,
                                                        opacity
                                                    }}>
                                                        <AntDesign name="heart" size={25} color="#fff"></AntDesign>
                                                    </Animated.View>
                                                </View>
                                            </View>
                                            <View style={{ alignItems: "center",
                                             flexDirection: 'row',
                                              justifyContent: 'space-between' ,
                                              paddingBottom:5
                                              }}>
                                                <Animated.Text style={[styles.nameShoe,{opacity}]}>{item.name}</Animated.Text>
                                                <TouchableOpacity
                                                    activeOpacity={0.5}
                                                    onPress={() => navigation.navigate('DetailItem', { item })}
                                                    style={{
                                                        paddingRight:5,
                                                    }}
                                                >
                                                    <Animated.View
                                                        style={[{
                                                            backgroundColor: '#62aec5',
                                                            borderRadius: 5,
                                                            padding: 5,
                                                            borderWidth: 1,
                                                            borderColor: "#fff",
                                                            shadowColor: '#000',
                                                            shadowOffset: { width: 0, height: 2 },
                                                            shadowOpacity: 0.2,
                                                            shadowRadius: 4,
                                                            elevation: 3,
                                                            opacity
                                                        },{
                                                            transform:[{rotate:"45deg"}]
                                                        }
                                                        ]}>
                                                        <AntDesign name="arrowright" size={25} color="#fff" style={{
                                                             transform:[{rotate:"-45deg"}]
                                                        }}></AntDesign>
                                                    </Animated.View>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableScale>
                            );
                        }}
                    />
                </View>
                <View style={styles.listmore}>
                    <View>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: '600',
                            paddingVertical: 5,
                        }}>More</Text>
                    </View>
                    <View style={styles.styleList}>
                        <FlatList
                            horizontal
                            data={DATA}

                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) => (
                                <View style={[styles.itemList,
                                {
                                    backgroundColor: "whitesmoke",
                                    borderRadius: 20
                                }
                                ]}>
                                    <View style={styles.itemShoe}>
                                        <View style={{
                                            flexDirection: 'row',
                                            height: "70%",
                                            justifyContent: 'space-between',

                                        }}>
                                            <View style={{
                                                backgroundColor: "#62aec5",
                                                height: "60%",
                                                alignItems: 'center',
                                                justifyContent: "center",
                                                borderBottomRightRadius: 20,
                                                borderTopLeftRadius: 20,
                                                width: "25%"
                                            }}>
                                                <Text style={
                                                    [{ color: '#fff' },
                                                    { transform: [{ rotate: "-90deg" }] }]
                                                }>New</Text>
                                            </View>
                                            <View style={{
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                width: "50%"
                                            }}>
                                                <Image
                                                    source={item.img}
                                                    style={[{ height: "100%", width: width * 0.3 },
                                                    { transform: [{ rotate: "-45deg" }] }
                                                    ]}
                                                    resizeMode="contain"></Image>
                                            </View>
                                            <View
                                                style={{
                                                    height: "40%",
                                                    alignItems: 'center',
                                                    justifyContent: "center",

                                                    width: "25%"
                                                }}>
                                                <AntDesign name="hearto" size={20} color="#898989"></AntDesign>
                                            </View>
                                        </View>
                                        <View style={{
                                            flexDirection: 'row',
                                            height: "30%",
                                            justifyContent: 'space-between',
                                            borderBottomRightRadius: 20,
                                        }}>
                                            <View style={{
                                                paddingLeft: 10,
                                                justifyContent: 'center',
                                            }}>
                                                <Text style={{ color: '#9a9494' }}>Nile</Text>
                                                <Text style={{ color: '#9a9494' }}>#555</Text>
                                            </View>
                                            <View style={{
                                                backgroundColor: "#62aec5",
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderTopLeftRadius: 20,
                                                paddingHorizontal: 20,
                                                borderBottomRightRadius: 20,
                                            }}>
                                                <EvilIcons name="cart" size={25} color="#fff"></EvilIcons>
                                            </View>
                                        </View>

                                    </View>
                                </View>
                            )}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                </View>
            </View>
            <BottomTab></BottomTab>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 10
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    posterImage: {
        width: '100%',
        height: ITEM_SIZE * 1.2,
        resizeMode: 'cover',
        borderRadius: 24,
        margin: 0,
        marginBottom: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        paddingHorizontal: 20,
    },
    action: {
        flexDirection: "row",
        alignItems: "center"
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    container_Slide: {
        marginTop: 15,
    },
    headerShoe: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    nameShoe: {
        color: "#fff"
    },
    namecategory: {
        color: "#fff",
        fontSize: 20
    },
    priceShoe: {
        color: "#fff"
    },
    iconAction: {
        padding: 5,
        borderRadius: 20,
        backgroundColor: '#f0efeb'
    },
    listmore: {
        paddingHorizontal: 20,
    },
    styleList: {

    },
    itemList: {
        height: width * 0.45,
        width: (width / 2) - 25,
        marginRight: 10,

    },
    backgroudContainer: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#ffa69e',
        width: width,
        height: height * 0.35,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50
    },
    itemShoe: {

        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20
    }
});
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
