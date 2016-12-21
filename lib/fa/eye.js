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

var FaEye = function (_React$Component) {
    _inherits(FaEye, _React$Component);

    function FaEye() {
        _classCallCheck(this, FaEye);

        return _possibleConstructorReturn(this, (FaEye.__proto__ || Object.getPrototypeOf(FaEye)).apply(this, arguments));
    }

    _createClass(FaEye, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm37.1 21.4q-3.3-5.2-8.5-7.8 1.4 2.3 1.4 5 0 4.1-2.9 7t-7.1 3-7.1-3-2.9-7q0-2.7 1.4-5.1-5.1 2.7-8.5 7.9 2.9 4.6 7.4 7.3t9.7 2.7 9.7-2.7 7.4-7.3z m-16-8.5q0-0.5-0.3-0.8t-0.8-0.3q-2.8 0-4.8 2t-2 4.8q0 0.4 0.3 0.7t0.8 0.3 0.7-0.3 0.4-0.7q0-2 1.3-3.3t3.3-1.4q0.4 0 0.8-0.3t0.3-0.7z m18.9 8.5q0 0.8-0.4 1.6-3.2 5.1-8.4 8.2t-11.2 3.1-11.2-3.1-8.4-8.2q-0.4-0.8-0.4-1.6t0.4-1.5q3.2-5.1 8.4-8.2t11.2-3.1 11.1 3.1 8.5 8.2q0.4 0.8 0.4 1.5z' })
                )
            );
        }
    }]);

    return FaEye;
}(React.Component);

exports.default = FaEye;
module.exports = exports['default'];