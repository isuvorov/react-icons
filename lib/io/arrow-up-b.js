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

var IoArrowUpB = function (_React$Component) {
    _inherits(IoArrowUpB, _React$Component);

    function IoArrowUpB() {
        _classCallCheck(this, IoArrowUpB);

        return _possibleConstructorReturn(this, (IoArrowUpB.__proto__ || Object.getPrototypeOf(IoArrowUpB)).apply(this, arguments));
    }

    _createClass(IoArrowUpB, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm32.3 25.5c0.1 0.2 0.2 0.5 0.2 0.8 0 0.7-0.6 1.2-1.3 1.2h-22.4c-0.7 0-1.3-0.5-1.3-1.2 0-0.3 0.1-0.5 0.2-0.7l0.2-0.2 10.6-12.2c0.4-0.4 0.9-0.7 1.5-0.7s1.1 0.3 1.5 0.7l10.6 12.2z' })
                )
            );
        }
    }]);

    return IoArrowUpB;
}(React.Component);

exports.default = IoArrowUpB;
module.exports = exports['default'];