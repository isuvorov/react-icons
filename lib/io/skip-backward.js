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

var IoSkipBackward = function (_React$Component) {
    _inherits(IoSkipBackward, _React$Component);

    function IoSkipBackward() {
        _classCallCheck(this, IoSkipBackward);

        return _possibleConstructorReturn(this, (IoSkipBackward.__proto__ || Object.getPrototypeOf(IoSkipBackward)).apply(this, arguments));
    }

    _createClass(IoSkipBackward, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm5.9 7.5h0.7c0.5 0 0.9 0.4 0.9 0.9v8.9l14.6-9.6c0.2-0.1 0.4-0.2 0.6-0.2 0.7 0 1.3 0.5 1.3 1.3v5l9.2-6.1c0.2-0.2 0.4-0.2 0.6-0.2 0.7 0 1.2 0.6 1.2 1.3v22.4c0 0.8-0.5 1.3-1.2 1.3-0.2 0-0.4-0.1-0.6-0.2l-9.2-6.1v5c0 0.8-0.6 1.3-1.3 1.3-0.2 0-0.4-0.1-0.6-0.2l-14.6-9.6v8.9c0 0.5-0.4 0.9-0.9 0.9h-0.7c-0.5 0-0.9-0.4-0.9-0.9v-23.2c0-0.5 0.4-0.9 0.9-0.9z' })
                )
            );
        }
    }]);

    return IoSkipBackward;
}(React.Component);

exports.default = IoSkipBackward;
module.exports = exports['default'];