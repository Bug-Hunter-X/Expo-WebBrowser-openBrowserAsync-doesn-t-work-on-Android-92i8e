import * as WebBrowser from 'expo-web-browser';

const handlePress = async () => {
  try {
    let result = await WebBrowser.openBrowserAsync('https://www.example.com');
    console.log('Result:', result);
    if (!result.type) {
      console.warn('Unexpected result from openBrowserAsync:', result);
    }
  } catch (error) {
    console.error('Error opening browser:', error);
  }
};