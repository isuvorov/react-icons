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

var IoSocialLinkedin = function (_React$Component) {
    _inherits(IoSocialLinkedin, _React$Component);

    function IoSocialLinkedin() {
        _classCallCheck(this, IoSocialLinkedin);

        return _possibleConstructorReturn(this, (IoSocialLinkedin.__proto__ || Object.getPrototypeOf(IoSocialLinkedin)).apply(this, arguments));
    }

    _createClass(IoSocialLinkedin, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm32.6 5c1.4 0 2.4 1 2.4 2.3v25.1c0 1.4-1 2.6-2.4 2.6h-25c-1.4 0-2.6-1.2-2.6-2.6v-25.1c0-1.3 1.2-2.3 2.6-2.3h25z m-18.3 25v-13.4h-4.3v13.4h4.3z m-2-15.4c1.4 0 2.3-1 2.3-2.3 0-1.3-0.8-2.3-2.3-2.3s-2.3 1-2.3 2.3c0 1.3 0.9 2.3 2.3 2.3z m17.7 15.4v-7.8c0-4-2.1-5.9-4.9-5.9-2.3 0-3.3 1.4-3.9 2.2v-1.9h-4.3v13.4h4.3v-7.6c0-0.4 0-0.8 0.1-1.1 0.3-0.8 1-1.5 2.2-1.5 1.6 0 2.2 1.1 2.2 2.9v7.3h4.3z' })
                )
            );
        }
    }]);

    return IoSocialLinkedin;
}(React.Component);

exports.default = IoSocialLinkedin;
module.exports = exports['default'];