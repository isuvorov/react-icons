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

var MdiAppleFinder = function (_React$Component) {
    _inherits(MdiAppleFinder, _React$Component);

    function MdiAppleFinder() {
        _classCallCheck(this, MdiAppleFinder);

        return _possibleConstructorReturn(this, (MdiAppleFinder.__proto__ || Object.getPrototypeOf(MdiAppleFinder)).apply(this, arguments));
    }

    _createClass(MdiAppleFinder, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 4,4L 11.8873,4C 12.457,2.9074 13.1329,1.87689 13.9327,1.00379L 15.0391,2.11012C 14.6138,2.70348 14.2313,3.34043 13.8873,4L 20,4C 21.1046,4 22,4.89543 22,6L 22,19C 22,20.1046 21.1046,21 20,21L 14.9255,21L 15.261,22.2293L 13.4272,22.9545L 12.9269,21L 4,21C 2.89543,21 2,20.1046 2,19L 2,6C 2,4.89543 2.89543,4 4,4 Z M 4,6.00001L 4,19L 12.5403,19C 12.4879,18.6709 12.4402,18.3359 12.3988,17.9966C 12.2666,17.9989 12.1336,18 12,18C 9.24719,18 6.78304,17.5194 5.13216,16.7621L 6.04254,15.1234C 7.00329,15.6407 9.17203,16 12,16C 12.0797,16 12.1588,15.9997 12.2375,15.9992C 12.2133,15.3318 12.2213,14.6614 12.2708,14L 8.99999,14C 8.99999,14 9.40322,9.96775 10.9778,6.00001L 4,6.00001 Z M 20,19L 20,6.00001L 12.9778,6.00001C 12.0974,8.21856 11.5832,10.4573 11.3009,12L 14.1722,12C 13.9778,13.2797 13.9661,14.6213 14.0641,15.9306C 15.8749,15.8023 17.2467,15.5061 17.9575,15.1234L 18.8678,16.7621C 17.6912,17.3018 16.1014,17.701 14.2884,17.8859C 14.3462,18.2655 14.4107,18.6377 14.4797,19L 20,19 Z M 6,8L 8,8L 8,11L 6,11L 6,8 Z M 16,8L 18,8L 18,11L 16,11L 16,8 Z ' })
                )
            );
        }
    }]);

    return MdiAppleFinder;
}(React.Component);

exports.default = MdiAppleFinder;
module.exports = exports['default'];