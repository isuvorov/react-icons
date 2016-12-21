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

var FaArrowLeft = function (_React$Component) {
    _inherits(FaArrowLeft, _React$Component);

    function FaArrowLeft() {
        _classCallCheck(this, FaArrowLeft);

        return _possibleConstructorReturn(this, (FaArrowLeft.__proto__ || Object.getPrototypeOf(FaArrowLeft)).apply(this, arguments));
    }

    _createClass(FaArrowLeft, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm36.3 20v2.9q0 1.1-0.7 2t-1.9 0.8h-15.7l6.5 6.6q0.9 0.8 0.9 2t-0.9 2l-1.7 1.7q-0.8 0.8-2 0.8-1.1 0-2-0.8l-14.5-14.6q-0.9-0.8-0.9-2 0-1.1 0.9-2l14.5-14.5q0.8-0.9 2-0.9 1.2 0 2 0.9l1.7 1.6q0.9 0.9 0.9 2.1t-0.9 2l-6.5 6.5h15.7q1.1 0 1.9 0.9t0.7 2z' })
                )
            );
        }
    }]);

    return FaArrowLeft;
}(React.Component);

exports.default = FaArrowLeft;
module.exports = exports['default'];