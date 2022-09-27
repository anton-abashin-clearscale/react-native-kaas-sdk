@objc(KaasSdk)
class KaasSdk: NSObject {
    
    @objc(sendCommand:withResolver:withRejecter:)
    func sendCommand(command: String, resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) -> Void {
        resolve("SUCCESSFUL")
    }
    
    @objc(createSessionRequestToken:withResolver:withRejecter:)
    func createSessionRequestToken(enableUserAuthenticatedVirtualKeys: Bool, resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) -> Void {
        let timestamp = NSDate().timeIntervalSince1970
        let result = [
          "sessionRequestToken": timestamp
        ]
        resolve(result)
    }
    
    @objc(openSession:withResolver:withRejecter:)
    func openSession(sessionResponse: [String: Any], resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) -> Void {
        print("openSession", sessionResponse["sessionResponseToken"] ?? "-")
        resolve("success")
    }
    
    @objc
    func closeSession(_ resolve: RCTPromiseResolveBlock, withRejecter reject: RCTPromiseRejectBlock) -> Void {
        print("closeSession")
        resolve(true)
    }
    
    @objc
    func isSessionOpened(_ resolve: RCTPromiseResolveBlock, withRejecter reject: RCTPromiseRejectBlock) -> Void {
        print("isSessionOpened")
        resolve(true)
    }
    
    @objc(createVirtualKey:withResolver:withRejecter:)
    func createVirtualKey(createVirtualKeyRequest: [String: Any], resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) -> Void {
        print("createVirtualKey", createVirtualKeyRequest["sharedDeviceId"] ?? "-")
        let timestamp = NSDate().timeIntervalSince1970
        let result = [
          "sessionRequestToken": timestamp,
          "vehicleId": "vehicleId",
          "bluetoothName": "bluetoothName",
          "virtualKeyVersion": 1.22,
          "serialNumber": 122.3,
          "validityStartDate": NSDate().timeIntervalSince1970,
          "validityEndDate": NSDate().timeIntervalSince1970,
          "enableUserAuthenticated": true,
          "actionsAllowedMask": "actionsAllowedMask",
          "numberOfActionsAllowed": 5
        ] as [String : Any]
        resolve(result)
    }
    
    @objc(updateVirtualKey:withResolver:withRejecter:)
    func updateVirtualKey(updateVirtualKeyRequest: [String: Any], resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) -> Void {
        print("updateVirtualKey", updateVirtualKeyRequest["id"] ?? "-")
        let timestamp = NSDate().timeIntervalSince1970
        let result = [
          "id": timestamp,
          "vehicleId": "vehicleId",
          "bluetoothName": "bluetoothName",
          "virtualKeyVersion": 1.22,
          "serialNumber": 122.3,
          "validityStartDate": NSDate().timeIntervalSince1970,
          "validityEndDate": NSDate().timeIntervalSince1970,
          "enableUserAuthenticated": true,
          "actionsAllowedMask": "actionsAllowedMask",
          "numberOfActionsAllowed": 5
        ] as [String : Any]
        resolve(result)
    }
    
    @objc(revokeVirtualKey:withResolver:withRejecter:)
    func revokeVirtualKey(revokeVirtualKeyRequest: [String: Any], resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) -> Void {
        print("revokeVirtualKey", revokeVirtualKeyRequest["id"] ?? "-")
        resolve("OK")
    }
    
    @objc
    func getVirtualKeys(_ resolve: RCTPromiseResolveBlock, withRejecter reject: RCTPromiseRejectBlock) -> Void {
        print("getVirtualKeys")
        let timestamp = NSDate().timeIntervalSince1970
        let item = [
          "id": timestamp,
          "vehicleId": "vehicleId",
          "bluetoothName": "bluetoothName",
          "virtualKeyVersion": 1.22,
          "serialNumber": 122.3,
          "validityStartDate": NSDate().timeIntervalSince1970,
          "validityEndDate": NSDate().timeIntervalSince1970,
          "enableUserAuthenticated": true,
          "actionsAllowedMask": "actionsAllowedMask",
          "numberOfActionsAllowed": 5
        ] as [String : Any]
        
        let result: NSMutableArray = []
        result.add(item)
        resolve(result)
    }
    
    @objc(selectVirtualKey:withResolver:withRejecter:)
    func selectVirtualKey(selectVirtualKeyRequest: [String: Any], resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) -> Void {
        print("selectVirtualKey", selectVirtualKeyRequest["id"] ?? "-")
        let timestamp = NSDate().timeIntervalSince1970
        let result = [
          "id": timestamp,
          "vehicleId": "vehicleId",
          "bluetoothName": "bluetoothName",
          "virtualKeyVersion": 1.22,
          "serialNumber": 122.3,
          "validityStartDate": NSDate().timeIntervalSince1970,
          "validityEndDate": NSDate().timeIntervalSince1970,
          "enableUserAuthenticated": true,
          "actionsAllowedMask": "actionsAllowedMask",
          "numberOfActionsAllowed": 5
        ] as [String : Any]
        resolve(result)
    }
    
    @objc
    func getSelectedVirtualKey(_ resolve: RCTPromiseResolveBlock, withRejecter reject: RCTPromiseRejectBlock) -> Void {
        print("getSelectedVirtualKey")
        let timestamp = NSDate().timeIntervalSince1970
        let result = [
          "id": timestamp,
          "vehicleId": "vehicleId",
          "bluetoothName": "bluetoothName",
          "virtualKeyVersion": 1.22,
          "serialNumber": 122.3,
          "validityStartDate": NSDate().timeIntervalSince1970,
          "validityEndDate": NSDate().timeIntervalSince1970,
          "enableUserAuthenticated": true,
          "actionsAllowedMask": "actionsAllowedMask",
          "numberOfActionsAllowed": 5
        ] as [String : Any]
        
        resolve(result)
    }
    
    @objc(scan:withResolver:withRejecter:)
    func scan(timeoutInSeconds: Int, resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) -> Void {
        print("scan", timeoutInSeconds)
        resolve("VISIBLE")
    }
    
    @objc(connect:disableTimeSync:withResolver:withRejecter:)
    func connect(timeout: Int, disableTimeSync: Bool, resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) -> Void {
        print("connect", timeout, disableTimeSync)
        resolve("SUCCESSFUL")
    }
    
    @objc
    func bluetoothStateChanged(_ resolve: RCTPromiseResolveBlock, withRejecter reject: RCTPromiseRejectBlock) -> Void {
        print("bluetoothStateChanged")
        resolve("READY")
    }
    
    @objc
    func isConnected(_ resolve: RCTPromiseResolveBlock, withRejecter reject: RCTPromiseRejectBlock) -> Void {
        print("isConnected")
        resolve(true)
    }
    
    @objc
    func disconnect(_ resolve: RCTPromiseResolveBlock, withRejecter reject: RCTPromiseRejectBlock) -> Void {
        print("disconnect")
        resolve(true)
    }
    
    @objc(getVehicleData:withResolver:withRejecter:)
    func getVehicleData(dataItem: String, resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) -> Void {
        print("getVehicleData", dataItem)
        let timestamp = NSDate().timeIntervalSince1970
        let result = [
          "odometer": [
            "value": 2.3,
            "time": timestamp,
            "unit": "br"
          ]
        ] as [String : Any]
        
        resolve(result)
    }
}
