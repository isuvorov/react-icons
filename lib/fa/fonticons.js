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

var FaFonticons = function (_React$Component) {
    _inherits(FaFonticons, _React$Component);

    function FaFonticons() {
        _classCallCheck(this, FaFonticons);

        return _possibleConstructorReturn(this, (FaFonticons.__proto__ || Object.getPrototypeOf(FaFonticons)).apply(this, arguments));
    }

    _createClass(FaFonticons, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm3 2.9h34.3v34.2h-34.3v-34.2z m20.3 7.1l-0.3 0.7 1.7 1.9-0.7 2.5 0.5 0.6 2.4-1.3 2.4 1.3 0.6-0.6-0.7-2.5 1.7-1.9-0.3-0.7h-2.1l-1.2-2.1h-0.7l-1.2 2.1h-2.1z m-6 3.6q0.7 0 1 0.4t0.3 1.4l3.8-0.5q0-1.2-0.3-2t-1.2-1.3-1.5-0.6-1.9-0.1q-3 0-4.5 1.3t-1.4 4.1v1.6h-2.2v2.8h1.7q0.5 0 0.5 0.2v8.5q0 0.3-0.1 0.5t-0.4 0.1l-1.7 0.2v1.9h10v-1.9l-3.3-0.3q-0.1 0-0.2 0t-0.1-0.1 0-0.1 0-0.1 0.1-0.2v-8.7h4.2l0.9-2.8h-5.2q-0.1 0 0-0.2t0.1-0.2v-1.8q0-0.6 0-0.9t0.2-0.6 0.4-0.4 0.8-0.2z m13.6 18.5v-1.9l-1.2-0.2q-0.2 0-0.3 0t0-0.1 0-0.2 0-0.2v-11.6h-6.1l-0.5 2.2 1.8 0.5q0.5 0.2 0.5 0.6v8.3q0 0.3-0.1 0.4t-0.4 0.1l-1.6 0.2v1.9h7.9z' })
                )
            );
        }
    }]);

    return FaFonticons;
}(React.Component);

exports.default = FaFonticons;
module.exports = exports['default'];