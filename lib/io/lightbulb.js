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

var IoLightbulb = function (_React$Component) {
    _inherits(IoLightbulb, _React$Component);

    function IoLightbulb() {
        _classCallCheck(this, IoLightbulb);

        return _possibleConstructorReturn(this, (IoLightbulb.__proto__ || Object.getPrototypeOf(IoLightbulb)).apply(this, arguments));
    }

    _createClass(IoLightbulb, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 2.5c5.5 0 10 4.4 10 9.7 0 0.4 0 0.7-0.1 1.1s-0.1 0.8-0.2 1.2v0.2c-1.3 4.9-3.5 5.5-4.6 13v0.1c-0.2 0.7-0.8 1-1.6 1h-7c-0.8 0-1.4-0.3-1.6-1v-0.1c-1.1-7.5-3.3-8.1-4.6-13v-0.2c-0.1-0.4-0.1-0.8-0.2-1.2s-0.1-0.7-0.1-1.1c0-5.3 4.5-9.7 10-9.7z m4.8 28.4v0.1c-0.1 0.3-0.2 0.3-0.2 0.6s0.1 0.4 0.2 0.6v0.1c0.1 0.1 0.2 0.2 0.2 0.4s-0.1 0.3-0.2 0.4v0.1c-0.1 0.2-0.2 0.3-0.2 0.6s0.1 0.3 0.2 0.6v0.1c0.1 0.1 0.2 0.3 0.2 0.4 0 0.4-0.3 0.7-0.8 0.9h-0.1c-0.4 0.1-1 0.1-1.4 0.2h-0.2c-0.5 0.1-0.9 0.4-1.1 0.7-0.3 0.4-0.8 0.8-1.4 0.8s-1.2-0.5-1.5-0.9c-0.2-0.3-0.5-0.5-1-0.6h-0.2c-0.4-0.1-1-0.1-1.4-0.2h-0.1c-0.5-0.2-0.8-0.5-0.8-0.9 0-0.1 0.1-0.3 0.2-0.4v-0.1c0.1-0.2 0.2-0.3 0.2-0.6s-0.1-0.4-0.2-0.6v-0.1c-0.1-0.1-0.2-0.3-0.2-0.4s0.1-0.3 0.2-0.4v-0.1c0.1-0.2 0.2-0.4 0.2-0.6s-0.1-0.4-0.2-0.6v-0.1c-0.1-0.1-0.2-0.3-0.2-0.4 0-0.3-0.1-0.5 0.6-0.5h8.9c0.6 0 0.5 0.2 0.5 0.5 0 0.1-0.1 0.3-0.2 0.4z' })
                )
            );
        }
    }]);

    return IoLightbulb;
}(React.Component);

exports.default = IoLightbulb;
module.exports = exports['default'];