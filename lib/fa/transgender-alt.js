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

var FaTransgenderAlt = function (_React$Component) {
    _inherits(FaTransgenderAlt, _React$Component);

    function FaTransgenderAlt() {
        _classCallCheck(this, FaTransgenderAlt);

        return _possibleConstructorReturn(this, (FaTransgenderAlt.__proto__ || Object.getPrototypeOf(FaTransgenderAlt)).apply(this, arguments));
    }

    _createClass(FaTransgenderAlt, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30.1 0.7q0-0.3 0.2-0.5t0.5-0.2h6.4q0.6 0 1 0.4t0.4 1v6.5q0 0.3-0.2 0.5t-0.5 0.2h-1.4q-0.3 0-0.5-0.2t-0.2-0.5v-3l-5.7 5.7q2.8 3.5 2.8 8 0 4.9-3.3 8.6t-8.1 4.1v3h2.1q0.4 0 0.6 0.2t0.2 0.5v1.4q0 0.3-0.2 0.5t-0.6 0.2h-2.1v2.2q0 0.3-0.2 0.5t-0.5 0.2h-1.4q-0.4 0-0.6-0.2t-0.2-0.5v-2.2h-2.1q-0.3 0-0.5-0.2t-0.2-0.5v-1.4q0-0.3 0.2-0.5t0.5-0.2h2.1v-3q-4.8-0.5-8.1-4.1t-3.3-8.6q0-4.5 2.8-8l-1.1-1.2-2.3 2.5q-0.2 0.2-0.5 0.2t-0.5-0.2l-1.1-1q-0.2-0.1-0.2-0.4t0.2-0.6l2.3-2.5-2.4-2.5v3q0 0.3-0.2 0.5t-0.6 0.2h-1.4q-0.3 0-0.5-0.2t-0.2-0.5v-6.5q0-0.6 0.4-1t1-0.4h6.5q0.3 0 0.5 0.2t0.2 0.5v1.4q0 0.4-0.2 0.6t-0.5 0.2h-3l2.4 2.3 1.9-2.1q0.2-0.2 0.5-0.2t0.5 0.2l1.1 1q0.2 0.1 0.2 0.4t-0.2 0.6l-2 2.2 1.3 1.2q3.5-2.8 8-2.8t8 2.8l5.7-5.6h-3q-0.3 0-0.5-0.2t-0.2-0.6v-1.4z m-10 27.9q4.1 0 7-3t3-7-3-7.1-7-2.9-7.1 2.9-2.9 7.1 2.9 7 7.1 3z' })
                )
            );
        }
    }]);

    return FaTransgenderAlt;
}(React.Component);

exports.default = FaTransgenderAlt;
module.exports = exports['default'];