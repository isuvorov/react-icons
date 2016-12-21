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

var IoAndroidRadioButtonOn = function (_React$Component) {
    _inherits(IoAndroidRadioButtonOn, _React$Component);

    function IoAndroidRadioButtonOn() {
        _classCallCheck(this, IoAndroidRadioButtonOn);

        return _possibleConstructorReturn(this, (IoAndroidRadioButtonOn.__proto__ || Object.getPrototypeOf(IoAndroidRadioButtonOn)).apply(this, arguments));
    }

    _createClass(IoAndroidRadioButtonOn, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm19.8 11.9c4.4 0 8.1 3.6 8.1 8.1s-3.7 8.1-8.1 8.1-8.2-3.6-8.2-8.1 3.7-8.1 8.2-8.1z m0-8.1c8.9 0 16.2 7.3 16.2 16.2s-7.3 16.3-16.2 16.3-16.3-7.4-16.3-16.3 7.3-16.2 16.3-16.2z m0 29.2c7.1 0 12.9-5.8 12.9-13s-5.8-13-12.9-13-13 5.8-13 13 5.8 13 13 13z' })
                )
            );
        }
    }]);

    return IoAndroidRadioButtonOn;
}(React.Component);

exports.default = IoAndroidRadioButtonOn;
module.exports = exports['default'];