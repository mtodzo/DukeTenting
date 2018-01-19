import React, {Component} from 'react';
import { AppRegistry, Text, View, TextInput, Button, Alert } from 'react-native';

export default class AvailSched extends Component {

    constructor(props){
      super(props);
      this.state = {text: '', index: 0};
      this._onPressButton = this._onPressButton.bind(this);
      this._makeSched = this._makeSched.bind(this);
     }
    _onPressButton(totalAvailability, indivSched, index) {
      //var availArray = new Array(12);
    //  availArray[this.state.index] = indivSched;
    //  avails[0] = "test";
      totalAvailability[this.state.index] = indivSched;
      var word = totalAvailability[this.state.index];
      this.setState({text: ''}); //use setState because it re renders component
      this._textInput.setNativeProps({text: ''}); //direct manipulation of text input component
      this.setState({index: index+1});

      Alert.alert(word)
    }

    _makeSched(totalAvailability){
      var availArray = new Array(totalAvailability.length)
      var avails = 0;
      for (x = 0; x<totalAvailability.length; x++){
        avails = 0;
        for (i=0; i<totalAvailability[x].length; i++){
          if (text.charAt(i) == 1){
            avails++;
          }
        }
        availArray[x] = avails;
      }
    }

    calcAvail(totalAvailability){
      var availArray = new Array(totalAvailability.length)
      var avails = 0;
      for (x = 0; x<totalAvailability.length; x++){
        avails = 0;
        for (i=0; i<totalAvailability[x].length; i++){
          if (totalAvailability[x].charAt(i) == 1){
            avails++;
          }
        }
        availArray[x] = avails;
      }
      return availArray;
    }


    render(){
      var indivSched = this.state.text
      var totalAvailability = new Array(12)
      var count = 0;


      return(
        <View style = {{alignItems: 'center', paddingTop: 150}}>
         <TextInput
         ref={component => this._textInput = component}
         style = {{height: 100}}
         placeholder = 'Enter Availability'
         onChangeText ={(text) => this.setState({text})}
         />
         <Text>
         {this.state.text}
         </Text>
         <View style = {{paddingTop: 50}}>
          <Button
            onPress = {() => this._onPressButton(totalAvailability, indivSched, count)}
            title = 'Done'
         />
         </View>
         <View style = {{paddingTop: 10}}>
         <Button
            onPress = {() => this._makeSched(totalAvailability)}
            title = 'Finished'
        />
        </View>
        </View>
      );
    }
  }

    class Person{
      constructor (id, avail, left){
        this.id = id;
        this.avail = avail;
        this.left = left;
      }
    }


  // class Person extends Component {
  //   let perPerson = 10; //arbitrarily set for now
  //   let maxConsec = 10; //subject to change
  //   let minConsec = 2;  //subject to change
  //
  //   constructor(props){
  //     super(props);
  //     this.state = {
  //       numFilled: 0,
  //       numLeft: perPerson,
  //       numAvail:
  //     }
  //   }
  // }

AppRegistry.registerComponent('AwesomeProject', () => HelloWorldApp);
