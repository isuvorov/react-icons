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

var MdiSale = function (_React$Component) {
    _inherits(MdiSale, _React$Component);

    function MdiSale() {
        _classCallCheck(this, MdiSale);

        return _possibleConstructorReturn(this, (MdiSale.__proto__ || Object.getPrototypeOf(MdiSale)).apply(this, arguments));
    }

    _createClass(MdiSale, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 18.6504,2.84663L 19.2626,6.71221L 22.7677,8.49813L 20.9909,11.9853L 22.7768,15.4904L 19.2377,17.2936L 18.6265,21.1526L 14.7411,20.5372L 11.9737,23.3047L 9.19205,20.523L 5.32646,21.1353L 4.71108,17.2499L 1.22388,15.4731L 3.0098,11.968L 1.23299,8.48081L 4.74402,6.69186L 5.3503,2.86394L 9.21589,3.47619L 11.9975,0.694563L 14.765,3.46202L 18.6504,2.84663 Z M 9.5,7C 8.67157,7 8,7.67158 8,8.5C 8,9.32843 8.67157,10 9.5,10C 10.3284,10 11,9.32843 11,8.5C 11,7.67158 10.3284,7 9.5,7 Z M 14.5,14C 13.6716,14 13,14.6716 13,15.5C 13,16.3284 13.6716,17 14.5,17C 15.3284,17 16,16.3284 16,15.5C 16,14.6716 15.3284,14 14.5,14 Z M 8.41421,17L 17,8.41422L 15.5858,7L 7,15.5858L 8.41421,17 Z ' })
                )
            );
        }
    }]);

    return MdiSale;
}(React.Component);

exports.default = MdiSale;
module.exports = exports['default'];