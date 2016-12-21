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

var IoAndroidLaptop = function (_React$Component) {
    _inherits(IoAndroidLaptop, _React$Component);

    function IoAndroidLaptop() {
        _classCallCheck(this, IoAndroidLaptop);

        return _possibleConstructorReturn(this, (IoAndroidLaptop.__proto__ || Object.getPrototypeOf(IoAndroidLaptop)).apply(this, arguments));
    }

    _createClass(IoAndroidLaptop, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm34.1 32.5h5.9c0 1.8-5 2.5-7.5 2.5h-25c-2.5 0-7.5-0.7-7.5-2.5h5.9c-1.8 0-3.4-1.6-3.4-3.4v-20.7c0-1.8 1.6-3.4 3.4-3.4h28.2c1.8 0 3.4 1.6 3.4 3.4v20.7c0 1.8-1.6 3.4-3.4 3.4z m-28.2-24.1v21.2h28.2v-21.2h-28.2z m14.1 25.6c0.9 0 1.6-0.8 1.6-1.7s-0.7-1.7-1.6-1.7-1.6 0.7-1.6 1.7 0.7 1.7 1.6 1.7z' })
                )
            );
        }
    }]);

    return IoAndroidLaptop;
}(React.Component);

exports.default = IoAndroidLaptop;
module.exports = exports['default'];