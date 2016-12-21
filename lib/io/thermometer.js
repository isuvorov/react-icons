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

var IoThermometer = function (_React$Component) {
    _inherits(IoThermometer, _React$Component);

    function IoThermometer() {
        _classCallCheck(this, IoThermometer);

        return _possibleConstructorReturn(this, (IoThermometer.__proto__ || Object.getPrototypeOf(IoThermometer)).apply(this, arguments));
    }

    _createClass(IoThermometer, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm23.4 26.3c1.6 1 2.6 2.9 2.6 5 0 3.4-2.8 6.2-6.2 6.2s-6.3-2.8-6.3-6.2c0-2.2 1-4 2.6-5.1v-20.1c0-2 1.6-3.6 3.7-3.6s3.6 1.6 3.6 3.6v20.2z m-4.8-20.2v3.9h2.3v-3.9c0-0.6-0.5-1.1-1.1-1.1s-1.2 0.5-1.2 1.1z m2.4 16.4v-1.2h-1.2v1.2h1.2z m0-2.5v-5h-1.2v5h1.2z' })
                )
            );
        }
    }]);

    return IoThermometer;
}(React.Component);

exports.default = IoThermometer;
module.exports = exports['default'];