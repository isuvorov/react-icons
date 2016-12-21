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

var IoArrowSwap = function (_React$Component) {
    _inherits(IoArrowSwap, _React$Component);

    function IoArrowSwap() {
        _classCallCheck(this, IoArrowSwap);

        return _possibleConstructorReturn(this, (IoArrowSwap.__proto__ || Object.getPrototypeOf(IoArrowSwap)).apply(this, arguments));
    }

    _createClass(IoArrowSwap, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm5 25.6c0-0.3 0.3-0.6 0.6-0.6h19.4v-5l10 7.5-10 7.5v-5h-19.4c-0.3 0-0.6-0.3-0.6-0.6v-3.8z m30-11.2c0 0.3-0.3 0.6-0.6 0.6h-19.4v5l-10-7.5 10-7.5v5h19.4c0.3 0 0.6 0.3 0.6 0.6v3.8z' })
                )
            );
        }
    }]);

    return IoArrowSwap;
}(React.Component);

exports.default = IoArrowSwap;
module.exports = exports['default'];