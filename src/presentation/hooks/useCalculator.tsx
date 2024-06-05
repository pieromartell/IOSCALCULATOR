import React, { useRef, useState } from 'react'

enum Operators {
  add,
  subtract,
  multiply,
  divide,
}



export const useCalculator = () => {

  const [PreNumber, setPreNumber] = useState('0');
  const [number, setNumber] = useState('0');

  const lastOperation = useRef<Operators>();
  const clean = () => {
    setNumber('0')
  }

  const deleteOperation = () => {
    let currentSing = ''
    let temporalNumber = number

    if (number.includes('-')) {
      currentSing = '-';
      temporalNumber = number.substring(1);
    }

    if (temporalNumber.length > 1) {
      return setNumber(currentSing + temporalNumber.slice(0, -1))
    }
    setNumber('0')
  }

  const toogleSign = () => {
    if (number.includes('-')) {
      return setNumber(number.replace('-', ''))
    }

    setNumber('-' + number);
  }

  const buildNumber = (numberString: string) => {


    if (number.includes('.') && numberString === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {

      if (numberString === '.') {
        return setNumber(number + numberString);
      }

      if (numberString === '0' && number.includes('.')) {
        return setNumber(number + numberString);
      }

      if (numberString !== '0' && !number.includes('.')) {
        return setNumber(numberString)
      }

      if (numberString === '0' && !number.includes('.')) {
        return;
      }
      return setNumber(number + numberString);
    }
    setNumber(number + numberString);
  }


  const setLastNumnber = () => {
    if (number.endsWith('.')) {
      setPreNumber(number.slice(0, -1));
    } else {
      setPreNumber(number)
    }

    setNumber('0')
  }

  // const divideOperation = () =>{
  //   setLastNumnber();
  //   lastOperation.current =Operators.divide;
  // }
  // const multiplyOperation = () =>{
  //   setLastNumnber();
  //   lastOperation.current =Operators.multiply;
  // }
  // const divideOperation = () =>{
  //   setLastNumnber();
  //   lastOperation.current =Operators.divide;
  // }
  // const divideOperation = () =>{
  //   setLastNumnber();
  //   lastOperation.current =Operators.divide;
  // }
  return {
    number,
    buildNumber,
    toogleSign,
    clean,
    deleteOperation
    //miPropertis
  }
}
