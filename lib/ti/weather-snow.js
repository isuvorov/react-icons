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

var TiWeatherSnow = function (_React$Component) {
    _inherits(TiWeatherSnow, _React$Component);

    function TiWeatherSnow() {
        _classCallCheck(this, TiWeatherSnow);

        return _possibleConstructorReturn(this, (TiWeatherSnow.__proto__ || Object.getPrototypeOf(TiWeatherSnow)).apply(this, arguments));
    }

    _createClass(TiWeatherSnow, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm34.2 25.2l-4.1-0.8 2.4-0.7c0.9-0.2 1.5-1.1 1.2-2-0.2-0.9-1.1-1.4-2-1.2l-2.5 0.7c0-0.4 0.1-0.8 0.1-1.2s-0.1-0.8-0.1-1.2l2.5 0.7c0.1 0 0.3 0.1 0.4 0.1 0.8 0 1.4-0.5 1.6-1.3 0.3-0.9-0.3-1.8-1.2-2l-2.4-0.7 4.1-0.8c0.3-0.1 0.7-0.3 0.9-0.6 0.7-0.7 0.6-1.8-0.1-2.5s-1.9-0.5-2.5 0.2l-2.8 3.1 0.7-2.5c0.2-0.8-0.3-1.8-1.2-2-0.9-0.2-1.8 0.3-2 1.2l-0.7 2.5c-0.6-0.5-1.3-0.9-2-1.2l1.8-1.8c0.6-0.7 0.6-1.7 0-2.4s-1.7-0.6-2.4 0l-1.8 1.8 1.4-3.9c0.1-0.4 0.1-0.8 0-1.1-0.4-1-1.3-1.5-2.3-1.2-0.9 0.4-1.4 1.3-1.1 2.3l1.3 3.9-1.8-1.8c-0.6-0.6-1.7-0.6-2.3 0s-0.7 1.7 0 2.4l1.8 1.8c-0.7 0.3-1.4 0.7-2 1.2l-0.7-2.5c-0.2-0.9-1.2-1.4-2-1.2-0.9 0.2-1.5 1.2-1.2 2l0.6 2.5-2.7-3.1c-0.3-0.3-0.6-0.5-1-0.6-0.9-0.2-1.9 0.5-2.1 1.4s0.5 1.9 1.4 2.1l4.1 0.8-2.5 0.7c-0.9 0.2-1.4 1.1-1.1 2 0.1 0.8 0.8 1.3 1.6 1.3 0.1 0 0.2-0.1 0.4-0.1l2.5-0.7c-0.1 0.4-0.1 0.8-0.1 1.2 0 0.4 0 0.8 0.1 1.2l-2.5-0.7c-0.9-0.2-1.8 0.3-2.1 1.2-0.2 0.9 0.3 1.8 1.2 2l2.5 0.7-4.1 0.8c-0.4 0.1-0.7 0.3-1 0.6-0.6 0.7-0.5 1.8 0.2 2.5 0.7 0.6 1.8 0.5 2.5-0.2l2.7-3.1-0.6 2.5c-0.3 0.8 0.3 1.8 1.2 2 0.1 0 0.3 0.1 0.4 0.1 0.7 0 1.4-0.5 1.6-1.3l0.7-2.5c0.6 0.5 1.3 0.9 2 1.2l-1.8 1.8c-0.7 0.7-0.7 1.7 0 2.4s1.7 0.6 2.3 0l1.2-1.2h0.4l-1.1 3.3c-0.1 0.4-0.1 0.8 0 1.1 0.3 1 1.3 1.5 2.2 1.2 1-0.4 1.5-1.3 1.2-2.3l-1.2-3.3h0.5l1.1 1.2c0.4 0.3 0.8 0.5 1.2 0.5s0.9-0.2 1.2-0.5c0.6-0.7 0.6-1.7 0-2.4l-1.8-1.8c0.7-0.3 1.4-0.7 2-1.2l0.7 2.5c0.2 0.8 0.8 1.3 1.6 1.3 0.1 0 0.3-0.1 0.4-0.1 0.9-0.2 1.4-1.2 1.2-2l-0.7-2.5 2.8 3.1c0.2 0.3 0.6 0.5 1 0.6 0.9 0.2 1.8-0.5 2-1.4 0.2-1-0.4-1.9-1.3-2.1z m-12.4-1c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2 4.2 1.9 4.2 4.2-1.9 4.2-4.2 4.2z' })
                )
            );
        }
    }]);

    return TiWeatherSnow;
}(React.Component);

exports.default = TiWeatherSnow;
module.exports = exports['default'];