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

var IoSocialHtml5 = function (_React$Component) {
    _inherits(IoSocialHtml5, _React$Component);

    function IoSocialHtml5() {
        _classCallCheck(this, IoSocialHtml5);

        return _possibleConstructorReturn(this, (IoSocialHtml5.__proto__ || Object.getPrototypeOf(IoSocialHtml5)).apply(this, arguments));
    }

    _createClass(IoSocialHtml5, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm5 2.5h30l-2.7 31.5-12.3 3.5-12.3-3.5z m24.1 10.3l0.3-3.9h-18.9l1.1 11.7h13l-0.5 5-4.1 1.2-4.2-1.2-0.3-3h-3.7l0.5 6.1 7.7 2.1 7.7-2.2 1.1-11.8h-13.8l-0.3-4h14.4z' })
                )
            );
        }
    }]);

    return IoSocialHtml5;
}(React.Component);

exports.default = IoSocialHtml5;
module.exports = exports['default'];