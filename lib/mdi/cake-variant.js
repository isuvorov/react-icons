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

var MdiCakeVariant = function (_React$Component) {
    _inherits(MdiCakeVariant, _React$Component);

    function MdiCakeVariant() {
        _classCallCheck(this, MdiCakeVariant);

        return _possibleConstructorReturn(this, (MdiCakeVariant.__proto__ || Object.getPrototypeOf(MdiCakeVariant)).apply(this, arguments));
    }

    _createClass(MdiCakeVariant, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 12.0025,6.00125C 13.11,6.00125 13.9987,5.0975 13.9987,3.99875C 13.9987,3.61875 13.9012,3.27124 13.7113,2.96875L 12.0025,0L 10.2875,2.96875C 10.0975,3.27124 10,3.61875 10,3.99875C 10,5.0975 10.8988,6.00125 12.0025,6.00125 Z M 16.6012,15.9913L 15.5325,14.9212L 14.4487,15.9913C 13.15,17.29 10.8687,17.3 9.56,15.9913L 8.49125,14.9212L 7.4025,15.9913C 6.7475,16.64 5.87875,17.0025 4.96125,17.0025C 4.22875,17.0025 3.56,16.7675 2.9975,16.3913L 2.9975,21.0012C 2.9975,21.5475 3.4525,22.0025 3.99875,22.0025L 20,22.0025C 20.5518,22.0025 21.0013,21.5475 21.0013,21.0012L 21.0013,16.3913C 20.44,16.7675 19.77,17.0025 19.0375,17.0025C 18.12,17.0025 17.2512,16.64 16.6012,15.9913 Z M 17.9975,8.99875L 12.9975,8.99875L 12.9975,7.0025L 11.0013,7.0025L 11.0013,8.99875L 6.00125,8.99875C 4.34125,8.99875 2.9975,10.3412 2.9975,12.0025L 2.9975,13.54C 2.9975,14.6188 3.88125,15.4975 4.96125,15.4975C 5.47875,15.4975 5.98125,15.2975 6.3375,14.9313L 8.48125,12.7975L 10.61,14.9313C 11.3475,15.6687 12.6412,15.6687 13.3788,14.9313L 15.5175,12.7975L 17.6513,14.9313C 18.0175,15.2975 18.5112,15.4975 19.0287,15.4975C 20.1123,15.4975 20.9912,14.6188 20.9912,13.54L 20.9912,12.0025C 21.0013,10.3412 19.6587,8.99875 17.9975,8.99875 Z ' })
                )
            );
        }
    }]);

    return MdiCakeVariant;
}(React.Component);

exports.default = MdiCakeVariant;
module.exports = exports['default'];