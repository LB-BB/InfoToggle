import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Switch,
  ScrollView,
} from 'react-native';
import style from './style';

const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [shouldDisplayText, setShouldDisplayText] = useState(true);
  return (
    <SafeAreaView>
      <View>
        <TextInput
          style={style.inputs}
          value={name}
          onChangeText={(value) => {
            setName(value);
          }}
          placeholder="Please enter your name"
        />
        <TextInput
          style={style.inputs}
          value={age}
          onChangeText={(value) => {
            setAge(value);
          }}
          placeholder="Please enter your age"
        />
      </View>
      <TouchableOpacity
        style={[{backgroundColor: 'black'}, (name.length === 0 && {opacity: 0.5})]}>
        <View>
          <Text style={{color: 'white', textAlign: 'center', padding: 10}}>
            Submit
          </Text>
        </View>
      </TouchableOpacity>
      <Switch value={shouldDisplayText} onValueChange={(value) => {
        setShouldDisplayText(value);
      }} />
      <Text>Display information below?</Text>
      <ScrollView>
        <Text>
          {shouldDisplayText === true ? `${name}, ${age}` : ''}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
