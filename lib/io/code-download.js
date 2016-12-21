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

var IoCodeDownload = function (_React$Component) {
    _inherits(IoCodeDownload, _React$Component);

    function IoCodeDownload() {
        _classCallCheck(this, IoCodeDownload);

        return _possibleConstructorReturn(this, (IoCodeDownload.__proto__ || Object.getPrototypeOf(IoCodeDownload)).apply(this, arguments));
    }

    _createClass(IoCodeDownload, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm23.4 22.2l-5 5-0.2 0.1-0.1 0-0.1 0.1h-0.2c-0.1 0-0.2 0.1-0.3 0.1s-0.2-0.1-0.3-0.1h-0.2l-0.1-0.1-0.1 0c-0.1-0.1-0.2-0.1-0.2-0.2l-5-4.9c-0.4-0.5-0.4-1.3 0-1.8s1.4-0.5 1.9 0l2.8 2.6v-9.2c0-0.7 0.5-1.3 1.2-1.3s1.3 0.6 1.3 1.3v9.2l2.7-2.6c0.5-0.5 1.4-0.5 1.9 0s0.4 1.3 0 1.8z m-12.8 8.4c-0.4 0-0.9-0.1-1.3-0.5l-8.8-8.8c-0.7-0.7-0.7-1.9 0-2.6l8.8-8.8c0.7-0.7 2-0.7 2.7 0s0.7 2 0 2.7l-7.5 7.4 7.5 7.4c0.7 0.7 0.7 2 0 2.7-0.4 0.4-0.9 0.5-1.4 0.5z m13.8 0c-0.5 0-1-0.1-1.4-0.5-0.7-0.7-0.7-2 0-2.7l7.5-7.4-7.5-7.4c-0.7-0.7-0.7-2 0-2.7s2-0.7 2.7 0l8.8 8.8c0.7 0.7 0.7 1.9 0 2.6l-8.8 8.8c-0.4 0.4-0.9 0.5-1.3 0.5z' })
                )
            );
        }
    }]);

    return IoCodeDownload;
}(React.Component);

exports.default = IoCodeDownload;
module.exports = exports['default'];