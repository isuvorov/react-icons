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

var MdLocalPrintShop = function (_React$Component) {
    _inherits(MdLocalPrintShop, _React$Component);

    function MdLocalPrintShop() {
        _classCallCheck(this, MdLocalPrintShop);

        return _possibleConstructorReturn(this, (MdLocalPrintShop.__proto__ || Object.getPrototypeOf(MdLocalPrintShop)).apply(this, arguments));
    }

    _createClass(MdLocalPrintShop, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30 5v6.6h-20v-6.6h20z m1.6 15q0.7 0 1.3-0.5t0.5-1.1-0.5-1.3-1.3-0.5-1.1 0.5-0.5 1.3 0.5 1.1 1.1 0.5z m-5 11.6v-8.2h-13.2v8.2h13.2z m5-18.2q2.1 0 3.6 1.4t1.4 3.6v10h-6.6v6.6h-20v-6.6h-6.6v-10q0-2.1 1.4-3.6t3.6-1.4h23.2z' })
                )
            );
        }
    }]);

    return MdLocalPrintShop;
}(React.Component);

exports.default = MdLocalPrintShop;
module.exports = exports['default'];