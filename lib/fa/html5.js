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

var FaHtml5 = function (_React$Component) {
    _inherits(FaHtml5, _React$Component);

    function FaHtml5() {
        _classCallCheck(this, FaHtml5);

        return _possibleConstructorReturn(this, (FaHtml5.__proto__ || Object.getPrototypeOf(FaHtml5)).apply(this, arguments));
    }

    _createClass(FaHtml5, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm29.7 13.3l0.4-3.9h-19.8l1.1 11.9h13.7l-0.5 5.1-4.4 1.2-4.4-1.2-0.3-3.1h-3.9l0.5 6.2 8.1 2.2h0.1v0l8-2.2 1.1-12.1h-14.4l-0.3-4.1h15z m-25.2-10.4h31.4l-2.8 32.1-12.9 3.6-12.8-3.6z' })
                )
            );
        }
    }]);

    return FaHtml5;
}(React.Component);

exports.default = FaHtml5;
module.exports = exports['default'];