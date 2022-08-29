@objc(KaasSdk)
class KaasSdk: NSObject {

  @objc(sendCommand:withResolver:withRejecter:)
  func sendCommand(command: Sting, resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
    resolve(null)
  }
}
