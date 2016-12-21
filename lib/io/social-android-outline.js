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

var IoSocialAndroidOutline = function (_React$Component) {
    _inherits(IoSocialAndroidOutline, _React$Component);

    function IoSocialAndroidOutline() {
        _classCallCheck(this, IoSocialAndroidOutline);

        return _possibleConstructorReturn(this, (IoSocialAndroidOutline.__proto__ || Object.getPrototypeOf(IoSocialAndroidOutline)).apply(this, arguments));
    }

    _createClass(IoSocialAndroidOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm27.3 16.3h-15v11.6h3.1v5.2c0 0.3 0.3 0.7 0.6 0.7s0.6-0.4 0.6-0.7v-5.2h6.4v5.2c0 0.2 0 0.3 0.2 0.5h0.1c0 0.1 0.1 0.2 0.3 0.2h0.1c0.3 0 0.5-0.4 0.5-0.7v-5.2h3.1v-11.6z m1.2-1.3v13c0 0.5-0.2 1.1-0.8 1.1h-2.2v4c0 1-0.8 1.9-1.8 1.9h-0.1c-0.5 0-0.9-0.2-1.2-0.4-0.4-0.3-0.7-0.8-0.7-1.5v-4h-3.8v4c0 1-0.9 1.9-1.9 1.9s-1.9-0.9-1.9-1.9v-4h-2.2c-0.5 0-0.9-0.6-0.9-1.1v-13h17.5z m3.1 0c-0.3 0-0.6 0.3-0.6 0.6v7.5c0 0.3 0.3 0.7 0.6 0.7s0.7-0.4 0.7-0.7v-7.5c0-0.3-0.4-0.6-0.7-0.6z m0-1.2c1 0 1.9 0.8 1.9 1.8v7.5c0 1-0.9 1.9-1.9 1.9s-1.8-0.9-1.8-1.9v-7.5c0-1 0.8-1.8 1.8-1.8z m-23.7 1.2c-0.3 0-0.6 0.3-0.6 0.6v7.5c0 0.3 0.3 0.7 0.6 0.7s0.6-0.4 0.6-0.7v-7.5c0-0.3-0.3-0.6-0.6-0.6z m0-1.2c1 0 1.9 0.8 1.9 1.8v7.5c0 1-0.9 1.9-1.9 1.9s-1.9-0.9-1.9-1.9v-7.5c0-1 0.9-1.8 1.9-1.8z m11.8-6.5c-1.1 0-2.1 0.3-3 0.5l-0.8 0.3c-2.2 1-3.1 2.9-3.4 4.4h14.5c-0.3-1.4-1.2-3.4-3.4-4.4l-0.8-0.3c-0.9-0.3-2-0.5-3.1-0.5h0z m-5.5-2.3h0.1l1.5 1.8c1-0.4 2.3-0.7 3.9-0.7h0.1c1.5 0 2.8 0.3 3.9 0.7l1.5-1.8s0.1 0.1 0.2 0.1c0.1 0.1 0.1 0.2 0.1 0.2l-1.5 1.7c3.8 1.7 4.4 5.6 4.5 6.8h-17.5c0.1-1.2 0.7-5.2 4.5-6.8l-1.5-1.8c0 0 0 0 0.1-0.1z m1.7 5.9c-0.5 0-1.1-0.5-1.1-1.1s0.5-1.1 1.1-1.1c0.6 0 1 0.6 1 1.1s-0.4 1.1-1 1.1z m7.7 0c-0.6 0-1-0.5-1-1.1s0.4-1.1 1-1.1c0.5 0 1 0.6 1 1.1s-0.5 1.1-1 1.1z' })
                )
            );
        }
    }]);

    return IoSocialAndroidOutline;
}(React.Component);

exports.default = IoSocialAndroidOutline;
module.exports = exports['default'];