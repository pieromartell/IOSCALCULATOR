import React from 'react';
import {Pressable, Text, View} from 'react-native';
import { colors, styles } from '../../config/theme/app-theme';
import { CalculatorBuuton } from '../components/CalculatorButon';
import { useCalculator } from '../hooks/useCalculator';

export const CalculatorScreen = () => {
const {number,buildNumber,toogleSign,clean,deleteOperation,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
    PreNumber,
    calculateResult,

} = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
        <View style={{paddingHorizontal:30,paddingBottom:20}}>
            <Text
            adjustsFontSizeToFit
            numberOfLines={1}
            style={styles.mainResult}>{number}</Text>

            <Text 
            adjustsFontSizeToFit
            numberOfLines={1}            
            style={styles.subresult}

            >{PreNumber === '0' ? '' : PreNumber}</Text>
        </View>
        
        <View style={styles.row}>
            <CalculatorBuuton onPress={clean}  label = "C" blackText  color={colors.lightGray}/>
            <CalculatorBuuton onPress={deleteOperation}  label = "del" blackText color={colors.lightGray}/>
            <CalculatorBuuton onPress={toogleSign}  label = "+/-" blackText color={colors.lightGray}/>
            <CalculatorBuuton onPress={divideOperation}  label = "/" blackText color={colors.orange}/>
        </View>
        <View style={styles.row}>
            <CalculatorBuuton onPress={()=>buildNumber("7")} label = "7" />
            <CalculatorBuuton onPress={()=>buildNumber("8")} label = "8" />
            <CalculatorBuuton onPress={()=>buildNumber("9")} label = "9" />
            <CalculatorBuuton onPress={multiplyOperation} label = "X" color={colors.orange}/>
        </View>
        <View style={styles.row}>
            <CalculatorBuuton onPress={()=>buildNumber("4")} label = "4" />
            <CalculatorBuuton onPress={()=>buildNumber("5")} label = "5" />
            <CalculatorBuuton onPress={()=>buildNumber("6")} label = "6" />
            <CalculatorBuuton onPress={subtractOperation} label = "-" color={colors.orange}/>
        </View>
        <View style={styles.row}>
            <CalculatorBuuton onPress={()=>buildNumber("1")} label = "1" />
            <CalculatorBuuton onPress={()=>buildNumber("2")} label = "2" />
            <CalculatorBuuton onPress={()=>buildNumber("3")} label = "3" />
            <CalculatorBuuton onPress={addOperation} label = "+" color={colors.orange}/>
        </View>

        <View style={styles.row}>
            <CalculatorBuuton onPress={()=>buildNumber("0")} label = "0" doubleSize/>
            <CalculatorBuuton onPress={()=>buildNumber(".")} label = "." />
            <CalculatorBuuton  onPress={calculateResult} label = "=" color={colors.orange}/>
        </View>




    </View>
  );
};
