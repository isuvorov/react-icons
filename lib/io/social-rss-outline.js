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

var IoSocialRssOutline = function (_React$Component) {
    _inherits(IoSocialRssOutline, _React$Component);

    function IoSocialRssOutline() {
        _classCallCheck(this, IoSocialRssOutline);

        return _possibleConstructorReturn(this, (IoSocialRssOutline.__proto__ || Object.getPrototypeOf(IoSocialRssOutline)).apply(this, arguments));
    }

    _createClass(IoSocialRssOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm9.4 26.3c2.4 0 4.4 1.9 4.4 4.3s-2 4.4-4.4 4.4-4.4-2-4.4-4.4 2-4.3 4.4-4.3z m0 7.5c1.7 0 3.1-1.5 3.1-3.2s-1.4-3.1-3.1-3.1-3.1 1.4-3.1 3.1 1.4 3.2 3.1 3.2z m-4.4-18.8c10.9 0 20 9.1 20 20h-6.2c0-3.7-1.1-7.3-3.8-10s-6.2-3.7-10-3.7v-6.3z m18.8 18.8c-0.2-2.1-0.7-4.1-1.5-6.1-1-2.2-2.4-4.2-4.1-5.9s-3.7-3.1-5.9-4.1c-2-0.7-4-1.2-6.1-1.4v3.7c4 0.2 7.2 1.7 9.7 4.1s3.9 5.7 4.1 9.7h3.7z m-18.8-28.8c16.6 0 30 13.4 30 30h-6.2c0-13.4-10.4-23.7-23.8-23.7v-6.3z m17.7 12.2c4.4 4.4 7 10.2 7.3 16.6h3.8c-0.7-14.9-12.7-26.9-27.5-27.5v3.7c6.3 0.3 12.1 2.8 16.4 7.2z' })
                )
            );
        }
    }]);

    return IoSocialRssOutline;
}(React.Component);

exports.default = IoSocialRssOutline;
module.exports = exports['default'];