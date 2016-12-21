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

var IoLogIn = function (_React$Component) {
    _inherits(IoLogIn, _React$Component);

    function IoLogIn() {
        _classCallCheck(this, IoLogIn);

        return _possibleConstructorReturn(this, (IoLogIn.__proto__ || Object.getPrototypeOf(IoLogIn)).apply(this, arguments));
    }

    _createClass(IoLogIn, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm17.5 2.5c9.7 0 17.5 7.8 17.5 17.5s-7.8 17.5-17.5 17.5c-7.5 0-13.8-4.7-16.3-11.2h2.6c0.7 1.5 1.8 3.1 3.1 4.3 2.8 2.8 6.6 4.4 10.6 4.4s7.8-1.6 10.6-4.4 4.4-6.6 4.4-10.6-1.6-7.8-4.4-10.6-6.6-4.4-10.6-4.4-7.8 1.6-10.6 4.4c-1.3 1.2-2.4 2.8-3.1 4.4h-2.6c2.5-6.6 8.8-11.3 16.3-11.3z m-3.8 22.8l4-4h-17.7v-2.5h17.7l-4-4.1 1.7-1.8 7.1 7.1-7.1 7.1z' })
                )
            );
        }
    }]);

    return IoLogIn;
}(React.Component);

exports.default = IoLogIn;
module.exports = exports['default'];