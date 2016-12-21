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

var MdiWeatherSnowyRainy = function (_React$Component) {
    _inherits(MdiWeatherSnowyRainy, _React$Component);

    function MdiWeatherSnowyRainy() {
        _classCallCheck(this, MdiWeatherSnowyRainy);

        return _possibleConstructorReturn(this, (MdiWeatherSnowyRainy.__proto__ || Object.getPrototypeOf(MdiWeatherSnowyRainy)).apply(this, arguments));
    }

    _createClass(MdiWeatherSnowyRainy, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 18.5,18.6717C 18.5,19.9575 17.4926,21 16.25,21C 15.0074,21 14,19.9575 14,18.6717C 14,17.1193 16.25,14.5 16.25,14.5C 16.25,14.5 18.5,17.1193 18.5,18.6717 Z M 4,17.3605C 3.856,16.816 4.175,16.2505 4.73001,16.1065L 6.98145,15.5205L 5.32646,13.855C 4.92546,13.464 4.92546,12.806 5.32646,12.395C 5.72745,11.994 6.39601,11.994 6.7865,12.395L 8.452,14.05L 9.03794,11.7985C 9.18146,11.2435 9.74695,10.9245 10.292,11.0685C 10.847,11.2125 11.166,11.778 11.0219,12.333L 10.4154,14.5845L 12.6669,13.978C 13.2219,13.834 13.7874,14.153 13.9314,14.708C 14.0754,15.2525 13.7564,15.818 13.2014,15.962L 10.9499,16.548L 12.6049,18.2135C 13.0059,18.6045 13.0059,19.2725 12.6049,19.6735C 12.2039,20.0745 11.5354,20.0745 11.145,19.6735L 9.47946,18.0185L 8.89344,20.27C 8.75,20.825 8.18445,21.144 7.6395,21C 7.0845,20.856 6.7655,20.2905 6.90949,19.7355L 7.516,17.484L 5.26451,18.0905C 4.7095,18.2345 4.14399,17.9155 4,17.3605 Z M 1,11C 1,8.23918 3.23758,6.00099 5.99816,5.99999C 6.97772,3.65104 9.29605,2 12,2C 15.4328,2 18.2441,4.66114 18.4835,8.03304L 19,7.99999C 21.2091,7.99999 23,9.79086 23,12C 23,14.2091 21.2091,16 19,16C 18.4477,16 18,15.5523 18,15C 18,14.4477 18.4477,14 19,14C 20.1046,14 21,13.1046 21,12C 21,10.8954 20.1046,10 19,10L 17,10L 17,9C 17,6.23857 14.7614,4 12,4C 9.51284,4 7.44982,5.81599 7.06456,8.19437C 6.73372,8.06876 6.37489,8 6,8C 4.34315,8 3,9.34314 3,11C 3,11.8454 3.34965,12.609 3.90586,13.1609C 4.26569,13.5533 4.25555,14.1632 3.87544,14.5433C 3.48492,14.9339 2.85175,14.9339 2.46676,14.5378C 1.56059,13.6328 1,12.3819 1,11 Z ' })
                )
            );
        }
    }]);

    return MdiWeatherSnowyRainy;
}(React.Component);

exports.default = MdiWeatherSnowyRainy;
module.exports = exports['default'];