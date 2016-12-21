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

var IoUmbrella = function (_React$Component) {
    _inherits(IoUmbrella, _React$Component);

    function IoUmbrella() {
        _classCallCheck(this, IoUmbrella);

        return _possibleConstructorReturn(this, (IoUmbrella.__proto__ || Object.getPrototypeOf(IoUmbrella)).apply(this, arguments));
    }

    _createClass(IoUmbrella, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm26.9 22.5z m-18.8 0z m10.7-18.7c9 0.7 16.2 8.5 16.2 17.8v0.9c-0.3-2-2-4.1-4.1-4.1-2.2 0-4 1.8-4 4.1 0-2.3-1.8-4.1-4.1-4.1s-3.8 1-4.1 3.6v10.5c0 1.3-0.4 2.6-1.4 3.5s-2.2 1.5-3.6 1.5c-2.7 0-4.9-2.3-4.9-5 0-0.7 0.6-1.2 1.3-1.2s1.2 0.5 1.2 1.2c0 1.4 1.1 2.5 2.4 2.5 1.5 0 2.5-1.1 2.5-2.5v-10.5c0-1.8-2-3.6-4-3.6-2.3 0-4.1 1.8-4.1 4.1 0-2.3-1.8-4.1-4-4.1-2.2 0-3.9 2.1-4.1 4.1v-1.4c0-9.2 7.2-16.6 16.2-17.3v0c0-0.8 0.6-1.3 1.3-1.3s1.2 0.5 1.2 1.3v0z' })
                )
            );
        }
    }]);

    return IoUmbrella;
}(React.Component);

exports.default = IoUmbrella;
module.exports = exports['default'];