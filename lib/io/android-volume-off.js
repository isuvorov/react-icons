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

var IoAndroidVolumeOff = function (_React$Component) {
    _inherits(IoAndroidVolumeOff, _React$Component);

    function IoAndroidVolumeOff() {
        _classCallCheck(this, IoAndroidVolumeOff);

        return _possibleConstructorReturn(this, (IoAndroidVolumeOff.__proto__ || Object.getPrototypeOf(IoAndroidVolumeOff)).apply(this, arguments));
    }

    _createClass(IoAndroidVolumeOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.7 20c0-5.4-3.5-10-8.3-11.5v-3.5c6.6 1.6 11.6 7.7 11.6 15 0 2.7-0.6 5.3-1.9 7.5l-2.5-2.5c0.7-1.5 1.1-3.2 1.1-5z m-11.7-13.7v8.1l-4-4z m12.9 24.7l1.9 1.9-1.9 1.9-3.1-3.2c-1.8 1.7-4 2.9-6.4 3.4v-3.5c1.4-0.5 2.9-1.2 4-2.2l-7.4-7.4v11.9l-8.4-8.8h-6.6v-10h6.6l0.7-0.8-7.1-7.1 1.9-1.9z m-5.4-11c0 0.5 0 1.2-0.2 1.7l-3.9-4v-4.7c2.5 1.3 4.1 4 4.1 7z' })
                )
            );
        }
    }]);

    return IoAndroidVolumeOff;
}(React.Component);

exports.default = IoAndroidVolumeOff;
module.exports = exports['default'];