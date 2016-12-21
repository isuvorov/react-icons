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

var FaBug = function (_React$Component) {
    _inherits(FaBug, _React$Component);

    function FaBug() {
        _classCallCheck(this, FaBug);

        return _possibleConstructorReturn(this, (FaBug.__proto__ || Object.getPrototypeOf(FaBug)).apply(this, arguments));
    }

    _createClass(FaBug, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm37.9 21.4q0 0.6-0.4 1t-1 0.5h-5q0 3.8-1.5 6.4l4.6 4.7q0.5 0.4 0.5 1t-0.5 1q-0.4 0.4-1 0.4t-1-0.4l-4.4-4.4q-0.1 0.1-0.3 0.3t-1 0.6-1.4 0.8-1.8 0.7-2.2 0.3v-20h-2.9v20q-1.1 0-2.2-0.3t-2-0.8-1.4-0.8-1-0.8l-0.3-0.3-4.1 4.7q-0.5 0.4-1.1 0.4-0.5 0-1-0.3-0.4-0.4-0.4-1t0.3-1.1l4.5-5q-1.3-2.6-1.3-6.1h-5q-0.5 0-1-0.5t-0.4-1 0.4-1 1-0.4h5v-6.6l-3.8-3.8q-0.4-0.4-0.4-1t0.4-1 1-0.5 1 0.5l3.8 3.8h18.9l3.9-3.8q0.4-0.5 1-0.5t1 0.5 0.4 1-0.4 1l-3.9 3.8v6.6h5q0.6 0 1 0.4t0.4 1z m-10.7-12.8h-14.3q0-3 2.1-5.1t5.1-2.1 5 2.1 2.1 5.1z' })
                )
            );
        }
    }]);

    return FaBug;
}(React.Component);

exports.default = FaBug;
module.exports = exports['default'];