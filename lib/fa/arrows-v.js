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

var FaArrowsV = function (_React$Component) {
    _inherits(FaArrowsV, _React$Component);

    function FaArrowsV() {
        _classCallCheck(this, FaArrowsV);

        return _possibleConstructorReturn(this, (FaArrowsV.__proto__ || Object.getPrototypeOf(FaArrowsV)).apply(this, arguments));
    }

    _createClass(FaArrowsV, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm27.2 7.1q0 0.6-0.4 1t-1 0.5h-2.9v22.8h2.9q0.6 0 1 0.5t0.4 1-0.4 1l-5.7 5.7q-0.4 0.4-1 0.4t-1-0.4l-5.7-5.7q-0.5-0.5-0.5-1t0.5-1 1-0.5h2.8v-22.8h-2.8q-0.6 0-1-0.5t-0.5-1 0.5-1l5.7-5.7q0.4-0.4 1-0.4t1 0.4l5.7 5.7q0.4 0.5 0.4 1z' })
                )
            );
        }
    }]);

    return FaArrowsV;
}(React.Component);

exports.default = FaArrowsV;
module.exports = exports['default'];