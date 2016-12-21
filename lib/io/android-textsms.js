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

var IoAndroidTextsms = function (_React$Component) {
    _inherits(IoAndroidTextsms, _React$Component);

    function IoAndroidTextsms() {
        _classCallCheck(this, IoAndroidTextsms);

        return _possibleConstructorReturn(this, (IoAndroidTextsms.__proto__ || Object.getPrototypeOf(IoAndroidTextsms)).apply(this, arguments));
    }

    _createClass(IoAndroidTextsms, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.9 5c1.7 0 3.1 1.4 3.1 3.1v18.8c0 1.7-1.4 3.1-3.1 3.1h-21.9l-5 5v-26.9c0-1.7 0.8-3.1 2.5-3.1h24.4z m-16.4 13.9v-3.1h-3v3.1h3z m6 0v-3.1h-3v3.1h3z m6 0v-3.1h-3v3.1h3z' })
                )
            );
        }
    }]);

    return IoAndroidTextsms;
}(React.Component);

exports.default = IoAndroidTextsms;
module.exports = exports['default'];