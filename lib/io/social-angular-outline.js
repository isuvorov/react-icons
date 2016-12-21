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

var IoSocialAngularOutline = function (_React$Component) {
    _inherits(IoSocialAngularOutline, _React$Component);

    function IoSocialAngularOutline() {
        _classCallCheck(this, IoSocialAngularOutline);

        return _possibleConstructorReturn(this, (IoSocialAngularOutline.__proto__ || Object.getPrototypeOf(IoSocialAngularOutline)).apply(this, arguments));
    }

    _createClass(IoSocialAngularOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm17.5 5l-14.7 5.4 3.1 18 11.6 6.2 11.6-6.2 3.1-18z m0-2.5l17.5 6.3-3.6 21.2-13.9 7.5-13.9-7.5-3.6-21.2z m6.9 25l-2.1-4.4h-9.6l-2.1 4.4h-3.1l10-21.9 10 21.9h-3.1z m-10.2-7.5h6.6l-3.3-7z' })
                )
            );
        }
    }]);

    return IoSocialAngularOutline;
}(React.Component);

exports.default = IoSocialAngularOutline;
module.exports = exports['default'];