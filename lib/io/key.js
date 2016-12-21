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

var IoKey = function (_React$Component) {
    _inherits(IoKey, _React$Component);

    function IoKey() {
        _classCallCheck(this, IoKey);

        return _possibleConstructorReturn(this, (IoKey.__proto__ || Object.getPrototypeOf(IoKey)).apply(this, arguments));
    }

    _createClass(IoKey, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm23.8 23.5c2.1 1.3 3.7 3.8 3.7 6.5 0 4.1-3.4 7.5-7.5 7.5s-7.5-3.4-7.5-7.5c0-2.8 1.5-5.2 3.8-6.6 0 0 0.5-1.2 0.9-3.2 0-0.3 0.8-0.4 0.8-0.9v-1.6c0-0.4-0.5-0.7-0.5-0.8v-1.3c0-0.1 0-0.3 0.1-0.4 0-0.1 0.1-0.1 0.1-0.2l0.1-0.1 0.3-0.3v-0.1c0.2-0.1 0.3-0.3 0.3-0.4 0-0.1 0-0.7 0-0.7 0-0.3-0.1-0.5-0.3-0.7l-0.4-0.4c-0.2-0.2-0.3-0.4-0.3-0.7v-0.5c0-0.2 0.2-0.6 0.3-0.7l0.4-0.4c0.2-0.2 0.3-0.2 0.3-0.5v-1.8c0-0.3-0.1-0.5-0.3-0.7v0l-0.4-0.4c-0.1-0.2-0.2-0.4-0.2-0.7v-1.4c0-0.8 0-1.5 0.7-1.8 0.2 0 1.1-0.2 1.8-0.2 1.6 0 2.3 0.6 2.5 2.8 0 0 0.5 6.3 0.7 11.2s0.6 7 0.6 7z m-3.8 11.5c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z' })
                )
            );
        }
    }]);

    return IoKey;
}(React.Component);

exports.default = IoKey;
module.exports = exports['default'];