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

var FaBattery2 = function (_React$Component) {
    _inherits(FaBattery2, _React$Component);

    function FaBattery2() {
        _classCallCheck(this, FaBattery2);

        return _possibleConstructorReturn(this, (FaBattery2.__proto__ || Object.getPrototypeOf(FaBattery2)).apply(this, arguments));
    }

    _createClass(FaBattery2, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm4.5 26.7v-13.4h15.7v13.4h-15.7z m33.6-12.3q0.9 0 1.6 0.7t0.6 1.5v6.8q0 0.9-0.6 1.5t-1.6 0.7v2.8q0 1.2-0.8 2t-2 0.8h-32.5q-1.2 0-2-0.8t-0.8-2v-16.8q0-1.2 0.8-2t2-0.8h32.5q1.1 0 2 0.8t0.8 2v2.8z m0 9v-6.8h-2.2v-5q0-0.2-0.2-0.4t-0.4-0.2h-32.5q-0.2 0-0.4 0.2t-0.2 0.4v16.8q0 0.3 0.2 0.4t0.4 0.2h32.5q0.2 0 0.4-0.2t0.2-0.4v-5h2.2z' })
                )
            );
        }
    }]);

    return FaBattery2;
}(React.Component);

exports.default = FaBattery2;
module.exports = exports['default'];