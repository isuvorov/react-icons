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

var FaHandOLeft = function (_React$Component) {
    _inherits(FaHandOLeft, _React$Component);

    function FaHandOLeft() {
        _classCallCheck(this, FaHandOLeft);

        return _possibleConstructorReturn(this, (FaHandOLeft.__proto__ || Object.getPrototypeOf(FaHandOLeft)).apply(this, arguments));
    }

    _createClass(FaHandOLeft, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30.7 31.4h0.7v-14.3h-0.7q-0.8 0-1.5-0.2t-1.4-0.9-1.1-1-1.1-1.2q0-0.1-0.1-0.1t-0.1-0.1-0.1-0.1q-1.6-1.8-2.5-3.2-0.3-0.5-0.8-1.6 0 0-0.2-0.5t-0.5-0.8-0.4-0.8-0.5-0.6-0.4-0.3q-1.6 0-2.6 0.7t-1 2.2q0 0.9 0.4 1.9t0.7 1.5 0.7 1.2 0.4 1.1h-12.9q-1.1 0-2 0.8t-0.8 2q0 1.2 0.8 2.1t2 0.8h7.4q-0.3 0.4-0.6 1.1t-0.2 1.2q0 1.5 1.2 2.7-0.4 0.7-0.4 1.5t0.4 1.6 1.1 1.2q-0.1 0.5-0.1 1.3 0 1.9 1 2.8t3.1 0.9q1.8 0 4.1-0.7t4.3-1.5 3.7-0.7z m6.4-1.4q0-0.6-0.4-1t-1-0.4-1 0.4-0.4 1 0.4 1 1 0.4 1-0.4 0.4-1z m2.9-12.9v14.3q0 1.2-0.8 2.1t-2.1 0.8h-6.4q-1.3 0-5 1.3-4.2 1.5-7 1.5-3.2 0-5.2-1.7t-1.9-4.8l0-0.2q-1.4-1.6-1.4-3.9 0-0.5 0.1-1-0.7-1.3-0.8-2.6h-3.8q-2.3 0-4-1.7t-1.7-4.1q0-2.3 1.7-4t4-1.7h8.4q-0.5-1.3-0.5-2.8 0-2.8 1.8-4.2t4.6-1.5q0.8 0 1.5 0.3t1.3 1.2 0.9 1.4 0.8 1.6 0.7 1.3q0.8 1.3 2.3 2.9 0 0.1 0.3 0.4t0.4 0.5 0.5 0.5 0.5 0.5 0.5 0.4 0.5 0.3 0.5 0.1h6.4q1.2 0 2.1 0.8t0.8 2z' })
                )
            );
        }
    }]);

    return FaHandOLeft;
}(React.Component);

exports.default = FaHandOLeft;
module.exports = exports['default'];