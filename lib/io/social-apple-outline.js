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

var IoSocialAppleOutline = function (_React$Component) {
    _inherits(IoSocialAppleOutline, _React$Component);

    function IoSocialAppleOutline() {
        _classCallCheck(this, IoSocialAppleOutline);

        return _possibleConstructorReturn(this, (IoSocialAppleOutline.__proto__ || Object.getPrototypeOf(IoSocialAppleOutline)).apply(this, arguments));
    }

    _createClass(IoSocialAppleOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm26.1 13.3c-1.2 0-2 0.3-2.9 0.6-0.8 0.3-1.6 0.6-2.7 0.6s-2-0.3-2.9-0.6c-0.9-0.3-1.7-0.6-2.7-0.6-0.8 0-1.8 0.2-2.6 0.8-1 0.5-1.8 1.4-2.5 2.4-0.9 1.4-1.2 3.7-1 6 0.3 2.7 1.3 5.4 2.8 7.7 1 1.7 2.3 3.6 3.9 3.6h0c0.7 0 1.1-0.3 1.6-0.5 0.8-0.4 1.8-0.8 3.4-0.8 1.7 0 2.7 0.4 3.5 0.8 0.5 0.2 0.9 0.5 1.5 0.5 1.7 0 3.4-2.8 4-3.8 0.7-0.9 1-1.6 1.4-2.4-1-0.6-1.8-1.3-2.4-2.2-0.8-1.2-1.3-2.6-1.4-4.1-0.1-1.4 0.2-2.9 0.8-4.1 0.5-1 1.1-1.7 1.9-2.4-1.1-1-2.5-1.5-3.7-1.5z m0-1.3c1.9 0 4.1 1.1 5.5 3.1-4.9 2.8-4.1 10 0.9 11.9-0.7 1.6-1 2.2-1.9 3.6-1.2 2-2.9 4.4-5.1 4.4h0c-1.9 0-2.5-1.2-5-1.2-2.5 0-3.1 1.2-5 1.2h0c-2.2 0-3.8-2.2-5-4.1-3.5-5.4-3.8-11.8-1.7-15.1 1.5-2.4 3.9-3.8 6.1-3.8 2.3 0 3.7 1.3 5.6 1.3 1.8 0 2.9-1.3 5.6-1.3z m-1.9-5.4c-0.8 0.4-1.6 1-2.2 1.7-0.3 0.4-0.7 1-1 1.8-0.1 0.2-0.1 0.4-0.1 0.7 0.8-0.3 1.6-0.9 2.1-1.7 0.4-0.3 1-1.4 1.2-2.5z m1.3-1.6c0.2 1.8-0.5 3.6-1.4 4.8-1.1 1.4-2.8 2.4-4.4 2.4h-0.1c-0.3-1.7 0.5-3.4 1.4-4.7 1.1-1.3 2.9-2.4 4.5-2.5z' })
                )
            );
        }
    }]);

    return IoSocialAppleOutline;
}(React.Component);

exports.default = IoSocialAppleOutline;
module.exports = exports['default'];