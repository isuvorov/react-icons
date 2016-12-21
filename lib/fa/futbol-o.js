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

var FaFutbolO = function (_React$Component) {
    _inherits(FaFutbolO, _React$Component);

    function FaFutbolO() {
        _classCallCheck(this, FaFutbolO);

        return _possibleConstructorReturn(this, (FaFutbolO.__proto__ || Object.getPrototypeOf(FaFutbolO)).apply(this, arguments));
    }

    _createClass(FaFutbolO, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm13.6 18.2l6.4-4.6 6.4 4.6-2.4 7.5h-7.9z m6.4-18.2q4.1 0 7.8 1.6t6.4 4.2 4.2 6.4 1.6 7.8-1.6 7.8-4.2 6.4-6.4 4.2-7.8 1.6-7.8-1.6-6.4-4.2-4.2-6.4-1.6-7.8 1.6-7.8 4.2-6.4 6.4-4.2 7.8-1.6z m13.8 30.1q3.3-4.5 3.3-10.1v-0.1l-2.2 2-5.4-5 1.4-7.2 3 0.3q-3.3-4.6-8.7-6.3l1.2 2.8-6.4 3.5-6.4-3.5 1.2-2.8q-5.4 1.7-8.7 6.3l3-0.3 1.4 7.2-5.4 5-2.2-2v0.1q0 5.6 3.3 10.1l0.7-2.9 7.2 0.9 3.1 6.6-2.6 1.6q2.7 0.8 5.4 0.8t5.4-0.8l-2.6-1.6 3.1-6.6 7.3-0.9z' })
                )
            );
        }
    }]);

    return FaFutbolO;
}(React.Component);

exports.default = FaFutbolO;
module.exports = exports['default'];