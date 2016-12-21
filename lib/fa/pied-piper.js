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

var FaPiedPiper = function (_React$Component) {
    _inherits(FaPiedPiper, _React$Component);

    function FaPiedPiper() {
        _classCallCheck(this, FaPiedPiper);

        return _possibleConstructorReturn(this, (FaPiedPiper.__proto__ || Object.getPrototypeOf(FaPiedPiper)).apply(this, arguments));
    }

    _createClass(FaPiedPiper, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm26.3 22.8q0 1.4-0.8 2.4t-2 1q-1 0-1.6-0.3v-6.2q0.6-0.4 1.6-0.4 1.2 0 2 1t0.8 2.5z m-7.6-9.6q0 1.4-0.9 2.5t-2 1q-0.9 0-1.5-0.4v-6.1q0.6-0.4 1.5-0.4 1.2 0 2 1t0.9 2.4z m12.5 9.6q0-3-1.9-5.1t-4.8-2.1q-0.4 0-0.9 0.1-0.5 1.7-1.7 3-1.9 2.1-4.7 2.3v14.2l4.7-1v-4.6q1.1 0.5 2.6 0.5 2.8 0 4.8-2.2t1.9-5.1z m-7.6-9.5q0-3-2-5.1t-4.8-2.1q-1.6 0-3.1 0.8h-4.2v18.7l4.8-0.9v-4.6q1.2 0.4 2.5 0.4 2.8 0 4.8-2.1t2-5.1z m13.7-4v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z' })
                )
            );
        }
    }]);

    return FaPiedPiper;
}(React.Component);

exports.default = FaPiedPiper;
module.exports = exports['default'];