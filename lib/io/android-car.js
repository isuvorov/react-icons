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

var IoAndroidCar = function (_React$Component) {
    _inherits(IoAndroidCar, _React$Component);

    function IoAndroidCar() {
        _classCallCheck(this, IoAndroidCar);

        return _possibleConstructorReturn(this, (IoAndroidCar.__proto__ || Object.getPrototypeOf(IoAndroidCar)).apply(this, arguments));
    }

    _createClass(IoAndroidCar, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.5 9.1l3.5 9.3v12.5c0 0.9-0.7 1.6-1.6 1.6h-1.8c-0.9 0-1.6-0.7-1.6-1.6v-0.9h-20v0.9c0 0.9-0.7 1.6-1.6 1.6h-1.8c-0.9 0-1.6-0.7-1.6-1.6v-12.5l3.5-9.3c0.3-1 1.3-1.6 2.4-1.6h18.2c1.1 0 2.1 0.6 2.4 1.6z m-20.6 15.9c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m18.2 0c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m-20.7-8.4h23.2l-2.5-6.6h-18.2z' })
                )
            );
        }
    }]);

    return IoAndroidCar;
}(React.Component);

exports.default = IoAndroidCar;
module.exports = exports['default'];