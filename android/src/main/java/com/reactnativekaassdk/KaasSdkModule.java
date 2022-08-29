package com.reactnativekaassdk;

import android.content.Context;
import android.widget.Toast;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
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
    public void sendCommand(String command, Promise promise) {
      Context context = getReactApplicationContext();
      Toast.makeText(context, command, Toast.LENGTH_LONG).show();
      promise.resolve(null);
    }

}
