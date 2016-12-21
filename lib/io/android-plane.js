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

var IoAndroidPlane = function (_React$Component) {
    _inherits(IoAndroidPlane, _React$Component);

    function IoAndroidPlane() {
        _classCallCheck(this, IoAndroidPlane);

        return _possibleConstructorReturn(this, (IoAndroidPlane.__proto__ || Object.getPrototypeOf(IoAndroidPlane)).apply(this, arguments));
    }

    _createClass(IoAndroidPlane, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35 26.3l-12.5-3.8v8.9l3.8 2.4v2.4l-6.3-1.2-6.2 1.3v-2.5l3.7-2.4v-8.9l-12.5 3.8v-3.2l12.5-8.1v-8.8c0-1.4 1.2-2.5 2.5-2.5s2.5 1.1 2.5 2.5v8.8l12.5 8.1v3.2z' })
                )
            );
        }
    }]);

    return IoAndroidPlane;
}(React.Component);

exports.default = IoAndroidPlane;
module.exports = exports['default'];