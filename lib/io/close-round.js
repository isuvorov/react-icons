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

var IoCloseRound = function (_React$Component) {
    _inherits(IoCloseRound, _React$Component);

    function IoCloseRound() {
        _classCallCheck(this, IoCloseRound);

        return _possibleConstructorReturn(this, (IoCloseRound.__proto__ || Object.getPrototypeOf(IoCloseRound)).apply(this, arguments));
    }

    _createClass(IoCloseRound, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm34.2 30.2c1.1 1.1 1.1 2.9 0 4s-2.9 1.1-4 0l-10.2-10.2-10.2 10.2c-1.1 1.1-2.8 1.1-3.9 0s-1.1-2.9 0-4l10.1-10.2-10.1-10.2c-1.1-1.1-1.1-2.9 0-4s2.8-1.1 3.9 0l10.2 10.2 10.2-10.2c1.1-1.1 2.9-1.1 4 0s1.1 2.9 0 4l-10.2 10.2z' })
                )
            );
        }
    }]);

    return IoCloseRound;
}(React.Component);

exports.default = IoCloseRound;
module.exports = exports['default'];