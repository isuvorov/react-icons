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

var IoAndroidPhoneLandscape = function (_React$Component) {
    _inherits(IoAndroidPhoneLandscape, _React$Component);

    function IoAndroidPhoneLandscape() {
        _classCallCheck(this, IoAndroidPhoneLandscape);

        return _possibleConstructorReturn(this, (IoAndroidPhoneLandscape.__proto__ || Object.getPrototypeOf(IoAndroidPhoneLandscape)).apply(this, arguments));
    }

    _createClass(IoAndroidPhoneLandscape, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35 28c0 1.8-1.5 3.3-3.2 3.3h-28.6c-1.7 0-3.2-1.5-3.2-3.3v-16c0-1.8 1.5-3.2 3.2-3.2h28.6c1.7 0 3.2 1.4 3.2 3.2v16z m-28.7 0.4h22.5v-16.8h-22.5v16.8z' })
                )
            );
        }
    }]);

    return IoAndroidPhoneLandscape;
}(React.Component);

exports.default = IoAndroidPhoneLandscape;
module.exports = exports['default'];