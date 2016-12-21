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

var IoSocialWhatsapp = function (_React$Component) {
    _inherits(IoSocialWhatsapp, _React$Component);

    function IoSocialWhatsapp() {
        _classCallCheck(this, IoSocialWhatsapp);

        return _possibleConstructorReturn(this, (IoSocialWhatsapp.__proto__ || Object.getPrototypeOf(IoSocialWhatsapp)).apply(this, arguments));
    }

    _createClass(IoSocialWhatsapp, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm17.8 2.5c9.5 0 17.2 7.6 17.2 17s-7.7 17.1-17.2 17.1c-3 0-5.8-0.8-8.3-2.1l-9.5 3 3.1-9.1c-1.5-2.6-2.5-5.7-2.5-8.9 0-9.4 7.8-17 17.2-17z m8.5 23.5c0.4-1 0.5-1.9 0.4-2s-0.4-0.3-0.8-0.6-2.5-1.4-2.9-1.5-0.7-0.2-1 0.2-1.3 1.3-1.5 1.6-0.5 0.4-1 0.1-1.8-0.8-3.4-2.3c-1.3-1.2-2.1-2.6-2.4-3.1s0-0.7 0.3-0.9c0.2-0.2 0.5-0.5 0.7-0.7s0.3-0.4 0.5-0.7 0-0.6 0-0.8-1-2.4-1.3-3.3-0.8-0.8-1-0.8h-0.8s-0.8 0.1-1.2 0.5-1.6 1.5-1.7 3.6 1.4 4.2 1.7 4.5 2.8 5 7.2 6.9 4.5 1.3 5.3 1.3 2.5-1 2.9-2z' })
                )
            );
        }
    }]);

    return IoSocialWhatsapp;
}(React.Component);

exports.default = IoSocialWhatsapp;
module.exports = exports['default'];