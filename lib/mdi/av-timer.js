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

var MdiAvTimer = function (_React$Component) {
    _inherits(MdiAvTimer, _React$Component);

    function MdiAvTimer() {
        _classCallCheck(this, MdiAvTimer);

        return _possibleConstructorReturn(this, (MdiAvTimer.__proto__ || Object.getPrototypeOf(MdiAvTimer)).apply(this, arguments));
    }

    _createClass(MdiAvTimer, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 11.0013,17.0025C 11.0013,17.5487 11.45,17.9975 12.0025,17.9975C 12.5487,17.9975 12.9975,17.5487 12.9975,17.0025C 12.9975,16.45 12.5487,16.0012 12.0025,16.0012C 11.45,16.0012 11.0013,16.45 11.0013,17.0025 Z M 11.0013,2.9978L 11.0013,7.0025L 12.9975,7.0025L 12.9975,5.0775C 16.3912,5.57125 18.9988,8.47125 18.9988,12.0025C 18.9988,15.8688 15.8687,18.9988 12.0025,18.9988C 8.13,18.9988 5,15.8688 5,12.0025C 5,10.3225 5.59125,8.77875 6.5825,7.5775L 12.0025,12.9975L 13.4087,11.5912L 6.61125,4.79L 6.61125,4.81C 4.41875,6.45 2.9975,9.0475 2.9975,12.0025C 2.9975,16.9675 7.02125,21.0012 12.0025,21.0012C 16.9675,21.0012 21.0013,16.9675 21.0013,12.0025C 21.0013,7.03125 16.9675,2.9978 12.0025,2.9978M 17.9975,12.0025C 17.9975,11.45 17.5487,11.0012 17.0025,11.0012C 16.45,11.0012 16.0012,11.45 16.0012,12.0025C 16.0012,12.5487 16.45,12.9975 17.0025,12.9975C 17.5487,12.9975 17.9975,12.5487 17.9975,12.0025 Z M 6.00125,12.0025C 6.00125,12.5487 6.45,12.9975 7.0025,12.9975C 7.54875,12.9975 7.9975,12.5487 7.9975,12.0025C 7.9975,11.45 7.54875,11.0012 7.0025,11.0012C 6.45,11.0012 6.00125,11.45 6.00125,12.0025 Z ' })
                )
            );
        }
    }]);

    return MdiAvTimer;
}(React.Component);

exports.default = MdiAvTimer;
module.exports = exports['default'];