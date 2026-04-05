require('./common/vendor.js');(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["page_run/index_new_algorithm"],{

/***/ 229:
/*!********************************************************************************************!*\
  !*** D:/xlzp - 加了老师的前端/xlzp_running_app/main.js?{"page":"page_run%2Findex_new_algorithm"} ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 30);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _index_new_algorithm = _interopRequireDefault(__webpack_require__(/*! ./page_run/index_new_algorithm.vue */ 230));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_index_new_algorithm.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 230:
/*!***************************************************************************!*\
  !*** D:/xlzp - 加了老师的前端/xlzp_running_app/page_run/index_new_algorithm.vue ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_new_algorithm_vue_vue_type_template_id_7ac7b7bd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_new_algorithm.vue?vue&type=template&id=7ac7b7bd& */ 231);
/* harmony import */ var _index_new_algorithm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index_new_algorithm.vue?vue&type=script&lang=js& */ 233);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_new_algorithm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_new_algorithm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_new_algorithm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index_new_algorithm.vue?vue&type=style&index=0&lang=css& */ 236);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 77);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_new_algorithm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_new_algorithm_vue_vue_type_template_id_7ac7b7bd___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_new_algorithm_vue_vue_type_template_id_7ac7b7bd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _index_new_algorithm_vue_vue_type_template_id_7ac7b7bd___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "page_run/index_new_algorithm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 231:
/*!**********************************************************************************************************!*\
  !*** D:/xlzp - 加了老师的前端/xlzp_running_app/page_run/index_new_algorithm.vue?vue&type=template&id=7ac7b7bd& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_new_algorithm_vue_vue_type_template_id_7ac7b7bd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index_new_algorithm.vue?vue&type=template&id=7ac7b7bd& */ 232);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_new_algorithm_vue_vue_type_template_id_7ac7b7bd___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_new_algorithm_vue_vue_type_template_id_7ac7b7bd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_new_algorithm_vue_vue_type_template_id_7ac7b7bd___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_new_algorithm_vue_vue_type_template_id_7ac7b7bd___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 232:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/xlzp - 加了老师的前端/xlzp_running_app/page_run/index_new_algorithm.vue?vue&type=template&id=7ac7b7bd& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var f0 =
    _vm.runType == 0 && _vm.tournamentGroupDistance != null
      ? _vm._f("numFilter")(_vm.tournamentGroupDistance / 1000)
      : null
  var f1 = _vm.runType == 0 ? _vm._f("numFilter")(_vm.gps_distance) : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        f0: f0,
        f1: f1,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 233:
/*!****************************************************************************************************!*\
  !*** D:/xlzp - 加了老师的前端/xlzp_running_app/page_run/index_new_algorithm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_new_algorithm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index_new_algorithm.vue?vue&type=script&lang=js& */ 234);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_new_algorithm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_new_algorithm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_new_algorithm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_new_algorithm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_new_algorithm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 234:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/xlzp - 加了老师的前端/xlzp_running_app/page_run/index_new_algorithm.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, wx) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _lebuTimer = _interopRequireDefault(__webpack_require__(/*! @/utils/lebu-timer */ 224));
