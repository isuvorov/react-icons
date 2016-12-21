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

var FaGavel = function (_React$Component) {
    _inherits(FaGavel, _React$Component);

    function FaGavel() {
        _classCallCheck(this, FaGavel);

        return _possibleConstructorReturn(this, (FaGavel.__proto__ || Object.getPrototypeOf(FaGavel)).apply(this, arguments));
    }

    _createClass(FaGavel, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm39.5 34.3q0 1.2-0.8 2l-2.4 2.4q-0.9 0.8-2 0.8-1.2 0-2-0.8l-8.1-8.1q-0.9-0.8-0.9-2 0-1.2 1-2.2l-5.7-5.7-2.8 2.8q-0.4 0.3-0.8 0.3t-0.8-0.3q0.1 0.1 0.3 0.3t0.3 0.3 0.2 0.2 0.2 0.3 0.2 0.3 0.1 0.4 0 0.4q0 0.9-0.6 1.5-0.1 0.1-0.4 0.4t-0.4 0.5-0.4 0.4-0.5 0.3-0.5 0.2-0.6 0.1q-0.8 0-1.5-0.6l-9.1-9.1q-0.6-0.6-0.6-1.5 0-0.3 0.1-0.6t0.2-0.5 0.3-0.5 0.4-0.4 0.5-0.4 0.4-0.4q0.6-0.6 1.5-0.6 0.2 0 0.4 0t0.4 0.1 0.3 0.2 0.3 0.2 0.2 0.2 0.3 0.3 0.3 0.3q-0.3-0.4-0.3-0.8t0.3-0.8l7.7-7.7q0.4-0.3 0.8-0.3t0.8 0.3q-0.1-0.1-0.3-0.3t-0.3-0.3-0.2-0.2-0.2-0.3-0.2-0.3-0.1-0.4 0-0.4q0-0.9 0.6-1.5 0.1-0.1 0.4-0.4t0.4-0.5 0.4-0.4 0.5-0.3 0.5-0.2 0.6-0.1q0.8 0 1.5 0.6l9.1 9.1q0.6 0.6 0.6 1.5 0 0.3-0.1 0.6t-0.2 0.5-0.3 0.5-0.4 0.4-0.5 0.4-0.4 0.4q-0.6 0.6-1.5 0.6-0.2 0-0.4 0t-0.4-0.1-0.3-0.2-0.3-0.2-0.2-0.2-0.3-0.3-0.3-0.3q0.3 0.4 0.3 0.8t-0.3 0.8l-2.8 2.8 5.7 5.7q1-1 2.2-1 1.1 0 2 0.9l8.1 8.1q0.8 0.8 0.8 2z' })
                )
            );
        }
    }]);

    return FaGavel;
}(React.Component);

exports.default = FaGavel;
module.exports = exports['default'];