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

var FaPrint = function (_React$Component) {
    _inherits(FaPrint, _React$Component);

    function FaPrint() {
        _classCallCheck(this, FaPrint);

        return _possibleConstructorReturn(this, (FaPrint.__proto__ || Object.getPrototypeOf(FaPrint)).apply(this, arguments));
    }

    _createClass(FaPrint, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm10.1 34.3h20v-5.7h-20v5.7z m0-14.3h20v-8.6h-3.6q-0.9 0-1.5-0.6t-0.6-1.5v-3.6h-14.3v14.3z m25.7 1.4q0-0.5-0.4-1t-1-0.4-1 0.4-0.5 1 0.5 1 1 0.5 1-0.5 0.4-1z m2.8 0v9.3q0 0.3-0.2 0.5t-0.5 0.2h-5v3.6q0 0.9-0.6 1.5t-1.5 0.6h-21.4q-0.9 0-1.6-0.6t-0.6-1.5v-3.6h-5q-0.3 0-0.5-0.2t-0.2-0.5v-9.3q0-1.7 1.3-3t3-1.3h1.4v-12.1q0-0.9 0.6-1.5t1.6-0.6h15q0.9 0 1.9 0.4t1.7 1.1l3.4 3.4q0.6 0.6 1.1 1.7t0.4 1.9v5.7h1.5q1.7 0 3 1.3t1.2 3z' })
                )
            );
        }
    }]);

    return FaPrint;
}(React.Component);

exports.default = FaPrint;
module.exports = exports['default'];