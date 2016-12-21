'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdiFingerprint = function (_React$Component) {
    _inherits(MdiFingerprint, _React$Component);

    function MdiFingerprint() {
        _classCallCheck(this, MdiFingerprint);

        return _possibleConstructorReturn(this, (MdiFingerprint.__proto__ || Object.getPrototypeOf(MdiFingerprint)).apply(this, arguments));
    }

    _createClass(MdiFingerprint, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 11.8301,1.7285C 8.42632,1.7892 6.23242,3.3223 6.23242,3.3223C 5.94808,3.518 5.87626,3.9072 6.07201,4.1916C 6.26777,4.4759 6.65696,4.5477 6.96094,4.3379C 6.96094,4.3379 11.2719,1.1459 17.4551,4.3828C 17.7549,4.5539 18.1367,4.4496 18.3078,4.1498C 18.4789,3.85 18.3746,3.4682 18.0332,3.2754C 16.3562,2.3975 14.7802,1.9629 13.3594,1.8027C 12.8266,1.7426 12.3163,1.7198 11.8301,1.7285 Z M 12.2168,4.3418C 6.26464,4.2648 3.40625,9.0469 3.40625,9.0469C 3.21646,9.3352 3.29637,9.7229 3.58473,9.9126C 3.87309,10.1024 4.2607,10.0225 4.48047,9.6836C 4.48047,9.6836 6.91701,5.5237 12.2012,5.5918C 17.5038,5.6598 19.8223,9.6465 19.8223,9.6465C 19.9981,9.9437 20.3815,10.042 20.6787,9.8662C 20.9759,9.6904 21.0743,9.3069 20.8984,9.0098C 20.8984,9.0098 18.1505,4.4179 12.2168,4.3418 Z M 11.5059,6.8203C 9.81961,6.9394 8.21462,7.5515 7,8.5586C 4.62259,10.53 3.09587,14.1447 4.77148,19.0039C 4.88421,19.3302 5.24011,19.5033 5.56641,19.3906C 5.89271,19.2779 6.06585,18.922 5.95313,18.5957L 5.95313,18.5957C 4.41157,14.1252 5.77944,11.196 7.79883,9.5215C 9.76639,7.89 13.2458,7.4761 15.8379,9.1035C 17.1117,9.9033 18.0981,11.2765 18.6035,12.6387C 19.109,14.0009 19.0824,15.3154 18.6738,15.9375C 18.2468,16.5878 17.3994,16.8342 16.6484,16.6426C 15.8975,16.451 15.2857,15.9121 15.2637,14.7656C 15.231,13.0644 13.8862,11.9966 12.5215,11.8379C 11.1568,11.6792 9.61368,12.3951 9.20703,13.9805C 8.45277,16.9211 10.3573,21.0729 14.7832,22.4473C 15.1133,22.5497 15.4639,22.3652 15.5664,22.0352C 15.6689,21.7051 15.4844,21.3544 15.1543,21.2519C 11.3205,20.0613 9.86829,16.4341 10.418,14.291C 10.6633,13.3346 11.5052,12.9767 12.377,13.0781C 13.2487,13.1794 13.9928,13.7041 14.0137,14.791C 14.0452,16.4327 15.1203,17.5424 16.3398,17.8535C 17.5594,18.1647 18.9662,17.7694 19.7188,16.623C 20.4898,15.4487 20.3675,13.8009 19.7754,12.2051C 19.1833,10.6093 18.0692,9.0277 16.5039,8.0449C 14.9609,7.0762 13.1921,6.7013 11.5059,6.8203 Z M 11.8574,9.2539L 11.8574,9.2559C 10.0785,9.3189 8.30168,10.2388 7.27539,12.1797C 5.95709,14.6729 6.55577,17.2133 7.44336,19.0449C 8.33095,20.8766 9.53516,22.1035 9.53516,22.1035C 9.77678,22.3505 10.1729,22.3549 10.4199,22.1133C 10.6669,21.8717 10.6713,21.4755 10.4297,21.2285C 10.4297,21.2285 9.35618,20.1298 8.56641,18.5C 7.77664,16.8702 7.29766,14.8141 8.38086,12.7656C 9.48847,10.6708 11.4802,10.1583 13.2617,10.6738C 15.0433,11.1893 16.5282,12.7406 16.4805,15.0332C 16.4552,15.3775 16.7138,15.6771 17.0581,15.7024C 17.4024,15.7276 17.702,15.469 17.7285,15.0566C 17.788,12.2017 15.8737,10.1259 13.6094,9.4707C 13.0433,9.3069 12.4504,9.2329 11.8574,9.2539 Z M 12.0781,14.2519C 11.7337,14.2616 11.462,14.5481 11.4707,14.8926C 11.4707,14.8926 11.4754,16.374 12.3125,17.8027C 13.1496,19.2313 14.932,20.5918 18.0293,20.3008C 18.3739,20.2801 18.6365,19.984 18.6158,19.6394C 18.5952,19.2948 18.2991,19.0322 17.9141,19.0566C 15.1947,19.3121 14.0378,18.2764 13.3906,17.1719C 12.7435,16.0675 12.7207,14.8789 12.7207,14.8789C 12.7219,14.5337 12.443,14.2529 12.0781,14.2519 Z ' })
                )
            );
        }
    }]);

    return MdiFingerprint;
}(React.Component);

exports.default = MdiFingerprint;
module.exports = exports['default'];