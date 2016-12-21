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

var IoAndroidSync = function (_React$Component) {
    _inherits(IoAndroidSync, _React$Component);

    function IoAndroidSync() {
        _classCallCheck(this, IoAndroidSync);

        return _possibleConstructorReturn(this, (IoAndroidSync.__proto__ || Object.getPrototypeOf(IoAndroidSync)).apply(this, arguments));
    }

    _createClass(IoAndroidSync, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 7.3c6.9 0 12.5 5.7 12.5 12.7 0 2.5-0.7 4.8-2 6.8l-2.2-2.3c0.7-1.4 1.1-2.9 1.1-4.5 0-5.2-4.2-9.5-9.4-9.5v4.7l-6.2-6.4 6.2-6.3v4.8z m0 22.2v-4.7l6.3 6.4-6.3 6.3v-4.8c-6.9 0-12.5-5.7-12.5-12.7 0-2.5 0.7-4.9 2-6.8l2.2 2.3c-0.7 1.4-1.1 2.9-1.1 4.5 0 5.2 4.2 9.5 9.4 9.5z' })
                )
            );
        }
    }]);

    return IoAndroidSync;
}(React.Component);

exports.default = IoAndroidSync;
module.exports = exports['default'];