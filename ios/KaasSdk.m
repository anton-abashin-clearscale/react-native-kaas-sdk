#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(KaasSdk, NSObject)

RCT_EXTERN_METHOD(sendCommand:(string)command
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)

+ (BOOL)requiresMainQueueSetup
{
  return NO;
}

@end
