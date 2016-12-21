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

var IoAndroidOptions = function (_React$Component) {
    _inherits(IoAndroidOptions, _React$Component);

    function IoAndroidOptions() {
        _classCallCheck(this, IoAndroidOptions);

        return _possibleConstructorReturn(this, (IoAndroidOptions.__proto__ || Object.getPrototypeOf(IoAndroidOptions)).apply(this, arguments));
    }

    _createClass(IoAndroidOptions, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm0 32.5v-2.5h21.3v2.5h-21.3z m28.8 0v-2.5h6.2v2.5h-6.2z m-1.3 2.5c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5v-7.5c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v7.5z m-27.5-13.7v-2.5h6.3v2.5h-6.3z m13.8 0v-2.5h21.2v2.5h-21.2z m-1.3 2.5c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5v-7.5c0-1.5 1.1-2.5 2.5-2.5s2.5 1 2.5 2.5v7.5z m-12.5-13.8v-2.5h21.3v2.5h-21.3z m28.8 0v-2.5h6.2v2.5h-6.2z m-1.3 2.5c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5v-7.5c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v7.5z' })
                )
            );
        }
    }]);

    return IoAndroidOptions;
}(React.Component);

exports.default = IoAndroidOptions;
module.exports = exports['default'];