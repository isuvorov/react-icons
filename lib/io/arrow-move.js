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

var IoArrowMove = function (_React$Component) {
    _inherits(IoArrowMove, _React$Component);

    function IoArrowMove() {
        _classCallCheck(this, IoArrowMove);

        return _possibleConstructorReturn(this, (IoArrowMove.__proto__ || Object.getPrototypeOf(IoArrowMove)).apply(this, arguments));
    }

    _createClass(IoArrowMove, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35 20l-7.5 7.5v-5.9h-8.5l0.1 8.4h5.9l-7.5 7.5-7.5-7.5h5.9v-8.4h-8.4v5.9l-7.5-7.5 7.5-7.5v5.9h8.4v-8.4h-5.9l7.5-7.5 7.5 7.5h-5.9v8.4h8.4v-5.9z' })
                )
            );
        }
    }]);

    return IoArrowMove;
}(React.Component);

exports.default = IoArrowMove;
module.exports = exports['default'];