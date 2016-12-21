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

var IoAndroidCompass = function (_React$Component) {
    _inherits(IoAndroidCompass, _React$Component);

    function IoAndroidCompass() {
        _classCallCheck(this, IoAndroidCompass);

        return _possibleConstructorReturn(this, (IoAndroidCompass.__proto__ || Object.getPrototypeOf(IoAndroidCompass)).apply(this, arguments));
    }

    _createClass(IoAndroidCompass, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm17.5 18c1 0 2 1 2 2s-1 2-2 2-2-1-2-2 1-2 2-2z m0-15.5c9.6 0 17.5 7.9 17.5 17.5s-7.9 17.5-17.5 17.5-17.5-7.9-17.5-17.5 7.9-17.5 17.5-17.5z m3.8 21.3l6.7-14.3-14.3 6.7-6.7 14.3z' })
                )
            );
        }
    }]);

    return IoAndroidCompass;
}(React.Component);

exports.default = IoAndroidCompass;
module.exports = exports['default'];