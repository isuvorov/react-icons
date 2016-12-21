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

var IoPin = function (_React$Component) {
    _inherits(IoPin, _React$Component);

    function IoPin() {
        _classCallCheck(this, IoPin);

        return _possibleConstructorReturn(this, (IoPin.__proto__ || Object.getPrototypeOf(IoPin)).apply(this, arguments));
    }

    _createClass(IoPin, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm25.7 17.8c1.6 0.8 2.8 2.4 2.8 4.3 0 1.3-0.2 1.7-1.2 1.7h-6.3l-0.9 13.7h-0.7l-0.9-13.7h-6.3c-1 0-1.2-0.4-1.2-1.7 0-1.9 1.3-3.5 2.8-4.3 0.1 0 0.2-0.1 0.3-0.1 0.6-0.4 1-0.9 1.1-1.5l1.4-9.2v-0.4c0-0.6-0.3-0.8-0.8-1.1 0 0 0 0-0.1 0-0.6-0.3-1-0.7-1-1.4 0-1.5 0.5-1.6 1.5-1.6h7.1c1 0 1.5 0.1 1.5 1.6 0 0.7-0.4 1.1-1 1.4-0.1 0-0.1 0-0.1 0-0.5 0.3-0.8 0.5-0.8 1.1v0.4l1.4 9.2c0.1 0.6 0.5 1.1 1.1 1.5 0.1 0 0.2 0.1 0.3 0.1z' })
                )
            );
        }
    }]);

    return IoPin;
}(React.Component);

exports.default = IoPin;
module.exports = exports['default'];