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

var MdBatteryChargingFull = function (_React$Component) {
    _inherits(MdBatteryChargingFull, _React$Component);

    function MdBatteryChargingFull() {
        _classCallCheck(this, MdBatteryChargingFull);

        return _possibleConstructorReturn(this, (MdBatteryChargingFull.__proto__ || Object.getPrototypeOf(MdBatteryChargingFull)).apply(this, arguments));
    }

    _createClass(MdBatteryChargingFull, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm18.4 33.4l6.6-12.5h-3.4v-9.3l-6.6 12.5h3.4v9.3z m7.7-26.8q0.9 0 1.6 0.7t0.7 1.6v25.6q0 0.9-0.7 1.5t-1.6 0.6h-12.2q-0.9 0-1.6-0.6t-0.7-1.6v-25.5q0-0.9 0.7-1.6t1.6-0.7h2.7v-3.2h6.8v3.2h2.7z' })
                )
            );
        }
    }]);

    return MdBatteryChargingFull;
}(React.Component);

exports.default = MdBatteryChargingFull;
module.exports = exports['default'];