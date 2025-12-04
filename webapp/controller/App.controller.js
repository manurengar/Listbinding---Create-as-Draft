"use strict";

sap.ui.define(["./BaseController"], function (__BaseController) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const BaseController = _interopRequireDefault(__BaseController);
  /**
   * @namespace mrg.sample.controller
   */
  const App = BaseController.extend("mrg.sample.controller.App", {
    onInit: function _onInit() {
      // apply content density mode to root view
      this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
    }
  });
  return App;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJCYXNlQ29udHJvbGxlciIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfX0Jhc2VDb250cm9sbGVyIiwiQXBwIiwiZXh0ZW5kIiwib25Jbml0IiwiX29uSW5pdCIsImdldFZpZXciLCJhZGRTdHlsZUNsYXNzIiwiZ2V0T3duZXJDb21wb25lbnQiLCJnZXRDb250ZW50RGVuc2l0eUNsYXNzIl0sInNvdXJjZXMiOlsiQXBwLmNvbnRyb2xsZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VDb250cm9sbGVyIGZyb20gXCIuL0Jhc2VDb250cm9sbGVyXCI7XG5cbi8qKlxuICogQG5hbWVzcGFjZSBtcmcuc2FtcGxlLmNvbnRyb2xsZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgQmFzZUNvbnRyb2xsZXIge1xuXHRwdWJsaWMgb25Jbml0KCk6IHZvaWQge1xuXHRcdC8vIGFwcGx5IGNvbnRlbnQgZGVuc2l0eSBtb2RlIHRvIHJvb3Qgdmlld1xuXHRcdHRoaXMuZ2V0VmlldygpLmFkZFN0eWxlQ2xhc3ModGhpcy5nZXRPd25lckNvbXBvbmVudCgpLmdldENvbnRlbnREZW5zaXR5Q2xhc3MoKSk7XG5cdH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7UUFBT0EsY0FBYyxHQUFBQyxzQkFBQSxDQUFBQyxnQkFBQTtFQUVyQjtBQUNBO0FBQ0E7RUFGQSxNQUdxQkMsR0FBRyxHQUFTSCxjQUFjLENBQUFJLE1BQUE7SUFDdkNDLE1BQU0sV0FBQUMsUUFBQSxFQUFTO01BQ3JCO01BQ0EsSUFBSSxDQUFDQyxPQUFPLENBQUMsQ0FBQyxDQUFDQyxhQUFhLENBQUMsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUNDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztJQUNoRjtFQUFDO0VBQUEsT0FKbUJQLEdBQUc7QUFBQSIsImlnbm9yZUxpc3QiOltdfQ==