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

var IoSocialBitcoin = function (_React$Component) {
    _inherits(IoSocialBitcoin, _React$Component);

    function IoSocialBitcoin() {
        _classCallCheck(this, IoSocialBitcoin);

        return _possibleConstructorReturn(this, (IoSocialBitcoin.__proto__ || Object.getPrototypeOf(IoSocialBitcoin)).apply(this, arguments));
    }

    _createClass(IoSocialBitcoin, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm32 21.8c0.3 0.8 0.6 2.3 0.5 3.4-0.1 1.3-0.4 2.9-1.2 4s-2.1 1.9-3.6 2.4c-1.1 0.5-2.5 0.8-4.6 0.9v5h-3.1v-5h-2.5v5h-3.2v-5h-6.8l0.7-3.8h2c0.7 0 0.7 0 1 0s0.3-0.3 0.4-0.6 0.1-0.6 0.1-1.3v-13.5c0-0.7-0.1-1.3-0.1-1.4s-0.3-0.3-0.5-0.5-0.7-0.1-1.4-0.1h-2.2v-3.8h6.8v-5h3.2v5h2.5v-5h3.1v5c1.6 0.1 2.6 0.3 3.6 0.7 1.3 0.5 2.2 1.2 2.9 2.1s0.9 2.2 1 3.5c0.1 0.8 0 1.6-0.2 2.2-0.2 0.6-0.6 1.3-1.3 1.8-0.4 0.5-0.8 0.7-1.2 0.9 0.7 0.1 1.3 0.4 1.9 0.8 1.2 0.6 1.8 1.4 2.2 2.3z m-14.5-10.1v5.8h2.5v-5.8h-2.5z m0 16.6h2.5v-7h-2.5v7z m5.6-16.3v5.2c0.5-0.2 0.7-0.6 1-1 0.4-0.4 0.6-0.9 0.6-1.5s-0.2-1.2-0.5-1.7c-0.3-0.3-0.6-0.8-1.1-1z m2.3 14.6c0.6-0.5 0.8-1.1 0.8-2 0-0.7-0.3-1.5-0.7-1.9s-0.9-0.8-1.5-1.1c-0.3-0.1-0.5-0.1-0.9-0.2v6.4c0.2 0 0.4-0.1 0.6-0.1 0.8-0.4 1.1-0.5 1.7-1.1z' })
                )
            );
        }
    }]);

    return IoSocialBitcoin;
}(React.Component);

exports.default = IoSocialBitcoin;
module.exports = exports['default'];