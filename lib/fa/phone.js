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

var FaPhone = function (_React$Component) {
    _inherits(FaPhone, _React$Component);

    function FaPhone() {
        _classCallCheck(this, FaPhone);

        return _possibleConstructorReturn(this, (FaPhone.__proto__ || Object.getPrototypeOf(FaPhone)).apply(this, arguments));
    }

    _createClass(FaPhone, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35.9 27.7q0 0.6-0.2 1.6t-0.5 1.5q-0.4 1.1-2.7 2.3-2.1 1.2-4.1 1.2-0.6 0-1.2-0.1t-1.3-0.3-1.1-0.3-1.2-0.5-1.1-0.4q-2.2-0.7-3.9-1.8-2.8-1.8-5.9-4.8t-4.8-5.9q-1.1-1.7-1.9-3.9 0-0.2-0.4-1.1t-0.4-1.3-0.3-1-0.3-1.3-0.1-1.2q0-2 1.1-4.1 1.3-2.3 2.4-2.8 0.6-0.2 1.5-0.4t1.6-0.2q0.3 0 0.5 0 0.4 0.2 1.2 1.7 0.2 0.4 0.6 1.2t0.8 1.4 0.7 1.2q0.1 0.1 0.4 0.6t0.5 0.8 0.1 0.6q0 0.5-0.6 1.1t-1.4 1.3-1.4 1.1-0.6 1.1q0 0.2 0.1 0.5t0.2 0.4 0.3 0.6 0.3 0.4q1.7 3.1 3.8 5.2t5.3 3.9q0 0 0.4 0.3t0.6 0.3 0.4 0.2 0.5 0.1q0.4 0 1-0.6t1.2-1.4 1.3-1.4 1.1-0.6q0.3 0 0.6 0.1t0.8 0.5 0.6 0.4q0.5 0.3 1.1 0.7t1.5 0.8 1.2 0.6q1.5 0.8 1.7 1.2 0 0.2 0 0.5z' })
                )
            );
        }
    }]);

    return FaPhone;
}(React.Component);

exports.default = FaPhone;
module.exports = exports['default'];