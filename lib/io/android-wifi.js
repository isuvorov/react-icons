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

var IoAndroidWifi = function (_React$Component) {
    _inherits(IoAndroidWifi, _React$Component);

    function IoAndroidWifi() {
        _classCallCheck(this, IoAndroidWifi);

        return _possibleConstructorReturn(this, (IoAndroidWifi.__proto__ || Object.getPrototypeOf(IoAndroidWifi)).apply(this, arguments));
    }

    _createClass(IoAndroidWifi, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm19.8 17.9c1.7 0 3.2 1.4 3.2 3.2s-1.5 3.2-3.2 3.2-3.3-1.4-3.3-3.2 1.5-3.2 3.3-3.2z m9.7 3.2c0 3.5-2 6.6-4.9 8.4l-1.6-2.9c2-1.1 3.2-3.1 3.2-5.5 0-3.5-2.9-6.4-6.4-6.4s-6.5 2.9-6.5 6.4c0 2.4 1.2 4.4 3.2 5.5l-1.6 2.9c-2.9-1.8-4.9-4.9-4.9-8.4 0-5.3 4.4-9.7 9.7-9.7s9.8 4.4 9.8 9.7z m-9.7-16.1c8.9 0 16.2 7.3 16.2 16.1 0 5.9-3.3 11.1-8.1 13.9l-1.7-2.8c3.9-2.2 6.5-6.3 6.5-11.1 0-7.1-5.8-12.9-13-12.9s-12.9 5.8-12.9 12.9c0 4.8 2.6 8.8 6.5 11.1l-1.7 2.8c-4.8-2.8-8.1-8-8.1-13.9 0-8.8 7.3-16.1 16.2-16.1z' })
                )
            );
        }
    }]);

    return IoAndroidWifi;
}(React.Component);

exports.default = IoAndroidWifi;
module.exports = exports['default'];