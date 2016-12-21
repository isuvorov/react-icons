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

var IoAndroidUnlock = function (_React$Component) {
    _inherits(IoAndroidUnlock, _React$Component);

    function IoAndroidUnlock() {
        _classCallCheck(this, IoAndroidUnlock);

        return _possibleConstructorReturn(this, (IoAndroidUnlock.__proto__ || Object.getPrototypeOf(IoAndroidUnlock)).apply(this, arguments));
    }

    _createClass(IoAndroidUnlock, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm29.4 14.5c1.7 0 3.1 1.4 3.1 3.2v15.6c0 1.7-1.4 3.1-3.1 3.1h-18.8c-1.7 0-3.1-1.4-3.1-3.1v-15.6c0-1.8 1.4-3.2 3.1-3.2h14.2v-3.1c0-2.6-2.1-4.8-4.8-4.8s-4.8 2.2-4.8 4.8h-3c0-4.3 3.5-7.8 7.8-7.8s7.8 3.5 7.8 7.8v3.1h1.6z m-9.4 14.3c1.7 0 3.1-1.5 3.1-3.2s-1.4-3.1-3.1-3.1-3.1 1.4-3.1 3.1 1.4 3.2 3.1 3.2z' })
                )
            );
        }
    }]);

    return IoAndroidUnlock;
}(React.Component);

exports.default = IoAndroidUnlock;
module.exports = exports['default'];