import React from 'react';
import { SafeAreaView, View, StyleSheet, Image, Dimensions, Text, Button } from 'react-native'
import TextInputs from '../../Form/TextInputs';
import CheckBox from '../../Form/CheckBox';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Yup from 'yup';
const Radius = 50
const { width, height: Hheight } = Dimensions.get("window")
const height = width * (750 / 1125);
import { Formik } from 'formik';

export default React.memo(function ForgotPassword() {
    const [isView, setView] = React.useState(true)
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("Nhập địa chỉ Email hợp lệ '@gmail.com'")
            .required("Vui lòng điền đầy đủ thông tin"),
        password: Yup.string().required("Vui lòng điền đầy đủ thông tin")
            .min(6, "Mật khẩu phải có ít nhất 6 kí tự"),
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
                <View style={styles.formLogin}>
                    <Text style={styles.title}>Xin Chào</Text>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            console.log(values)
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
                                    <View
                                        style={{
                                            marginTop: 20
                                        }}
                                    >
                                        {/* <Button
                                            title="Đăng Nhập"
                                            color='#2CB9B0'
                                            onPress={handleSubmit}
                                        /> */}
                                        <TouchableOpacity activeOpacity={1} onPress={handleSubmit} style={styles.appButtonContainer}>
                                            <Text style={styles.appButtonText}>Đăng Nhập</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}
                    </Formik>
                </View>

            </View>
            < View style={{ flex: 1 / 3, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0C0D34' }}>
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
    formLogin: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopRightRadius: Radius,
        borderBottomLeftRadius: Radius,
        borderBottomRightRadius: Radius,
        paddingHorizontal: 30,
        justifyContent : 'center'
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