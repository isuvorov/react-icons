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

var FaLongArrowUp = function (_React$Component) {
    _inherits(FaLongArrowUp, _React$Component);

    function FaLongArrowUp() {
        _classCallCheck(this, FaLongArrowUp);

        return _possibleConstructorReturn(this, (FaLongArrowUp.__proto__ || Object.getPrototypeOf(FaLongArrowUp)).apply(this, arguments));
    }

    _createClass(FaLongArrowUp, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.6 11q-0.2 0.4-0.7 0.4h-5v27.9q0 0.3-0.2 0.5t-0.5 0.2h-4.3q-0.3 0-0.5-0.2t-0.2-0.5v-27.9h-5q-0.5 0-0.6-0.4t0.1-0.8l7.8-8.6q0.2-0.2 0.5-0.2 0.3 0 0.5 0.2l8 8.6q0.3 0.4 0.1 0.8z' })
                )
            );
        }
    }]);

    return FaLongArrowUp;
}(React.Component);

exports.default = FaLongArrowUp;
module.exports = exports['default'];