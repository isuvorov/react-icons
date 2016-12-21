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

var FaEnvira = function (_React$Component) {
    _inherits(FaEnvira, _React$Component);

    function FaEnvira() {
        _classCallCheck(this, FaEnvira);

        return _possibleConstructorReturn(this, (FaEnvira.__proto__ || Object.getPrototypeOf(FaEnvira)).apply(this, arguments));
    }

    _createClass(FaEnvira, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 18.2q-2.3-4.4-3.6-6.2-3.1-4.5-7.7-7.1-0.8-0.4-1.6-0.8-2-0.9-2.1-0.7t0.8 0.8l0.9 0.7q1.3 1 2.5 2.1t2.1 2.6 1.5 2.5 1.6 3q0.2 0.3 0.3 0.5 1 1.9 1.9 3.4t2.2 3.5 2.6 3.3 2.9 2.8 3.3 2q3.4 1.5 3.4 1.3 0.1 0-1.1-0.8-1.1-0.8-1.8-1.3-1.7-1.3-4-4.7t-4.1-6.9z m-7.7 12.1q-1.7-1.3-3-2.8t-2.2-3.2-1.6-3.4-1.3-4.2-1.1-4.6-1.4-5.6-1.7-6.5q6.1 0 11.1 0.8t8.5 2.1 6 3.2 4.2 3.8 2.4 4.5 1.3 4.4 0.2 4.4-0.2 3.9-0.4 3.2-0.3 2.4l7.2 7.3h-2.3l-6.3-6.4q-0.5 0.1-2 0.4t-2.7 0.4-3.1 0.1-3.6-0.4-3.8-1.3-3.9-2.5z' })
                )
            );
        }
    }]);

    return FaEnvira;
}(React.Component);

exports.default = FaEnvira;
module.exports = exports['default'];