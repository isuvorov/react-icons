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

var FaSignIn = function (_React$Component) {
    _inherits(FaSignIn, _React$Component);

    function FaSignIn() {
        _classCallCheck(this, FaSignIn);

        return _possibleConstructorReturn(this, (FaSignIn.__proto__ || Object.getPrototypeOf(FaSignIn)).apply(this, arguments));
    }

    _createClass(FaSignIn, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm29.4 20q0 0.6-0.4 1l-12.1 12.1q-0.5 0.5-1 0.5t-1-0.5-0.5-1v-6.4h-10q-0.5 0-1-0.4t-0.4-1v-8.6q0-0.6 0.4-1t1-0.4h10v-6.4q0-0.6 0.5-1t1-0.5 1 0.5l12.1 12.1q0.4 0.4 0.4 1z m7.9-7.9v15.8q0 2.6-1.9 4.5t-4.5 1.9h-7.2q-0.3 0-0.5-0.2t-0.2-0.5q0-0.1 0-0.5t0-0.6 0-0.5 0.3-0.4 0.4-0.2h7.2q1.4 0 2.5-1t1-2.5v-15.8q0-1.4-1-2.5t-2.5-1h-7l-0.3-0.1-0.2 0-0.2-0.1-0.2-0.2 0-0.3q0-0.1 0-0.5t0-0.6 0-0.5 0.3-0.4 0.4-0.2h7.2q2.6 0 4.5 1.9t1.9 4.5z' })
                )
            );
        }
    }]);

    return FaSignIn;
}(React.Component);

exports.default = FaSignIn;
module.exports = exports['default'];