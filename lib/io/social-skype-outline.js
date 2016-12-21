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

var IoSocialSkypeOutline = function (_React$Component) {
    _inherits(IoSocialSkypeOutline, _React$Component);

    function IoSocialSkypeOutline() {
        _classCallCheck(this, IoSocialSkypeOutline);

        return _possibleConstructorReturn(this, (IoSocialSkypeOutline.__proto__ || Object.getPrototypeOf(IoSocialSkypeOutline)).apply(this, arguments));
    }

    _createClass(IoSocialSkypeOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm13.3 7.5c-3.2 0-5.8 2.6-5.8 5.7 0 1 0.3 2 0.8 2.8l0.5 0.9-0.2 0.9c-0.2 0.8-0.2 1.6-0.2 2.4 0 3.1 1.2 6 3.4 8.2s5.2 3.4 8.4 3.4c0.7 0 1.4-0.1 2.1-0.2l0.9-0.2 0.7 0.4c0.9 0.5 1.9 0.7 2.8 0.7 3.2 0 5.8-2.6 5.8-5.7 0-0.9-0.2-1.7-0.6-2.5l-0.4-0.8 0.2-0.8c0.2-0.8 0.3-1.7 0.3-2.5 0-3.2-1.3-6.1-3.5-8.2s-5.2-3.4-8.3-3.4c-0.7 0-1.5 0-2.1 0.2l-0.9 0.1-0.8-0.5c-0.9-0.6-2-0.9-3.1-0.9z m0-2.5c1.6 0 3.1 0.5 4.4 1.3 0.7-0.2 1.6-0.2 2.5-0.2 7.8 0 14.3 6.2 14.3 14.1 0 1-0.1 2.1-0.4 3 0.6 1.1 0.9 2.3 0.9 3.6 0 4.5-3.7 8.2-8.3 8.2-1.4 0-2.7-0.3-3.9-0.9-0.8 0.1-1.7 0.2-2.6 0.2-7.9 0-14.3-6.3-14.3-14.1 0-1 0.1-1.9 0.3-2.9-0.7-1.2-1.2-2.6-1.2-4.1 0-4.5 3.7-8.2 8.3-8.2z m14.2 21.9c-0.6 0.9-1.6 1.6-2.9 2.2s-2.8 0.7-4.5 0.7c-2.1 0-3.8-0.3-5.1-1-0.9-0.6-1.7-1.2-2.3-2.1s-1-1.7-1-2.6c0-0.5 0.3-0.9 0.6-1.3s0.9-0.5 1.5-0.5c0.5 0 1 0.1 1.3 0.4s0.5 0.7 0.8 1.2 0.5 1 0.8 1.4 0.6 0.7 1.2 1 1.2 0.3 2.1 0.3c1.2 0 2.2-0.3 2.9-0.7s1-1.1 1-1.8c0-0.5-0.2-1-0.5-1.3-0.4-0.4-0.9-0.7-1.5-0.8-0.7-0.3-1.6-0.4-2.7-0.7-1.5-0.3-2.7-0.7-3.7-1.1-1-0.4-1.9-1-2.5-1.8s-0.9-1.7-0.9-2.8 0.3-1.9 0.9-2.8c0.7-0.8 1.6-1.5 2.9-1.9 1.1-0.5 2.6-0.7 4.2-0.7 1.2 0 2.3 0.1 3.3 0.4s1.8 0.7 2.4 1.2 1.1 1 1.4 1.6 0.4 1.1 0.4 1.6c0 0.5-0.2 0.9-0.6 1.3s-0.8 0.7-1.5 0.7c-0.5 0-0.9-0.2-1.2-0.4-0.2-0.3-0.6-0.6-0.9-1.1-0.4-0.7-0.7-1.2-1.2-1.6s-1.3-0.6-2.4-0.6c-1.1 0-1.8 0.2-2.5 0.6s-0.9 0.9-0.9 1.4c0 0.3 0.2 0.6 0.3 0.8 0.3 0.2 0.5 0.5 0.9 0.6s0.8 0.4 1.1 0.5 1.1 0.2 2 0.5c1.2 0.2 2.2 0.4 3.1 0.7s1.8 0.7 2.5 1.1 1.2 1 1.6 1.8 0.6 1.5 0.6 2.5c0 1.1-0.4 2.1-1 3.1z' })
                )
            );
        }
    }]);

    return IoSocialSkypeOutline;
}(React.Component);

exports.default = IoSocialSkypeOutline;
module.exports = exports['default'];