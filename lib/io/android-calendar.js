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

var IoAndroidCalendar = function (_React$Component) {
    _inherits(IoAndroidCalendar, _React$Component);

    function IoAndroidCalendar() {
        _classCallCheck(this, IoAndroidCalendar);

        return _possibleConstructorReturn(this, (IoAndroidCalendar.__proto__ || Object.getPrototypeOf(IoAndroidCalendar)).apply(this, arguments));
    }

    _createClass(IoAndroidCalendar, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.8 21.3v7.5h-7.5v-7.5h7.5z m-2.5-16.3h3.7v2.5h1.9c1.7 0 3.1 1.4 3.1 3.1v21.3c0 1.7-1.4 3.1-3.1 3.1h-23.8c-1.7 0-3.1-1.4-3.1-3.1v-21.3c0-1.7 1.4-3.1 3.1-3.1h1.9v-2.5h3.8v2.5h12.5v-2.5z m5.6 26.9v-16.6h-23.8v16.6h23.8z' })
                )
            );
        }
    }]);

    return IoAndroidCalendar;
}(React.Component);

exports.default = IoAndroidCalendar;
module.exports = exports['default'];