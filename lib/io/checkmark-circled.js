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

var IoCheckmarkCircled = function (_React$Component) {
    _inherits(IoCheckmarkCircled, _React$Component);

    function IoCheckmarkCircled() {
        _classCallCheck(this, IoCheckmarkCircled);

        return _possibleConstructorReturn(this, (IoCheckmarkCircled.__proto__ || Object.getPrototypeOf(IoCheckmarkCircled)).apply(this, arguments));
    }

    _createClass(IoCheckmarkCircled, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm17.5 2.5c9.7 0 17.5 7.8 17.5 17.5s-7.8 17.5-17.5 17.5-17.5-7.8-17.5-17.5 7.8-17.5 17.5-17.5z m9 11.6c0.1 0 0.1-0.1 0.1-0.2s0-0.2-0.1-0.3l-2.4-1.9c-0.1-0.1-0.3-0.1-0.4-0.1s-0.1 0-0.2 0.1l-8.7 11.2s-3.4-3.3-3.5-3.4-0.3-0.2-0.4-0.2-0.3 0.2-0.4 0.2l-2 2.1c-0.1 0-0.1 0.2-0.1 0.3s0 0.1 0.1 0.2l0.2 0.1s6.1 5.8 6.1 5.9 0.3 0.3 0.4 0.3 0.3-0.2 0.4-0.3z' })
                )
            );
        }
    }]);

    return IoCheckmarkCircled;
}(React.Component);

exports.default = IoCheckmarkCircled;
module.exports = exports['default'];