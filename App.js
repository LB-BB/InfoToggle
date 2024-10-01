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
  const [isSubmitted, setIsSubmitted] = useState(false);

  const getDisplayText = () => {
    return `Hello, ${name}! Congratulations on making it around the sun ${age} times.`;
  };

  const handleSubmit = () => {
    if (name && age) {
      setIsSubmitted(true);
      setShouldDisplayText(true);
    } else {
      setIsSubmitted(false);
      setShouldDisplayText(false);
    }
  };

  const handleNamechange = (value) => {
    setName(value);
    setIsSubmitted(false);
    setShouldDisplayText(false);
  };

  const handleAgechange = (value) => {
    setAge(value);
    setIsSubmitted(false);
    setShouldDisplayText(false);
  };

  return (

      <SafeAreaView style={style.container}>
        <View style={style.title}>
          <Text style={style.titleText}>Input Form</Text>
        </View>
        <View>
          <TextInput
            style={style.input}
            value={name}
            onChangeText={handleNamechange}
            placeholder="Please enter your name"
          />
          <TextInput
            style={style.input}
            value={age}
            onChangeText={handleAgechange}
            placeholder="Please enter your age"
          />
        </View>
        <TouchableOpacity
          style={[style.submitButton, (name.length === 0 || age.length === 0) && {opacity: 0.5}]}
          disabled={name.length === 0 || age.length === 0}
          onPress={handleSubmit}
        >
          <View>
            <Text style={style.submitText}>
              Submit
            </Text>
          </View>
        </TouchableOpacity>
        <View style={style.switch}>
          <Switch
          value={shouldDisplayText}
          onValueChange={(value) => {
            setShouldDisplayText(value);
          }}
          />
          <Text style={style.switchText}>Display information below?</Text>
        </View>
        <ScrollView style={style.displayView}>
          <Text style={style.displayViewText}>
            {shouldDisplayText && isSubmitted ? getDisplayText() : ''}
          </Text>
        </ScrollView>
      </SafeAreaView>
  );
};

export default App;
