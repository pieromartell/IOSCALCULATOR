import React, { useEffect, useRef, useState } from 'react'

enum Operators {
  add = '+',
  subtract = '-',
  multiply = 'x',
  divide = '/',
}



export const useCalculator = () => {

  const [formula, setformula] = useState('')

  const [PreNumber, setPreNumber] = useState('0');
  const [number, setNumber] = useState('0');

  const lastOperation = useRef<Operators>();


  useEffect(() => {

    if(lastOperation.current){
      const firstFormulaPart = formula.split('');
      setformula(`${firstFormulaPart} ${lastOperation.current} ${number}`)
    }else{
      setformula(number);
    }

  }, [number])

  const clean = () => {
    setNumber('0');
    setPreNumber('0');
    lastOperation.current = undefined;
    setformula('');
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

  const divideOperation = () => {
    setLastNumnber();
    lastOperation.current = Operators.divide;
  }
  const multiplyOperation = () => {
    setLastNumnber();
    lastOperation.current = Operators.multiply;
  }
  const subtractOperation = () => {
    setLastNumnber();
    lastOperation.current = Operators.subtract;
  }
  const addOperation = () => {
    setLastNumnber();
    lastOperation.current = Operators.add;
  };

  const calculateResult = () => {
    const num1 = Number(number);
    const num2 = Number(PreNumber);

    switch (lastOperation.current) {
      case Operators.add:
        setNumber(`${num1 + num2}`)
        break;
      case Operators.subtract:
        setNumber(`${num2 - num1}`)
        break;
      case Operators.multiply:
        setNumber(`${num1 * num2}`)
        break;
      case Operators.divide:
        setNumber(`${num2 / num1}`)
        break;

      default:
        throw new Error('Operation not found');
    }
    setPreNumber('0');

  }
  return {
    number,
    PreNumber,
    formula,
    buildNumber,
    toogleSign,
    clean,
    deleteOperation,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
    calculateResult

    //miPropertis
  }
}
