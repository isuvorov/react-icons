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

var MdBluetoothAudio = function (_React$Component) {
    _inherits(MdBluetoothAudio, _React$Component);

    function MdBluetoothAudio() {
        _classCallCheck(this, MdBluetoothAudio);

        return _possibleConstructorReturn(this, (MdBluetoothAudio.__proto__ || Object.getPrototypeOf(MdBluetoothAudio)).apply(this, arguments));
    }

    _createClass(MdBluetoothAudio, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm21.5 27.2l-3.1-3.2v6.3z m-3.1-17.5v6.3l3.1-3.2z m7.8 3.1l-7.2 7.2 7.2 7.2-9.6 9.4h-1.6v-12.6l-7.7 7.6-2.3-2.3 9.3-9.3-9.3-9.3 2.3-2.3 7.7 7.6v-12.6h1.6z m6.4-1.6q2.4 3.9 2.4 8.6t-2.6 8.9l-1.9-2q1.6-3.3 1.6-6.7t-1.6-6.7z m-8.8 8.8l3.8-3.8q0.8 1.9 0.8 3.8 0 2-0.8 3.9z' })
                )
            );
        }
    }]);

    return MdBluetoothAudio;
}(React.Component);

exports.default = MdBluetoothAudio;
module.exports = exports['default'];