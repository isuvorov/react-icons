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

var IoAndroidNotifications = function (_React$Component) {
    _inherits(IoAndroidNotifications, _React$Component);

    function IoAndroidNotifications() {
        _classCallCheck(this, IoAndroidNotifications);

        return _possibleConstructorReturn(this, (IoAndroidNotifications.__proto__ || Object.getPrototypeOf(IoAndroidNotifications)).apply(this, arguments));
    }

    _createClass(IoAndroidNotifications, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm19.8 36.3c-1.8 0-3.3-1.5-3.3-3.3h6.5c0 1.8-1.5 3.3-3.2 3.3z m10.5-9.8l3.2 3.3v1.6h-27.5v-1.6l3.2-3.3v-8.9c0-4.9 3.5-9.2 8.1-10.3v-1.1c0-1.4 1-2.5 2.5-2.5s2.4 1.1 2.4 2.5v1.1c4.6 1.1 8.1 5.4 8.1 10.3v8.9z' })
                )
            );
        }
    }]);

    return IoAndroidNotifications;
}(React.Component);

exports.default = IoAndroidNotifications;
module.exports = exports['default'];