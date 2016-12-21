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

var IoAndroidMicrophoneOff = function (_React$Component) {
    _inherits(IoAndroidMicrophoneOff, _React$Component);

    function IoAndroidMicrophoneOff() {
        _classCallCheck(this, IoAndroidMicrophoneOff);

        return _possibleConstructorReturn(this, (IoAndroidMicrophoneOff.__proto__ || Object.getPrototypeOf(IoAndroidMicrophoneOff)).apply(this, arguments));
    }

    _createClass(IoAndroidMicrophoneOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.7 27.7l4.5 4.6 2.7 2.5-1.9 1.9-7.4-7.4c-1.5 0.9-3.1 1.6-4.9 1.8v6.4h-3.6v-6.4c-5.8-0.8-10.7-5.9-10.7-12h3.1c0 5.4 4.5 9.2 9.4 9.2 1.6 0 3.2-0.4 4.5-1.1l-2.5-2.6c-0.6 0.2-1.3 0.4-2 0.4-2.9 0-5.4-2.4-5.4-5.4v-2.3l-10.5-10.4 1.9-1.9 8.6 8.6 12.1 12z m-3.4-8.1c0 0.3 0 0.6 0 0.9l-10.8-10.7v-1.9c0-3 2.5-5.4 5.4-5.4s5.4 2.4 5.4 5.4v11.7z m7.2-0.5c0 2.5-0.8 4.7-2.1 6.6l-2.1-2.2c0.7-1.3 1.2-2.8 1.2-4.4h3z m3.4 15.7l-2.7-2.5z' })
                )
            );
        }
    }]);

    return IoAndroidMicrophoneOff;
}(React.Component);

exports.default = IoAndroidMicrophoneOff;
module.exports = exports['default'];