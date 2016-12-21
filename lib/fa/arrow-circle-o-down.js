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

var FaArrowCircleODown = function (_React$Component) {
    _inherits(FaArrowCircleODown, _React$Component);

    function FaArrowCircleODown() {
        _classCallCheck(this, FaArrowCircleODown);

        return _possibleConstructorReturn(this, (FaArrowCircleODown.__proto__ || Object.getPrototypeOf(FaArrowCircleODown)).apply(this, arguments));
    }

    _createClass(FaArrowCircleODown, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28 20.7q0 0.3-0.2 0.6l-7.1 7.1q-0.3 0.2-0.6 0.2t-0.5-0.2l-7.1-7.2q-0.3-0.3-0.2-0.8 0.2-0.4 0.7-0.4h4.3v-7.9q0-0.3 0.2-0.5t0.5-0.2h4.3q0.3 0 0.5 0.2t0.2 0.5v7.9h4.3q0.3 0 0.5 0.2t0.2 0.5z m-7.9-12.8q-3.3 0-6.1 1.6t-4.4 4.4-1.6 6.1 1.6 6.1 4.4 4.4 6.1 1.6 6.1-1.6 4.5-4.4 1.6-6.1-1.6-6.1-4.5-4.4-6.1-1.6z m17.2 12.1q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z' })
                )
            );
        }
    }]);

    return FaArrowCircleODown;
}(React.Component);

exports.default = FaArrowCircleODown;
module.exports = exports['default'];