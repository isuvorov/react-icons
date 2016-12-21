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

var TiCreditCard = function (_React$Component) {
    _inherits(TiCreditCard, _React$Component);

    function TiCreditCard() {
        _classCallCheck(this, TiCreditCard);

        return _possibleConstructorReturn(this, (TiCreditCard.__proto__ || Object.getPrototypeOf(TiCreditCard)).apply(this, arguments));
    }

    _createClass(TiCreditCard, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.3 11.7h-18.3c-2.8 0-5 2.2-5 5v11.6c0 2.8 2.2 5 5 5h18.3c2.8 0 5-2.2 5-5v-11.6c0-2.8-2.2-5-5-5z m1.7 16.6c0 1-0.7 1.7-1.7 1.7h-18.3c-0.9 0-1.7-0.7-1.7-1.7v-6.6h21.7v6.6z m0-10h-21.7v-1.6c0-1 0.8-1.7 1.7-1.7h18.3c1 0 1.7 0.7 1.7 1.7v1.6z m-6.7 8.4h3.4c0.4 0 0.8-0.4 0.8-0.9s-0.4-0.8-0.8-0.8h-3.4c-0.4 0-0.8 0.4-0.8 0.8s0.4 0.9 0.8 0.9z' })
                )
            );
        }
    }]);

    return TiCreditCard;
}(React.Component);

exports.default = TiCreditCard;
module.exports = exports['default'];