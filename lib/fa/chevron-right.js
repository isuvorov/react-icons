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

var FaChevronRight = function (_React$Component) {
    _inherits(FaChevronRight, _React$Component);

    function FaChevronRight() {
        _classCallCheck(this, FaChevronRight);

        return _possibleConstructorReturn(this, (FaChevronRight.__proto__ || Object.getPrototypeOf(FaChevronRight)).apply(this, arguments));
    }

    _createClass(FaChevronRight, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.2 19.6l-16.6 16.5q-0.4 0.5-1 0.5t-1-0.5l-3.7-3.7q-0.4-0.4-0.4-1t0.4-1l11.9-11.8-11.9-11.9q-0.4-0.4-0.4-1t0.4-1l3.7-3.7q0.5-0.4 1-0.4t1 0.4l16.6 16.6q0.4 0.4 0.4 1t-0.4 1z' })
                )
            );
        }
    }]);

    return FaChevronRight;
}(React.Component);

exports.default = FaChevronRight;
module.exports = exports['default'];