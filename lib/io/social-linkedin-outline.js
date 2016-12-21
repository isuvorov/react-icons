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

var IoSocialLinkedinOutline = function (_React$Component) {
    _inherits(IoSocialLinkedinOutline, _React$Component);

    function IoSocialLinkedinOutline() {
        _classCallCheck(this, IoSocialLinkedinOutline);

        return _possibleConstructorReturn(this, (IoSocialLinkedinOutline.__proto__ || Object.getPrototypeOf(IoSocialLinkedinOutline)).apply(this, arguments));
    }

    _createClass(IoSocialLinkedinOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm14.3 30h-4.3v-13.4h4.3v13.4z m-2-15.4c-1.4 0-2.3-1-2.3-2.3 0-1.3 0.9-2.3 2.3-2.3s2.3 1 2.3 2.3c0 1.3-0.9 2.3-2.3 2.3z m12.8 1.7c2.8 0 4.9 1.9 4.9 5.9v7.8h-4.3v-7.3c0-1.8-0.6-2.9-2.2-2.9-1.2 0-1.9 0.7-2.2 1.5-0.1 0.3-0.1 0.7-0.1 1.1v7.6h-4.3v-13.4h4.3v1.9c0.6-0.8 1.6-2.2 3.9-2.2z m7.5-11.3c1.4 0 2.4 1 2.4 2.3v25.1c0 1.4-1 2.6-2.4 2.6h-25c-1.4 0-2.6-1.2-2.6-2.6v-25.1c0-1.3 1.2-2.3 2.6-2.3h25z m-0.3 27.5c0.1 0 0.2-0.1 0.2-0.2v-24.6c0-0.1-0.1-0.2-0.2-0.2h-24.6s-0.2 0.1-0.2 0.2v24.6s0.1 0.2 0.2 0.2h24.6z' })
                )
            );
        }
    }]);

    return IoSocialLinkedinOutline;
}(React.Component);

exports.default = IoSocialLinkedinOutline;
module.exports = exports['default'];