package com.reactnativekaassdk;

import android.content.Context;
import android.widget.Toast;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableNativeArray;
import com.facebook.react.bridge.WritableNativeMap;
import com.facebook.react.module.annotations.ReactModule;

@ReactModule(name = KaasSdkModule.NAME)
public class KaasSdkModule extends ReactContextBaseJavaModule {
  public static final String NAME = "KaasSdk";

  public KaasSdkModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }

  @ReactMethod
  public void sendCommand(final String command, final Promise promise) {
    Context context = getReactApplicationContext();
    Toast.makeText(context, command, Toast.LENGTH_LONG).show();
    promise.resolve("SUCCESSFUL");
  }

  @ReactMethod
  public void createSessionRequestToken(final boolean enableUserAuthenticatedVirtualKeys, final Promise promise) {
    Context context = getReactApplicationContext();
    Toast.makeText(context, "createSessionRequestToken", Toast.LENGTH_LONG).show();

    WritableMap resultMap = new WritableNativeMap();
    resultMap.putString("sessionRequestToken", String.valueOf(System.currentTimeMillis()));
    promise.resolve(resultMap);
  }

  @ReactMethod
  public void openSession(final ReadableMap sessionResponse, final Promise promise) {
    Context context = getReactApplicationContext();
    Toast.makeText(context, sessionResponse.getString("sessionResponseToken"), Toast.LENGTH_LONG).show();

    promise.resolve("success");
  }

  @ReactMethod
  public void closeSession(final Promise promise) {
    Context context = getReactApplicationContext();
    Toast.makeText(context, "closeSession", Toast.LENGTH_LONG).show();

    promise.resolve(true);
  }

  @ReactMethod
  public void isSessionOpened(final Promise promise) {
    Context context = getReactApplicationContext();
    Toast.makeText(context, "isSessionOpened", Toast.LENGTH_LONG).show();

    promise.resolve(true);
  }

  @ReactMethod
  public void createVirtualKey(final ReadableMap createVirtualKeyRequest, final Promise promise) {
    Context context = getReactApplicationContext();
    Toast.makeText(context, "createVirtualKey - " + createVirtualKeyRequest.getString("sharedDeviceId"), Toast.LENGTH_LONG).show();

    WritableMap resultMap = new WritableNativeMap();
    resultMap.putString("id", String.valueOf(System.currentTimeMillis()));
    resultMap.putString("vehicleId", "vehicleId");
    resultMap.putString("bluetoothName", "bluetoothName");
    resultMap.putDouble("virtualKeyVersion", 1.22);
    resultMap.putDouble("serialNumber", 122.3);
    resultMap.putDouble("validityStartDate", System.currentTimeMillis());
    resultMap.putDouble("validityEndDate", System.currentTimeMillis());
    resultMap.putBoolean("enableUserAuthenticated", true);
    resultMap.putString("actionsAllowedMask", "actionsAllowedMask");
    resultMap.putInt("numberOfActionsAllowed", 5);

    promise.resolve(resultMap);
  }

  @ReactMethod
  public void updateVirtualKey(final ReadableMap updateVirtualKeyRequest, final Promise promise) {
    Context context = getReactApplicationContext();
    Toast.makeText(context, "updateVirtualKey - " + updateVirtualKeyRequest.getString("id"), Toast.LENGTH_LONG).show();

    WritableMap resultMap = new WritableNativeMap();
    resultMap.putString("id", String.valueOf(System.currentTimeMillis()));
    resultMap.putString("vehicleId", "vehicleId");
    resultMap.putString("bluetoothName", "bluetoothName");
    resultMap.putDouble("virtualKeyVersion", 1.22);
    resultMap.putDouble("serialNumber", 122.3);
    resultMap.putDouble("validityStartDate", System.currentTimeMillis());
    resultMap.putDouble("validityEndDate", System.currentTimeMillis());
    resultMap.putBoolean("enableUserAuthenticated", true);
    resultMap.putString("actionsAllowedMask", "actionsAllowedMask");
    resultMap.putInt("numberOfActionsAllowed", 5);

    promise.resolve(resultMap);
  }

  @ReactMethod
  public void revokeVirtualKey(final ReadableMap revokeVirtualKeyRequest, final Promise promise) {
    Context context = getReactApplicationContext();
    Toast.makeText(context, "revokeVirtualKey - " + revokeVirtualKeyRequest.getString("id"), Toast.LENGTH_LONG).show();

    promise.resolve("OK");
  }

  @ReactMethod
  public void getVirtualKeys(final Promise promise) {
    Context context = getReactApplicationContext();
    Toast.makeText(context, "getVirtualKeys", Toast.LENGTH_LONG).show();

    WritableMap resultMap = new WritableNativeMap();
    resultMap.putString("id", String.valueOf(System.currentTimeMillis()));
    resultMap.putString("vehicleId", "vehicleId");
    resultMap.putString("bluetoothName", "bluetoothName");
    resultMap.putDouble("virtualKeyVersion", 1.22);
    resultMap.putDouble("serialNumber", 122.3);
    resultMap.putDouble("validityStartDate", System.currentTimeMillis());
    resultMap.putDouble("validityEndDate", System.currentTimeMillis());
    resultMap.putBoolean("enableUserAuthenticated", true);
    resultMap.putString("actionsAllowedMask", "actionsAllowedMask");
    resultMap.putInt("numberOfActionsAllowed", 5);

    WritableArray resultArray = new WritableNativeArray();
    resultArray.pushMap(resultMap);

    promise.resolve(resultArray);
  }

  @ReactMethod
  public void selectVirtualKey(final ReadableMap selectVirtualKeyRequest, final Promise promise) {
    Context context = getReactApplicationContext();
    Toast.makeText(context, "selectVirtualKey - " + selectVirtualKeyRequest.getString("id"), Toast.LENGTH_LONG).show();

    WritableMap resultMap = new WritableNativeMap();
    resultMap.putString("id", String.valueOf(System.currentTimeMillis()));
    resultMap.putString("vehicleId", "vehicleId");
    resultMap.putString("bluetoothName", "bluetoothName");
    resultMap.putDouble("virtualKeyVersion", 1.22);
    resultMap.putDouble("serialNumber", 122.3);
    resultMap.putDouble("validityStartDate", System.currentTimeMillis());
    resultMap.putDouble("validityEndDate", System.currentTimeMillis());
    resultMap.putBoolean("enableUserAuthenticated", true);
    resultMap.putString("actionsAllowedMask", "actionsAllowedMask");
    resultMap.putInt("numberOfActionsAllowed", 5);

    promise.resolve(resultMap);
  }

  @ReactMethod
  public void getSelectedVirtualKey(final Promise promise) {
    Context context = getReactApplicationContext();
    Toast.makeText(context, "getSelectedVirtualKey", Toast.LENGTH_LONG).show();

    WritableMap resultMap = new WritableNativeMap();
    resultMap.putString("id", String.valueOf(System.currentTimeMillis()));
    resultMap.putString("vehicleId", "vehicleId");
    resultMap.putString("bluetoothName", "bluetoothName");
    resultMap.putDouble("virtualKeyVersion", 1.22);
    resultMap.putDouble("serialNumber", 122.3);
    resultMap.putDouble("validityStartDate", System.currentTimeMillis());
    resultMap.putDouble("validityEndDate", System.currentTimeMillis());
    resultMap.putBoolean("enableUserAuthenticated", true);
    resultMap.putString("actionsAllowedMask", "actionsAllowedMask");
    resultMap.putInt("numberOfActionsAllowed", 5);
    promise.resolve(resultMap);
  }

  @ReactMethod
  public void scan(final int timeoutInSeconds, final Promise promise) {
    Context context = getReactApplicationContext();
    Toast.makeText(context, "scan", Toast.LENGTH_LONG).show();

    promise.resolve("VISIBLE");
  }

  @ReactMethod
  public void connect(final int timeout, final boolean disableTimeSync, final Promise promise) {
    Context context = getReactApplicationContext();
    Toast.makeText(context, "connect", Toast.LENGTH_LONG).show();

    promise.resolve("SUCCESSFUL");
  }

  @ReactMethod
  public void bluetoothStateChanged(final Promise promise) {
    Context context = getReactApplicationContext();
    Toast.makeText(context, "bluetoothStateChanged", Toast.LENGTH_LONG).show();

    promise.resolve("READY");
  }

  @ReactMethod
  public void isConnected(final Promise promise) {
    Context context = getReactApplicationContext();
    Toast.makeText(context, "isConnected", Toast.LENGTH_LONG).show();

    promise.resolve(true);
  }

  @ReactMethod
  public void disconnect(final Promise promise) {
    Context context = getReactApplicationContext();
    Toast.makeText(context, "disconnect", Toast.LENGTH_LONG).show();

    promise.resolve(true);
  }

  @ReactMethod
  public void getVehicleData(final String dataItem, final Promise promise) {
    Context context = getReactApplicationContext();
    Toast.makeText(context, "getVehicleData - " + dataItem, Toast.LENGTH_LONG).show();

    WritableMap odometer = new WritableNativeMap();
    odometer.putDouble("value", 2.3);
    odometer.putDouble("time", System.currentTimeMillis());
    odometer.putString("unit", "br");

    WritableMap resultMap = new WritableNativeMap();
    resultMap.putMap("odometer", odometer);

    promise.resolve(resultMap);
  }
}
