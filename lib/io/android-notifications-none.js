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

var IoAndroidNotificationsNone = function (_React$Component) {
    _inherits(IoAndroidNotificationsNone, _React$Component);

    function IoAndroidNotificationsNone() {
        _classCallCheck(this, IoAndroidNotificationsNone);

        return _possibleConstructorReturn(this, (IoAndroidNotificationsNone.__proto__ || Object.getPrototypeOf(IoAndroidNotificationsNone)).apply(this, arguments));
    }

    _createClass(IoAndroidNotificationsNone, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm19.8 9.4h-0.1c-0.5 0-1.9 0.4-1.9 0.4-3.6 0.7-6.1 4.1-6.1 7.8v9.9l-0.7 0.8-0.6 0.6h18.7l-0.6-0.6-0.7-0.8v-9.9c0-3.7-2.5-7.1-6.1-7.8 0 0-1.3-0.4-1.9-0.4z m0-5.6c1.4 0 2.4 1 2.4 2.4v1.1c4.6 1.1 8.1 5.4 8.1 10.3v8.9l3.2 3.3v1.6h-27.5v-1.6l3.2-3.3v-8.9c0-4.9 3.5-9.2 8.1-10.3v-1.1c0-1.4 1-2.5 2.5-2.5z m3.2 29.2c0 1.8-1.5 3.3-3.2 3.3s-3.3-1.5-3.3-3.3h6.5z' })
                )
            );
        }
    }]);

    return IoAndroidNotificationsNone;
}(React.Component);

exports.default = IoAndroidNotificationsNone;
module.exports = exports['default'];