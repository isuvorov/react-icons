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

var IoCompose = function (_React$Component) {
    _inherits(IoCompose, _React$Component);

    function IoCompose() {
        _classCallCheck(this, IoCompose);

        return _possibleConstructorReturn(this, (IoCompose.__proto__ || Object.getPrototypeOf(IoCompose)).apply(this, arguments));
    }

    _createClass(IoCompose, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm34.6 7.8c0.6 0.6 0.6 1.4 0 2l-2.5 2.4-4.3-4.3 2.4-2.5c0.6-0.6 1.4-0.6 2 0z m-7.6 0.8l4.3 4.3-13.8 13.5-5 1.1 1.1-5z m3 11.4l2.5-2.5v15.7c0 1-0.8 1.8-1.8 1.8h-23.9c-1 0-1.8-0.8-1.8-1.8v-23.9c0-1 0.8-1.8 1.8-1.8h15.7l-2.5 2.5h-11.6c-0.5 0-0.9 0.4-0.9 0.8v20.9s0.3 0.8 0.8 0.8h21s0.7-0.4 0.7-0.8v-11.7z' })
                )
            );
        }
    }]);

    return IoCompose;
}(React.Component);

exports.default = IoCompose;
module.exports = exports['default'];