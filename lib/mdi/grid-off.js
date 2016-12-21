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

var MdiGridOff = function (_React$Component) {
    _inherits(MdiGridOff, _React$Component);

    function MdiGridOff() {
        _classCallCheck(this, MdiGridOff);

        return _possibleConstructorReturn(this, (MdiGridOff.__proto__ || Object.getPrototypeOf(MdiGridOff)).apply(this, arguments));
    }

    _createClass(MdiGridOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M -2.00669e-006,2.7685L 1.27711,1.50004L 22.5,22.7229L 21.2315,24L 19.2315,22L 4.02344,22C 2.91887,22 2.02344,21.1046 2.02344,20L 2.00113,4.76962L -2.00669e-006,2.7685 Z M 10,4L 10,7.67731L 8,5.67731L 8,4L 6.32269,4L 4.3227,2.00001L 20,2C 21.1046,2 22,2.89542 22,3.99999L 22.023,19.7003L 20.0201,17.6974L 20.0176,16L 18.3227,16L 16.3227,14L 20.0146,14L 20.0088,10L 16,10L 16,13.6773L 14,11.6773L 14,10L 12.3227,10L 10.3227,8L 14,8L 14,3.99999L 10,4 Z M 16,3.99999L 16,8L 20.0059,8L 20,3.99999L 16,3.99999 Z M 16,20L 17.2315,20L 16,18.7685L 16,20 Z M 4.00586,8.00001L 5.23151,8.00001L 4.00406,6.77256L 4.00586,8.00001 Z M 10,14L 11.2315,14L 10,12.7685L 10,14 Z M 14,20L 14,16.7685L 13.2315,16L 10,16L 10,20L 14,20 Z M 8.00001,20L 8,16L 4.01758,16L 4.02344,20L 8.00001,20 Z M 8,14L 8,10.7685L 7.23151,10L 4.00879,10L 4.01465,14L 8,14 Z ' })
                )
            );
        }
    }]);

    return MdiGridOff;
}(React.Component);

exports.default = MdiGridOff;
module.exports = exports['default'];