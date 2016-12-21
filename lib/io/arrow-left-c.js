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

var IoArrowLeftC = function (_React$Component) {
    _inherits(IoArrowLeftC, _React$Component);

    function IoArrowLeftC() {
        _classCallCheck(this, IoArrowLeftC);

        return _possibleConstructorReturn(this, (IoArrowLeftC.__proto__ || Object.getPrototypeOf(IoArrowLeftC)).apply(this, arguments));
    }

    _createClass(IoArrowLeftC, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm14.5 10c1-0.9 2.5-0.9 3.5 0s0.9 2.7 0 3.6l-3.9 3.9h17c1.3 0 2.4 1.1 2.4 2.5s-1.1 2.5-2.4 2.5h-17l3.8 3.9c0.9 0.9 0.9 2.7 0 3.6s-2.4 0.9-3.4 0l-7.8-8.3c-0.5-0.4-0.7-1-0.7-1.7s0.2-1.3 0.7-1.8z' })
                )
            );
        }
    }]);

    return IoArrowLeftC;
}(React.Component);

exports.default = IoArrowLeftC;
module.exports = exports['default'];