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

var IoEyeDisabled = function (_React$Component) {
    _inherits(IoEyeDisabled, _React$Component);

    function IoEyeDisabled() {
        _classCallCheck(this, IoEyeDisabled);

        return _possibleConstructorReturn(this, (IoEyeDisabled.__proto__ || Object.getPrototypeOf(IoEyeDisabled)).apply(this, arguments));
    }

    _createClass(IoEyeDisabled, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm26.9 12.3c3.2 2.2 5.9 5.2 8.1 7.9-4 4.2-9.7 10.5-17.5 10.5-2.8 0-5.1-0.6-7.2-1.7l-6 6-1.8-1.8 5.5-5.5c-2.8-2-5.3-4.8-8-7.7 6.1-6.6 11.1-10.7 17.5-10.7 2.7 0 5 0.7 7.2 1.8l6-6.1 1.8 1.8z m-16.4 7.7c0 1.5 0.4 2.8 1.2 4l2.1-2.1c-0.3-0.6-0.4-1.2-0.4-1.9 0-2.3 1.8-4.1 4.1-4.1h0.6c-0.4 0.4-0.6 1-0.6 1.6 0 0.2 0 0.4 0.1 0.6l4-3.9c-1.2-0.8-2.6-1.3-4.1-1.3-3.8 0-7 3.2-7 7.1z m7 7.1c3.8 0 7-3.2 7-7.1 0-1.5-0.4-2.9-1.2-4.1l-3.9 4c0.2 0.1 0.4 0.1 0.6 0.1 0.6 0 1.1-0.2 1.6-0.5v0.5c0 2.3-1.8 4.1-4.1 4.1-0.7 0-1.3-0.1-1.9-0.4l-2.2 2.1c1.2 0.8 2.6 1.3 4.1 1.3z' })
                )
            );
        }
    }]);

    return IoEyeDisabled;
}(React.Component);

exports.default = IoEyeDisabled;
module.exports = exports['default'];