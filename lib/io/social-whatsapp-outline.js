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

var IoSocialWhatsappOutline = function (_React$Component) {
    _inherits(IoSocialWhatsappOutline, _React$Component);

    function IoSocialWhatsappOutline() {
        _classCallCheck(this, IoSocialWhatsappOutline);

        return _possibleConstructorReturn(this, (IoSocialWhatsappOutline.__proto__ || Object.getPrototypeOf(IoSocialWhatsappOutline)).apply(this, arguments));
    }

    _createClass(IoSocialWhatsappOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm13.9 12c0.3 0.9 1.2 3.1 1.3 3.3s0.1 0.5 0 0.8-0.3 0.5-0.5 0.7-0.5 0.5-0.7 0.7c-0.2 0.2-0.5 0.5-0.2 0.9s1 1.9 2.3 3.1c1.6 1.5 3 2.1 3.4 2.3s0.7 0.3 1-0.1 1.1-1.2 1.5-1.6 0.6-0.4 1-0.2 2.4 1.3 2.9 1.5 0.7 0.4 0.8 0.6 0 1-0.4 2-2.2 1.9-2.9 2-0.9 0.6-5.3-1.3-7-6.5-7.2-6.9-1.8-2.4-1.7-4.5 1.3-3.2 1.7-3.6 0.9-0.5 1.2-0.5h0.8s0.7 0 1 0.8z m3.9-7c-3.9 0-7.6 1.6-10.4 4.3-2.7 2.7-4.3 6.3-4.3 10.2 0 2.7 0.7 5.3 2.1 7.5l0.7 1-0.4 1.1-1.5 4.5 5.8-1.8 0.9 0.5c2.2 1.1 4.6 1.8 7.1 1.8 3.9 0 7.6-1.5 10.4-4.3 2.7-2.7 4.3-6.4 4.3-10.3s-1.6-7.5-4.3-10.2c-2.8-2.7-6.5-4.3-10.4-4.3z m0-2.5c9.5 0 17.2 7.6 17.2 17s-7.7 17.1-17.2 17.1c-3 0-5.8-0.8-8.3-2.1l-9.5 3 3.1-9.1c-1.5-2.6-2.5-5.7-2.5-8.9 0-9.4 7.8-17 17.2-17z' })
                )
            );
        }
    }]);

    return IoSocialWhatsappOutline;
}(React.Component);

exports.default = IoSocialWhatsappOutline;
module.exports = exports['default'];