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

var TiWeatherWindyCloudy = function (_React$Component) {
    _inherits(TiWeatherWindyCloudy, _React$Component);

    function TiWeatherWindyCloudy() {
        _classCallCheck(this, TiWeatherWindyCloudy);

        return _possibleConstructorReturn(this, (TiWeatherWindyCloudy.__proto__ || Object.getPrototypeOf(TiWeatherWindyCloudy)).apply(this, arguments));
    }

    _createClass(TiWeatherWindyCloudy, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm8 26.3c-0.2 0-0.5-0.1-0.7-0.2-2.4-1.1-4-3.5-4-6.1 0-3.1 2.2-5.7 5-6.5 0 0 0-0.1 0-0.2 0-5.5 4.5-10 10-10 4.9 0 9.1 3.5 9.9 8.4 0.1 0.9-0.5 1.7-1.4 1.9-0.9 0.1-1.8-0.5-1.9-1.4-0.6-3.2-3.3-5.5-6.6-5.5-3.6 0-6.6 3-6.6 6.6 0 0.5 0 0.9 0.1 1.4l0.4 2.1-2.4-0.1c-1.6 0-3.1 1.5-3.1 3.3 0 1.3 0.8 2.5 2 3.1 0.8 0.3 1.2 1.3 0.8 2.2-0.2 0.6-0.9 1-1.5 1z m23.7-14.6c-1 0-1.7 0.7-1.7 1.6s0.7 1.7 1.7 1.7c0.9 0 1.6 0.7 1.6 1.7s-0.7 1.6-1.6 1.6h-16c-1 0-1.7 0.8-1.7 1.7s0.7 1.7 1.7 1.7h7.6c1 0 1.7 0.7 1.7 1.6s-0.7 1.7-1.7 1.7h-8.3c-2.8 0-5 2.2-5 5s2.2 5 5 5c0.9 0 1.7-0.7 1.7-1.7s-0.8-1.6-1.7-1.6c-0.9 0-1.7-0.8-1.7-1.7s0.8-1.7 1.7-1.7h8.3c2.8 0 5-2.2 5-5 0-0.6-0.1-1.1-0.3-1.6h3.7c2.7 0 5-2.3 5-5s-2.3-5-5-5z' })
                )
            );
        }
    }]);

    return TiWeatherWindyCloudy;
}(React.Component);

exports.default = TiWeatherWindyCloudy;
module.exports = exports['default'];