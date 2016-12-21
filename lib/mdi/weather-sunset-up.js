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

var MdiWeatherSunsetUp = function (_React$Component) {
    _inherits(MdiWeatherSunsetUp, _React$Component);

    function MdiWeatherSunsetUp() {
        _classCallCheck(this, MdiWeatherSunsetUp);

        return _possibleConstructorReturn(this, (MdiWeatherSunsetUp.__proto__ || Object.getPrototypeOf(MdiWeatherSunsetUp)).apply(this, arguments));
    }

    _createClass(MdiWeatherSunsetUp, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 3,12L 7,12C 7,9.23858 9.23857,7 12,7C 14.7614,7 17,9.23858 17,12L 21,12C 21.5523,12 22,12.4477 22,13C 22,13.5523 21.5523,14 21,14L 3,14C 2.44772,14 2,13.5523 2,13C 2,12.4477 2.44772,12 3,12 Z M 15,12C 15,10.3432 13.6568,9.00001 12,9.00001C 10.3431,9.00001 8.99999,10.3432 8.99999,12L 15,12 Z M 12,2.00003L 14.3941,5.42011C 13.6471,5.14829 12.8409,5.00002 12,5.00002C 11.1591,5.00002 10.3528,5.14829 9.60592,5.42011L 12,2.00003 Z M 3.34495,7.00903L 7.50387,6.64576C 6.89501,7.15669 6.36347,7.7808 5.94302,8.50903C 5.52258,9.23727 5.24786,10.0097 5.10981,10.7924L 3.34495,7.00903 Z M 20.646,7.00383L 18.8812,10.7872C 18.7431,10.0044 18.4684,9.23206 18.0479,8.50383C 17.6275,7.77559 17.0959,7.15148 16.4871,6.64055L 20.646,7.00383 Z M 12.7126,16.2952L 15.8239,19.4065C 16.2144,19.797 16.2144,20.4301 15.8239,20.8207C 15.4334,21.2112 14.8002,21.2112 14.4097,20.8207L 12,18.411L 9.59031,20.8207C 9.19979,21.2112 8.56662,21.2112 8.1761,20.8207C 7.78558,20.4301 7.78557,19.797 8.1761,19.4065L 11.2874,16.2952C 11.4841,16.0984 11.7425,16.0008 12.0004,16.0023C 12.258,16.001 12.5161,16.0986 12.7126,16.2952 Z ' })
                )
            );
        }
    }]);

    return MdiWeatherSunsetUp;
}(React.Component);

exports.default = MdiWeatherSunsetUp;
module.exports = exports['default'];