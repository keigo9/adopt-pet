"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _bootstrapVue = require("bootstrap-vue");

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

require("bootstrap/dist/css/bootstrap.css");

require("bootstrap-vue/dist/bootstrap-vue.css");

require("./assets/sass/index.sass");

var _vueFontawesome = require("@fortawesome/vue-fontawesome");

var _fontawesomeSvgCore = require("@fortawesome/fontawesome-svg-core");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_bootstrapVue.BootstrapVue); // Optionally install the BootstrapVue icon components plugin


_vue["default"].use(_bootstrapVue.IconsPlugin); // fontawesome


_vue["default"].component('fa-icon', _vueFontawesome.FontAwesomeIcon);

_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.faCat, _freeSolidSvgIcons.faDog);

_vue["default"].config.productionTip = false;
new _vue["default"]({
  router: _router["default"],
  store: _store["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');