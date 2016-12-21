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

var TiStarburstOutline = function (_React$Component) {
    _inherits(TiStarburstOutline, _React$Component);

    function TiStarburstOutline() {
        _classCallCheck(this, TiStarburstOutline);

        return _possibleConstructorReturn(this, (TiStarburstOutline.__proto__ || Object.getPrototypeOf(TiStarburstOutline)).apply(this, arguments));
    }

    _createClass(TiStarburstOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35.9 18.6l-3.1-2 1.7-3.4c0.2-0.5 0.2-1.1-0.1-1.5-0.2-0.5-0.7-0.8-1.3-0.9l-3.7-0.2-0.2-3.7c-0.1-0.6-0.4-1.1-0.9-1.3-0.5-0.3-1-0.3-1.5-0.1l-3.4 1.7-2-3.1c-0.6-1-2.2-1-2.8 0l-2 3.1-3.4-1.7c-0.5-0.2-1.1-0.2-1.5 0.1-0.5 0.2-0.8 0.7-0.9 1.3l-0.2 3.7-3.7 0.2c-0.6 0.1-1.1 0.4-1.3 0.9s-0.3 1-0.1 1.5l1.7 3.4-3.1 2c-0.5 0.3-0.8 0.8-0.8 1.4s0.3 1.1 0.8 1.4l3.1 2-1.7 3.4c-0.2 0.5-0.2 1.1 0.1 1.5s0.7 0.8 1.3 0.9l3.7 0.2 0.2 3.7c0.1 0.6 0.4 1.1 0.9 1.3s1 0.3 1.5 0.1l3.4-1.7 2 3.1c0.3 0.5 0.8 0.8 1.4 0.8s1.1-0.3 1.4-0.8l2-3.1 3.4 1.7c0.5 0.2 1 0.2 1.5-0.1 0.5-0.2 0.8-0.7 0.9-1.3l0.2-3.7 3.7-0.2c0.6-0.1 1.1-0.4 1.3-0.9s0.3-1 0.1-1.5l-1.7-3.4 3.1-2c0.5-0.3 0.8-0.8 0.8-1.4s-0.3-1.1-0.8-1.4z m-6.7 5l1.2 2.4-2.7 0.2c-0.8 0-1.5 0.7-1.5 1.5l-0.2 2.7-2.4-1.2c-0.7-0.4-1.7-0.1-2.1 0.6l-1.5 2.2-1.5-2.2c-0.3-0.5-0.8-0.8-1.4-0.8-0.2 0-0.5 0.1-0.7 0.2l-2.4 1.2-0.2-2.7c0-0.8-0.7-1.5-1.5-1.5l-2.7-0.2 1.2-2.4c0.4-0.7 0.1-1.7-0.6-2.1l-2.2-1.5 2.2-1.5c0.7-0.4 1-1.4 0.6-2.1l-1.2-2.4 2.7-0.2c0.8 0 1.5-0.7 1.5-1.5l0.2-2.7 2.4 1.2c0.7 0.4 1.7 0.1 2.1-0.6l1.5-2.2 1.5 2.2c0.4 0.7 1.4 1 2.1 0.6l2.4-1.2 0.2 2.7c0 0.8 0.7 1.5 1.5 1.5l2.7 0.2-1.2 2.4c-0.4 0.8-0.1 1.7 0.6 2.1l2.2 1.5-2.2 1.5c-0.7 0.4-1 1.4-0.6 2.1z' })
                )
            );
        }
    }]);

    return TiStarburstOutline;
}(React.Component);

exports.default = TiStarburstOutline;
module.exports = exports['default'];