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

var TiMessageTyping = function (_React$Component) {
    _inherits(TiMessageTyping, _React$Component);

    function TiMessageTyping() {
        _classCallCheck(this, TiMessageTyping);

        return _possibleConstructorReturn(this, (TiMessageTyping.__proto__ || Object.getPrototypeOf(TiMessageTyping)).apply(this, arguments));
    }

    _createClass(TiMessageTyping, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30 10h-21.7c-2.7 0-5 2.3-5 5v11.7c0 2.7 2.3 5 5 5h1.7v5l5-5h15c2.8 0 5-2.3 5-5v-11.7c0-2.7-2.2-5-5-5z m1.7 16.7c0 0.9-0.8 1.6-1.7 1.6h-21.7c-0.9 0-1.6-0.7-1.6-1.6v-11.7c0-0.9 0.7-1.7 1.6-1.7h21.7c0.9 0 1.7 0.8 1.7 1.7v11.7z m-20-2.5c-1.9 0-3.4-1.5-3.4-3.4s1.5-3.3 3.4-3.3 3.3 1.5 3.3 3.3-1.5 3.4-3.3 3.4z m0-5c-1 0-1.7 0.7-1.7 1.6s0.7 1.7 1.7 1.7 1.6-0.7 1.6-1.7-0.7-1.6-1.6-1.6z m7.5 5c-1.9 0-3.4-1.5-3.4-3.4s1.5-3.3 3.4-3.3 3.3 1.5 3.3 3.3-1.5 3.4-3.3 3.4z m0-5c-1 0-1.7 0.7-1.7 1.6s0.7 1.7 1.7 1.7 1.6-0.7 1.6-1.7-0.7-1.6-1.6-1.6z m7.5 5c-1.9 0-3.4-1.5-3.4-3.4s1.5-3.3 3.4-3.3 3.3 1.5 3.3 3.3-1.5 3.4-3.3 3.4z m0-5c-1 0-1.7 0.7-1.7 1.6s0.7 1.7 1.7 1.7 1.6-0.7 1.6-1.7-0.7-1.6-1.6-1.6z' })
                )
            );
        }
    }]);

    return TiMessageTyping;
}(React.Component);

exports.default = TiMessageTyping;
module.exports = exports['default'];