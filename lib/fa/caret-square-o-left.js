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

var FaCaretSquareOLeft = function (_React$Component) {
    _inherits(FaCaretSquareOLeft, _React$Component);

    function FaCaretSquareOLeft() {
        _classCallCheck(this, FaCaretSquareOLeft);

        return _possibleConstructorReturn(this, (FaCaretSquareOLeft.__proto__ || Object.getPrototypeOf(FaCaretSquareOLeft)).apply(this, arguments));
    }

    _createClass(FaCaretSquareOLeft, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm25.9 12.9v14.2q0 0.6-0.5 1t-1 0.5q-0.4 0-0.8-0.3l-10-7.1q-0.6-0.5-0.6-1.2t0.6-1.2l10-7.1q0.4-0.3 0.8-0.3 0.6 0 1 0.5t0.5 1z m5.7 17.8v-21.4q0-0.3-0.2-0.5t-0.5-0.2h-21.5q-0.3 0-0.5 0.2t-0.2 0.5v21.4q0 0.3 0.2 0.5t0.5 0.2h21.5q0.2 0 0.5-0.2t0.2-0.5z m5.7-21.4v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z' })
                )
            );
        }
    }]);

    return FaCaretSquareOLeft;
}(React.Component);

exports.default = FaCaretSquareOLeft;
module.exports = exports['default'];