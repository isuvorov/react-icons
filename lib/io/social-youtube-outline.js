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

var IoSocialYoutubeOutline = function (_React$Component) {
    _inherits(IoSocialYoutubeOutline, _React$Component);

    function IoSocialYoutubeOutline() {
        _classCallCheck(this, IoSocialYoutubeOutline);

        return _possibleConstructorReturn(this, (IoSocialYoutubeOutline.__proto__ || Object.getPrototypeOf(IoSocialYoutubeOutline)).apply(this, arguments));
    }

    _createClass(IoSocialYoutubeOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20.7 7.5h-1.4c-5.1 0-9.2 0.2-13.1 0.3h-0.2c-1.8 0-3.3 1.7-3.3 3.8v0.2c-0.1 2.7-0.2 5.5-0.2 8.2 0 2.7 0.1 5.5 0.2 8.1v0.3c0 1.1 0.4 2 1.1 2.8 0.7 0.7 1.4 1 2.2 1h0.2c4 0.1 8.4 0.3 12.9 0.3h1.8c4.5 0 8.8-0.2 12.9-0.3h0.2c0.8 0 1.5-0.3 2.2-1 0.7-0.8 1.1-1.7 1.1-2.8v-0.3c0.1-2.6 0.2-5.3 0.2-8.1 0-2.8-0.1-5.5-0.2-8.2v-0.2c0-2.1-1.5-3.9-3.3-3.9h-0.2c-3.8-0.1-8-0.2-13.1-0.2z m0-2.5c4.5 0 9 0 13.3 0.2 3.2 0 5.8 2.8 5.8 6.4 0.1 2.8 0.2 5.6 0.2 8.4s-0.1 5.5-0.2 8.4c0 3.5-2.6 6.3-5.8 6.3-4.3 0.2-8.7 0.3-13.1 0.3h-1.8c-4.4 0-8.8-0.1-13.1-0.3-3.2 0-5.8-2.8-5.8-6.3-0.1-2.9-0.2-5.6-0.2-8.4s0.2-5.5 0.3-8.4c0-3.5 2.5-6.4 5.7-6.4 4.3-0.1 8.8-0.2 13.3-0.2h1.4z m-4.5 22.7v-15.4l11.3 7.7z' })
                )
            );
        }
    }]);

    return IoSocialYoutubeOutline;
}(React.Component);

exports.default = IoSocialYoutubeOutline;
module.exports = exports['default'];