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

var IoArrowDownC = function (_React$Component) {
    _inherits(IoArrowDownC, _React$Component);

    function IoArrowDownC() {
        _classCallCheck(this, IoArrowDownC);

        return _possibleConstructorReturn(this, (IoArrowDownC.__proto__ || Object.getPrototypeOf(IoArrowDownC)).apply(this, arguments));
    }

    _createClass(IoArrowDownC, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30.2 25.2l-8.2 7.8c-0.5 0.5-1.1 0.8-1.8 0.8s-1.2-0.3-1.7-0.8l-8.3-7.8c-0.9-0.9-0.9-2.4 0-3.3s2.7-1 3.6 0l3.9 3.7v-16.9c0-1.4 1.1-2.4 2.5-2.4s2.5 1 2.5 2.4v16.9l3.9-3.7c0.9-1 2.7-1 3.6 0s0.9 2.4 0 3.3z' })
                )
            );
        }
    }]);

    return IoArrowDownC;
}(React.Component);

exports.default = IoArrowDownC;
module.exports = exports['default'];