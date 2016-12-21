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

var IoEmail = function (_React$Component) {
    _inherits(IoEmail, _React$Component);

    function IoEmail() {
        _classCallCheck(this, IoEmail);

        return _possibleConstructorReturn(this, (IoEmail.__proto__ || Object.getPrototypeOf(IoEmail)).apply(this, arguments));
    }

    _createClass(IoEmail, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm5 11.6c-0.3-0.1-0.9-0.5-1-0.8-0.3-0.6 0-0.8 0.9-0.8h29.9c0.8 0 1.1 0.2 0.9 0.8-0.2 0.3-0.7 0.7-1 0.8-0.9 0.5-12.8 7-13.2 7.2s-1 0.3-1.7 0.3-1.1 0-1.6-0.3-12.4-6.7-13.2-7.2z m30.4 0.4c0.7-0.4 0.6 0 0.6 0.3v16.1c0 0.7-0.9 1.6-1.7 1.6h-28.9c-0.8 0-1.9-0.9-1.9-1.6v-16.1s0-0.7 0.7-0.3c0.6 0.3 6.5 4.3 10.3 6.8l-6.5 7.3c-0.1 0.2-0.1 0.3 0 0.4s0.3 0.1 0.4-0.1l7.7-6.5c1.1 0.8 1.9 1.3 2.1 1.4 0.6 0.3 1.1 0.3 1.6 0.3s1 0 1.7-0.3c0.1-0.1 0.9-0.6 2.1-1.4l7.6 6.5c0.2 0.2 0.4 0.2 0.5 0.1s0-0.2-0.2-0.4l-6.4-7.3c3.9-2.5 9.7-6.5 10.3-6.8z' })
                )
            );
        }
    }]);

    return IoEmail;
}(React.Component);

exports.default = IoEmail;
module.exports = exports['default'];