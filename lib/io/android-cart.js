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

var IoAndroidCart = function (_React$Component) {
    _inherits(IoAndroidCart, _React$Component);

    function IoAndroidCart() {
        _classCallCheck(this, IoAndroidCart);

        return _possibleConstructorReturn(this, (IoAndroidCart.__proto__ || Object.getPrototypeOf(IoAndroidCart)).apply(this, arguments));
    }

    _createClass(IoAndroidCart, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm13 29.5c1.8 0 3.2 1.4 3.2 3.2s-1.4 3.3-3.2 3.3-3.2-1.5-3.2-3.3 1.4-3.2 3.2-3.2z m-9.5-25.5h5.3l1.5 3.3h24.1c0.8 0 1.6 0.7 1.6 1.5 0 0.3-0.1 0.7-0.2 0.8l-5.8 10.1c-0.6 1.1-1.6 1.7-2.8 1.7h-12.1l-1.7 2.5s-0.1 0.4-0.1 0.5c0 0.2 0.1 0.4 0.4 0.4h18.6v3.1h-19c-2.1 0-3.5-1.1-3.5-3.3 0-0.5 0.1-1.2 0.3-1.6l2.5-3.9-5.8-11.8h-3.3v-3.3z m25.5 25.5c1.8 0 3.3 1.4 3.3 3.2s-1.5 3.3-3.3 3.3-3.2-1.5-3.2-3.3 1.4-3.2 3.2-3.2z' })
                )
            );
        }
    }]);

    return IoAndroidCart;
}(React.Component);

exports.default = IoAndroidCart;
module.exports = exports['default'];