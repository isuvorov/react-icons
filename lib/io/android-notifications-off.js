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

var IoAndroidNotificationsOff = function (_React$Component) {
    _inherits(IoAndroidNotificationsOff, _React$Component);

    function IoAndroidNotificationsOff() {
        _classCallCheck(this, IoAndroidNotificationsOff);

        return _possibleConstructorReturn(this, (IoAndroidNotificationsOff.__proto__ || Object.getPrototypeOf(IoAndroidNotificationsOff)).apply(this, arguments));
    }

    _createClass(IoAndroidNotificationsOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20.2 36.3c-1.8 0-3.2-1.5-3.2-3.3h6.4c0 1.8-1.4 3.3-3.2 3.3z m-9.7-27.9l23.9 23.9-1.8 1.9-2.9-2.8h-23.2v-1.6l3.2-3.2v-9c0-1.8 0.4-3.5 1.2-4.9l-4.9-5 1.9-1.9 2.6 2.6z m20.3 9.2v7.3l-16.3-16.1c1-0.7 2.1-1.2 3.3-1.5v-1.1c0-1.4 1-2.5 2.4-2.5s2.4 1.1 2.4 2.5v1.1c4.6 1.1 8.2 5.3 8.2 10.3z' })
                )
            );
        }
    }]);

    return IoAndroidNotificationsOff;
}(React.Component);

exports.default = IoAndroidNotificationsOff;
module.exports = exports['default'];