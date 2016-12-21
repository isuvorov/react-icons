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

var IoAndroidPlaystore = function (_React$Component) {
    _inherits(IoAndroidPlaystore, _React$Component);

    function IoAndroidPlaystore() {
        _classCallCheck(this, IoAndroidPlaystore);

        return _possibleConstructorReturn(this, (IoAndroidPlaystore.__proto__ || Object.getPrototypeOf(IoAndroidPlaystore)).apply(this, arguments));
    }

    _createClass(IoAndroidPlaystore, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm36 11.9c-1.5 16.7-1 24.4-1 24.4h-30.5s0.5-7.5-1-24.4h8.1c0-4.5 3.7-8.1 8.1-8.1s8.2 3.6 8.2 8.1h8.1z m-16.2-6.1c-3.4 0-6.1 2.7-6.1 6.1h12.1c0-3.4-2.7-6.1-6-6.1z m-4.1 25.3l11.2-6.6-11.2-6.6v13.2z' })
                )
            );
        }
    }]);

    return IoAndroidPlaystore;
}(React.Component);

exports.default = IoAndroidPlaystore;
module.exports = exports['default'];