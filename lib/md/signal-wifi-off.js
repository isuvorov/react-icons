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

var MdSignalWifiOff = function (_React$Component) {
    _inherits(MdSignalWifiOff, _React$Component);

    function MdSignalWifiOff() {
        _classCallCheck(this, MdSignalWifiOff);

        return _possibleConstructorReturn(this, (MdSignalWifiOff.__proto__ || Object.getPrototypeOf(MdSignalWifiOff)).apply(this, arguments));
    }

    _createClass(MdSignalWifiOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm5.5 2.4q0.9 1 12 12t16.6 16.8l-2.1 2.1-5.5-5.6-6.5 8.1-19.4-24.2q2.6-2.1 6.1-3.6l-3.3-3.5z m33.9 9.2l-9.1 11.4-17.3-17.2q3.6-0.8 7-0.8 9.9 0 19.4 6.6z' })
                )
            );
        }
    }]);

    return MdSignalWifiOff;
}(React.Component);

exports.default = MdSignalWifiOff;
module.exports = exports['default'];