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

var IoAndroidAlarmClock = function (_React$Component) {
    _inherits(IoAndroidAlarmClock, _React$Component);

    function IoAndroidAlarmClock() {
        _classCallCheck(this, IoAndroidAlarmClock);

        return _possibleConstructorReturn(this, (IoAndroidAlarmClock.__proto__ || Object.getPrototypeOf(IoAndroidAlarmClock)).apply(this, arguments));
    }

    _createClass(IoAndroidAlarmClock, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm36.9 9.8l-2.1 2.5-7.7-6.4 2.2-2.5z m-23.6-3.9l-7.6 6.4-2.2-2.5 7.6-6.5z m7.8 7.6v8.7l6.6 3.9-1.2 2.1-7.9-4.8v-9.9h2.5z m-0.9-6.6c8.3 0 15.1 6.7 15.1 14.9s-6.8 14.9-15.1 14.9c-8.3 0-15.1-6.7-15.1-14.9s6.8-14.9 15.1-14.9z m0 26.5c6.4 0 11.7-5.1 11.7-11.6 0-6.4-5.3-11.6-11.7-11.6s-11.7 5.2-11.7 11.6 5.3 11.6 11.7 11.6z' })
                )
            );
        }
    }]);

    return IoAndroidAlarmClock;
}(React.Component);

exports.default = IoAndroidAlarmClock;
module.exports = exports['default'];