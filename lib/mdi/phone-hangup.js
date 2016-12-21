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

var MdiPhoneHangup = function (_React$Component) {
    _inherits(MdiPhoneHangup, _React$Component);

    function MdiPhoneHangup() {
        _classCallCheck(this, MdiPhoneHangup);

        return _possibleConstructorReturn(this, (MdiPhoneHangup.__proto__ || Object.getPrototypeOf(MdiPhoneHangup)).apply(this, arguments));
    }

    _createClass(MdiPhoneHangup, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 11.9997,8.99817C 10.3962,8.99817 8.8497,9.25012 7.4007,9.71613L 7.3997,12.8212C 7.3997,13.2151 7.1717,13.5562 6.83954,13.7192C 5.8637,14.2101 4.9677,14.8351 4.1747,15.5712C 3.9947,15.7471 3.7487,15.8552 3.4767,15.8552C 3.20087,15.8552 2.95087,15.7432 2.7697,15.5621L 0.292699,13.0842C 0.111699,12.9042 -0.00030009,12.6542 -0.00030009,12.3782C -0.00030009,12.1011 0.111699,11.8502 0.293701,11.6691C 3.3417,8.77417 7.4637,6.99817 11.9997,6.99817C 16.5357,6.99817 20.6577,8.77417 23.7057,11.6691C 23.8877,11.8502 23.9997,12.1011 23.9997,12.3782C 23.9997,12.6542 23.8877,12.9042 23.7067,13.0842L 21.2297,15.5621C 21.0485,15.7432 20.7985,15.8552 20.5227,15.8552C 20.2507,15.8552 20.0047,15.7471 19.8247,15.5712C 19.0317,14.8351 18.1357,14.2101 17.1599,13.7192C 16.8277,13.5562 16.5997,13.2151 16.5997,12.8212L 16.5987,9.71613C 15.1497,9.25012 13.6032,8.99817 11.9997,8.99817 Z ' })
                )
            );
        }
    }]);

    return MdiPhoneHangup;
}(React.Component);

exports.default = MdiPhoneHangup;
module.exports = exports['default'];