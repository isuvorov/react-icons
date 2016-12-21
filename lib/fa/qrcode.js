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

var FaQrcode = function (_React$Component) {
    _inherits(FaQrcode, _React$Component);

    function FaQrcode() {
        _classCallCheck(this, FaQrcode);

        return _possibleConstructorReturn(this, (FaQrcode.__proto__ || Object.getPrototypeOf(FaQrcode)).apply(this, arguments));
    }

    _createClass(FaQrcode, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm13.1 25.7v2.9h-2.9v-2.9h2.9z m0-17.1v2.8h-2.9v-2.8h2.9z m17.1 0v2.8h-2.8v-2.8h2.8z m-22.8 22.8h8.5v-8.5h-8.5v8.5z m0-17.1h8.5v-8.6h-8.5v8.6z m17.1 0h8.6v-8.6h-8.6v8.6z m-5.7 5.7v14.3h-14.3v-14.3h14.3z m11.4 11.4v2.9h-2.8v-2.9h2.8z m5.7 0v2.9h-2.8v-2.9h2.8z m0-11.4v8.6h-8.5v-2.9h-2.9v8.6h-2.9v-14.3h8.6v2.9h2.9v-2.9h2.8z m-17.1-17.1v14.2h-14.3v-14.2h14.3z m17.1 0v14.2h-14.3v-14.2h14.3z' })
                )
            );
        }
    }]);

    return FaQrcode;
}(React.Component);

exports.default = FaQrcode;
module.exports = exports['default'];