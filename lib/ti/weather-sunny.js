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

var TiWeatherSunny = function (_React$Component) {
    _inherits(TiWeatherSunny, _React$Component);

    function TiWeatherSunny() {
        _classCallCheck(this, TiWeatherSunny);

        return _possibleConstructorReturn(this, (TiWeatherSunny.__proto__ || Object.getPrototypeOf(TiWeatherSunny)).apply(this, arguments));
    }

    _createClass(TiWeatherSunny, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm21.7 6.7l-1.7 4.9-1.7-4.9c-0.3-1 0.2-2 1.1-2.3 1-0.3 2 0.2 2.3 1.1 0.1 0.4 0.1 0.8 0 1.2z m-15 11.6l4.9 1.7-4.9 1.7c-1 0.3-2-0.2-2.3-1.1-0.3-1 0.2-2 1.1-2.3 0.4-0.1 0.8-0.1 1.2 0z m11.6 15l1.7-4.9 1.7 4.9c0.3 1-0.2 2-1.1 2.3-1 0.3-2-0.2-2.3-1.1-0.1-0.4-0.1-0.8 0-1.2z m15-11.6l-4.9-1.7 4.9-1.7c1-0.3 2 0.2 2.3 1.1 0.3 0.9-0.2 1.9-1.1 2.3-0.4 0.1-0.8 0.1-1.2 0z m-21.5-12.3l2.2 4.6-4.6-2.2c-0.9-0.5-1.2-1.5-0.8-2.4 0.4-0.9 1.5-1.2 2.3-0.8 0.4 0.2 0.7 0.5 0.9 0.8z m-2.4 18.8l4.6-2.2-2.2 4.6c-0.5 0.9-1.5 1.2-2.4 0.8-0.9-0.4-1.2-1.5-0.8-2.3 0.2-0.4 0.5-0.7 0.8-0.9z m18.8 2.4l-2.2-4.6 4.6 2.2c0.9 0.5 1.2 1.5 0.8 2.4-0.4 0.9-1.5 1.2-2.3 0.8-0.4-0.2-0.7-0.5-0.9-0.8z m2.4-18.9l-4.6 2.3 2.2-4.6c0.5-0.9 1.5-1.2 2.4-0.8 0.9 0.4 1.2 1.5 0.8 2.3-0.2 0.4-0.5 0.7-0.8 0.8z m-10.6 15.8c-4.1 0-7.5-3.4-7.5-7.5s3.4-7.5 7.5-7.5 7.5 3.4 7.5 7.5-3.4 7.5-7.5 7.5z m0-11.7c-2.3 0-4.2 1.9-4.2 4.2s1.9 4.2 4.2 4.2 4.2-1.9 4.2-4.2-1.9-4.2-4.2-4.2z' })
                )
            );
        }
    }]);

    return TiWeatherSunny;
}(React.Component);

exports.default = TiWeatherSunny;
module.exports = exports['default'];