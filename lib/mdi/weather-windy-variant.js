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

var MdiWeatherWindyVariant = function (_React$Component) {
    _inherits(MdiWeatherWindyVariant, _React$Component);

    function MdiWeatherWindyVariant() {
        _classCallCheck(this, MdiWeatherWindyVariant);

        return _possibleConstructorReturn(this, (MdiWeatherWindyVariant.__proto__ || Object.getPrototypeOf(MdiWeatherWindyVariant)).apply(this, arguments));
    }

    _createClass(MdiWeatherWindyVariant, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 6,6L 6.69059,6.0594C 7.32367,3.72057 9.4609,2.00001 12,2.00001C 15.0376,2.00001 17.5,4.46244 17.5,7.5L 17.4182,8.45043C 17.8774,8.16491 18.4194,8 19,8C 20.6569,8 22,9.34315 22,11C 22,12.6569 20.6569,14 19,14L 6,14C 3.79086,14 2,12.2091 2,10C 2,7.79086 3.79086,6 6,6 Z M 5.99999,8.00002C 4.89543,8.00002 4,8.89545 4,10C 4,11.1046 4.89543,12 5.99999,12L 19,12C 19.5523,12 20,11.5523 20,11C 20,10.4477 19.5523,10 19,10L 15.5,10L 15.5,7.50001C 15.5,5.56702 13.933,4.00001 12,4.00001C 10.067,4.00001 8.49999,5.56702 8.49999,7.50001L 8.5,8.00001L 5.99999,8.00002 Z M 18,18L 4,18C 3.44772,18 3,17.5523 3,17C 3,16.4477 3.44771,16 4,16L 18,16C 19.6568,16 21,17.3431 21,19C 21,20.6569 19.6568,22 18,22C 17.1716,22 16.4216,21.6642 15.8787,21.1213C 15.4882,20.7308 15.4881,20.0976 15.8787,19.7071C 16.2692,19.3166 16.9024,19.3166 17.2929,19.7071C 17.4738,19.8881 17.7238,20 18,20C 18.5523,20 19,19.5523 19,19C 19,18.4477 18.5523,18 18,18 Z ' })
                )
            );
        }
    }]);

    return MdiWeatherWindyVariant;
}(React.Component);

exports.default = MdiWeatherWindyVariant;
module.exports = exports['default'];