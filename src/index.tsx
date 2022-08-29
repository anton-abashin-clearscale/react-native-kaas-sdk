import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-kaas-sdk' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

const KaasSdk = NativeModules.KaasSdk
  ? NativeModules.KaasSdk
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function sendCommand(
  command: DEVICE_COMMAND_ANDROID | DEVICE_COMMAND_IOS
): Promise<void> {
  return KaasSdk.sendCommand(command);
}

export enum DEVICE_COMMAND_ANDROID {
  UNLOCK = 'UNLOCK',
  LOCK = 'LOCK',
  DISABLE_IMMOBILIZER = 'DISABLE_IMMOBILIZER',
  ENABLE_IMMOBILIZER = 'ENABLE_IMMOBILIZER',
  UNLOCK_AND_DISABLE_IMMOBILIZER = 'UNLOCK_AND_DISABLE_IMMOBILIZER',
  RELEASE_TRUNK = 'RELEASE_TRUNK',
  FLASH_LIGHT = 'FLASH_LIGHT',
  SOUND_HORN = 'SOUND_HORN',
  START_REMOTE_ENGINE = 'START_REMOTE_ENGINE',
  STOP_REMOTE_ENGINE = 'STOP_REMOTE_ENGINE',
  START_PANIC = 'START_PANIC',
  STOP_PANIC = 'STOP_PANIC',
}

export enum DEVICE_COMMAND_IOS {
  UNLOCK = 'unlock',
  LOCK = 'lock',
  DISABLE_IMMOBILIZER = 'disableImmobilizer',
  ENABLE_IMMOBILIZER = 'enableImmobilizer',
  UNLOCK_AND_DISABLE_IMMOBILIZER = 'un-lockAndDisableImmobilizer',
  RELEASE_TRUNK = 'releaseTrunk',
  FLASH_LIGHT = 'flashLight',
  SOUND_HORN = 'soundHorn',
  START_REMOTE_ENGINE = 'startRemoteEngine',
  STOP_REMOTE_ENGINE = 'stopRemoteEngine',
  START_PANIC = 'startPanic',
  STOP_PANIC = 'stopPanic',
}
