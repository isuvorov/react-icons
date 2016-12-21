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

var IoAndroidPin = function (_React$Component) {
    _inherits(IoAndroidPin, _React$Component);

    function IoAndroidPin() {
        _classCallCheck(this, IoAndroidPin);

        return _possibleConstructorReturn(this, (IoAndroidPin.__proto__ || Object.getPrototypeOf(IoAndroidPin)).apply(this, arguments));
    }

    _createClass(IoAndroidPin, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 2.5c6.9 0 12.5 5.5 12.5 12.3 0 9.2-12.5 22.7-12.5 22.7s-12.5-13.5-12.5-22.7c0-6.8 5.6-12.3 12.5-12.3z m0 16.6c2.5 0 4.5-1.9 4.5-4.3s-2-4.4-4.5-4.4-4.5 1.9-4.5 4.4 2 4.3 4.5 4.3z' })
                )
            );
        }
    }]);

    return IoAndroidPin;
}(React.Component);

exports.default = IoAndroidPin;
module.exports = exports['default'];