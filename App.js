import React,{Component} from 'react';
import {View,Text,StyleSheet,TextInput} from 'react-native';


export default class App extends Component {
  render(){
    return(
      <View style={estilos.container}>
   
        <Text style={estilos.letra}>CALCULADORA </Text>
        <div>
        <TextInput style={estilos.caixa} />
        <div>
          <button style={estilos.botao}>7</button>
          <button style={estilos.botao}>8</button>
          <button style={estilos.botao}>9</button>
          <button style={estilos.botao,estilos.cal}>C</button>
        </div>
        <div>
          <button style={estilos.botao}>4</button>
          <button style={estilos.botao}>5</button>
          <button style={estilos.botao}>6</button>
          <button style={estilos.botao,estilos.cal}>*</button>
        </div>
        <div>
          <button style={estilos.botao}>1</button>
          <button style={estilos.botao}>2</button>
          <button style={estilos.botao}>3</button>
          <button style={estilos.botao,estilos.cal}>+</button>
        </div>
        <div >
          <button style={estilos.botao}>0</button>
          <button style={estilos.botao,estilos.cal}>.</button>
          <button style={estilos.botao,estilos.cal}>/</button>
          <button style={estilos.botao,estilos.cal}>-</button>
        </div>
        <div>
          <button style={estilos.lll}>=</button>
        </div>
        </div>
      </View>
    );
  }
}


const estilos = StyleSheet.create({
  container:{
    justifyContent:'',
    flex: 1,
    backgroundColor:'orange'
  },
  letra:{
    color:'white',
    textAlign:'center',
    fontSize:'30px'
  },
  botao:{
    width: 83,
    height:80,
    color:'white',
    backgroundColor:'orange',
    borderColor:'white',
    fontSize:'30px',
    justifyContent:'center'
  },
  lll:{
    width: 332,
    height:80,
    color:'white',
    backgroundColor:'black',
    borderColor:'white',
    fontSize:'30px',
    justifyContent:'center'
  },
  caixa:{
    width: 331,
    height:80,
    backgroundColor:'white'
  },
  cal:{
    width: 83,
    height:80,
    color:'white',
    backgroundColor:'black',
    borderColor:'white',
    fontSize:'30px',
    justifyContent:'center'
}

  });