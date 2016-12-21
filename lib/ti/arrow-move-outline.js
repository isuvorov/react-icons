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

var TiArrowMoveOutline = function (_React$Component) {
    _inherits(TiArrowMoveOutline, _React$Component);

    function TiArrowMoveOutline() {
        _classCallCheck(this, TiArrowMoveOutline);

        return _possibleConstructorReturn(this, (TiArrowMoveOutline.__proto__ || Object.getPrototypeOf(TiArrowMoveOutline)).apply(this, arguments));
    }

    _createClass(TiArrowMoveOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm38 17.6l-15.6-15.6c-0.7-0.7-1.5-1-2.4-1s-1.7 0.3-2.4 1l-15.6 15.6c-1.3 1.3-1.3 3.5 0 4.8l15.6 15.6c0.7 0.7 1.5 1 2.4 1s1.7-0.3 2.4-1l15.6-15.6c1.3-1.3 1.3-3.5 0-4.8z m-9.7 9.1c-0.4 0-0.8-0.2-1.1-0.5-0.7-0.7-0.7-1.7 0-2.4l2.1-2.1h-7.6v7.6l2.1-2.1c0.3-0.4 0.8-0.5 1.2-0.5s0.9 0.1 1.2 0.5c0.6 0.6 0.6 1.7 0 2.3l-6.2 6.2-6.2-6.2c-0.6-0.6-0.6-1.7 0-2.3 0.3-0.4 0.8-0.5 1.2-0.5s0.9 0.1 1.2 0.5l2.1 2.1v-7.6h-7.6l2.1 2.1c0.7 0.7 0.7 1.7 0 2.4-0.3 0.3-0.7 0.5-1.1 0.5s-0.9-0.2-1.2-0.5l-6.2-6.2 6.2-6.2c0.3-0.3 0.7-0.5 1.2-0.5s0.8 0.2 1.1 0.5c0.7 0.7 0.7 1.7 0 2.4l-2.1 2.1h7.6v-7.6l-2.1 2.1c-0.3 0.4-0.8 0.5-1.2 0.5s-0.9-0.1-1.2-0.5c-0.6-0.6-0.6-1.7 0-2.3l6.2-6.2 6.2 6.2c0.6 0.6 0.6 1.7 0 2.3-0.3 0.4-0.8 0.5-1.2 0.5s-0.9-0.1-1.2-0.5l-2.1-2.1v7.6h7.6l-2.1-2.1c-0.7-0.7-0.7-1.7 0-2.4 0.3-0.3 0.7-0.5 1.1-0.5s0.9 0.2 1.2 0.5l6.2 6.2-6.2 6.2c-0.3 0.3-0.7 0.5-1.2 0.5z m-2.9-3.4c-0.2 0.5-0.4 1.1-0.4 1.7-0.6 0-1.2 0.2-1.7 0.4v-2.1h2.1z m-10.8 0h2.1v2.1c-0.5-0.2-1.1-0.4-1.7-0.4 0-0.6-0.2-1.2-0.4-1.7z m0-6.6c0.2-0.5 0.4-1.1 0.4-1.7 0.6 0 1.2-0.2 1.7-0.4v2.1h-2.1z m10.8 0h-2.1v-2.1c0.5 0.2 1.1 0.4 1.7 0.4 0 0.6 0.2 1.2 0.4 1.7z' })
                )
            );
        }
    }]);

    return TiArrowMoveOutline;
}(React.Component);

exports.default = TiArrowMoveOutline;
module.exports = exports['default'];