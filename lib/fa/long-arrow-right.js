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

var FaLongArrowRight = function (_React$Component) {
    _inherits(FaLongArrowRight, _React$Component);

    function FaLongArrowRight() {
        _classCallCheck(this, FaLongArrowRight);

        return _possibleConstructorReturn(this, (FaLongArrowRight.__proto__ || Object.getPrototypeOf(FaLongArrowRight)).apply(this, arguments));
    }

    _createClass(FaLongArrowRight, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm39.1 19.9q0 0.3-0.3 0.6l-8.5 7.9q-0.4 0.3-0.8 0.1-0.4-0.2-0.4-0.6v-5h-27.9q-0.3 0-0.5-0.2t-0.2-0.6v-4.2q0-0.4 0.2-0.6t0.5-0.2h27.9v-5q0-0.4 0.4-0.6t0.8 0.1l8.5 7.8q0.3 0.2 0.3 0.5z' })
                )
            );
        }
    }]);

    return FaLongArrowRight;
}(React.Component);

exports.default = FaLongArrowRight;
module.exports = exports['default'];