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

var IoLogOut = function (_React$Component) {
    _inherits(IoLogOut, _React$Component);

    function IoLogOut() {
        _classCallCheck(this, IoLogOut);

        return _possibleConstructorReturn(this, (IoLogOut.__proto__ || Object.getPrototypeOf(IoLogOut)).apply(this, arguments));
    }

    _createClass(IoLogOut, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm26.2 25.3l4-4h-17.7v-2.5h17.7l-4-4.1 1.7-1.8 7.1 7.1-7.1 7.1z m1.8 5.3c0.3-0.2 0.5-0.4 0.7-0.6h3.2c-3.1 4.5-8.5 7.5-14.4 7.5-9.7 0-17.5-7.8-17.5-17.5s7.8-17.5 17.5-17.5c5.9 0 11.3 3 14.4 7.5h-3.2c-0.2-0.2-0.4-0.4-0.7-0.6-2.8-2.8-6.5-4.4-10.5-4.4s-7.8 1.6-10.6 4.4-4.4 6.6-4.4 10.6 1.6 7.8 4.4 10.6 6.6 4.4 10.6 4.4 7.7-1.6 10.5-4.4z' })
                )
            );
        }
    }]);

    return IoLogOut;
}(React.Component);

exports.default = IoLogOut;
module.exports = exports['default'];