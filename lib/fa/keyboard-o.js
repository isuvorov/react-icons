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

var FaKeyboardO = function (_React$Component) {
    _inherits(FaKeyboardO, _React$Component);

    function FaKeyboardO() {
        _classCallCheck(this, FaKeyboardO);

        return _possibleConstructorReturn(this, (FaKeyboardO.__proto__ || Object.getPrototypeOf(FaKeyboardO)).apply(this, arguments));
    }

    _createClass(FaKeyboardO, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm8 25.6v2q0 0.4-0.4 0.4h-2q-0.3 0-0.3-0.4v-2q0-0.3 0.3-0.3h2q0.4 0 0.4 0.3z m2.6-5.3v2q0 0.4-0.3 0.4h-4.7q-0.3 0-0.3-0.4v-2q0-0.3 0.3-0.3h4.7q0.3 0 0.3 0.3z m-2.6-5.3v2q0 0.3-0.4 0.3h-2q-0.3 0-0.3-0.3v-2q0-0.3 0.3-0.3h2q0.4 0 0.4 0.3z m21.2 10.6v2q0 0.4-0.3 0.4h-17.9q-0.4 0-0.4-0.4v-2q0-0.3 0.4-0.3h17.9q0.3 0 0.3 0.3z m-13.3-5.3v2q0 0.4-0.3 0.4h-2q-0.3 0-0.3-0.4v-2q0-0.3 0.3-0.3h2q0.3 0 0.3 0.3z m-2.6-5.3v2q0 0.3-0.3 0.3h-2q-0.4 0-0.4-0.3v-2q0-0.3 0.4-0.3h2q0.3 0 0.3 0.3z m8 5.3v2q0 0.4-0.4 0.4h-2q-0.3 0-0.3-0.4v-2q0-0.3 0.3-0.3h2q0.4 0 0.4 0.3z m-2.7-5.3v2q0 0.3-0.3 0.3h-2q-0.4 0-0.4-0.3v-2q0-0.3 0.4-0.3h2q0.3 0 0.3 0.3z m8 5.3v2q0 0.4-0.4 0.4h-1.9q-0.4 0-0.4-0.4v-2q0-0.3 0.4-0.3h1.9q0.4 0 0.4 0.3z m8 5.3v2q0 0.4-0.4 0.4h-2q-0.3 0-0.3-0.4v-2q0-0.3 0.3-0.3h2q0.4 0 0.4 0.3z m-10.7-10.6v2q0 0.3-0.3 0.3h-2q-0.3 0-0.3-0.3v-2q0-0.3 0.3-0.3h2q0.3 0 0.3 0.3z m5.3 0v2q0 0.3-0.3 0.3h-2q-0.3 0-0.3-0.3v-2q0-0.3 0.3-0.3h2q0.3 0 0.3 0.3z m5.4 0v7.3q0 0.4-0.4 0.4h-4.6q-0.4 0-0.4-0.4v-2q0-0.3 0.4-0.3h2.3v-5q0-0.3 0.3-0.3h2q0.3 0 0.3 0.3z m2.6 15.6v-18.6h-34.5v18.6h34.5z m2.7-18.6v18.6q0 1.1-0.8 1.9t-1.9 0.8h-34.5q-1.1 0-1.9-0.8t-0.8-1.9v-18.6q0-1.1 0.8-1.9t1.9-0.7h34.5q1.1 0 1.9 0.7t0.8 1.9z' })
                )
            );
        }
    }]);

    return FaKeyboardO;
}(React.Component);

exports.default = FaKeyboardO;
module.exports = exports['default'];