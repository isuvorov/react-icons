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

var IoBatteryCharging = function (_React$Component) {
    _inherits(IoBatteryCharging, _React$Component);

    function IoBatteryCharging() {
        _classCallCheck(this, IoBatteryCharging);

        return _possibleConstructorReturn(this, (IoBatteryCharging.__proto__ || Object.getPrototypeOf(IoBatteryCharging)).apply(this, arguments));
    }

    _createClass(IoBatteryCharging, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm0.8 30c-0.5 0-0.8-0.3-0.8-0.8v-18.4c0-0.5 0.3-0.8 0.8-0.8h29.7c0.5 0 0.8 0.3 0.8 0.8v4.2h2.9c0.5 0 0.8 0.3 0.8 0.8v8.4c0 0.5-0.3 0.8-0.8 0.8h-2.9v4.2c0 0.5-0.3 0.8-0.8 0.8h-29.7z m16.8-17.5l-7.8 8.7h4.7l-2.1 6.3 7.8-8.7h-4.7z' })
                )
            );
        }
    }]);

    return IoBatteryCharging;
}(React.Component);

exports.default = IoBatteryCharging;
module.exports = exports['default'];