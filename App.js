import React, {Component} from 'react';
import { AppRegistry, Text, View, TextInput } from 'react-native';

export default class PizzaTranslate extends Component{
  constructor(props){
    super(props);
    this.state = {text: ''};
  }
  render(){
    return(
      <View style = {{center: 10}}>
      <TextInput
      style = {{height: 80}}
      placeholder = 'Type Text to Translate'
      onChangeText={(text) => this.setState({text})}/>
      <Text style = {{padding: 10, fontSize: 40}}>
      {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
      </Text>
      </View>
    );
  }
}

// class Blink extends Component{
//   constructor(props){
//     super(props);
//     this.state = {showText: true};
//
//     setInterval(() => {
//       this.setState(previousState => {
//         return {showText: !previousState.showText};
//       });
//     }, 1000);
//   }
//
//   render(){
//     let display = this.state.showText ? this.props.text : ' ';
//     return(
//       <Text> {display} </Text>
//     ) ;
//   }
// }
//
// export default class BlinkApp extends Component{
//   render(){
//     return(
//       <View style = {{alignItems: 'center'}}>
//         <Blink text = '********************!'/>
//         <Blink text = '🍕'/>
//       </View>
//     );
//   }
// }


// class Greeting extends Component {
//   render(){
//     return (
//       <Text> Hello {this.props.name}! </Text>
//     );
//   }
// }
//
// export default class allGreetings extends Component {
//   render(){
//     return(
//       <View style = {{alignItems: 'center'}}>
//       <Greeting name = 'Miles' />
//       <Greeting name = 'Rob'/>
//       <Greeting name = 'Tommy' />
//       </View>
//     );
//
//   }
//
// }
// AppRegistry.registerComponent('AwesomeProject', () => HelloWorldApp);
