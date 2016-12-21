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

var IoLoadB = function (_React$Component) {
    _inherits(IoLoadB, _React$Component);

    function IoLoadB() {
        _classCallCheck(this, IoLoadB);

        return _possibleConstructorReturn(this, (IoLoadB.__proto__ || Object.getPrototypeOf(IoLoadB)).apply(this, arguments));
    }

    _createClass(IoLoadB, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 12.5c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5v-7.5c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v7.5z m-2.5 12.5c1.4 0 2.5 1.1 2.5 2.5v7.5c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5v-7.5c0-1.4 1.1-2.5 2.5-2.5z m15-7.5c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5h-7.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5h7.5z m-22.5 0c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5h-7.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5h7.5z m14.5-1c-0.9 0.9-2.5 0.9-3.5 0-0.9-1-0.9-2.7 0-3.6l5.3-5.2c1-1 2.6-1 3.5 0 1 0.9 1 2.5 0 3.5z m-10.5 7c0.9 1 0.9 2.6 0 3.6l-5.3 5.2c-1 1-2.6 1-3.5 0s-1-2.5 0-3.5l5.2-5.3c0.9-0.9 2.6-0.9 3.6 0z m15.8 5.3c1 1 1 2.6 0 3.5s-2.5 1-3.5 0l-5.3-5.3c-0.9-0.9-0.9-2.5 0-3.5s2.6-0.9 3.5 0z m-15.8-15.8c0.9 0.9 0.9 2.5 0 3.5s-2.7 0.9-3.6 0l-5.2-5.3c-1-1-1-2.6 0-3.5s2.5-1 3.5 0z' })
                )
            );
        }
    }]);

    return IoLoadB;
}(React.Component);

exports.default = IoLoadB;
module.exports = exports['default'];