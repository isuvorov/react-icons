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

var FaExclamation = function (_React$Component) {
    _inherits(FaExclamation, _React$Component);

    function FaExclamation() {
        _classCallCheck(this, FaExclamation);

        return _possibleConstructorReturn(this, (FaExclamation.__proto__ || Object.getPrototypeOf(FaExclamation)).apply(this, arguments));
    }

    _createClass(FaExclamation, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm24.4 27.9v5q0 0.5-0.4 1t-1 0.4h-5.7q-0.6 0-1-0.4t-0.4-1v-5q0-0.6 0.4-1t1-0.5h5.7q0.6 0 1 0.5t0.4 1z m0.7-23.6l-0.6 17.1q0 0.6-0.5 1t-1 0.5h-5.7q-0.6 0-1-0.5t-0.5-1l-0.6-17.1q0-0.6 0.4-1t1-0.4h7.1q0.6 0 1 0.4t0.4 1z' })
                )
            );
        }
    }]);

    return FaExclamation;
}(React.Component);

exports.default = FaExclamation;
module.exports = exports['default'];