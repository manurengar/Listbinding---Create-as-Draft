"use strict";

sap.ui.define(["sap/ui/model/json/JSONModel", "sap/ui/model/BindingMode", "sap/ui/Device"], function (JSONModel, BindingMode, Device) {
  "use strict";

  var __exports = {
    createDeviceModel: () => {
      const oModel = new JSONModel(Device);
      oModel.setDefaultBindingMode(BindingMode.OneWay);
      return oModel;
    }
  };
  return __exports;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjcmVhdGVEZXZpY2VNb2RlbCIsIm9Nb2RlbCIsIkpTT05Nb2RlbCIsIkRldmljZSIsInNldERlZmF1bHRCaW5kaW5nTW9kZSIsIkJpbmRpbmdNb2RlIiwiT25lV2F5IiwiX19leHBvcnRzIl0sInNvdXJjZXMiOlsibW9kZWxzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBKU09OTW9kZWwgZnJvbSBcInNhcC91aS9tb2RlbC9qc29uL0pTT05Nb2RlbFwiO1xuaW1wb3J0IEJpbmRpbmdNb2RlIGZyb20gXCJzYXAvdWkvbW9kZWwvQmluZGluZ01vZGVcIjtcblxuaW1wb3J0IERldmljZSBmcm9tIFwic2FwL3VpL0RldmljZVwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0Y3JlYXRlRGV2aWNlTW9kZWw6ICgpID0+IHtcblx0XHRjb25zdCBvTW9kZWwgPSBuZXcgSlNPTk1vZGVsKERldmljZSk7XG5cdFx0b01vZGVsLnNldERlZmF1bHRCaW5kaW5nTW9kZShCaW5kaW5nTW9kZS5PbmVXYXkpO1xuXHRcdHJldHVybiBvTW9kZWw7XG5cdH1cbn07XG4iXSwibWFwcGluZ3MiOiI7Ozs7O2tCQU1lO0lBQ2RBLGlCQUFpQixFQUFFQSxDQUFBLEtBQU07TUFDeEIsTUFBTUMsTUFBTSxHQUFHLElBQUlDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDO01BQ3BDRixNQUFNLENBQUNHLHFCQUFxQixDQUFDQyxXQUFXLENBQUNDLE1BQU0sQ0FBQztNQUNoRCxPQUFPTCxNQUFNO0lBQ2Q7RUFDRCxDQUFDO0VBQUEsT0FBQU0sU0FBQTtBQUFBIiwiaWdub3JlTGlzdCI6W119