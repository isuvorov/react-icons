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

var IoAndroidBicycle = function (_React$Component) {
    _inherits(IoAndroidBicycle, _React$Component);

    function IoAndroidBicycle() {
        _classCallCheck(this, IoAndroidBicycle);

        return _possibleConstructorReturn(this, (IoAndroidBicycle.__proto__ || Object.getPrototypeOf(IoAndroidBicycle)).apply(this, arguments));
    }

    _createClass(IoAndroidBicycle, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm23.4 10.2c-1.5 0-2.7-1.1-2.7-2.5s1.2-2.7 2.7-2.7 2.5 1.2 2.5 2.7-1.1 2.5-2.5 2.5z m4.3 10.2c4 0 7.3 3.4 7.3 7.3s-3.3 7.3-7.3 7.3-7.3-3.3-7.3-7.3 3.4-7.3 7.3-7.3z m0 12.4c2.8 0 5.1-2.3 5.1-5.1s-2.3-5.1-5.1-5.1-5.1 2.3-5.1 5.1 2.3 5.1 5.1 5.1z m-6.3-15.3l-2.3-3.5-3.4 3.5 3.1 2.5v8.8h-2.5v-6.8l-4.8-2.9c-0.7-0.5-1.5-1.2-1.5-2.1 0-0.7 0.2-1.4 0.7-1.8l5.6-5.4c0.5-0.5 1.1-0.7 1.7-0.7 0.9 0 1.8 0.5 2.2 1.2l2.7 4.7h4.6v2.5h-6.1z m-14.1 2.9c3.9 0 7.3 3.4 7.3 7.3s-3.3 7.3-7.3 7.3-7.3-3.3-7.3-7.3 3.3-7.3 7.3-7.3z m0 12.4c2.8 0 5.1-2.3 5.1-5.1s-2.3-5.1-5.1-5.1-5.1 2.3-5.1 5.1 2.3 5.1 5.1 5.1z' })
                )
            );
        }
    }]);

    return IoAndroidBicycle;
}(React.Component);

exports.default = IoAndroidBicycle;
module.exports = exports['default'];