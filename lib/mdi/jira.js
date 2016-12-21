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

var MdiJira = function (_React$Component) {
    _inherits(MdiJira, _React$Component);

    function MdiJira() {
        _classCallCheck(this, MdiJira);

        return _possibleConstructorReturn(this, (MdiJira.__proto__ || Object.getPrototypeOf(MdiJira)).apply(this, arguments));
    }

    _createClass(MdiJira, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 12,1.99999C 12.872,1.99999 13.579,2.70691 13.579,3.57894C 13.579,4.45097 12.872,5.15789 12,5.15789C 11.128,5.15789 10.4211,4.45097 10.4211,3.57894C 10.4211,2.70691 11.128,1.99999 12,1.99999 Z M 7.78948,3.05264C 8.66151,3.05264 9.36842,3.75955 9.36842,4.63158C 9.36842,5.50361 8.66151,6.21053 7.78948,6.21053C 6.91745,6.21053 6.21053,5.50361 6.21053,4.63158C 6.21053,3.75955 6.91744,3.05264 7.78948,3.05264 Z M 16.2105,3.05263C 17.0826,3.05263 17.7895,3.75955 17.7895,4.63158C 17.7895,5.50361 17.0826,6.21053 16.2105,6.21053C 15.3385,6.21053 14.6316,5.50361 14.6316,4.63158C 14.6316,3.75955 15.3385,3.05263 16.2105,3.05263 Z M 11.8026,10.9474C 9.69738,8.84211 10.2237,7.78948 10.2237,7.78948L 13.9079,7.78947C 13.9079,9.36842 11.8026,10.9474 11.8026,10.9474 Z M 13.9079,21.4737C 13.9079,21.4737 13.9079,19.3684 9.69738,15.1579C 5.48686,10.9474 4.96054,9.89473 4.43422,6.73684C 4.43422,6.73685 4.82896,6.21053 5.35527,6.73685C 5.88159,7.26317 7.0658,7.65789 8.11843,7.6579C 8.11843,7.6579 9.17107,10.9474 12.0658,13.0526C 12.0658,13.0526 15.8816,9.10527 15.8816,7.52632C 15.8816,7.52632 17.0658,7.78947 18.5132,6.73685C 18.5132,6.73685 19.5005,6.2146 19.5658,6.73685C 19.6974,7.78947 18.6447,11.4737 14.3026,15.1579C 14.3026,15.1579 17.0658,18.3158 16.8026,21.4737L 13.9079,21.4737 Z M 9.17107,16.2105L 11.4079,18.7105C 10.3553,19.7632 10.2237,22 10.2237,22L 7.06581,22C 7.59212,17.7895 9.17107,16.2105 9.17107,16.2105 Z ' })
                )
            );
        }
    }]);

    return MdiJira;
}(React.Component);

exports.default = MdiJira;
module.exports = exports['default'];