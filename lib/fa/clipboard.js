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

var FaClipboard = function (_React$Component) {
    _inherits(FaClipboard, _React$Component);

    function FaClipboard() {
        _classCallCheck(this, FaClipboard);

        return _possibleConstructorReturn(this, (FaClipboard.__proto__ || Object.getPrototypeOf(FaClipboard)).apply(this, arguments));
    }

    _createClass(FaClipboard, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm17.1 37.1h20v-14.2h-9.2q-0.9 0-1.6-0.7t-0.6-1.5v-9.3h-8.6v25.7z m5.8-32.1v-1.4q0-0.3-0.3-0.5t-0.5-0.2h-15.7q-0.3 0-0.5 0.2t-0.2 0.5v1.4q0 0.3 0.2 0.5t0.5 0.2h15.7q0.3 0 0.5-0.2t0.3-0.5z m5.7 15h6.6l-6.6-6.7v6.7z m11.4 2.9v15q0 0.9-0.6 1.5t-1.5 0.6h-21.5q-0.9 0-1.5-0.6t-0.6-1.5v-3.6h-12.2q-0.9 0-1.5-0.6t-0.6-1.6v-30q0-0.8 0.6-1.5t1.5-0.6h24.3q0.9 0 1.5 0.6t0.7 1.5v7.4q0.4 0.3 0.8 0.6l9.1 9.1q0.6 0.6 1.1 1.7t0.4 2z' })
                )
            );
        }
    }]);

    return FaClipboard;
}(React.Component);

exports.default = FaClipboard;
module.exports = exports['default'];