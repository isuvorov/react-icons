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

var IoClose = function (_React$Component) {
    _inherits(IoClose, _React$Component);

    function IoClose() {
        _classCallCheck(this, IoClose);

        return _possibleConstructorReturn(this, (IoClose.__proto__ || Object.getPrototypeOf(IoClose)).apply(this, arguments));
    }

    _createClass(IoClose, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm34.7 30.2c0.2 0.3 0.3 0.5 0.3 0.8s-0.1 0.6-0.3 0.8l-3 2.9c-0.2 0.2-0.4 0.3-0.7 0.3s-0.5-0.1-0.8-0.3l-10.2-10.2-10.2 10.2c-0.3 0.2-0.4 0.3-0.7 0.3s-0.6-0.1-0.8-0.3l-3-2.9c-0.2-0.2-0.3-0.5-0.3-0.8s0.1-0.5 0.3-0.8l10.3-10.2-10.3-10.2c-0.4-0.3-0.4-1.1 0-1.5l2.9-3c0.2-0.1 0.5-0.3 0.8-0.3s0.5 0.1 0.8 0.3l10.2 10.2 10.2-10.2c0.3-0.1 0.5-0.3 0.8-0.3s0.6 0.1 0.8 0.3l2.9 3c0.4 0.4 0.4 1.1 0 1.5l-10.3 10.1z' })
                )
            );
        }
    }]);

    return IoClose;
}(React.Component);

exports.default = IoClose;
module.exports = exports['default'];