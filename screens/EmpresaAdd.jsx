import React, { component } from 'react'
import { Text , Stylesheet , View } from "react-native"

export default function EmpresaAdd() {
    ruturn(
        <view style={styles.padre}>
            <view>
                <image source={require('../assets/imagenes/spider.jpeg')} style={styles.spider} />
            </view>
        </view>
    );
}
const styles = StyleSheet.create({
    padre:{
        flex:1,
        justifyContent: 'center',
        alingItems:'center',
        backgroundColor:'white'
    },
    spider:{
        width:100,
        height:100,
        borderRadius: 50,
        borderColor:'white'
    }
});