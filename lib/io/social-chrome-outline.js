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

var IoSocialChromeOutline = function (_React$Component) {
    _inherits(IoSocialChromeOutline, _React$Component);

    function IoSocialChromeOutline() {
        _classCallCheck(this, IoSocialChromeOutline);

        return _possibleConstructorReturn(this, (IoSocialChromeOutline.__proto__ || Object.getPrototypeOf(IoSocialChromeOutline)).apply(this, arguments));
    }

    _createClass(IoSocialChromeOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm17.5 2.5c9.6 0 17.5 7.9 17.5 17.5s-7.9 17.5-17.5 17.5-17.5-7.9-17.5-17.5 7.9-17.5 17.5-17.5z m0 3.5c-4.5 0-8.5 2.1-11 5.3l4.2 7.3c0.6-3.1 3.4-5.6 6.8-5.6h12.1c-2.3-4.3-6.9-7-12.1-7z m5.2 14c0-2.9-2.3-5.2-5.2-5.2s-5.2 2.3-5.2 5.2 2.3 5.2 5.2 5.2 5.2-2.3 5.2-5.2z m-19.2 0c0 7.1 5.3 13 12 13.8l4.3-7.2c-0.7 0.2-1.5 0.4-2.3 0.4-2.7 0-4.8-1.4-6-3.5l-6.1-10.5c-1.3 2.1-1.9 4.5-1.9 7z m14 14c7.7 0 14-6.3 14-14 0-1.9-0.3-3.6-1-5.2h-8.5c1.5 1.3 2.5 3.1 2.5 5.2 0 1.3-0.4 2.5-1 3.5z' })
                )
            );
        }
    }]);

    return IoSocialChromeOutline;
}(React.Component);

exports.default = IoSocialChromeOutline;
module.exports = exports['default'];