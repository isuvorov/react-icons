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

var IoAndroidPhonePortrait = function (_React$Component) {
    _inherits(IoAndroidPhonePortrait, _React$Component);

    function IoAndroidPhonePortrait() {
        _classCallCheck(this, IoAndroidPhonePortrait);

        return _possibleConstructorReturn(this, (IoAndroidPhonePortrait.__proto__ || Object.getPrototypeOf(IoAndroidPhonePortrait)).apply(this, arguments));
    }

    _createClass(IoAndroidPhonePortrait, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm27.8 2.5c1.8 0 3.2 1.5 3.2 3.2v28.6c0 1.7-1.4 3.2-3.2 3.2h-16.1c-1.8 0-3.2-1.5-3.2-3.2v-28.6c0-1.7 1.4-3.2 3.2-3.2h16.1z m0.4 28.8v-22.5h-16.9v22.5h16.9z' })
                )
            );
        }
    }]);

    return IoAndroidPhonePortrait;
}(React.Component);

exports.default = IoAndroidPhonePortrait;
module.exports = exports['default'];