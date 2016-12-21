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

var TiShoppingCart = function (_React$Component) {
    _inherits(TiShoppingCart, _React$Component);

    function TiShoppingCart() {
        _classCallCheck(this, TiShoppingCart);

        return _possibleConstructorReturn(this, (TiShoppingCart.__proto__ || Object.getPrototypeOf(TiShoppingCart)).apply(this, arguments));
    }

    _createClass(TiShoppingCart, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm34.6 8.9c-0.3-0.4-0.8-0.6-1.3-0.6h-23l-0.3-1.9c-0.2-0.8-0.9-1.4-1.7-1.4h-3.7c-0.9 0-1.7 0.7-1.7 1.7s0.8 1.6 1.7 1.6h2.3l3.1 18.6c0 0.1 0.1 0.2 0.1 0.2 0 0.1 0 0.2 0.1 0.3 0 0.1 0.1 0.2 0.2 0.3 0 0.1 0.1 0.1 0.1 0.2 0.1 0.1 0.3 0.1 0.4 0.2 0 0 0.1 0.1 0.2 0.1 0.1 0.1 0.3 0.1 0.6 0.1h18.3c0.9 0 1.7-0.7 1.7-1.6s-0.8-1.7-1.7-1.7h-16.9l-0.3-1.7h18.9c0.8 0 1.5-0.6 1.6-1.4l1.7-11.7c0.1-0.4-0.1-0.9-0.4-1.3z m-3.2 2.8l-0.5 3.3h-5.9v-3.3h6.4z m-8.1 0v3.3h-5v-3.3h5z m0 5v3.3h-5v-3.3h5z m-6.6-5v3.3h-5c-0.1 0-0.2 0-0.3 0.1l-0.5-3.4h5.8z m-5 5h5v3.3h-4.5l-0.5-3.3z m13.3 3.3v-3.3h5.7l-0.5 3.3h-5.2z m-8.3 12.5c0 1.4-1.2 2.5-2.5 2.5s-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5z m15 0c0 1.4-1.2 2.5-2.5 2.5s-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5z' })
                )
            );
        }
    }]);

    return TiShoppingCart;
}(React.Component);

exports.default = TiShoppingCart;
module.exports = exports['default'];