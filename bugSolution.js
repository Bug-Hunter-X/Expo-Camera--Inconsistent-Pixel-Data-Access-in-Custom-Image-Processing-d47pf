```javascript
import * as ImageManipulator from 'expo-image-manipulator';
import { Camera } from 'expo-camera';

// ... other code

const processImage = async (imageUri) => {
  try {
    const manipulatedImage = await ImageManipulator.manipulateAsync(
      imageUri,
      [{ resize: { width: 200 } }],
      { base64: true }
    );
    const base64Data = manipulatedImage.base64;
    // Further processing
  } catch (error) {
    console.error('Image processing error:', error);
    // Implement your error handling here.
  }
};

// ... rest of the code
```