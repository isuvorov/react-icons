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

var TiLightbulb = function (_React$Component) {
    _inherits(TiLightbulb, _React$Component);

    function TiLightbulb() {
        _classCallCheck(this, TiLightbulb);

        return _possibleConstructorReturn(this, (TiLightbulb.__proto__ || Object.getPrototypeOf(TiLightbulb)).apply(this, arguments));
    }

    _createClass(TiLightbulb, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20.8 9.2c-0.4 0-0.8 0.3-0.8 0.8s0.4 0.8 0.8 0.8c1.8 0 3.3 1.5 3.3 3.3 0 0.5 0.4 0.8 0.8 0.8s0.9-0.3 0.9-0.8c0-2.7-2.2-4.9-5-4.9z m0-7.5c-6.9 0-12.5 5.6-12.5 12.5 0 2.4 0.8 4.8 2.2 6.9 0 0.1 0 0.2 0.1 0.2 3 4.4 3.6 5.8 3.6 7v5c0 1 0.7 1.7 1.6 1.7h3.4c0 0.4 0.1 0.9 0.4 1.2 0.4 0.3 0.8 0.5 1.2 0.5s0.9-0.2 1.2-0.5c0.3-0.3 0.5-0.8 0.5-1.2h3.3c0.9 0 1.7-0.7 1.7-1.7v-5c0-1.3 0.5-2.6 3.6-7 1.4-2.1 2.2-4.6 2.2-7.1 0-6.9-5.6-12.5-12.5-12.5z m3.4 30h-6.7v-1.7h6.7v1.7z m4.1-12.3c-2.4 3.5-3.5 5.5-4 7.3h-1.8v-3.4c0-0.9-0.7-1.6-1.7-1.6s-1.6 0.7-1.6 1.6v3.4h-1.9c-0.4-1.7-1.5-3.7-3.8-7.1-0.1 0-0.1-0.1-0.2-0.2-1.1-1.5-1.6-3.4-1.6-5.2 0-5.1 4.1-9.2 9.1-9.2s9.2 4.1 9.2 9.2c0 1.8-0.6 3.7-1.7 5.2z' })
                )
            );
        }
    }]);

    return TiLightbulb;
}(React.Component);

exports.default = TiLightbulb;
module.exports = exports['default'];