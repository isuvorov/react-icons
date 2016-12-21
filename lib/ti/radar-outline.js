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

var TiRadarOutline = function (_React$Component) {
    _inherits(TiRadarOutline, _React$Component);

    function TiRadarOutline() {
        _classCallCheck(this, TiRadarOutline);

        return _possibleConstructorReturn(this, (TiRadarOutline.__proto__ || Object.getPrototypeOf(TiRadarOutline)).apply(this, arguments));
    }

    _createClass(TiRadarOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 7.5c-7.8 0-14.2 6.4-14.2 14.2s6.4 14.1 14.2 14.1c7.8 0 14.2-6.3 14.2-14.1s-6.4-14.2-14.2-14.2z m0 25c-6 0-10.8-4.9-10.8-10.8s4.8-10.9 10.8-10.9c6 0 10.8 4.9 10.8 10.9s-4.8 10.8-10.8 10.8z m5.6-12.4c0.1-0.1 0.1-0.1 0.2-0.1h1.5c-0.6-2.8-2.8-5-5.6-5.6v1.4c0 1-0.8 1.7-1.7 1.7-0.8 0-1.5-0.6-1.6-1.4 0-0.1-0.1-0.2-0.1-0.3v-1.4c-2.8 0.6-5 2.8-5.6 5.6h1.5c0.1 0 0.1 0 0.2 0 0.8 0.2 1.4 0.8 1.4 1.7s-0.6 1.5-1.4 1.6c-0.1 0-0.1 0-0.2 0h-1.5c0.6 2.8 2.8 5 5.6 5.7v-1.5c0-0.1 0.1-0.2 0.1-0.3 0.1-0.8 0.8-1.4 1.6-1.4s1.5 0.7 1.6 1.4c0 0.1 0.1 0.2 0.1 0.3v1.5c2.8-0.7 5-2.9 5.6-5.7h-1.5c-0.1 0-0.1 0-0.2 0-0.8-0.1-1.4-0.8-1.4-1.6s0.6-1.5 1.4-1.7z m-0.8 4.7c-0.4 0.7-1 1.3-1.6 1.7-0.5-1.4-1.7-2.3-3.2-2.3s-2.7 1-3.2 2.3c-0.6-0.4-1.2-1-1.6-1.7 1.3-0.4 2.3-1.6 2.3-3.1 0-1.5-1-2.8-2.3-3.2 0.4-0.7 1-1.2 1.6-1.7 0.5 1.4 1.7 2.4 3.2 2.4 1.5 0 2.7-1 3.2-2.4 0.6 0.5 1.2 1 1.6 1.7-1.3 0.4-2.3 1.7-2.3 3.2 0 1.5 1 2.7 2.3 3.1z' })
                )
            );
        }
    }]);

    return TiRadarOutline;
}(React.Component);

exports.default = TiRadarOutline;
module.exports = exports['default'];