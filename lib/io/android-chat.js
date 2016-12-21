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

var IoAndroidChat = function (_React$Component) {
    _inherits(IoAndroidChat, _React$Component);

    function IoAndroidChat() {
        _classCallCheck(this, IoAndroidChat);

        return _possibleConstructorReturn(this, (IoAndroidChat.__proto__ || Object.getPrototypeOf(IoAndroidChat)).apply(this, arguments));
    }

    _createClass(IoAndroidChat, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30.4 5c0.3 0 0.5 0.3 0.5 0.6v16.7c0 0.4-0.2 0.7-0.5 0.7h-14.6l-7.1 7v-7h-4.4c-0.3 0-0.8-0.3-0.8-0.7v-16.7c0-0.3 0.5-0.6 0.8-0.6h26.1z m5 4.9c0.3 0 0.6 0.4 0.6 0.7v16.7c0 0.4-0.3 0.7-0.6 0.7h-4.5v7l-7-7h-10.2l3.1-3h14.1c1.4 0 2-0.8 2-2v-13.1h2.5z' })
                )
            );
        }
    }]);

    return IoAndroidChat;
}(React.Component);

exports.default = IoAndroidChat;
module.exports = exports['default'];