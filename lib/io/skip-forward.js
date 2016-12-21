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

var IoSkipForward = function (_React$Component) {
    _inherits(IoSkipForward, _React$Component);

    function IoSkipForward() {
        _classCallCheck(this, IoSkipForward);

        return _possibleConstructorReturn(this, (IoSkipForward.__proto__ || Object.getPrototypeOf(IoSkipForward)).apply(this, arguments));
    }

    _createClass(IoSkipForward, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm34.1 7.5c0.5 0 0.9 0.4 0.9 0.9v23.2c0 0.5-0.4 0.9-0.9 0.9h-0.7c-0.5 0-0.9-0.4-0.9-0.9v-8.9l-14.6 9.6c-0.2 0.1-0.4 0.2-0.6 0.2-0.7 0-1.2-0.5-1.2-1.3v-5l-9.3 6.1c-0.2 0.1-0.4 0.2-0.6 0.2-0.7 0-1.2-0.5-1.2-1.3v-22.4c0-0.8 0.5-1.3 1.2-1.3 0.2 0 0.4 0 0.6 0.2l9.3 6.1v-5c0-0.8 0.5-1.3 1.2-1.3 0.2 0 0.4 0.1 0.6 0.2l14.6 9.6v-8.9c0-0.5 0.4-0.9 0.9-0.9h0.7z' })
                )
            );
        }
    }]);

    return IoSkipForward;
}(React.Component);

exports.default = IoSkipForward;
module.exports = exports['default'];