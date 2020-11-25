import React from 'react'
import {
    DrawerContentScrollView,
    DrawerItem,
} from '@react-navigation/drawer';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    Dimensions,
    Image,
    FlatList,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Drawer, Switch, Caption, Title, Avatar, Paragraph, TouchableRipple } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
export default function MainTab(props: any) {
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    return (
        <View style={{ flex: 1 }}>
            <View style={{
                flex: 1 / 4,
                justifyContent: 'center',
                paddingHorizontal: 20,
                backgroundColor: '#ffa69e',
                borderBottomRightRadius: 60
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',

                }}>
                    <View>
                        <Feather
                            name="x"
                            size={25}
                            color={'#fff'}
                            onPress={() => props.navigation.closeDrawer()}
                        />
                    </View>
                    <View style={{
                        justifyContent: 'center',
                    }}>
                        <Text style={{
                            color: "#fff",
                            fontSize: 16
                        }}>Hồ Sơ </Text>
                    </View>
                    <View>
                        <TouchableOpacity activeOpacity={0.3}>
                            <Feather
                                name="bell"
                                size={25}
                                color={'#fff'}
                            >
                            </Feather>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{ flex: 1, backgroundColor: '#ffa69e' }}>
                <View style={{
                    flex: 1,
                    backgroundColor: '#fff',
                    borderTopLeftRadius: 60,
                    borderBottomRightRadius: 60
                }}>

                    <View style={styles.container}>
                        <View>
                            <View style={styles.userInfor}>
                                <View style={{
                                    ...StyleSheet.absoluteFillObject,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    top: -20,
                                    zIndex: 9,
                                }}>
                                    <Avatar.Image size={60} source={{ uri: 'https://tse2.mm.bing.net/th?id=OIP.o61crVM6t5P25vq5oo_EmwHaEK&pid=Api&P=0&w=288&h=162' }} />
                                </View>
                            </View>
                            <View style={styles.followUser_}>
                                <View style={styles.inforName}>
                                    <Title>HODUYKHOA</Title >
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Paragraph style={styles.followUser__}>1999@gmail.com</Paragraph>
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'space-around' }}>
                            <View style={{
                                paddingHorizontal: 20,
                            }}>
                                <RectButton
                                    onPress={() => { props.navigation.navigate('Login') }}
                                    style={{ paddingVertical: 5 }}
                                >
                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        paddingVertical: 5,
                                        paddingHorizontal: 5,
                                    }}>
                                        <View>
                                            <AntDesign name="home" size={25} color='#000' />
                                        </View>
                                        <Text style={{
                                            color: '#000',
                                            paddingHorizontal: 10,
                                            fontSize: 16
                                        }}>Sign-Out</Text>
                                    </View>
                                </RectButton>
                                <RectButton
                                    onPress={() => { props.navigation.navigate('Register') }}
                                    style={{ paddingVertical: 5 }}
                                >
                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        paddingVertical: 5,
                                        paddingHorizontal: 5,
                                    }}>
                                        <View>
                                            <AntDesign name="home" size={25} color='#000' />
                                        </View>
                                        <Text style={{
                                            color: '#000',
                                            paddingHorizontal: 10,
                                            fontSize: 16
                                        }}>Sign-Out</Text>
                                    </View>
                                </RectButton>
                                <RectButton
                                    onPress={() => { props.navigation.navigate('Cart') }}
                                    style={{ paddingVertical: 5 }}
                                >
                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        paddingVertical: 5,
                                        paddingHorizontal: 5,
                                    }}>
                                        <View>
                                            <AntDesign name="home" size={25} color='#000' />
                                        </View>
                                        <Text style={{
                                            color: '#000',
                                            paddingHorizontal: 10,
                                            fontSize: 16
                                        }}>Sign-Out</Text>
                                    </View>
                                </RectButton>
                                <RectButton
                                    onPress={() => { props.navigation.navigate('ListCategory') }}
                                    style={{ paddingVertical: 5 }}
                                >
                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        paddingVertical: 5,
                                        paddingHorizontal: 5,
                                    }}>
                                        <View>
                                            <AntDesign name="home" size={25} color='#000' />
                                        </View>
                                        <Text style={{
                                            color: '#000',
                                            paddingHorizontal: 10,
                                            fontSize: 16
                                        }}>Sign-Out</Text>
                                    </View>
                                </RectButton>
                                <RectButton
                                    onPress={() => { props.navigation.navigate('ForgotPassword') }}
                                    style={{ paddingVertical: 5 }}
                                >
                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        paddingVertical: 5,
                                        paddingHorizontal: 5,
                                    }}>
                                        <View>
                                            <AntDesign name="home" size={25} color='#000' />
                                        </View>
                                        <Text style={{
                                            color: '#000',
                                            paddingHorizontal: 10,
                                            fontSize: 16
                                        }}>Sign-Out</Text>
                                    </View>
                                </RectButton>
                            </View>
                            <View style={{
                                paddingHorizontal: 15,
                            }}>

                                <TouchableRipple onPress={() => { onToggleSwitch() }}>
                                    <View style={styles.Preference}>
                                        <Text>Dark Theme</Text>
                                        <View pointerEvents="none">
                                            <Switch value={isSwitchOn} onValueChange={() => { onToggleSwitch() }} />
                                        </View>
                                    </View>
                                </TouchableRipple>

                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ flex: 1 / 5 }}>
                <View style={{
                    flex: 1,
                    backgroundColor: '#ffa69e',
                    borderTopLeftRadius: 60,
                    paddingHorizontal: 25,
                    justifyContent: 'center',

                }}>
                    <RectButton>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingVertical: 5,
                            paddingHorizontal: 5,
                        }}>
                            <View>
                                <FontAwesome
                                    name="sign-out"
                                    size={29}
                                    color='#fff' />
                            </View>
                            <Text style={{
                                color: '#fff',
                                paddingHorizontal: 10
                            }}>Sign-Out</Text>
                        </View>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    userInfor: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 5,
    },
    inforName: {
        justifyContent: 'center',

    },
    followUser_: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15
    },
    followUser__: {
        fontWeight: "bold",
        paddingRight: 10
    },
    Preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
    },
    bottomSession: {
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    }
})