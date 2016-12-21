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

var IoAndroidMicrophone = function (_React$Component) {
    _inherits(IoAndroidMicrophone, _React$Component);

    function IoAndroidMicrophone() {
        _classCallCheck(this, IoAndroidMicrophone);

        return _possibleConstructorReturn(this, (IoAndroidMicrophone.__proto__ || Object.getPrototypeOf(IoAndroidMicrophone)).apply(this, arguments));
    }

    _createClass(IoAndroidMicrophone, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 25c-3 0-5.4-2.4-5.4-5.4v-11.7c0-3 2.4-5.4 5.4-5.4s5.4 2.4 5.4 5.4v11.7c0 3-2.4 5.4-5.4 5.4z m9.5-5.9h3c0 6.1-4.8 11.1-10.7 12v6.4h-3.6v-6.4c-5.9-0.8-10.7-5.9-10.7-12h3c0 5.4 4.6 9.1 9.5 9.1s9.5-3.7 9.5-9.1z' })
                )
            );
        }
    }]);

    return IoAndroidMicrophone;
}(React.Component);

exports.default = IoAndroidMicrophone;
module.exports = exports['default'];