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

var IoAndroidVolumeUp = function (_React$Component) {
    _inherits(IoAndroidVolumeUp, _React$Component);

    function IoAndroidVolumeUp() {
        _classCallCheck(this, IoAndroidVolumeUp);

        return _possibleConstructorReturn(this, (IoAndroidVolumeUp.__proto__ || Object.getPrototypeOf(IoAndroidVolumeUp)).apply(this, arguments));
    }

    _createClass(IoAndroidVolumeUp, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm5 15h6.6l8.4-8.7v27.5l-8.4-8.8h-6.6v-10z m22.5 5c0 3-1.6 5.7-4.1 6.9v-13.9c2.5 1.3 4.1 4 4.1 7z m-4.1-15c6.6 1.6 11.6 7.7 11.6 15s-5 13.4-11.6 15v-3.5c4.8-1.5 8.2-6.1 8.2-11.5s-3.4-10-8.2-11.5v-3.5z' })
                )
            );
        }
    }]);

    return IoAndroidVolumeUp;
}(React.Component);

exports.default = IoAndroidVolumeUp;
module.exports = exports['default'];