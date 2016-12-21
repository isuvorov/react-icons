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

var IoWineglass = function (_React$Component) {
    _inherits(IoWineglass, _React$Component);

    function IoWineglass() {
        _classCallCheck(this, IoWineglass);

        return _possibleConstructorReturn(this, (IoWineglass.__proto__ || Object.getPrototypeOf(IoWineglass)).apply(this, arguments));
    }

    _createClass(IoWineglass, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm23 23c-0.8 0.4-1.8 0.7-1.8 2.5v7.4c0 0.9 0.3 1.5 0.9 1.9 0.2 0.2 0.6 0.4 1.2 0.5 2.5 0.7 3.7 1.3 3.9 1.4 0.1 0.1 0.3 0.3 0.3 0.6 0 0-1.1 0.2-7.5 0.2s-7.5-0.2-7.5-0.2c0-0.3 0.2-0.5 0.3-0.6 0.2-0.1 1.4-0.7 3.9-1.4 0.6-0.1 0.9-0.3 1.1-0.5 0.6-0.4 0.9-1.1 0.9-1.9v-7.4c0-1.8-0.9-2.1-1.7-2.5s-1.5-0.4-2.1-0.8c-0.9-0.6-1.8-1.3-2.5-2-1.5-1.8-2.4-4.1-2.4-6.8 0-3.9 0.3-7.9 0.6-8.9s1.1-2 2.4-2h14c1.3 0 2.1 0.9 2.4 2s0.6 5 0.6 8.9c0 2.8-0.9 5-2.4 6.8-0.7 0.7-1.6 1.4-2.5 2-0.6 0.4-1.2 0.5-2.1 0.8z m-3-1.9c2 0 3.9-0.9 5.2-2.2l0.5-0.5c1.3-1.4 1.7-2.7 1.8-5s-0.2-6.5-0.6-8.4h-13.9c-0.5 2.7-0.6 6.2-0.5 8.4s0.5 3.6 1.8 5c0.2 0.3 0.3 0.5 0.5 0.7 1.4 1.2 3.2 2 5.2 2z m6.3-7.7c0 0.7-0.1 1.5-0.4 2.2s-0.6 1.4-1.1 2l-0.4 0.4c-1.1 1.1-2.7 1.8-4.4 1.8-1.6 0-3.2-0.7-4.3-1.8l-0.5-0.4c-0.5-0.6-0.9-1.3-1.1-2s-0.3-1.1-0.4-2.2c0-0.7 0-2.7 0.1-4.2 0.1-0.8 0.2-1.5 0.3-1.7h11.9c0.1 0.5 0.2 1.1 0.2 1.7 0 1.7 0 3.5 0 4.2z m-1.3 0.6v-2c0-0.4-0.3-0.7-0.6-0.7s-0.6 0.3-0.6 0.7v2c0 0.2 0 0.5 0.2 0.5 0.1 0.1 0.2 0.1 0.4 0.1 0.3 0 0.6-0.2 0.6-0.6z m-0.1-3.7c0.1-0.1 0.1-0.3 0.1-0.5s-0.2-0.3-0.3-0.3-0.3-0.1-0.5-0.1-0.3 0.1-0.4 0.2-0.1 0.3-0.1 0.5 0.2 0.3 0.4 0.4 0.3 0 0.4 0 0.3 0 0.4-0.2z' })
                )
            );
        }
    }]);

    return IoWineglass;
}(React.Component);

exports.default = IoWineglass;
module.exports = exports['default'];