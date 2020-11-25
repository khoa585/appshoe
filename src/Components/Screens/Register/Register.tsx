import React from 'react';
import { SafeAreaView, View, StyleSheet, Image, Dimensions, Text, Button } from 'react-native'
import TextInputs from '../../Form/TextInputs';
import CheckBox from '../../Form/CheckBox';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import * as Yup from 'yup';
const Radius = 40
const { width, height: Hheight } = Dimensions.get("window")
const height = width * (750 / 1125);
import { Formik } from 'formik';
import Icon from '../../Form/Icon';
import auth from '@react-native-firebase/auth';
export default React.memo(function Register() {
    const [isView, setView] = React.useState(true)
    let validationSchema = Yup.object({
        firstName: Yup.string().required("Vui lòng điền đầy đủ thông tin"),
        lastName: Yup.string().required("Vui lòng điền đầy đủ thông tin"),
        email: Yup.string()
            .email("Nhập địa chỉ Email hợp lệ '@gmail.com'")
            .required("Vui lòng điền đầy đủ thông tin"),
        password: Yup.string()
            .required("Vui lòng điền đầy đủ thông tin")
            .min(6, "Mật khẩu phải có ít nhất 6 kí tự"),
        repeatPassword: Yup.string()
            .required("Vui lòng điền đầy đủ thông tin")
            .oneOf([Yup.ref("password")], "Mật khẩu không trùng khớp"),
    });
    return (
        <View style={styles.container}>
            <View style={{ flex: 1 / 3 }}>
                <Image
                    style={styles.image_Top}
                    source={{
                        uri: 'https://static.dribbble.com/users/2543587/screenshots/14004374/image.png',
                    }}>
                </Image>
            </View>
            <View style={{ flex: 1, backgroundColor: '#0C0D34', overflow: 'hidden' }}>
                <Image
                    style={styles.image_Body}
                    source={{
                        uri: 'https://static.dribbble.com/users/2543587/screenshots/14004374/image.png',
                    }}>
                </Image>

                <View style={styles.formRegister}>
                    <Text style={styles.title}>Đăng Kí</Text>
                    <ScrollView>
                        <Formik
                            initialValues={{
                                firstName: "",
                                lastName: "",
                                email: "",
                                password: "",
                                repeatPassword: "",
                            }}
                            validationSchema={validationSchema}
                            onSubmit={(values) => {
                                auth()
                                    .createUserWithEmailAndPassword(values.email, values.password)
                                    .then(() => {
                                        console.log('User account created & signed in!');
                                    })
                                    .catch(error => {
                                        if (error.code === 'auth/email-already-in-use') {
                                            console.log('That email address is already in use!');
                                        }

                                        if (error.code === 'auth/invalid-email') {
                                            console.log('That email address is invalid!');
                                        }

                                        console.error(error);
                                    });
                  
                            }}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                            }) => (
                                    <View>
                                        <View style={{ marginBottom: 20 }}>
                                            <TextInputs
                                                icon="mail"
                                                name="firstName"
                                                placeholder="Enter your FirstName"
                                                onChange={handleChange("firstName")}
                                                onBlur={handleBlur("firstName")}
                                                value={values.firstName}
                                                touched={touched.firstName}
                                                errors={errors.firstName}
                                                autoCompleteType="firstName"
                                                returnKeyLabel="next"
                                                returnKeyType="next"
                                            ></TextInputs>
                                        </View>
                                        <View style={{ marginBottom: 20 }}>
                                            <TextInputs
                                                icon="mail"
                                                name="lastName"
                                                placeholder="Enter your lastName"
                                                onChange={handleChange("lastName")}
                                                onBlur={handleBlur("lastName")}
                                                value={values.lastName}
                                                touched={touched.lastName}
                                                errors={errors.lastName}
                                                autoCompleteType="lastName"
                                                returnKeyLabel="next"
                                                returnKeyType="next"
                                            ></TextInputs>
                                        </View>
                                        <View style={{ marginBottom: 20 }}>
                                            <TextInputs
                                                icon="mail"
                                                name="email"
                                                placeholder="Enter your Email"
                                                onChange={handleChange("email")}
                                                onBlur={handleBlur("email")}
                                                value={values.email}
                                                touched={touched.email}
                                                errors={errors.email}
                                                autoCompleteType="email"
                                                returnKeyLabel="next"
                                                returnKeyType="next"
                                            ></TextInputs>
                                        </View>
                                        <View style={{ marginBottom: 20 }}>
                                            <TextInputs
                                                name="password"
                                                icon="lock"
                                                placeholder="Enter your Password"
                                                onChange={handleChange("password")}
                                                onBlur={handleBlur("password")}
                                                autoCompleteType="password"
                                                value={values.password}
                                                touched={touched.password}
                                                errors={errors.password}
                                                returnKeyLabel="next"
                                                returnKeyType="next"
                                                onPress={() => setView((c) => !c)}
                                                secureTextEntry={isView}
                                                isView={isView}
                                            ></TextInputs>
                                        </View>
                                        <View style={{ marginBottom: 20 }}>
                                            <TextInputs
                                                name="repeatPassword"
                                                icon="lock"
                                                placeholder="Enter your repeatPassword"
                                                onChange={handleChange("repeatPassword")}
                                                onBlur={handleBlur("repeatPassword")}
                                                autoCompleteType="repeatPassword"
                                                value={values.repeatPassword}
                                                touched={touched.repeatPassword}
                                                errors={errors.repeatPassword}
                                                returnKeyLabel="next"
                                                returnKeyType="next"
                                                onPress={() => setView((c) => !c)}
                                                secureTextEntry={isView}
                                                isView={isView}
                                            ></TextInputs>
                                        </View>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                justifyContent: 'space-between'
                                            }}
                                        >
                                            <View>
                                                <CheckBox label="Remember me"></CheckBox>
                                            </View>
                                            <View>
                                                <TouchableOpacity activeOpacity={0.5}>
                                                    <Text style={{ color: '#2CB9B0' }}>Quên mật khẩu</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        <View
                                            style={{
                                                marginTop: 20,
                                                marginBottom: 30
                                            }}
                                        >
                                            {/* <Button
                                            title="Đăng Nhập"
                                            color='#2CB9B0'
                                            onPress={handleSubmit}
                                        /> */}
                                            <TouchableOpacity activeOpacity={1} onPress={handleSubmit} style={styles.appButtonContainer}>
                                                <Text style={styles.appButtonText}>Đăng Kí</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                )}
                        </Formik>
                    </ScrollView>
                </View>

            </View>
            < View style={{ flex: 1 / 3, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0C0D34' }}>
                <Icon></Icon>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                    <Text style={{ color: '#fff', paddingRight: 5 }}>Chưa có tài khoản? </Text>
                    <TouchableOpacity activeOpacity={0.5} >
                        <Text style={{ color: '#2CB9B0' }}>Đăng kí ngay </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    title: {
        paddingVertical: 25,
        fontSize: 25,
        textAlign: 'center',
        color: '#2CB9B0',
        fontWeight: 'bold'
    },
    image_Top: {
        ...StyleSheet.absoluteFillObject,
        width: width,
        height: '100%',
        borderBottomLeftRadius: Radius,
        // borderTopLeftRadius: Radius,
        // borderTopRightRadius: Radius
    },
    image_Body: {
        ...StyleSheet.absoluteFillObject,
        width: width,
        height: height,
    },
    formRegister: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopRightRadius: Radius,
        borderBottomLeftRadius: Radius,
        borderBottomRightRadius: Radius,
        paddingHorizontal: 30,
        justifyContent: 'center'
    },
    appButtonContainer: {
        elevation: 3,
        backgroundColor: "#2CB9B0",
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    appButtonText: {
        fontSize: 12,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
})