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

var TiBatteryCharge = function (_React$Component) {
    _inherits(TiBatteryCharge, _React$Component);

    function TiBatteryCharge() {
        _classCallCheck(this, TiBatteryCharge);

        return _possibleConstructorReturn(this, (TiBatteryCharge.__proto__ || Object.getPrototypeOf(TiBatteryCharge)).apply(this, arguments));
    }

    _createClass(TiBatteryCharge, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm8.3 16.7v10h18.4v-10h-18.4z m9.8 8.1l-2.1-3.1-4.3 0.7 5.3-3.9 2 3.2 4.3-0.7-5.3 3.8z m13.6-8.1c0-2.8-2.3-5-5-5h-18.4c-2.7 0-5 2.2-5 5v10c0 2.7 2.3 5 5 5h18.4c2.7 0 5-2.3 5-5 1.8 0 3.3-1.5 3.3-3.4v-3.3c0-1.8-1.5-3.3-3.3-3.3z m-3.4 10c0 0.9-0.7 1.6-1.6 1.6h-18.4c-0.9 0-1.6-0.7-1.6-1.6v-10c0-1 0.7-1.7 1.6-1.7h18.4c0.9 0 1.6 0.7 1.6 1.7v10z' })
                )
            );
        }
    }]);

    return TiBatteryCharge;
}(React.Component);

exports.default = TiBatteryCharge;
module.exports = exports['default'];