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

var MdiWeatherPouring = function (_React$Component) {
    _inherits(MdiWeatherPouring, _React$Component);

    function MdiWeatherPouring() {
        _classCallCheck(this, MdiWeatherPouring);

        return _possibleConstructorReturn(this, (MdiWeatherPouring.__proto__ || Object.getPrototypeOf(MdiWeatherPouring)).apply(this, arguments));
    }

    _createClass(MdiWeatherPouring, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 9,12C 9.53347,12.1429 9.85005,12.6913 9.70711,13.2247L 8.41301,18.0544C 8.27007,18.5878 7.72173,18.9044 7.18826,18.7615C 6.6548,18.6185 6.33822,18.0702 6.48116,17.5367L 7.77525,12.7071C 7.9182,12.1736 8.46653,11.857 9,12 Z M 13,12C 13.5334,12.143 13.85,12.6913 13.7071,13.2248L 11.6365,20.9522C 11.4936,21.4856 10.9452,21.8022 10.4118,21.6593C 9.8783,21.5163 9.56172,20.968 9.70466,20.4345L 11.7752,12.7071C 11.9182,12.1737 12.4665,11.8571 13,12 Z M 17,12C 17.5335,12.1429 17.8501,12.6913 17.7071,13.2248L 16.413,18.0544C 16.2701,18.5878 15.7217,18.9044 15.1883,18.7615C 14.6548,18.6185 14.3382,18.0702 14.4812,17.5367L 15.7753,12.7071C 15.9182,12.1736 16.4665,11.8571 17,12 Z M 17,10L 17,9C 17,6.23858 14.7614,4 12,4C 9.51284,4 7.44982,5.816 7.06456,8.19437C 6.73372,8.06877 6.37489,8 6,8C 4.34315,8 3,9.34315 3,11C 3,12.1096 3.60242,13.0785 4.49804,13.5975L 4.50187,13.5909C 4.98016,13.867 5.14403,14.4786 4.86789,14.9569C 4.59208,15.4346 3.98162,15.5987 3.50358,15.3239L 3.49958,15.3308C 2.00531,14.4663 1,12.8505 1,11C 1,8.23919 3.23758,6.00099 5.99816,6C 6.97773,3.65105 9.29605,2.00001 12,2.00001C 15.4328,2.00001 18.2441,4.66115 18.4835,8.03304L 19,8C 21.2091,8 23,9.79086 23,12C 23,13.4804 22.1957,14.773 21.0003,15.4647L 20.9964,15.4579C 20.5184,15.7327 19.9078,15.5687 19.632,15.0909C 19.3559,14.6126 19.5197,14.001 19.998,13.7249L 20.0018,13.7314C 20.5986,13.3853 21,12.7396 21,12C 21,10.8954 20.1046,10 19,10L 17,10 Z ' })
                )
            );
        }
    }]);

    return MdiWeatherPouring;
}(React.Component);

exports.default = MdiWeatherPouring;
module.exports = exports['default'];