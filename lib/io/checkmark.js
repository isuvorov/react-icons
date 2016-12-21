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

var IoCheckmark = function (_React$Component) {
    _inherits(IoCheckmark, _React$Component);

    function IoCheckmark() {
        _classCallCheck(this, IoCheckmark);

        return _possibleConstructorReturn(this, (IoCheckmark.__proto__ || Object.getPrototypeOf(IoCheckmark)).apply(this, arguments));
    }

    _createClass(IoCheckmark, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35.8 8.6c0.1 0.2 0.2 0.3 0.2 0.5s-0.1 0.3-0.2 0.4l-19.4 25c-0.2 0.2-0.4 0.5-0.7 0.5s-0.6-0.2-0.8-0.4-11-10.6-11-10.6l-0.2-0.2c-0.1-0.2-0.2-0.4-0.2-0.5s0.1-0.3 0.2-0.4l0.1-0.2c1.1-1.1 3.3-3.4 3.5-3.6s0.3-0.4 0.6-0.4 0.6 0.3 0.8 0.4 6.2 6.1 6.2 6.1l15.6-20c0.2-0.2 0.3-0.2 0.5-0.2s0.4 0.1 0.5 0.2z' })
                )
            );
        }
    }]);

    return IoCheckmark;
}(React.Component);

exports.default = IoCheckmark;
module.exports = exports['default'];