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

var MdVoiceChat = function (_React$Component) {
    _inherits(MdVoiceChat, _React$Component);

    function MdVoiceChat() {
        _classCallCheck(this, MdVoiceChat);

        return _possibleConstructorReturn(this, (MdVoiceChat.__proto__ || Object.getPrototypeOf(MdVoiceChat)).apply(this, arguments));
    }

    _createClass(MdVoiceChat, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30 23.4v-13.4l-6.6 5.3v-5.3h-13.4v13.4h13.4v-5.4z m3.4-20c1.8 0 3.2 1.4 3.2 3.2v20c0 1.8-1.4 3.4-3.2 3.4h-23.4l-6.6 6.6v-30c0-1.8 1.4-3.2 3.2-3.2h26.8z' })
                )
            );
        }
    }]);

    return MdVoiceChat;
}(React.Component);

exports.default = MdVoiceChat;
module.exports = exports['default'];