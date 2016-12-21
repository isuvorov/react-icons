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

var MdiCookie = function (_React$Component) {
    _inherits(MdiCookie, _React$Component);

    function MdiCookie() {
        _classCallCheck(this, MdiCookie);

        return _possibleConstructorReturn(this, (MdiCookie.__proto__ || Object.getPrototypeOf(MdiCookie)).apply(this, arguments));
    }

    _createClass(MdiCookie, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 12,3C 7.02944,3 3,7.0294 3,12C 3,16.9706 7.02944,21 12,21C 16.9706,21 21,16.9706 21,12C 21.0001,11.4908 20.957,10.9824 20.8711,10.4805C 20.6032,10.0066 20,10 20,10L 18,10L 18,9C 18,8 17,8 17,8L 15,8L 15,7C 15,6 14,6 14,6L 13,6L 13,4C 13,3 12,3 12,3 Z M 9.5,6C 10.3284,6 11,6.6716 11,7.5C 11,8.3284 10.3284,9 9.5,9C 8.67157,9 8,8.3284 8,7.5C 8,6.6716 8.67157,6 9.5,6 Z M 6.5,10C 7.32843,10 8,10.6716 8,11.5C 8,12.3284 7.32843,13 6.5,13C 5.67157,13 5,12.3284 5,11.5C 5,10.6716 5.67157,10 6.5,10 Z M 11.5,11C 12.3284,11 13,11.6716 13,12.5C 13,13.3284 12.3284,14 11.5,14C 10.6716,14 10,13.3284 10,12.5C 10,11.6716 10.6716,11 11.5,11 Z M 16.5,13C 17.3284,13 18,13.6716 18,14.5C 18,15.3284 17.3284,16 16.5,16L 16.5,16C 15.6716,16 15,15.3284 15,14.5L 15,14.5C 15,13.6716 15.6716,13 16.5,13 Z M 11,16C 11.8284,16 12.5,16.6716 12.5,17.5C 12.5,18.3284 11.8284,19 11,19C 10.1716,19 9.5,18.3284 9.5,17.5C 9.5,16.6716 10.1716,16 11,16 Z ' })
                )
            );
        }
    }]);

    return MdiCookie;
}(React.Component);

exports.default = MdiCookie;
module.exports = exports['default'];