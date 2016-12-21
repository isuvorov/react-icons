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

var TiBackspaceOutline = function (_React$Component) {
    _inherits(TiBackspaceOutline, _React$Component);

    function TiBackspaceOutline() {
        _classCallCheck(this, TiBackspaceOutline);

        return _possibleConstructorReturn(this, (TiBackspaceOutline.__proto__ || Object.getPrototypeOf(TiBackspaceOutline)).apply(this, arguments));
    }

    _createClass(TiBackspaceOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.7 35h-16.7c-2.4 0-5.2-1.5-6.6-3.4l-4.4-6.1c-1-1.5-1.9-2.7-2-2.8-0.4-0.6-0.4-1.5 0-2.1 0 0 0.9-1.3 2-2.8l4.4-6.1c1.4-1.9 4.2-3.4 6.6-3.4h16.7c2.7 0 5 2.3 5 5v16.7c0 2.8-2.3 5-5 5z m-26.3-13.3c0.3 0.5 0.8 1.1 1.3 1.8l4.4 6.2c0.7 1 2.6 2 3.9 2h16.7c0.9 0 1.6-0.8 1.6-1.7v-16.7c0-0.9-0.7-1.6-1.6-1.6h-16.7c-1.3 0-3.2 0.9-3.9 2l-4.4 6.1-1.3 1.9z m17.4 0l4.5-4.4c0.3-0.4 0.3-0.9 0-1.2-0.4-0.3-0.9-0.3-1.2 0l-4.4 4.4-4.4-4.4c-0.4-0.3-0.9-0.3-1.2 0-0.3 0.3-0.3 0.8 0 1.2l4.4 4.4-4.4 4.4c-0.3 0.3-0.3 0.8 0 1.2 0.1 0.1 0.4 0.2 0.6 0.2s0.4-0.1 0.6-0.2l4.4-4.5 4.4 4.5c0.1 0.1 0.4 0.2 0.6 0.2s0.4-0.1 0.6-0.2c0.3-0.4 0.3-0.9 0-1.2l-4.5-4.4z' })
                )
            );
        }
    }]);

    return TiBackspaceOutline;
}(React.Component);

exports.default = TiBackspaceOutline;
module.exports = exports['default'];