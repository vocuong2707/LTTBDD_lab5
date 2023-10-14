import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
export default function App(props) {
    const [urlImg,setUrlImg] = useState(require('../assets/vs_blue.png'));
    const [color,setColor] = useState('blue');
   useEffect(() => {
    if(props.route.params !== undefined) {        
        setUrlImg(props.route.params.urlImg); 
        setColor(props.route.params.color)
    }
   })
    return (
        <View style={styles.container}>
            <View style={styles.ViewImg}>
                <Image style={styles.Img} source={urlImg}></Image>
            </View>
            <View style={styles.ViewImg}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.titlePhone}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Image style={styles.imgStar} source={require('../assets/star.png')}></Image>
                        <Image style={styles.imgStar} source={require('../assets/star.png')}></Image>
                        <Image style={styles.imgStar} source={require('../assets/star.png')}></Image>
                        <Image style={styles.imgStar} source={require('../assets/star.png')}></Image>
                        <Image style={styles.imgStar} source={require('../assets/star.png')}></Image>
                    </View>
                    <View>
                        <Text style={styles.titleComent}>(Xem 828 đánh giá)</Text>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', alignContent: 'space-between' }}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.titlePrice}>1.790.000 đ</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{
                            marginLeft: '20px', textDecorationLine: "line-through",
                            textDecorationStyle: "solid",
                            textDecorationColor: "#000",
                            color: 'rgba(0, 0, 0, 0.58)'
                        }}>1.790.000 đ</Text>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Text style={{ fontFamily: 'Roboto', fontSize: '12px', color: 'rgba(250, 0, 0, 1)', marginTop: '3px' }}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                    <Image style={{ width: '20px', height: '20px', marginLeft: '5px', marginBottom: '3px' }} source={require('../assets/Group 1.png')}></Image>
                </View>
                <TouchableOpacity style={{ flex: 1, borderWidth: '1px', borderRadius: '10px', width: '300px', height: '15px', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }} onPress={() => {
                    props.navigation.navigate('Chose',{
                        urlImg:urlImg,
                        color:color
                    });
                }}>
                    <Text style={{ flex: 1, alignItems: 'center', paddingLeft: '90px', fontFamily: 'Roboto', fontSize: '15px', fontWeight: '400', color: 'rgba(0, 0, 0, 1)', lineHeight: '17.58px' }}>4 MÀU-CHỌN MÀU</Text>
                    <Image style={{ width: '11.5px', height: '14px', marginRight: '5px' }} source={require('../assets/Vector.png')}></Image>
                </TouchableOpacity>
                <View style={{ flex: 2, justifyContent: 'flex-end', marginBottom: '5px' }}>
                    <TouchableOpacity style={styles.btnBuy}>
                        <Text style={{fontFamily:'Roboto',color:'white',fontWeight:'400'}}>CHON MUA</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ViewImg: {
        flex: 1
    },
    Img: {
        width: '290px',
        height: '310px',
        resizeMode:'cover'
    },
    titlePhone: {
        fontFamily: 'Roboto',
        fontSize: '15px',
        lineHeight: '17.58px',
        fontWeight: 'bold',
        marginRight: '5px',
        marginTop: '10px'
    },
    imgStar: {
        color: 'E0E41A',
        width: '23px',
        height: '25px'
    },
    titleComent: {
        fontFamily: 'Roboto',
        fontSize: '15px',
        fontWeight: 'bold',
        lineHeight: '17.58px',
        marginTop: '5px'
    },
    titlePrice: {
        fontFamily: 'Roboto',
        fontSize: '18px',
        fontWeight: 'bold',
        lineHeight: '21.09px'
    },
    btnBuy: {
        alignItems:'center',
        justifyContent:'center',
        height:'33px',
        borderRadius: '10px',
        borderWidth: '1px',
        backgroundColor: 'rgba(202, 21, 54, 1)',
    }
});
