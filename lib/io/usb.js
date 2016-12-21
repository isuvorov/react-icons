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

var IoUsb = function (_React$Component) {
    _inherits(IoUsb, _React$Component);

    function IoUsb() {
        _classCallCheck(this, IoUsb);

        return _possibleConstructorReturn(this, (IoUsb.__proto__ || Object.getPrototypeOf(IoUsb)).apply(this, arguments));
    }

    _createClass(IoUsb, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm11.3 17.2z m18.7-7.2c0 0.9-0.5 1.6-1.1 2.1-0.1 0.1-0.2 0.4-0.2 0.6-0.1 1.5-0.3 2.8-0.7 3.9-0.6 1.4-1.6 2.5-3.1 3.6-1.3 0.9-2.2 1.6-2.8 2.6-0.5 0.9-0.9 2.2-0.9 4.2v1.8c0 0.6 0.2 1 0.8 1.4 0.3 0.2 0.6 0.5 0.8 0.7 0.6 0.7 1.1 1.7 1.1 2.7 0 2.2-1.7 3.9-3.9 3.9s-3.9-1.7-3.9-3.9v-0.1c0-1.4 0.8-2.6 1.9-3.3 0.4-0.3 0.7-0.4 0.7-1.4 0-1.1-0.3-1.3-0.8-2.1s-1.4-1.3-2.5-2c-1.5-1-2.6-2.1-3.1-3.6-0.5-1.2-0.7-2.4-0.7-3.1s-0.2-0.7-0.4-0.8c-0.7-0.5-1.2-1.3-1.2-2.2 0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5c0 0.8-0.3 1.6-0.9 2-0.3 0.2-0.4 0.9-0.4 1.1 0 0.7 0.3 1.4 0.6 2.2 0.8 1.7 3.5 3.5 4.1 3.5s0.6-0.4 0.6-1v-15.3s-0.1-0.2-0.3-0.3h0v-0.1c-0.7-0.5-1.2-1.2-1.2-2.1 0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5c0 0.9-0.4 1.6-1.1 2.1-0.1 0.2-0.1 0.2-0.1 0.4v10.9c0 0.8 0.1 1 0.6 0.9 1-0.2 3.7-2.3 4-3.4 0.3-0.7 0.5-1.8 0.6-3.2v0c0-0.2-0.2-0.4-0.2-0.5-0.8-0.5-1.3-1.3-1.3-2.2 0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5z m-17.5 6.3c0.7 0 1.3-0.6 1.3-1.3s-0.6-1.2-1.3-1.2-1.2 0.5-1.2 1.2 0.5 1.3 1.2 1.3z m7.5-10c0.7 0 1.3-0.6 1.3-1.3s-0.6-1.2-1.3-1.2-1.2 0.5-1.2 1.2 0.5 1.3 1.2 1.3z m7.5 5c0.7 0 1.3-0.6 1.3-1.3s-0.6-1.2-1.3-1.2-1.2 0.5-1.2 1.2 0.5 1.3 1.2 1.3z' })
                )
            );
        }
    }]);

    return IoUsb;
}(React.Component);

exports.default = IoUsb;
module.exports = exports['default'];