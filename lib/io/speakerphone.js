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

var IoSpeakerphone = function (_React$Component) {
    _inherits(IoSpeakerphone, _React$Component);

    function IoSpeakerphone() {
        _classCallCheck(this, IoSpeakerphone);

        return _possibleConstructorReturn(this, (IoSpeakerphone.__proto__ || Object.getPrototypeOf(IoSpeakerphone)).apply(this, arguments));
    }

    _createClass(IoSpeakerphone, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm3 14.2c0 2.9 1.6 5.4 4 6.7-0.1 0-0.2 0-0.3 0s-0.3-0.1-0.4-0.1c-2.7-0.3-4.8-2.6-5.4-5.4-0.4 0-0.9-0.6-0.9-1.3 0-0.6 0.4-1.1 0.9-1.2 0.4-3.3 3.1-5.9 6.3-5.9h0.6c-2.8 1.2-4.8 4-4.8 7.2z m30.8-7.1c0.8 2 1.2 4.4 1.2 6.9s-0.4 4.9-1.2 6.9l-0.2 0.7c-0.5 1.1-1.2 2-1.9 2.6-0.8 0.8-1.7 1.5-2.6 1.6h-0.3c-0.5 0-1.1-0.2-1.7-0.4-0.2-0.2-0.8-0.4-0.8-0.4-1.7-0.8-6.5-2.2-9-2.3-0.3 0.7-0.7 1.6-0.9 2.4-0.2 0.7-0.5 2.1-0.5 4.7-0.1 2.5 0 4.7 0.2 6.4 0 0.2 0.1 0.4 0.1 0.6 0 0.5-0.2 0.7-0.7 0.7h-6c-0.5 0-0.8-0.2-0.8-0.5v-0.5c0.2-5.6 2-11 2.1-11.3 0.1-0.8 0.4-1.4 0.5-2.4 0.2-0.9-2.1-1-3.1-1.9-2.3-1.3-3.7-3.8-3.7-6.7 0-3.2 2-6 4.6-7.2h4.8c4.5-0.2 8.9-1.6 12.7-3.9 0.1-0.1 0.3-0.1 0.4-0.1 0.6-0.3 1.2-0.5 1.8-0.5 1 0 2.1 0.5 2.9 1.2 0.7 0.7 1.4 1.7 1.9 2.8 0.1 0.2 0.2 0.4 0.2 0.6z m-1.8 13.8c0.7-1.7 1.2-4.2 1.2-6.9s-0.5-5.2-1.2-6.9c-0.6-1.4-1.5-2.3-2.3-2.3s-1.7 0.9-2.3 2.3c-0.7 1.7-1.1 4.2-1.1 6.9s0.4 5.2 1.1 6.9c0.6 1.5 1.4 2.6 2.3 2.6s1.7-1.2 2.3-2.6z' })
                )
            );
        }
    }]);

    return IoSpeakerphone;
}(React.Component);

exports.default = IoSpeakerphone;
module.exports = exports['default'];