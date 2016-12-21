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

var MdiSoccer = function (_React$Component) {
    _inherits(MdiSoccer, _React$Component);

    function MdiSoccer() {
        _classCallCheck(this, MdiSoccer);

        return _possibleConstructorReturn(this, (MdiSoccer.__proto__ || Object.getPrototypeOf(MdiSoccer)).apply(this, arguments));
    }

    _createClass(MdiSoccer, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 12,2C 6.47715,2 2,6.4772 2,12C 2,17.5228 6.47715,22 12,22C 17.5228,22 22,17.5228 22,12C 22,6.4772 17.5228,2 12,2 Z M 12,3C 13.7621,3 15.3964,3.5273 16.7813,4.4062L 16.5,5L 13,5L 12,5L 10.2813,4.1562L 10.625,3.125C 11.0754,3.0547 11.5293,3 12,3 Z M 9.53125,3.375L 9.1875,4.4062L 6.625,5.6875L 5.375,5.9375C 6.48138,4.7288 7.91705,3.8424 9.53125,3.375 Z M 13,6L 16,6L 18.6875,9.5937L 17.4375,12.1562L 14.8125,12.7812L 11.5313,8.9375L 13,6 Z M 6.15625,6.6562L 7,10L 5.78125,13.0625L 3.21875,13.9375C 3.08162,13.313 3,12.6657 3,12C 3,10.1047 3.59325,8.3567 4.59375,6.9062L 6.15625,6.6562 Z M 20.5625,9.2187C 20.8485,10.0915 21,11.0308 21,12C 21,13.443 20.6349,14.7912 20.0313,16L 19,16L 18.1563,12.6562L 19.6563,9.6562L 20.5625,9.2187 Z M 8,10L 11,10L 13.8125,13.2812L 12,16L 8.84375,16.7812L 6.53125,13.6875L 8,10 Z M 12,17L 15,19L 14.125,20.7187C 13.4423,20.8843 12.7336,21 12,21C 10.2511,21 8.63134,20.4881 7.25,19.625L 8.40625,17.9062L 12,17 Z M 19,17L 19.5,17C 18.4919,18.5075 17.0207,19.6656 15.3125,20.3437L 16,19L 19,17 Z ' })
                )
            );
        }
    }]);

    return MdiSoccer;
}(React.Component);

exports.default = MdiSoccer;
module.exports = exports['default'];