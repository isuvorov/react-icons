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

var FaCode = function (_React$Component) {
    _inherits(FaCode, _React$Component);

    function FaCode() {
        _classCallCheck(this, FaCode);

        return _possibleConstructorReturn(this, (FaCode.__proto__ || Object.getPrototypeOf(FaCode)).apply(this, arguments));
    }

    _createClass(FaCode, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm12.8 30.4l-1 1.1q-0.2 0.2-0.5 0.2t-0.5-0.2l-9.7-9.7q-0.2-0.2-0.2-0.5t0.2-0.4l9.7-9.7q0.2-0.2 0.5-0.2t0.5 0.2l1 1q0.2 0.2 0.2 0.5t-0.2 0.5l-8.1 8.1 8.1 8.2q0.2 0.2 0.2 0.5t-0.2 0.4z m12.3-22.1l-7.8 26.8q0 0.3-0.3 0.4t-0.5 0.1l-1.3-0.4q-0.2-0.1-0.4-0.3t0-0.5l7.7-26.8q0.1-0.3 0.4-0.4t0.4-0.1l1.3 0.4q0.3 0 0.4 0.3t0.1 0.5z m13.6 13.5l-9.7 9.7q-0.2 0.2-0.4 0.2t-0.5-0.2l-1-1.1q-0.3-0.2-0.3-0.4t0.3-0.5l8.1-8.2-8.1-8.1q-0.3-0.2-0.3-0.5t0.3-0.5l1-1q0.2-0.2 0.5-0.2t0.4 0.2l9.7 9.7q0.2 0.2 0.2 0.4t-0.2 0.5z' })
                )
            );
        }
    }]);

    return FaCode;
}(React.Component);

exports.default = FaCode;
module.exports = exports['default'];