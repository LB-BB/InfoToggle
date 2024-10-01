# Simple React Native App

This is a simple React Native app that takes user input for a name and age and allows the user to toggle whether or not the entered information should be displayed. The app utilizes basic form inputs and a switch component.

## Features
- **Name Input**: Enter your name in the text input.
- **Age Input**: Enter your age in the text input.
- **Submit Button**: After entering both the name and age, press the "Submit" button to validate and display the input.
- **Display Toggle**: Use the switch to toggle whether the entered information should be displayed on the screen.

## How It Works
1. The user enters their **name** and **age** in two separate text input fields.
2. The **Submit** button is enabled only when both fields are filled.
3. Once the user submits, the app displays a message using the submitted name and age, such as:  
   `Hello, John! Congratulations on making it around the sun 25 times.`
4. The user can toggle the display of the submitted information using a **Switch** component.
5. If the user changes the name or age, the display will reset until the new inputs are submitted.

## Installation

### 1. Clone the repository:
```bash
git clone <your-repo-url>
```

### 2. Install dependencies:
Navigate into the project directory and install the required npm packages:
```bash
cd your-project-name
npm install
```

### 3. Install iOS dependencies (CocoaPods):
If you're running the app on iOS, navigate to the `ios` folder and install CocoaPods:
```bash
cd ios
pod install
cd ..
```

### 4. Run the app:
To start the app in the iOS or Android simulator:

#### iOS:
```bash
npx react-native run-ios
```

#### Android:
```bash
npx react-native run-android
```

## Libraries Used

- **React Native**: The core framework for developing mobile applications.

## License

This project is licensed under the MIT License.
