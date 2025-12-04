"use strict";

sap.ui.define(["sap/ui/core/UIComponent", "./model/models", "sap/ui/Device"], function (UIComponent, __models, Device) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const models = _interopRequireDefault(__models);
  /**
   * @namespace mrg.sample
   */
  const Component = UIComponent.extend("mrg.sample.Component", {
    metadata: {
      manifest: "json"
    },
    init: function _init() {
      // call the base component's init function
      UIComponent.prototype.init.call(this);

      // create the device model
      this.setModel(models.createDeviceModel(), "device");

      // create the views based on the url/hash
      this.getRouter().initialize();
    },
    /**
     * This method can be called to determine whether the sapUiSizeCompact or sapUiSizeCozy
     * design mode class should be set, which influences the size appearance of some controls.
     * @public
     * @returns css class, either 'sapUiSizeCompact' or 'sapUiSizeCozy' - or an empty string if no css class should be set
     */
    getContentDensityClass: function _getContentDensityClass() {
      if (this.contentDensityClass === undefined) {
        // check whether FLP has already set the content density class; do nothing in this case
        if (document.body.classList.contains("sapUiSizeCozy") || document.body.classList.contains("sapUiSizeCompact")) {
          this.contentDensityClass = "";
        } else if (!Device.support.touch) {
          // apply "compact" mode if touch is not supported
          this.contentDensityClass = "sapUiSizeCompact";
        } else {
          // "cozy" in case of touch support; default for most sap.m controls, but needed for desktop-first controls like sap.ui.table.Table
          this.contentDensityClass = "sapUiSizeCozy";
        }
      }
      return this.contentDensityClass;
    }
  });
  return Component;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJtb2RlbHMiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiX19tb2RlbHMiLCJDb21wb25lbnQiLCJVSUNvbXBvbmVudCIsImV4dGVuZCIsIm1ldGFkYXRhIiwibWFuaWZlc3QiLCJpbml0IiwiX2luaXQiLCJVSUNvbXBvbmVudC5wcm90b3R5cGUuaW5pdC5jYWxsIiwic2V0TW9kZWwiLCJjcmVhdGVEZXZpY2VNb2RlbCIsImdldFJvdXRlciIsImluaXRpYWxpemUiLCJnZXRDb250ZW50RGVuc2l0eUNsYXNzIiwiX2dldENvbnRlbnREZW5zaXR5Q2xhc3MiLCJjb250ZW50RGVuc2l0eUNsYXNzIiwidW5kZWZpbmVkIiwiZG9jdW1lbnQiLCJib2R5IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJEZXZpY2UiLCJzdXBwb3J0IiwidG91Y2giXSwic291cmNlcyI6WyJDb21wb25lbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVJQ29tcG9uZW50IGZyb20gXCJzYXAvdWkvY29yZS9VSUNvbXBvbmVudFwiO1xuaW1wb3J0IG1vZGVscyBmcm9tIFwiLi9tb2RlbC9tb2RlbHNcIjtcbmltcG9ydCBEZXZpY2UgZnJvbSBcInNhcC91aS9EZXZpY2VcIjtcblxuLyoqXG4gKiBAbmFtZXNwYWNlIG1yZy5zYW1wbGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgVUlDb21wb25lbnQge1xuXHRwdWJsaWMgc3RhdGljIG1ldGFkYXRhID0ge1xuXHRcdG1hbmlmZXN0OiBcImpzb25cIixcblx0fTtcblxuXHRwcml2YXRlIGNvbnRlbnREZW5zaXR5Q2xhc3M6IHN0cmluZztcblxuXHRwdWJsaWMgaW5pdCgpOiB2b2lkIHtcblx0XHQvLyBjYWxsIHRoZSBiYXNlIGNvbXBvbmVudCdzIGluaXQgZnVuY3Rpb25cblx0XHRzdXBlci5pbml0KCk7XG5cblx0XHQvLyBjcmVhdGUgdGhlIGRldmljZSBtb2RlbFxuXHRcdHRoaXMuc2V0TW9kZWwobW9kZWxzLmNyZWF0ZURldmljZU1vZGVsKCksIFwiZGV2aWNlXCIpO1xuXG5cdFx0Ly8gY3JlYXRlIHRoZSB2aWV3cyBiYXNlZCBvbiB0aGUgdXJsL2hhc2hcblx0XHR0aGlzLmdldFJvdXRlcigpLmluaXRpYWxpemUoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGlzIG1ldGhvZCBjYW4gYmUgY2FsbGVkIHRvIGRldGVybWluZSB3aGV0aGVyIHRoZSBzYXBVaVNpemVDb21wYWN0IG9yIHNhcFVpU2l6ZUNvenlcblx0ICogZGVzaWduIG1vZGUgY2xhc3Mgc2hvdWxkIGJlIHNldCwgd2hpY2ggaW5mbHVlbmNlcyB0aGUgc2l6ZSBhcHBlYXJhbmNlIG9mIHNvbWUgY29udHJvbHMuXG5cdCAqIEBwdWJsaWNcblx0ICogQHJldHVybnMgY3NzIGNsYXNzLCBlaXRoZXIgJ3NhcFVpU2l6ZUNvbXBhY3QnIG9yICdzYXBVaVNpemVDb3p5JyAtIG9yIGFuIGVtcHR5IHN0cmluZyBpZiBubyBjc3MgY2xhc3Mgc2hvdWxkIGJlIHNldFxuXHQgKi9cblx0cHVibGljIGdldENvbnRlbnREZW5zaXR5Q2xhc3MoKTogc3RyaW5nIHtcblx0XHRpZiAodGhpcy5jb250ZW50RGVuc2l0eUNsYXNzID09PSB1bmRlZmluZWQpIHtcblx0XHRcdC8vIGNoZWNrIHdoZXRoZXIgRkxQIGhhcyBhbHJlYWR5IHNldCB0aGUgY29udGVudCBkZW5zaXR5IGNsYXNzOyBkbyBub3RoaW5nIGluIHRoaXMgY2FzZVxuXHRcdFx0aWYgKGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2FwVWlTaXplQ296eVwiKSB8fCBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcInNhcFVpU2l6ZUNvbXBhY3RcIikpIHtcblx0XHRcdFx0dGhpcy5jb250ZW50RGVuc2l0eUNsYXNzID0gXCJcIjtcblx0XHRcdH0gZWxzZSBpZiAoIURldmljZS5zdXBwb3J0LnRvdWNoKSB7XG5cdFx0XHRcdC8vIGFwcGx5IFwiY29tcGFjdFwiIG1vZGUgaWYgdG91Y2ggaXMgbm90IHN1cHBvcnRlZFxuXHRcdFx0XHR0aGlzLmNvbnRlbnREZW5zaXR5Q2xhc3MgPSBcInNhcFVpU2l6ZUNvbXBhY3RcIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIFwiY296eVwiIGluIGNhc2Ugb2YgdG91Y2ggc3VwcG9ydDsgZGVmYXVsdCBmb3IgbW9zdCBzYXAubSBjb250cm9scywgYnV0IG5lZWRlZCBmb3IgZGVza3RvcC1maXJzdCBjb250cm9scyBsaWtlIHNhcC51aS50YWJsZS5UYWJsZVxuXHRcdFx0XHR0aGlzLmNvbnRlbnREZW5zaXR5Q2xhc3MgPSBcInNhcFVpU2l6ZUNvenlcIjtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuY29udGVudERlbnNpdHlDbGFzcztcblx0fVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztRQUNPQSxNQUFNLEdBQUFDLHNCQUFBLENBQUFDLFFBQUE7RUFHYjtBQUNBO0FBQ0E7RUFGQSxNQUdxQkMsU0FBUyxHQUFTQyxXQUFXLENBQUFDLE1BQUE7SUFDbkNDLFFBQVEsRUFBRztNQUN4QkMsUUFBUSxFQUFFO0lBQ1gsQ0FBQztJQUlNQyxJQUFJLFdBQUFDLE1BQUEsRUFBUztNQUNuQjtNQUNBQywrQkFBQTs7TUFFQTtNQUNBLElBQUksQ0FBQ0MsUUFBUSxDQUFDWCxNQUFNLENBQUNZLGlCQUFpQixDQUFDLENBQUMsRUFBRSxRQUFRLENBQUM7O01BRW5EO01BQ0EsSUFBSSxDQUFDQyxTQUFTLENBQUMsQ0FBQyxDQUFDQyxVQUFVLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQ7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBQ1FDLHNCQUFzQixXQUFBQyx3QkFBQSxFQUFXO01BQ3ZDLElBQUksSUFBSSxDQUFDQyxtQkFBbUIsS0FBS0MsU0FBUyxFQUFFO1FBQzNDO1FBQ0EsSUFBSUMsUUFBUSxDQUFDQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJSCxRQUFRLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsRUFBRTtVQUM5RyxJQUFJLENBQUNMLG1CQUFtQixHQUFHLEVBQUU7UUFDOUIsQ0FBQyxNQUFNLElBQUksQ0FBQ00sTUFBTSxDQUFDQyxPQUFPLENBQUNDLEtBQUssRUFBRTtVQUNqQztVQUNBLElBQUksQ0FBQ1IsbUJBQW1CLEdBQUcsa0JBQWtCO1FBQzlDLENBQUMsTUFBTTtVQUNOO1VBQ0EsSUFBSSxDQUFDQSxtQkFBbUIsR0FBRyxlQUFlO1FBQzNDO01BQ0Q7TUFDQSxPQUFPLElBQUksQ0FBQ0EsbUJBQW1CO0lBQ2hDO0VBQUM7RUFBQSxPQXRDbUJkLFNBQVM7QUFBQSIsImlnbm9yZUxpc3QiOltdfQ==