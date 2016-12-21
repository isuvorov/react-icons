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

var IoMicB = function (_React$Component) {
    _inherits(IoMicB, _React$Component);

    function IoMicB() {
        _classCallCheck(this, IoMicB);

        return _possibleConstructorReturn(this, (IoMicB.__proto__ || Object.getPrototypeOf(IoMicB)).apply(this, arguments));
    }

    _createClass(IoMicB, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm19.8 2.5c2.7 0 5 1.8 5.9 4.6 0.5 1.4 0.3 3.5 0.1 4.3s-0.6 1.6-1.1 2.2c-0.2 0.3-0.5 0.5-0.8 0.7-0.1 0-0.1 0.1-0.2 0.1-0.2 0.1-0.4 0.1-0.7 0.2-1 0.2-2 0.4-3.1 0.4h-0.1c-1.1 0-2.3-0.2-3.3-0.4-0.3-0.1-0.5-0.1-0.7-0.2-0.1 0-0.1-0.1-0.2-0.1-0.3-0.2-0.6-0.4-0.8-0.7-0.5-0.6-1-1.4-1.1-2.2s-0.4-2.9 0.1-4.3c0.9-2.8 3.2-4.6 6-4.6z m3 13.2c0.5 0 0.9 0.4 0.9 0.9v0.2c-0.4 5.2-1.4 18.8-1.4 19.7 0 0-0.3 1-2.5 1-2.3 0-2.5-1-2.5-1-0.1-0.9-1.1-14.5-1.5-19.7v-0.2c0-0.5 0.4-0.9 0.9-0.9h0.1c0.1 0 0.1 0.1 0.1 0.1 0.2 0 0.4 0.1 0.5 0.1 0.7 0.1 1.6 0.1 2.4 0.1s1.6 0 2.3-0.1c0.2 0 0.3-0.1 0.5-0.1 0 0 0-0.1 0.1-0.1h0.1z m-2.3 6.3v-2.5c0-0.5-0.3-0.9-0.7-0.9s-0.8 0.4-0.8 0.9v2.5c0 0.5 0.3 0.9 0.8 0.9s0.7-0.4 0.7-0.9z' })
                )
            );
        }
    }]);

    return IoMicB;
}(React.Component);

exports.default = IoMicB;
module.exports = exports['default'];