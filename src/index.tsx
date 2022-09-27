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

export function createSessionRequestToken(
  enableUserAuthenticatedVirtualKeys?: boolean
): Promise<SessionRequest> {
  return KaasSdk.createSessionRequestToken(
    Boolean(enableUserAuthenticatedVirtualKeys)
  );
}

export function openSession(
  sessionResponse: SessionResponse
): Promise<OpenSessionResult> {
  return KaasSdk.openSession(sessionResponse);
}

export function closeSession(): Promise<boolean> {
  return KaasSdk.closeSession();
}

export function isSessionOpened(): Promise<boolean> {
  return KaasSdk.isSessionOpened();
}

export function createVirtualKey(
  params: CreateVirtualKeyRequest
): Promise<VirtualKey> {
  return KaasSdk.createVirtualKey(params);
}

export function updateVirtualKey(
  params: UpdateVirtualKeyRequest
): Promise<VirtualKey> {
  return KaasSdk.updateVirtualKey(params);
}

export function revokeVirtualKey(
  params: RevokeVirtualKeyRequest
): Promise<RevokeVirtualKeyResult> {
  return KaasSdk.revokeVirtualKey(params);
}

export function getVirtualKeys(): Promise<VirtualKey[]> {
  return KaasSdk.getVirtualKeys();
}

export function selectVirtualKey(
  params: SelectVirtualKeyRequest
): Promise<VirtualKey> {
  return KaasSdk.selectVirtualKey(params);
}

export function getSelectedVirtualKey(): Promise<VirtualKey> {
  return KaasSdk.getSelectedVirtualKey();
}

export function scan(timeoutInSeconds: number): Promise<ScanResult> {
  return KaasSdk.scan(timeoutInSeconds);
}

export function connect(
  timeout: number = 30,
  disableTimeSync: boolean = false
): Promise<ConnectionResult> {
  return KaasSdk.connect(timeout, disableTimeSync);
}

export function bluetoothStateChanged(): Promise<BluetoothState> {
  return KaasSdk.bluetoothStateChanged();
}

export function isConnected(): Promise<boolean> {
  return KaasSdk.isConnected();
}

export function disconnect(): Promise<boolean> {
  return KaasSdk.disconnect();
}

export function sendCommand(command: DEVICE_COMMAND): Promise<CommandResult> {
  return KaasSdk.sendCommand(command);
}

export function getVehicleData(
  dataItem: DataItem
): Promise<VehicleDataResponse> {
  return KaasSdk.getVehicleData(dataItem);
}

export type BaseItem = {
  value: string | number | boolean;
  time: number;
  unit: string;
  error: number;
};

export enum CommandResult {
  SUCCESSFUL = 'SUCCESSFUL',
  START_TIME_ERROR = 'START_TIME_ERROR',
  END_TIME_ERROR = 'END_TIME_ERROR',
  NOT_AUTHORIZED_ERROR = 'NOT_AUTHORIZED_ERROR',
  NOT_SUPPORTED_ERROR = 'NOT_SUPPORTED_ERROR',
  VK_REVOKED_ERROR = 'VK_REVOKED_ERROR',
  INTERNAL_ERROR = 'INTERNAL_ERROR',
  VK_NOT_VALID_ERROR = 'VK_NOT_VALID_ERROR',
  ERROR_UNKNOWN = 'ERROR_UNKNOWN',
}

export enum DoorCloseState {
  CLOSED = 'CLOSED',
  OPEN = 'OPEN',
  NOT_AVAILABLE = 'NOT_AVAILABLE',
}

export enum DoorLockState {
  LOCKED = 'LOCKED',
  UNLOCKED = 'UNLOCKED',
  NOT_AVAILABLE = 'NOT_AVAILABLE',
}

export enum TransmissionState {
  PARKED = 'PARKED',
  REVERSE = 'REVERSE',
  NEUTRAL = 'NEUTRAL',
  DRIVE = 'DRIVE',
  SPORT = 'SPORT',
  LOW_GEAR = 'LOW_GEAR',
  UNKNOWN = 'UNKNOWN',
}

export type DoorsLockStatus = {
  oneDoor: DoorLockState;
  doorFrontLeft: DoorLockState;
  doorFrontRight: DoorLockState;
  doorRearLeft: DoorLockState;
  doorRearRight: DoorLockState;
  rearLid: DoorLockState;
  frontLid: DoorLockState;
};

export type DoorsCloseStatus = {
  oneDoor: DoorCloseState;
  doorFrontLeft: DoorCloseState;
  doorFrontRight: DoorCloseState;
  doorRearLeft: DoorCloseState;
  doorRearRight: DoorCloseState;
  rearLid: DoorCloseState;
  frontLid: DoorCloseState;
};

export type TirePressure = {
  frontRight: BaseItem;
  rearRight: BaseItem;
  frontLeft: BaseItem;
  rearLeft: BaseItem;
};

export type GpsLocation = {
  latitude: number;
  longitude: number;
};

export enum WindowCloseState {
  CLOSED = 'CLOSED',
  OPEN = 'OPEN',
  NOT_AVAILABLE = 'NOT_AVAILABLE',
}

