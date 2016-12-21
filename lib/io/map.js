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

var IoMap = function (_React$Component) {
    _inherits(IoMap, _React$Component);

    function IoMap() {
        _classCallCheck(this, IoMap);

        return _possibleConstructorReturn(this, (IoMap.__proto__ || Object.getPrototypeOf(IoMap)).apply(this, arguments));
    }

    _createClass(IoMap, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm34.5 10.7c0.3 0.2 0.5 0.6 0.5 1.1v22c0 0.4-0.2 0.8-0.5 1-0.2 0.1-0.4 0.2-0.6 0.2-0.2 0-0.5 0-0.6-0.2l-7.6-5.1-7.6 5.1c-0.4 0.3-0.8 0.3-1.1 0l-7.6-5.1-7.6 5.1c-0.4 0.3-0.8 0.3-1.2 0s-0.6-0.6-0.6-1v-22c0-0.5 0.2-0.9 0.5-1.1l8.3-5.5c0.3-0.3 0.7-0.3 1.1 0l7.6 5.1 7.7-5.1c0.3-0.3 0.7-0.3 1.1 0z m-26.5 16.9v-18.9l-5.5 3.9v18.9z m2.5 0l5.8 3.8v-10.1l-0.4 0.9c-0.5-0.2-1-0.5-1.5-0.8l0.6-1c0.4 0.2 0.9 0.5 1.3 0.6v-8.5l-5.8-3.8v7.9c0.4 0.1 0.7 0.3 1.1 0.5l-0.8 1c-0.1-0.1-0.2-0.1-0.3-0.1v9.6z m8.3 3.8l5.7-3.8v-8.5c0 0-0.1 0-0.1 0.1l-0.5 0.5-0.9-0.9 0.4-0.4c0.3-0.3 0.4-0.6 0.7-0.8l0.4 0.4v-9.3l-5.7 3.8v8.8h0.5l0.2 1.1c-0.2 0-0.4 0.1-0.7 0.1h0v8.9z m13.7 0v-18.9l-5.5-3.8v6.8c0.2 0 0.3 0 0.6-0.1l0.3 1.2c-0.3 0.1-0.6 0.1-0.9 0.3v10.7z m-24.9-14.1c-0.3 0-0.9 0.4-1.1 0.5l-0.9-0.9c0.3-0.3 0.7-0.5 1-0.6 0.2-0.2 0.4-0.3 0.7-0.4l0.4 1.2c-0.2 0.1 0 0.1-0.1 0.2z m13.1 3.5c0.4-0.3 0.8-0.4 1.2-0.8l0.8 0.9c-0.4 0.5-0.9 0.8-1.4 1.1z m-15.5-0.8v0.1l-1.1-0.4v-0.1c0.1-0.5 0.3-1 0.7-1.6l1 0.7c-0.3 0.4-0.4 0.8-0.6 1.3z m7.8-1.4c0.2 0.3 0.5 0.6 0.8 0.9l-0.8 0.9c-0.3-0.3-0.7-0.7-1-1l-0.2-0.3 0.9-0.8c0.1 0.1 0.2 0.2 0.3 0.3z m16.4-0.6l-0.9-1 0.8-0.8-0.8-0.7 0.9-1 0.8 0.9 0.8-0.9 0.9 1-0.8 0.7 0.8 0.8-0.9 1-0.8-0.9z' })
                )
            );
        }
    }]);

    return IoMap;
}(React.Component);

exports.default = IoMap;
module.exports = exports['default'];