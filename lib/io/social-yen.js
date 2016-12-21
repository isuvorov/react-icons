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

var IoSocialYen = function (_React$Component) {
    _inherits(IoSocialYen, _React$Component);

    function IoSocialYen() {
        _classCallCheck(this, IoSocialYen);

        return _possibleConstructorReturn(this, (IoSocialYen.__proto__ || Object.getPrototypeOf(IoSocialYen)).apply(this, arguments));
    }

    _createClass(IoSocialYen, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35 2.5l-8.7 16.3h3.7v3.7h-5.7l-1.2 2.4v1.4h6.9v3.7h-6.9v7.5h-6.2v-7.5h-6.9v-3.7h6.9v-1.4l-1.1-2.4h-5.8v-3.7h3.8l-8.8-16.3h6.3l8.7 17.3 8.8-17.3h6.2z' })
                )
            );
        }
    }]);

    return IoSocialYen;
}(React.Component);

exports.default = IoSocialYen;
module.exports = exports['default'];