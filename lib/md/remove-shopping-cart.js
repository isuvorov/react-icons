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

var MdRemoveShoppingCart = function (_React$Component) {
    _inherits(MdRemoveShoppingCart, _React$Component);

    function MdRemoveShoppingCart() {
        _classCallCheck(this, MdRemoveShoppingCart);

        return _possibleConstructorReturn(this, (MdRemoveShoppingCart.__proto__ || Object.getPrototypeOf(MdRemoveShoppingCart)).apply(this, arguments));
    }

    _createClass(MdRemoveShoppingCart, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm11.6 30c1.8 0 3.4 1.6 3.4 3.4s-1.6 3.2-3.4 3.2-3.2-1.4-3.2-3.2 1.4-3.4 3.2-3.4z m14.3-8.4l-15-15h22.5c0.9 0 1.6 0.8 1.6 1.8 0 0.3-0.1 0.5-0.2 0.7l-6 10.8c-0.5 1-1.6 1.7-2.9 1.7z m-13.6 3.4h8.5l-3.4-3.4h-3.9l-1.5 2.8 0 0.2c0 0.2 0.1 0.4 0.3 0.4z m25.6 12.9l-2.1 2.1-4.8-4.8c-0.6 0.9-1.5 1.4-2.6 1.4-1.8 0-3.4-1.4-3.4-3.2 0-1.1 0.5-2.1 1.4-2.8l-2.3-2.2h-12.5c-1.8 0-3.2-1.6-3.2-3.4 0-0.5 0.1-1.1 0.3-1.6l2.3-4.1-3.7-7.7-7.3-7.4 2.1-2.1z' })
                )
            );
        }
    }]);

    return MdRemoveShoppingCart;
}(React.Component);

exports.default = MdRemoveShoppingCart;
module.exports = exports['default'];