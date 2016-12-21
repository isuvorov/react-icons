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

var IoSocialJavascript = function (_React$Component) {
    _inherits(IoSocialJavascript, _React$Component);

    function IoSocialJavascript() {
        _classCallCheck(this, IoSocialJavascript);

        return _possibleConstructorReturn(this, (IoSocialJavascript.__proto__ || Object.getPrototypeOf(IoSocialJavascript)).apply(this, arguments));
    }

    _createClass(IoSocialJavascript, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm13.8 6.9v16.6c0 7.6-3.9 10.3-9.5 10.3-1.4 0-3.1-0.3-4.3-0.7l0.6-4.8c0.8 0.3 1.9 0.5 3.1 0.5 2.4 0 3.8-1.2 3.8-5.4v-16.5h6.3z m13.5-0.6c3 0 5.1 0.5 6.7 1.2l-1.5 5c-1-0.5-2.7-1.3-5.2-1.3s-3.8 1.2-3.8 2.6c0 1.7 1.5 2.4 4.9 3.7 4.5 1.7 6.6 4.1 6.6 8 0 4.4-3.3 8.3-10.4 8.3-3 0-5.6-0.8-7.1-1.7l1.2-4.9c1.5 0.8 3.8 1.6 6.3 1.6 2.7 0 4.1-1.1 4.1-2.9 0-1.7-1.2-2.6-4.3-3.7-4.3-1.6-7.3-4.1-7.3-8 0-4.5 3.8-8 9.8-8z' })
                )
            );
        }
    }]);

    return IoSocialJavascript;
}(React.Component);

exports.default = IoSocialJavascript;
module.exports = exports['default'];