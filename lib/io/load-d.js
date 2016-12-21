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

var IoLoadD = function (_React$Component) {
    _inherits(IoLoadD, _React$Component);

    function IoLoadD() {
        _classCallCheck(this, IoLoadD);

        return _possibleConstructorReturn(this, (IoLoadD.__proto__ || Object.getPrototypeOf(IoLoadD)).apply(this, arguments));
    }

    _createClass(IoLoadD, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm33.8 18.8c0.7 0 1.2 0.5 1.2 1.2s-0.5 1.3-1.2 1.3h-6.3c-0.7 0-1.2-0.6-1.2-1.3s0.5-1.2 1.2-1.2h6.3z m-20 1.2c0 0.7-0.6 1.3-1.3 1.3h-6.2c-0.8 0-1.3-0.6-1.3-1.3s0.5-1.2 1.3-1.2h6.2c0.7 0 1.3 0.5 1.3 1.2z m6.2 6.3c0.7 0 1.3 0.5 1.3 1.2v6.3c0 0.7-0.6 1.2-1.3 1.2s-1.2-0.5-1.2-1.2v-6.3c0-0.7 0.5-1.2 1.2-1.2z m0-21.3c0.7 0 1.3 0.5 1.3 1.3v6.2c0 0.7-0.6 1.3-1.3 1.3s-1.2-0.6-1.2-1.3v-6.2c0-0.8 0.5-1.3 1.2-1.3z m5.4 11.9c-0.3-0.6-0.2-1.4 0.5-1.7l5.4-3.2c0.6-0.3 1.4-0.1 1.7 0.5s0.1 1.4-0.5 1.7l-5.4 3.1c-0.6 0.4-1.4 0.2-1.7-0.4z m-10.8 6.2c0.3 0.7 0.2 1.4-0.5 1.7l-5.3 3.2c-0.7 0.3-1.5 0.1-1.8-0.5s-0.1-1.4 0.5-1.7l5.4-3.1c0.6-0.4 1.4-0.2 1.7 0.4z m10.2 2.8l3.2 5.3c0.3 0.7 0.1 1.5-0.5 1.8s-1.4 0.1-1.7-0.5l-3.1-5.4c-0.4-0.6-0.2-1.4 0.4-1.7s1.4-0.2 1.7 0.5z m-10.6-18.4l3.1 5.4c0.4 0.6 0.2 1.4-0.4 1.7s-1.4 0.2-1.7-0.5l-3.2-5.3c-0.3-0.7-0.1-1.5 0.5-1.8s1.4-0.1 1.7 0.5z m8.9 7.1c-0.6-0.3-0.8-1.1-0.4-1.7l3.1-5.4c0.3-0.6 1.1-0.8 1.7-0.5s0.8 1.1 0.5 1.8l-3.2 5.3c-0.3 0.7-1 0.8-1.7 0.5z m-6.2 10.8c0.6 0.3 0.8 1.1 0.4 1.7l-3.1 5.4c-0.3 0.6-1.1 0.8-1.7 0.5s-0.8-1.1-0.5-1.7l3.2-5.4c0.3-0.7 1-0.8 1.7-0.5z m15.6 0.4c0.6 0.3 0.8 1.1 0.5 1.7s-1.1 0.8-1.7 0.5l-5.4-3.2c-0.7-0.3-0.8-1.1-0.5-1.7s1.1-0.8 1.7-0.4z m-25-11.6c-0.6-0.3-0.8-1.1-0.5-1.7s1.1-0.8 1.8-0.5l5.3 3.2c0.7 0.3 0.8 1.1 0.5 1.7s-1.1 0.8-1.7 0.4z' })
                )
            );
        }
    }]);

    return IoLoadD;
}(React.Component);

exports.default = IoLoadD;
module.exports = exports['default'];