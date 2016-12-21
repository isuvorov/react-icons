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

var MdiSkypeBusiness = function (_React$Component) {
    _inherits(MdiSkypeBusiness, _React$Component);

    function MdiSkypeBusiness() {
        _classCallCheck(this, MdiSkypeBusiness);

        return _possibleConstructorReturn(this, (MdiSkypeBusiness.__proto__ || Object.getPrototypeOf(MdiSkypeBusiness)).apply(this, arguments));
    }

    _createClass(MdiSkypeBusiness, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'miter', d: 'M 12.0344,16.5341C 9.36794,16.5341 8.17531,15.2235 8.17531,14.2408C 8.17531,13.7366 8.5472,13.3839 9.06018,13.3839C 10.2009,13.3839 9.90575,15.0222 12.0344,15.0222C 13.124,15.0222 13.726,14.4305 13.726,13.8246C 13.726,13.4603 13.5463,13.057 12.8286,12.8802L 10.4573,12.2879C 8.5472,11.809 8.20063,10.7767 8.20063,9.80599C 8.20063,7.79067 10.098,7.03409 11.88,7.03409C 13.5212,7.03409 15.456,7.94109 15.456,9.15021C 15.456,9.66836 15.0074,9.96945 14.4951,9.96945C 13.5212,9.96945 13.7004,8.62175 11.7392,8.62175C 10.7656,8.62175 10.2263,9.06244 10.2263,9.69318C 10.2263,10.3227 10.9954,10.5235 11.6625,10.6759L 13.418,11.0655C 15.3407,11.4937 15.8284,12.6163 15.8284,13.6737C 15.8284,15.3112 14.5713,16.5341 12.0344,16.5341 Z M 18.0104,5.9896C 20.0657,8.04485 20.8484,10.8907 20.3586,13.5482C 20.767,14.2726 21,15.1091 21,16C 21,18.7614 18.7614,21 16,21C 15.1091,21 14.2726,20.767 13.5482,20.3586C 10.8907,20.8484 8.04485,20.0657 5.98959,18.0104C 3.93435,15.9552 3.15161,13.1093 3.64139,10.4518C 3.233,9.72736 3,8.89089 3,8C 3,5.23858 5.23858,3.00001 8,3.00001C 8.89089,3.00001 9.72736,3.233 10.4518,3.64139C 13.1093,3.15161 15.9552,3.93435 18.0104,5.9896 Z M 8,5.00001C 6.34314,5.00001 5,6.34315 5,8C 5,8.78814 5.30391,9.50528 5.80094,10.0406C 5.0957,12.2784 5.62999,14.8224 7.40381,16.5962C 9.17762,18.37 11.7216,18.9043 13.9594,18.1991C 14.4947,18.6961 15.2119,19 16,19C 17.6569,19 19,17.6569 19,16C 19,15.2119 18.6961,14.4947 18.1991,13.9594C 18.9043,11.7216 18.37,9.17763 16.5962,7.40381C 14.8224,5.62999 12.2784,5.0957 10.0406,5.80094C 9.50527,5.30392 8.78813,5.00001 8,5.00001 Z ' })
                )
            );
        }
    }]);

    return MdiSkypeBusiness;
}(React.Component);

exports.default = MdiSkypeBusiness;
module.exports = exports['default'];