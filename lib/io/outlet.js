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

var IoOutlet = function (_React$Component) {
    _inherits(IoOutlet, _React$Component);

    function IoOutlet() {
        _classCallCheck(this, IoOutlet);

        return _possibleConstructorReturn(this, (IoOutlet.__proto__ || Object.getPrototypeOf(IoOutlet)).apply(this, arguments));
    }

    _createClass(IoOutlet, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm26.4 2.5c4.8 0 8.6 4 8.6 8.8v17.4c0 4.8-3.8 8.8-8.6 8.8h-17.8c-4.8 0-8.6-4-8.6-8.8v-17.4c0-4.8 3.8-8.8 8.6-8.8h17.8z m-15.2 17.1v-8c0-0.8-0.7-1.6-1.6-1.6h-1.8c-0.9 0-1.5 0.7-1.6 1.6v8.1c0 0.8 0.7 1.5 1.6 1.5h1.8c0.9 0 1.6-0.7 1.6-1.5v-0.1z m9.5 11.3v-2.2c0-1.8-1.4-3.3-3.2-3.3s-3.2 1.5-3.2 3.3v2.2c0 0.9 0.7 1.6 1.6 1.6h3.2c0.9 0 1.6-0.5 1.6-1.4v-0.2z m8.1-11.3v-8c0-0.8-0.8-1.6-1.6-1.6h-1.9c-0.8 0-1.5 0.7-1.6 1.6v8.1c0 0.8 0.8 1.5 1.6 1.5h1.9c0.8 0 1.5-0.7 1.5-1.5v-0.1z' })
                )
            );
        }
    }]);

    return IoOutlet;
}(React.Component);

exports.default = IoOutlet;
module.exports = exports['default'];