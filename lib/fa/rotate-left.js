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

var FaRotateLeft = function (_React$Component) {
    _inherits(FaRotateLeft, _React$Component);

    function FaRotateLeft() {
        _classCallCheck(this, FaRotateLeft);

        return _possibleConstructorReturn(this, (FaRotateLeft.__proto__ || Object.getPrototypeOf(FaRotateLeft)).apply(this, arguments));
    }

    _createClass(FaRotateLeft, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm37.3 20q0 3.5-1.4 6.7t-3.6 5.4-5.5 3.7-6.7 1.3q-3.8 0-7.3-1.6t-5.8-4.5q-0.2-0.3-0.2-0.5t0.2-0.5l3.1-3.1q0.2-0.2 0.5-0.2 0.4 0.1 0.5 0.3 1.7 2.1 4 3.3t5 1.1q2.4 0 4.5-0.9t3.6-2.4 2.5-3.7 0.9-4.4-0.9-4.4-2.5-3.7-3.6-2.4-4.5-0.9q-2.1 0-4.2 0.8t-3.5 2.2l3 3.1q0.7 0.7 0.3 1.6-0.3 0.8-1.3 0.8h-10q-0.5 0-1-0.4t-0.4-1v-10q0-0.9 0.9-1.3 0.9-0.4 1.5 0.3l2.9 2.9q2.4-2.3 5.5-3.5t6.3-1.2q3.5 0 6.7 1.3t5.5 3.7 3.6 5.4 1.4 6.7z' })
                )
            );
        }
    }]);

    return FaRotateLeft;
}(React.Component);

exports.default = FaRotateLeft;
module.exports = exports['default'];