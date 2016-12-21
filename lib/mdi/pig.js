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

var MdiPig = function (_React$Component) {
    _inherits(MdiPig, _React$Component);

    function MdiPig() {
        _classCallCheck(this, MdiPig);

        return _possibleConstructorReturn(this, (MdiPig.__proto__ || Object.getPrototypeOf(MdiPig)).apply(this, arguments));
    }

    _createClass(MdiPig, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 9.5,9C 8.67157,9 8,9.67157 8,10.5C 8,11.3284 8.67157,12 9.5,12C 10.3284,12 11,11.3284 11,10.5C 11,9.67157 10.3284,9 9.5,9 Z M 14.5,9.00001C 13.6716,9.00001 13,9.67158 13,10.5C 13,11.3284 13.6716,12 14.5,12C 15.3284,12 16,11.3284 16,10.5C 16,9.67158 15.3284,9.00001 14.5,9.00001 Z M 12,4.00001L 12.683,4.02554C 13.6245,3.2413 14.8186,2.59471 15.7235,2.35223C 17.5907,1.85194 20.8837,2.22611 21.3126,3.8265C 21.6215,4.97952 20.5999,6.45445 19.0269,7.37605C 20.2615,8.91669 21,10.8721 21,13C 21,17.9706 16.9706,22 12,22C 7.02943,22 3,17.9706 3,13C 3,10.8721 3.73847,8.91669 4.97312,7.37605C 3.40005,6.45445 2.37846,4.97952 2.68741,3.8265C 3.11623,2.22611 6.40932,1.85193 8.27645,2.35223C 9.18141,2.59471 10.3755,3.2413 11.317,4.02554L 12,4.00001 Z M 9.99999,16C 10.5523,16 11,16.4477 11,17C 11,17.5523 10.5523,18 9.99999,18C 9.44771,18 9,17.5523 9,17C 9,16.4477 9.44771,16 9.99999,16 Z M 14,16C 14.5523,16 15,16.4477 15,17C 15,17.5523 14.5523,18 14,18C 13.4477,18 13,17.5523 13,17C 13,16.4477 13.4477,16 14,16 Z M 12,13C 9.23857,13 6.99999,15.3432 6.99999,17C 6.99999,18.6569 9.23857,20 12,20C 14.7614,20 17,18.6569 17,17C 17,15.3432 14.7614,13 12,13 Z M 7.75882,4.28407C 7.31426,4.16496 4.58518,4.35295 4.58518,4.35295C 4.58518,4.35295 6.79662,6.09681 7.24118,6.21593C 7.68573,6.33504 9.77187,6.43052 9.91481,5.89705C 10.0578,5.36358 8.20337,4.40319 7.75882,4.28407 Z M 16.2412,4.28407C 15.7966,4.40319 13.9422,5.36358 14.0852,5.89705C 14.2281,6.43052 16.3143,6.33504 16.7588,6.21593C 17.2034,6.09681 19.4148,4.35295 19.4148,4.35295C 19.4148,4.35295 16.6857,4.16496 16.2412,4.28407 Z ' })
                )
            );
        }
    }]);

    return MdiPig;
}(React.Component);

exports.default = MdiPig;
module.exports = exports['default'];