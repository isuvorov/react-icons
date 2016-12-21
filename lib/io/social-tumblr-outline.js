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

var IoSocialTumblrOutline = function (_React$Component) {
    _inherits(IoSocialTumblrOutline, _React$Component);

    function IoSocialTumblrOutline() {
        _classCallCheck(this, IoSocialTumblrOutline);

        return _possibleConstructorReturn(this, (IoSocialTumblrOutline.__proto__ || Object.getPrototypeOf(IoSocialTumblrOutline)).apply(this, arguments));
    }

    _createClass(IoSocialTumblrOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm25.1 30.9c1.6 0 3.3-0.4 4.9-1.5v5.1c-1.4 0.6-2.7 1.1-3.7 1.4s-2.2 0.3-3.6 0.3c-1.4 0-2.7-0.1-3.9-0.5-1.1-0.4-2.2-0.9-2.9-1.6s-1.4-1.4-1.7-2.2-0.5-2-0.5-3.5v-10.9h-3.7v-4.5c1.3-0.4 2.3-1.1 3.3-1.9s1.5-1.6 2-2.7 0.9-2.9 1.1-4.7h4.9v8.8h7.5v5h-7.5v7.9c0 1.9 0 3.1 0.3 3.7 0.1 0.5 0.5 0.9 1.1 1.2 0.7 0.5 1.4 0.6 2.4 0.6z m3.7 2.8v-2.3c-1.2 0.5-2.5 0.8-3.7 0.8-1.2 0-2.2-0.2-3.1-0.8-0.8-0.5-1.4-1.2-1.7-1.9-0.1-0.5-0.3-1.4-0.3-4.1v-9.1h7.5v-2.5h-7.5v-8.8h-2.5c-0.2 1.3-0.6 2.8-1.1 3.9-0.6 1.3-1.3 2.3-2.3 3.1-0.9 0.7-1.8 1.4-2.9 1.8v2.4h3.8v12.2c0 1.7 0.2 2.5 0.3 3 0.2 0.6 0.8 1.2 1.4 1.7 0.7 0.6 1.5 1.1 2.4 1.4 1.1 0.3 2.3 0.5 3.6 0.5 1.3 0 2.2-0.2 3.2-0.4 0.9-0.1 1.8-0.5 2.8-0.9z' })
                )
            );
        }
    }]);

    return IoSocialTumblrOutline;
}(React.Component);

exports.default = IoSocialTumblrOutline;
module.exports = exports['default'];