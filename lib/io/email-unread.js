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

var IoEmailUnread = function (_React$Component) {
    _inherits(IoEmailUnread, _React$Component);

    function IoEmailUnread() {
        _classCallCheck(this, IoEmailUnread);

        return _possibleConstructorReturn(this, (IoEmailUnread.__proto__ || Object.getPrototypeOf(IoEmailUnread)).apply(this, arguments));
    }

    _createClass(IoEmailUnread, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.5 12.5c0-3.4 1.6-5 5-5s5 1.6 5 5-1.6 5-5 5-5-1.6-5-5z m-11.2 0h10c0 1.3 0.3 2.6 1.1 3.7-0.4 0.2-1.1 0.6-1.7 0.9s-1.2 0.6-1.8 0.9-1.1 0.7-1.7 1-1.2 0.6-1.7 0.8-0.8 0.5-1.2 0.7-0.7 0.4-0.9 0.6-0.4 0.2-0.4 0.2c-0.5 0.3-1 0.3-1.7 0.3s-1.1 0-1.6-0.3c-0.1-0.1-1.2-0.6-3.3-1.8s-4.2-2.2-6.3-3.4-3.4-1.8-3.6-2c-0.6-0.3-1-0.6-1-0.8-0.1-0.3-0.1-0.5 0-0.6s0.5-0.2 0.9-0.2h14.9z m5.3 8.8c1.4-0.8 3.6-2.3 6.5-4.3 1.3 1.1 2.7 1.8 4.4 1.8v12.1c0 0.1-0.1 0.3-0.2 0.5s-0.2 0.4-0.3 0.6-0.4 0.3-0.6 0.3-0.5 0.2-0.6 0.2h-28.9c-0.4 0-0.9-0.2-1.3-0.5s-0.6-0.7-0.6-1.1v-16.1c0-0.4 0.2-0.6 0.7-0.3 0.2 0 0.9 0.5 2 1.3s2.5 1.7 4.2 2.8 3 2 4.1 2.7l-6.5 7.3c-0.1 0.1-0.1 0.3 0 0.4 0.1 0.1 0.3 0.1 0.4-0.1l7.7-6.5c1.2 0.8 1.9 1.3 2.1 1.3 0.5 0.3 1 0.4 1.6 0.4s1.2-0.1 1.7-0.4c0.1 0 0.8-0.5 2.1-1.3l7.6 6.5c0.2 0.2 0.4 0.2 0.5 0.1s0-0.3-0.2-0.4z' })
                )
            );
        }
    }]);

    return IoEmailUnread;
}(React.Component);

exports.default = IoEmailUnread;
module.exports = exports['default'];