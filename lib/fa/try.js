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

var FaTry = function (_React$Component) {
    _inherits(FaTry, _React$Component);

    function FaTry() {
        _classCallCheck(this, FaTry);

        return _possibleConstructorReturn(this, (FaTry.__proto__ || Object.getPrototypeOf(FaTry)).apply(this, arguments));
    }

    _createClass(FaTry, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm32.7 18.6q0 4.2-2.1 7.8t-5.7 5.8-7.9 2.1h-3.6q-0.3 0-0.5-0.2t-0.2-0.5v-13.7l-4.8 1.5q0 0-0.2 0-0.2 0-0.4-0.1-0.3-0.2-0.3-0.6v-2.8q0-0.6 0.5-0.7l5.2-1.6v-2.1l-4.8 1.5q0 0-0.2 0-0.2 0-0.4-0.1-0.3-0.3-0.3-0.6v-2.9q0-0.5 0.5-0.7l5.2-1.6v-5.5q0-0.3 0.2-0.5t0.5-0.2h3.6q0.3 0 0.5 0.2t0.2 0.5v4l8.4-2.6q0.3-0.1 0.6 0.1t0.3 0.6v2.9q0 0.5-0.5 0.7l-8.8 2.7v2l8.4-2.6q0.3-0.1 0.6 0.2t0.3 0.5v2.9q0 0.5-0.5 0.7l-8.8 2.7v10.9q4.2-0.3 7.1-3.4t2.9-7.3q0-0.3 0.2-0.5t0.5-0.2h3.6q0.3 0 0.5 0.2t0.2 0.5z' })
                )
            );
        }
    }]);

    return FaTry;
}(React.Component);

exports.default = FaTry;
module.exports = exports['default'];