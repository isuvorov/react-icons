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

var TiWorldOutline = function (_React$Component) {
    _inherits(TiWorldOutline, _React$Component);

    function TiWorldOutline() {
        _classCallCheck(this, TiWorldOutline);

        return _possibleConstructorReturn(this, (TiWorldOutline.__proto__ || Object.getPrototypeOf(TiWorldOutline)).apply(this, arguments));
    }

    _createClass(TiWorldOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 3.3c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z m0 10c0-0.9 0.7-1.6 1.7-1.6s1.6 0.7 1.6 1.6v5c-0.9 0-1.6 0.8-1.6 1.7s0.7 1.7 1.6 1.7c1 0 1.7-0.8 1.7-1.7h1.7v-3.3l1.6 1.6-1.6 1.7c0 5 0 5-3.4 6.7 0-1.7-1.6-1.7-5-1.7v-3.3l-3.3-3.4v-3.3c-1.7 0-1.7 1.7-1.7 1.7l-3.7-3.7c2-3.8 5.9-6.3 10.4-6.3 1.1 0 2.3 0.1 3.3 0.5-0.1 1.4-1 2.8-2.5 2.8-1.6 0-2.5 1.7-2.5 3.3v5s1.7 0 1.7-5z m0 16.7c-6.4 0-11.7-5.2-11.7-11.7 0-1.3 0.3-2.5 0.6-3.7l7.8 7.8v2.6c0 0.9 0.7 1.7 1.6 1.7 1.3 0 2.8 0 3.4 0.1 0 0.5 0.3 1 0.8 1.3 0.2 0.1 0.6 0.2 0.9 0.2 0.2 0 0.5 0 0.7-0.1 3.9-2 4.2-2.8 4.2-7.5l1.2-1.2c0.7-0.6 0.7-1.7 0-2.3l-1.7-1.7c-0.3-0.3-0.7-0.5-1.1-0.5-0.2 0-0.5 0-0.7 0.1-0.6 0.3-1 0.9-1 1.6v-3.4c0-1.1-0.6-2.1-1.5-2.7 0.7-0.7 1.2-1.7 1.4-2.8 4 1.8 6.8 5.9 6.8 10.5 0 6.5-5.3 11.7-11.7 11.7z' })
                )
            );
        }
    }]);

    return TiWorldOutline;
}(React.Component);

exports.default = TiWorldOutline;
module.exports = exports['default'];