var _lebuCore = _interopRequireDefault(__webpack_require__(/*! @/utils/lebu-core */ 225));
var _runInfo = __webpack_require__(/*! @/api/runInfo.js */ 89);
var _tournament = __webpack_require__(/*! @/api/tournament.js */ 90);
var _calculate_time = __webpack_require__(/*! @/utils/calculate_time.js */ 226);
var _run_core = _interopRequireDefault(__webpack_require__(/*! @/utils/run_core */ 235));
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// pages/run/index.js
var _default = {
  data: function data() {
    return {
      num: 0,
      num2: 0,
      os: uni.getSystemInfoSync().osName,
      screenHeight: 0,
      polyline: [{
        points: [],
        color: '#07c160',
        width: 2
      }],
      latitude: 0,
      longitude: 0,
      altitude_data: [],
      time_data: '00:00:00',
      kcal_data: '0.00',
      speed_data: '0\'00"',
      distance_data: '0.00',
      motion_status: 0,
      time_id: 0,
      points_time: parseInt(Date.now() / 1000),
      km_speed_data: [],
      km_distance_data: 0,
      runType: 0,
      altitude: '',
      backButtonPress: 0,
      showMask: false,
      runTime: null,
      runData: {
        steps: 0
      },
      gps_distance: 0,
      oldSteps: 0,
      startRunTime: null,
      //开始跑步时间
      tournamentGroupId: null,
      // 比赛分组id
      tournamentGroupDistance: null // 比赛分组距离
    };
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function onLoad(options) {
    var _this = this;
    if (options.tournamentGroupId != null) {
      this.tournamentGroupId = options.tournamentGroupId;
      (0, _tournament.tournamentGroupInfo)(this.tournamentGroupId).then(function (res) {
        _this.tournamentGroupDistance = res.data.distance;
        console.log(_this.tournamentGroupDistance);
      });
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function onReady() {
    this.setScreenHeight();
    this.initRun();
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function onShow() {
    console.log('App显示' + this.motion_status + this.runTime);
    this.checkLocation();
    if (this.motion_status == 1 && this.runTime != null) {
      console.log('处理时间');
      _lebuTimer.default.restore(this.runTime, new Date());
      this.refreshShowTime();
    }
  },
  onHide: function onHide() {
    console.log('隐藏App');
    if (this.motion_status == 1) {
      // 记录隐藏App开始时间
      this.runTime = new Date();
    }
    console.log('记录时间' + this.runTime);
    _lebuTimer.default.end();
    this.stopRefreshShowTime();
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function onUnload() {
    this.stopRefreshShowTime();
    var that = this;

    //时间计数器重置
    _lebuTimer.default.end();
    _lebuTimer.default.reset();

    //定位停止
    if (this.runType == 0) {
      uni.stopLocationUpdate({
        complete: function complete(res) {}
      });
    }
    //加速度传感器停止监测
    uni.offAccelerometerChange(this.calculateAccelerometer);
    this.motion_status = 2;
    uni.stopAccelerometer();
    _run_core.default.reset();
  },
  filters: {
    /**
     * 截取两位过滤器
     * @param {Object} value
     */
    numFilter: function numFilter(value) {
      // 截取当前数据到小数点后两位
      var realVal = parseFloat(value).toFixed(2);
      return realVal;
    }
  },
  methods: {
    /**
     * 移动地图
     * @param {Object} latitude 纬度
     * @param {Object} longitude 经度
     */
    getMap: function getMap(latitude, longitude) {
      this.latitude = latitude;
      this.longitude = longitude;
      var obj = uni.createMapContext('myMap');
      obj.moveToLocation({
        //moveToLocation将地图中心移动到当前定位点，需要配合map组件的show-location使用
        latitude: latitude,
        longitude: longitude
      });
    },
    tabSelect: function tabSelect(e) {
      this.setData({
        runType: e.currentTarget.dataset.id
      });
    },
    initRun: function initRun() {
      var that = this;
      if (this.runType == 0) {
        uni.getLocation({
          altitude: true,
          success: function success(res) {
            that.setData({
              latitude: res.latitude,
              longitude: res.longitude,
              altitude: res.altitude
            });
            setTimeout(function () {
              var obj = uni.createMapContext('myMap');
              obj.moveToLocation();
            }, 1000);
          },
          fail: function fail() {
            that.checkLocation();
          }
        });
      }
    },
    /**
     * 开始跑步
     */
    startRun: function startRun() {
      var _this2 = this;
      _lebuTimer.default.start();
      this.startRunTime = parseInt(Date.now() / 1000);
      this.refreshShowTime();
      var that = this;
      this.vibrateFunc(1);
      this.showMask = true;
      uni.showModal({
        title: '提示',
        content: '将手机放置在裤袋当中或抓着手机摆臂跑步,可以获得更加精准的数据统计哦!',
        showCancel: false
      });
      if (this.runType == 0) {
        uni.startLocationUpdateBackground({
          success: function success(res) {
            uni.onLocationChange(_this2.locationChange);
          },
          fail: function fail(res) {
            // console.log(res);
          }
        });
      }
      this.motion_status = 1;
      uni.startAccelerometer({
        interval: 'game',
        success: function success() {
          uni.onAccelerometerChange(that.calculateAccelerometer);
        }
      });
    },
    /**
     * 暂停跑步
     */
    pauseRun: function pauseRun() {
      this.runTime = null;
      _lebuTimer.default.end();
      this.stopRefreshShowTime();
      this.vibrateFunc(1);
      var that = this;
      if (this.runType == 0) {
        uni.stopLocationUpdate({
          complete: function complete(res) {}
        });
      }
      wx.stopAccelerometer();
      // uni.offAccelerometerChange(this.calculateAccelerometer);
      this.motion_status = 2;
    },
    /**
     * 恢复跑步
     */
    reRun: function reRun() {
      this.refreshShowTime();
      _lebuTimer.default.start();
      this.vibrateFunc(1);
      var that = this;
      if (this.runType == 0) {
        uni.startLocationUpdateBackground({
          success: function success(res) {
            uni.onLocationChange(that.locationChange);
          },
          fail: function fail(res) {}
        });
      }
      this.motion_status = 1;
      wx.startAccelerometer({
        interval: 'game',
        success: function success() {
          uni.onAccelerometerChange(that.calculateAccelerometer);
        }
      });
    },
    /**
     * 结束跑步
     */
    stopRun: function stopRun() {
      _lebuTimer.default.end();
      this.vibrateFunc(2);
      var that = this;
      if (this.runType == 0) {
        uni.stopLocationUpdate({
          complete: function complete(res) {}
        });
      }
      wx.stopAccelerometer();
      // uni.offAccelerometerChange(this.calculateAccelerometer);
      this.motion_status = 2;
      if (this.gps_distance == 0) {
        uni.showModal({
          title: '未检测到任何移动',
          content: '继续运动还是舍弃这条记录?',
          cancelText: '舍弃',
          confirmText: '继续',
          success: function success(res) {
            if (res.confirm) {
              that.reRun();
            } else {
              _lebuTimer.default.reset();
              uni.switchTab({
                url: '/pages/index/index'
              });
            }
          }
        });
      } else if (this.gps_distance < 0.1) {
        uni.showModal({
          title: '移动距离太短',
          content: '继续运动还是舍弃这条记录?',
          cancelText: '舍弃',
          confirmText: '继续',
          success: function success(res) {
            if (res.confirm) {
              that.reRun();
            } else {
              _lebuTimer.default.reset();
              uni.switchTab({
                url: '/pages/index/index'
              });
            }
          }
        });
      } else if (this.tournamentGroupDistance != null && this.gps_distance < this.tournamentGroupDistance / 1000) {
        uni.showModal({
          title: '未达到目标距离',
          content: '继续运动还是舍弃本次比赛记录?',
          cancelText: '舍弃',
          confirmText: '继续',
          success: function success(res) {
            if (res.confirm) {
              that.reRun();
            } else {
              _lebuTimer.default.reset();
              uni.switchTab({
                url: '/pages/index/index'
              });
            }
          }
        });
      } else {
        this.stopRefreshShowTime();

        // 处理string转Long
        var distanceDataNum = new Number(parseFloat(this.gps_distance).toFixed(2));
        var kcalDataNum = new Number(this.kcal_data);
        uni.showLoading({
          title: '正在保存记录',
          mask: true
        });
        if (this.tournamentGroupId != null) {
          this.saveTournamentRunInfo(distanceDataNum, kcalDataNum);
        } else {
          var then = this;
          // 保存数据至数据库
          (0, _runInfo.runInfoAdd)({
            time: this.time_data,
            speed: this.speed_data,
            kcal: kcalDataNum * 1000,
            distance: distanceDataNum * 1000,
            kmSpeed: JSON.stringify(this.km_speed_data),
            points: JSON.stringify(this.polyline[0].points),
            altitude: JSON.stringify(this.altitude_data),
            altitudeSum: this.altitude,
            runType: this.runType,
            step: this.runData.steps,
            startRunTime: this.startRunTime,
            endRunTime: parseInt(Date.now() / 1000)
          }).then(function (res) {
            (0, _runInfo.runInfoExtendAdd)({
              runInfoId: res.data,
              accelerometer: JSON.stringify(then.accelerometer)
            });
            // lebu.reset();
            uni.hideLoading();
            uni.redirectTo({
              url: './statement?id=' + res.data
            });
          });
        }
      }
    },
    /**
     * 保存比赛跑步数据
     * @param {Object} distanceDataNum
     * @param {Object} kcalDataNum
     */
    saveTournamentRunInfo: function saveTournamentRunInfo(distanceDataNum, kcalDataNum) {
      var then = this;
      // 保存数据至数据库
      (0, _tournament.tournamentAdd)({
        time: this.time_data,
        speed: this.speed_data,
        kcal: kcalDataNum * 1000,
        distance: distanceDataNum * 1000,
        kmSpeed: JSON.stringify(this.km_speed_data),
        points: JSON.stringify(this.polyline[0].points),
        altitude: JSON.stringify(this.altitude_data),
        altitudeSum: this.altitude,
        runType: this.runType,
        step: this.runData.steps,
        startRunTime: this.startRunTime,
        endRunTime: parseInt(Date.now() / 1000),
        tournamentGroupId: this.tournamentGroupId
      }).then(function (res) {
        uni.hideLoading();
        uni.redirectTo({
          url: './statement_tournament?id=' + res.data
        });
      });
    },
    /**
     * 手机震动
     * @param {Object} mode
     */
    vibrateFunc: function vibrateFunc(mode) {
      if (uni.getStorageSync('vibrate')) {
        if (mode == 1) {
          uni.vibrateShort({
            complete: function complete(res) {}
          });
        }
        if (mode == 2) {
          uni.vibrateLong({
            complete: function complete(res) {}
          });
        }
      }
    },
    //设定地图高度为全屏幕高度
    setScreenHeight: function setScreenHeight() {
      var that = this;
      uni.getSystemInfo({
        success: function success(res) {
          that.setData({
            screenHeight: res.screenHeight * 0.901 + 'px'
          });
        }
      });
    },
    //检测是否开启后台定位,并引导用户开启
    checkLocation: function checkLocation() {
      if (this.runType == 1) {
        return;
      }
      if (uni.getSystemInfoSync().hostName == 'WeChat') {
        uni.getSetting({
          success: function success(res) {
            var ulb = res.authSetting['scope.userLocationBackground']; //console.log(res.authSetting)

            if (ulb == false || ulb == undefined || res.authSetting['scope.userLocation'] == false) {
              uni.showModal({
                title: '提示',
                content: '请先设置位置信息为"使用小程序期间和离开小程序后",才可运行跑步模块',
                success: function success(res) {
                  if (res.confirm) {
                    uni.openSetting({});
                  } else {
                    uni.switchTab({
                      url: '../index/index'
                    });
                  }
                }
              });
            }
          }
        });
      }
    },
    checkDistance: function checkDistance(lat2, lng2, cur_time) {
      var obj = this.polyline[0].points[this.polyline[0].points.length - 1]; // console.log(this.data.polyline[0].points);

      var lat1 = obj.latitude;
      var lng1 = obj.longitude; // 调用 return的距离单位为m

      var radLat1 = lat1 * Math.PI / 180;
      var radLat2 = lat2 * Math.PI / 180;
      var a = radLat1 - radLat2;
      var b = lng1 * Math.PI / 180 - lng2 * Math.PI / 180;
      var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
      s = s * 6378.137; // EARTH_RADIUS;

      s = Math.round(s * 10000) / 10; //m

      // 过滤同一秒数据
      var time_differece = cur_time - this.points_time; //秒
      if (time_differece <= 0) {
        return false;
      }
      this.points_time = cur_time;

      // let cal_distance = (lebu.getStride() / 100) * time_differece; //cm => m
      // let cal_distance = (runCore.getStride() / 100) * time_differece; //cm => m
      // if (this.oldSteps != this.runData.steps) {
      // 	this.oldSteps = this.runData.steps;
      // 	this.gps_distance = this.gps_distance + s / 1000;
      // }

      // if ((s <= cal_distance && s > 0) || (s <= this.distance_data && this.distance > 0) || (s < 35 && s > 0)) {
      if (this.oldSteps != this.runData.steps && s < 300 && s > 0) {
        this.oldSteps = this.runData.steps;
        this.gps_distance = this.gps_distance + s / 1000;
        return true;
      } else {
        return false;
      }
    },
    /**
     * 拦截页面返回事件
     */
    afterleave: function afterleave() {
      if (this.motion_status == 1 || this.motion_status == 2) {
        this.backButtonPress++;
        if (this.backButtonPress < 2) {
          uni.showToast({
            icon: 'none',
            title: '再按一次退出跑步',
            duration: 1000
          });
        }
        this.showMask = false;
        var that = this;
        setTimeout(function () {
          that.backButtonPress = 0;
          that.showMask = true;
        }, 2000);
      }
      return false;
    },
    locationChange: function locationChange(result) {
      // console.log('位置变化了');
      var points = this.polyline[0].points; //检测距离

      if (this.polyline[0].points.length == 0 || this.checkDistance(result.latitude, result.longitude, parseInt(Date.now() / 1000))) {
        points.push({
          longitude: result.longitude,
          latitude: result.latitude
        });
        this.polyline[0].points = points;
        this.setData({
          longitude: result.longitude,
          latitude: result.latitude
        });
        this.getMap(result.latitude, result.longitude);
      }
    },
    // 开始刷新页面时间
    refreshShowTime: function refreshShowTime() {
      this.stopRefreshShowTime();
      var that = this;
      this.time_id = setInterval(function () {
        // console.log('触发setInterval');
        var time_data = _lebuTimer.default.getTime();
        // console.log('展示时间' + time_data);
        that.setData({
          time_data: time_data
        });
      }, 1000);
    },
    // 暂停刷新页面时间
    stopRefreshShowTime: function stopRefreshShowTime() {
      clearInterval(this.time_id);
    },
    /**
     * 计算加速计数据
     */
    calculateAccelerometer: function calculateAccelerometer(res) {
      this.num2++;
      // if (uni.getSystemInfoSync().hostName == 'WeChat' && uni.getSystemInfoSync().osName != 'ios' && this.num2 % 10 != 0) {
      // 	return;
      // }
      this.num++;
      var run_data = _run_core.default.getAcceleration(res, this.time_data, this.gps_distance);
      this.runData = run_data;
      this.setData({
        distance_data: run_data.distance,
        kcal_data: run_data.kcal,
        speed_data: run_data.speed
      });
      if (run_data.distance - this.km_distance_data >= 1) {
        var km_speed_obj = this.km_speed_data;
        km_speed_obj.push(run_data.speed);
        var altitude_obj = this.altitude_data;
        altitude_obj.push(this.altitude);
        this.setData({
          km_distance_data: run_data.distance,
          km_speed_data: km_speed_obj,
          altitude_data: altitude_obj
        });
      }
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ }),

/***/ 236:
/*!************************************************************************************************************!*\
  !*** D:/xlzp - 加了老师的前端/xlzp_running_app/page_run/index_new_algorithm.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_new_algorithm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index_new_algorithm.vue?vue&type=style&index=0&lang=css& */ 237);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_new_algorithm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_new_algorithm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_new_algorithm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_new_algorithm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_new_algorithm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 237:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/xlzp - 加了老师的前端/xlzp_running_app/page_run/index_new_algorithm.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[229,"common/runtime","common/vendor","page_run/common/vendor"]]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/page_run/index_new_algorithm.js.map