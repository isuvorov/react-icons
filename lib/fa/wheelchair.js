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

var FaWheelchair = function (_React$Component) {
    _inherits(FaWheelchair, _React$Component);

    function FaWheelchair() {
        _classCallCheck(this, FaWheelchair);

        return _possibleConstructorReturn(this, (FaWheelchair.__proto__ || Object.getPrototypeOf(FaWheelchair)).apply(this, arguments));
    }

    _createClass(FaWheelchair, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm24.8 26.5l2.3 4.5q-1.3 4-4.7 6.5t-7.5 2.5q-3.5 0-6.5-1.7t-4.7-4.7-1.7-6.5q0-4 2.3-7.3t6.2-4.7l0.3 2.9q-2.7 1.2-4.3 3.7t-1.6 5.4q0 4.2 2.9 7.1t7.1 2.9q2.8 0 5.1-1.4t3.7-3.9 1.1-5.3z m12.3 2.2l1.3 2.6-5.8 2.8q-0.2 0.2-0.6 0.2-0.9 0-1.3-0.8l-5.3-10.6h-10.5q-0.6 0-1-0.4t-0.5-0.9l-2.1-17.4q-0.1-0.4 0.1-0.9 0.3-1.2 1.3-1.9t2.2-0.7q1.4 0 2.5 1.1t1 2.5q0 1.5-1.1 2.6t-2.7 0.9l0.8 6.5h9.5v2.8h-9.1l0.3 2.9h10.2q0.9 0 1.3 0.8l5 10.1z' })
                )
            );
        }
    }]);

    return FaWheelchair;
}(React.Component);

exports.default = FaWheelchair;
module.exports = exports['default'];