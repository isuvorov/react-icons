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

var IoAndroidDownload = function (_React$Component) {
    _inherits(IoAndroidDownload, _React$Component);

    function IoAndroidDownload() {
        _classCallCheck(this, IoAndroidDownload);

        return _possibleConstructorReturn(this, (IoAndroidDownload.__proto__ || Object.getPrototypeOf(IoAndroidDownload)).apply(this, arguments));
    }

    _createClass(IoAndroidDownload, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.2 17c4.1 0.2 7.3 3.5 7.3 7.7 0 4.3-3.5 7.8-7.8 7.8h-20.3c-5.2 0-9.4-4.2-9.4-9.4 0-4.8 3.7-8.8 8.4-9.3 1.9-3.7 5.8-6.3 10.3-6.3 5.8 0 10.4 4.1 11.5 9.5z m-13.9 3.9h-5.4l7.9 7.9 7.8-7.9h-5.3v-5.9h-5v5.9z' })
                )
            );
        }
    }]);

    return IoAndroidDownload;
}(React.Component);

exports.default = IoAndroidDownload;
module.exports = exports['default'];