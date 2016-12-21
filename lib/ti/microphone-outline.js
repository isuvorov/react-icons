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

var TiMicrophoneOutline = function (_React$Component) {
    _inherits(TiMicrophoneOutline, _React$Component);

    function TiMicrophoneOutline() {
        _classCallCheck(this, TiMicrophoneOutline);

        return _possibleConstructorReturn(this, (TiMicrophoneOutline.__proto__ || Object.getPrototypeOf(TiMicrophoneOutline)).apply(this, arguments));
    }

    _createClass(TiMicrophoneOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 26.7c-3.7 0-6.7-3-6.7-6.7v-10c0-3.7 3-6.7 6.7-6.7s6.7 3 6.7 6.7v10c0 3.7-3 6.7-6.7 6.7z m0-20c-1.8 0-3.3 1.5-3.3 3.3v10c0 1.8 1.5 3.3 3.3 3.3s3.3-1.5 3.3-3.3v-10c0-1.8-1.5-3.3-3.3-3.3z m11.7 13.3v-3.3c0-1-0.8-1.7-1.7-1.7s-1.7 0.7-1.7 1.7v3.3c0 4.6-3.7 8.3-8.3 8.3s-8.3-3.7-8.3-8.3v-3.3c0-1-0.8-1.7-1.7-1.7s-1.7 0.7-1.7 1.7v3.3c0 5.9 4.4 10.7 10 11.5v1.8h-5c-0.9 0-1.6 0.8-1.6 1.7s0.7 1.7 1.6 1.7h13.4c0.9 0 1.6-0.8 1.6-1.7s-0.7-1.7-1.6-1.7h-5v-1.8c5.6-0.8 10-5.6 10-11.5z' })
                )
            );
        }
    }]);

    return TiMicrophoneOutline;
}(React.Component);

exports.default = TiMicrophoneOutline;
module.exports = exports['default'];