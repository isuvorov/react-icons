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

var IoSocialGoogleOutline = function (_React$Component) {
    _inherits(IoSocialGoogleOutline, _React$Component);

    function IoSocialGoogleOutline() {
        _classCallCheck(this, IoSocialGoogleOutline);

        return _possibleConstructorReturn(this, (IoSocialGoogleOutline.__proto__ || Object.getPrototypeOf(IoSocialGoogleOutline)).apply(this, arguments));
    }

    _createClass(IoSocialGoogleOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm24.9 6.4c1 0.8 2.9 2.4 2.9 5.3 0 2.9-1.6 4.3-3.3 5.6-0.6 0.6-1.2 1.1-1.2 1.9s0.6 1.3 1.1 1.7l1.4 1.1c1.8 1.5 3.3 2.8 3.3 5.6 0 3.6-3.6 7.4-10.5 7.4-5.8 0-8.6-2.7-8.6-5.6 0-1.4 0.8-3.5 3.1-4.9 2.5-1.5 5.9-1.6 7.7-1.8-0.6-0.7-1.3-1.4-1.3-2.6 0-0.7 0.2-1.1 0.4-1.6-0.4 0-0.8 0.1-1.2 0.1-4.2 0-6.7-3.1-6.7-6.2 0-1.8 0.9-3.7 2.6-5.2 2.3-1.9 4.9-2.2 7.1-2.2h8.3l-2.6 1.4h-2.5z m-2.8 17.5c-0.3-0.1-0.5-0.1-0.9-0.1s-2.5 0.1-4.2 0.7c-0.9 0.3-3.5 1.2-3.5 4s2.8 4.9 7.1 4.9c3.9 0 5.9-1.9 5.9-4.3 0-2.1-1.3-3.1-4.4-5.2z m1.2-7.5c0.9-0.9 1-2.2 1-2.9 0-2.8-1.7-7.2-5.1-7.2-1 0-2.2 0.5-2.8 1.3-0.7 0.8-0.9 1.9-0.9 2.9 0 2.7 1.6 7 5 7 1.1 0 2.2-0.5 2.8-1.1z' })
                )
            );
        }
    }]);

    return IoSocialGoogleOutline;
}(React.Component);

exports.default = IoSocialGoogleOutline;
module.exports = exports['default'];