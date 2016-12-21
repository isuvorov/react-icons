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

var FaSuperscript = function (_React$Component) {
    _inherits(FaSuperscript, _React$Component);

    function FaSuperscript() {
        _classCallCheck(this, FaSuperscript);

        return _possibleConstructorReturn(this, (FaSuperscript.__proto__ || Object.getPrototypeOf(FaSuperscript)).apply(this, arguments));
    }

    _createClass(FaSuperscript, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm23 30.6v3.7h-5.5l-3.6-5.6-0.5-1q-0.2-0.2-0.2-0.4h-0.1l-0.2 0.4q-0.2 0.5-0.6 1l-3.4 5.6h-5.8v-3.7h2.9l4.4-6.5-4.2-6.1h-3v-3.8h6.1l3.1 5.1q0.1 0.1 0.6 1 0.1 0.2 0.2 0.4h0.1q0-0.2 0.2-0.4l0.6-1 3.1-5.1h5.7v3.8h-2.8l-4.1 5.9 4.6 6.7h2.4z m14.2-15.2v4.6h-11.4l-0.1-0.6q-0.1-0.6-0.1-1 0-1.5 0.6-2.6t1.4-2 1.9-1.4 1.9-1.2 1.4-1.2 0.6-1.5q0-0.8-0.6-1.4t-1.6-0.5q-1.1 0-2.2 0.9-0.3 0.2-0.8 0.8l-2.3-2.1q0.6-0.8 1.4-1.4 1.8-1.5 4.2-1.5 2.4 0 4 1.4t1.5 3.5q0 1.2-0.6 2.3t-1.4 1.7-1.8 1.3-1.8 1.1-1.5 1.2-0.6 1.4h5.1v-1.8h2.8z' })
                )
            );
        }
    }]);

    return FaSuperscript;
}(React.Component);

exports.default = FaSuperscript;
module.exports = exports['default'];