export type WindowsCloseStatus = {
  oneWindow: WindowCloseState;
  windowFrontLeft: WindowCloseState;
  windowFrontRight: WindowCloseState;
  windowRearLeft: WindowCloseState;
  windowRearRight: WindowCloseState;
  roof: WindowCloseState;
};

export type VehicleDataResponse = {
  tirePressure: TirePressure;
  odometer: BaseItem;
  fuelLevel: BaseItem;
  gasLevel: BaseItem;
  stateOfCharge: BaseItem;
  batteryVoltage: BaseItem;
  batteryCapacity: BaseItem;
  remainingEngineOilLife: BaseItem;
  gpsLocation: GpsLocation;
  vehicleSpeed: BaseItem;
  engineSpeed: BaseItem;
  coolantTemperature: BaseItem;
  transmissionPosition: TransmissionState;
  ignitionStatus: BaseItem;
  doorsCloseStatus: DoorsCloseStatus;
  doorsLockStatus: DoorsLockStatus;
  windowsStatus: WindowsCloseStatus;
  generic: unknown;
};

export enum DataItem {
  STANDARD_DATA_SET = 'STANDARD_DATA_SET',
  ALL_DATA_SET = 'ALL_DATA_SET',
  TIRE_PRESSURE = 'TIRE_PRESSURE',
  DOORS_STATUS = 'DOORS_STATUS',
  FUEL_LEVEL = 'FUEL_LEVEL',
  GAS_LEVEL = 'GAS_LEVEL',
  STATE_OF_CHARGE = 'STATE_OF_CHARGE',
  ODOMETER = 'ODOMETER',
  IGNITION_STATE = 'IGNITION_STATE',
  GPS_LOCATION = 'GPS_LOCATION',
  VEHICLE_SPEED = 'VEHICLE_SPEED',
  ENGINE_SPEED = 'ENGINE_SPEED',
  COOLANT_TEMPERATURE = 'COOLANT_TEMPERATURE',
  BATTERY_CAPACITY = 'BATTERY_CAPACITY',
  BATTERY_VOLTAGE = 'BATTERY_VOLTAGE',
  TRANSMISSION_POSITION = 'TRANSMISSION_POSITION',
  WINDOWS_STATUS = 'WINDOWS_STATUS',
  DOORS_LOCK_STATUS = 'DOORS_LOCK_STATUS',
  DOORS_CLOSE_STATUS = 'DOORS_CLOSE_STATUS',
  ENGINE_OIL_REMAINING_LIFE = 'ENGINE_OIL_REMAINING_LIFE',
}

export enum BluetoothState {
  BLUETOOTH_NOT_AVAILABLE = 'BLUETOOTH_NOT_AVAILABLE',
  LOCATION_PERMISSION_NOT_GRANTED = 'LOCATION_PERMISSION_NOT_GRANTED',
  BLUETOOTH_NOT_ENABLED = 'BLUETOOTH_NOT_ENABLED',
  LOCATION_SERVICES_NOT_ENABLED = 'LOCATION_SERVICES_NOT_ENABLED',
  READY = 'READY',
  UNKNOWN = 'unknown',
  RESETTING = 'resetting',
  UNSUPPORTED = 'unsupported',
  UNAUTHORIZED = 'unauthorized',
  POWERED_OFF = 'poweredOff',
  POWERED_ON = 'poweredOn',
}

export enum ConnectionResult {
  SUCCESSFUL = 'SUCCESSFUL',
  FAILED = 'FAILED',
}

export enum ScanResult {
  NOT_VISIBLE = 'NOT_VISIBLE',
  VISIBLE = 'VISIBLE',
  NO_VIRTUAL_KEY_SELECTED = 'NO_VIRTUAL_KEY_SELECTED',
}

export enum RevokeVirtualKeyResult {
  OK = 'OK',
  REVOCATION_FAILED = 'REVOCATION_FAILED',
}

export type SelectVirtualKeyRequest = {
  id: string;
  virtualKey: VirtualKey;
};

export type RevokeVirtualKeyRequest = {
  id: string;
  virtualKey: VirtualKey;
};

export type UpdateVirtualKeyRequest = {
  id: string;
  integratorId: string;
  version: string;
  validityStartDate: number;
  validityEndDate: number;
  accessDeviceNumberOfActionsAllowed: number;
  accessDeviceActionsAllowed: string;
  flagClientDevicePublicKeyOnline: boolean;
};

export type CreateVirtualKeyRequest = {
  id?: string;
  sharedDeviceId: string;
  validityStartDate: number;
  validityEndDate: number;
  clientDeviceNumberOfActionsAllowed: number;
  clientDeviceActionsAllowed: string;
  flagClientDevicePublicKeyOnline: boolean;
};

export type VirtualKey = {
  id: string;
  vehicleId: string;
  bluetoothName: string;
  virtualKeyVersion: number;
  serialNumber: number;
  validityStartDate: number;
  validityEndDate: number;
  enableUserAuthenticated: boolean;
  actionsAllowedMask: string;
  numberOfActionsAllowed: number;
};

export type SessionRequest = {
  sessionRequestToken: string;
};

export type SessionResponse = {
  sessionResponseToken: string;
};

export enum OpenSessionResult {
  SUCCESS = 'success',
  FAIL = 'fail',
}

export enum DEVICE_COMMAND {
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
