# How to create React Native module
- run `npx create-react-native-library [MODULE NAME]`
- go to module folder `cd [MODULE NAME]`
- run `yarn`
- open `android` folder in Android Studio
- open `ios` folder in Xcode

# react-native-kaas-sdk
KaaS SDK
## Installation

```sh
npm install react-native-kaas-sdk
```

## Usage

```js
import { sendCommand } from "react-native-kaas-sdk";

// ...

const result = await sendCommand(DEVICE_COMMAND_ANDROID.UNLOCK);
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
