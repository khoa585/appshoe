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
import { SafeAreaView } from 'react-native-safe-area-context';
import TouchableScale from 'react-native-touchable-scale';
import * as Animatable from 'react-native-animatable';
const DetailItem = (props: any) => {
    const { item } = props.route.params;
    const sacle = React.useRef(new Animated.Value(1)).current
 
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>

                <View style={{ height: width * 0.6, }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ backgroundColor: '#69bcfc', width: width / 2 }}>
                        </View>
                        <View style={{ width: width / 2 }}>
                            <SharedElement id={`item.${item.id}.bg`} style={[
                                {
                                    ...StyleSheet.absoluteFillObject,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }
                            ]}>
                                <View style={[styles.backgroudContainer, {
                                    backgroundColor: item.color,
                                }]}>
                                </View>
                            </SharedElement>
                        </View>
                    </View>
                    <SharedElement id={`item.${item.id}.img`} style={[
                        {
                            ...StyleSheet.absoluteFillObject,
                            justifyContent: 'center',
                            alignItems: 'center',

                        }
                    ]}>
                        <Image
                            source={item.img}
                            resizeMode="contain"
                            style={styles.image}
                        />
                    </SharedElement>
                    <View style={{
                        paddingHorizontal: 20,
                        position: 'absolute',
                        width: '100%',
                        paddingVertical: 10,
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <TouchableOpacity activeOpacity={0.9} style={{
                                padding: 10,
                                backgroundColor: '#000'
                            }} onPress={() => props.navigation.goBack()}>
                                <View >
                                    <AntDesign name="left" size={25} color="#fff"></AntDesign>
                                </View>
                            </TouchableOpacity>
                            <SharedElement id={`item.${item.id}.category`}>
                                <Text style={{ color: "#fff", fontSize: 20 }}>{item.category}</Text>
                            </SharedElement>
                            <View style={{
                                padding: 5,
                                backgroundColor: "#dea293",
                                borderRadius: 20,
                                // shadowColor: '#ffa69e',
                                // shadowOffset: { width: 0, height: 1 },
                                // shadowOpacity: 0.2,
                                // shadowRadius: 1,
                                // elevation: 1,
                            }}>
                                <AntDesign name="hearto" size={25} color="#fff"></AntDesign>
                            </View>
                        </View>
                    </View>

                </View>
                <View style={{
                    paddingHorizontal: 20,
                    justifyContent: 'center',
                    flex: 1
                }}>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: "space-between",
                        width: '100%',
                        paddingBottom: 10,
                        borderBottomWidth: 2,
                        borderColor: "#69bcfc"
                    }}>
                        <View style={styles.Slideimage}>
                            <Image
                                source={item.img}
                                resizeMode="contain"
                                style={styles.img}
                            />
                        </View>
                        <View style={styles.Slideimage}>
                            <Image
                                source={item.img}
                                resizeMode="contain"
                                style={styles.img}
                            />
                        </View>
                        <View style={styles.Slideimage}>
                            <Image
                                source={item.img}
                                resizeMode="contain"
                                style={styles.img}
                            />
                        </View>
                        <View style={styles.Slideimage}>
                            <Image
                                source={item.img}
                                resizeMode="contain"
                                style={styles.img}
                            />
                        </View>
                    </View>
                    <View style={styles.detailshoe}>
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{item.name}</Text>
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{item.price}</Text>
                    </View>
                    <View >
                        <Text style={styles.text} numberOfLines={3}>The The The The The The The TheThe The The The The The The TheThe The The The The The The TheThe The The The The The The The The The The The The The The TheThe The The The The The The TheThe The The The The The The TheThe The The The The The The The</Text>
                    </View>
                    <View style={{
                        paddingVertical: 10
                    }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Size</Text>
                        <View style={styles.listSize}>
                            {
                                SIZE.map((item, index) => {
                                    return (
                                        <TouchableOpacity key={index} style={[index === 0 && { backgroundColor: '#fff',borderRadius:5 }]}>
                                            <View style={styles.size}><Text style={[{ color: "#fff" }, index === 0 && { color: '#000' }]}>{item}</Text></View>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </View>
                    </View>
                    <Animated.View
                        style={{
                            transform: [{
                                scale: sacle
                            }]
                        }}
                    >
                        <TouchableScale
                            activeScale={0.9}

                            useNativeDriver
                            onPress={() => true}
                            style={styles.appButtonContainer}>
                            <Text style={styles.appButtonText}>Đăng Nhập</Text>
                        </TouchableScale>
                    </Animated.View>
                </View>
            </View>
        </SafeAreaView>

    );
}

export default React.memo(DetailItem)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    backgroudContainer: {
        ...StyleSheet.absoluteFillObject,
    },
    image: {
        width: width * 0.64,
        height: (width * 0.64) * 1.4,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'contain',
        position: 'absolute',
        top: -20,
    },
    Slideimage: {
        backgroundColor: '#69bcfc',
        width: width / 5,
        height: width / 5,
        alignItems: 'center',
        justifyContent: 'center',
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.2,
        // shadowRadius: 4,
        // elevation: 2,
        borderRadius: 5,
        marginVertical: 5,
    },
    img: {
        width: "90%",
        height: "100%",
        paddingHorizontal: 10
    },
    detailshoe: {
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        color: '#2b2e32',
    },
    size: {

        width: width / 5,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 2
    },
    listSize: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#69bcfc',
        padding: 10,
        // shadowColor: '#000',
        // shadowOffset: { width: 2, height: 2 },
        // shadowOpacity: 0.2,
        // shadowRadius: 4,
        // elevation: 1,
        marginVertical: 5,
        borderRadius: 5,
    },
    appButtonContainer: {
        // elevation: 2,
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
    }
});

const SIZE = [5, 5.5, 6, 6.5]