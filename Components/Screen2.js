import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';



const colorChose = {
  light_blue: 'rgba(197, 241, 251, 1)',
  red: 'rgba(243, 13, 13, 1)',
  black: 'rgba(0, 0, 0, 1)',
  dark_blue: 'rgba(35, 72, 150, 1)'
};
const textColor = {
  red:'red',
  light_blue:'light_blue',
  black:'black',
  silver:'silver'
};
const urlImgData = {
  red:require('../assets/vs_red.png'),
  blue:require('../assets/vs_blue.png'),
  silver:require('../assets/vs_silver.png'),
  black:require('../assets/vs_black.png'),
};
export default function App(props) {
  const [urlImg, setUrlImg] = useState(props.route.params.urlImg);
  const [color, setColor] = useState(props.route.params.color);
  return (
    <View style={styles.container}>
      <View style={styles.viewTitle}>
        <Image style={styles.Image} source={urlImg}></Image>
        <View>
          <Text style={[styles.title, styles.titleColorBold]}>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text>Màu: </Text>
            <Text style={{
              fontFamily: 'Roboto',
              fontSize: '15px',
              lineHeight: '17.58px',
              marginTop:'3px',
              fontWeight:'bold'
            }}>{color}</Text>
          </View>
          <Text style={[styles.title, styles.titleColorBold]}>Cung cấp bởi Tiki Tradding</Text>
          <Text style={[styles.title, styles.titleColorBold]}>1.790.000 đ</Text>
        </View>
      </View>
      <View style={styles.viewChose}>
        <View style={styles.choseText}> Chọn một màu bên dưới:</View>
        <View style={styles.viewChoseColor}>
          <TouchableOpacity style={[styles.choseColor, { backgroundColor: colorChose.light_blue }]}
            onPress={() => {
              setColor(textColor.silver),
              setUrlImg(urlImgData.silver)
            }}
          ></TouchableOpacity>
        </View>
        <View style={styles.viewChoseColor}>
          <TouchableOpacity style={[styles.choseColor, { backgroundColor: colorChose.red }]}
          onPress={() => {
            setColor(textColor.red),
            setUrlImg(urlImgData.red)
          }}
          ></TouchableOpacity>
        </View>
        <View style={styles.viewChoseColor}>
          <TouchableOpacity style={[styles.choseColor, { backgroundColor: colorChose.black }]}
          onPress={() => {
            setColor(textColor.black),
            setUrlImg(urlImgData.black)
          }}
          ></TouchableOpacity>
        </View>
        <View style={styles.viewChoseColor}>
          <TouchableOpacity style={[styles.choseColor, { backgroundColor: colorChose.dark_blue }]}
          onPress={() => {
            setColor(textColor.light_blue),
            setUrlImg(urlImgData.blue)
          }}
          ></TouchableOpacity>
        </View>
        <View style={styles.viewChoseColor}>
          <Pressable style={[styles.btnDone]} onPress={()=> {
            props.navigation.navigate({name:'Home',params:{
              urlImg,
              color
          },merge:true});
          }}>
            <Text style={styles.textBtn}>XONG</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  viewTitle: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'space-around'
  },
  Image: {
    flex: 1,
    width: null,
    height: '132px',
    resizeMode: 'contain',
    marginLeft: '15px'
  },
  title: {
    flex: 2,
    flexWrap: 'wrap',
    fontFamily: 'Roboto',
    fontSize: '15px',
    lineHeight: '17.58px',
    marginTop: '20px'
  },
  titleColorBold: {
    fontWeight: 'bold',
  },
  viewChose: {
    flex: 3,
    backgroundColor: 'rgba(196, 196, 196, 1)',
  },
  choseText: {
    flex: 1,
    marginRight: '20px',
    flexDirection: 'row',
    fontFamily: 'Roboto',
    fontSize: '18px',
    fontWeight: '400',
    color: 'black',
    lineHeight: '21.09px',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: '10px'
  },
  choseColor: {
    width: '85px',
    height: '80px'
  },
  viewChoseColor: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: '10px'
  },
  viewChoseBtn: {
    flex: 2,
    width: '100%'
  },
  btnDone: {
    backgroundColor: 'rgba(25, 82, 226, 0.58)',
    width: '326px',
    height: '44px',
    borderRadius: '5px',
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBtn: {
    fontSize: 20,
    lineHeight: 23.44,
    letterSpacing: 0.25,
    color: 'rgba(249, 242, 242, 1)',
  }
});
