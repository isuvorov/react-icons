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

var IoBluetooth = function (_React$Component) {
    _inherits(IoBluetooth, _React$Component);

    function IoBluetooth() {
        _classCallCheck(this, IoBluetooth);

        return _possibleConstructorReturn(this, (IoBluetooth.__proto__ || Object.getPrototypeOf(IoBluetooth)).apply(this, arguments));
    }

    _createClass(IoBluetooth, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm10.9 11.3c1.3-1.3 1.4-1.1 1.5-1l5.3 5.1c0.2 0.1 0.8 0.8 0.8 0.2v-12.3c0-0.5 0.5-0.8 1-0.8 0.3 0 0.5 0.2 0.7 0.3s9.1 8.8 9.5 9.2 0.4 0.7 0.1 1l-6.6 6.4s-0.3 0.3-0.3 0.6 0.3 0.6 0.3 0.6l6.6 6.4c0.3 0.3 0.3 0.7-0.1 1s-9.5 9.2-9.5 9.2c-0.2 0.1-0.4 0.3-0.7 0.3-0.5 0-1-0.3-1-0.8v-12.3s-0.6 0.1-0.8 0.2v0.1l-5.3 5c-0.1 0.1-0.2 0.3-1.5-0.9s-0.9-1.4-0.8-1.5 7-6.7 7-6.7 0.3-0.2 0.3-0.6c0-0.4-0.3-0.6-0.3-0.6s-6.9-6.7-7-6.7-0.4-0.2 0.8-1.4z m11-1.9v6.1c0 0.7 0.6 0.1 0.8 0l2.3-2.4s0.2-0.4 0.2-0.5 0-0.4-0.2-0.6l-2.3-2.3c-0.2-0.2-0.8-0.9-0.8-0.3z m0 15.1v6.1s0.6-0.1 0.8-0.3l2.3-2.3c0.2-0.2 0.2-0.4 0.2-0.6s0-0.4-0.2-0.5l-2.3-2.4c-0.2-0.1-0.8-0.7-0.8 0z' })
                )
            );
        }
    }]);

    return IoBluetooth;
}(React.Component);

exports.default = IoBluetooth;
module.exports = exports['default'];