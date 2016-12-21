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

var FaHddO = function (_React$Component) {
    _inherits(FaHddO, _React$Component);

    function FaHddO() {
        _classCallCheck(this, FaHddO);

        return _possibleConstructorReturn(this, (FaHddO.__proto__ || Object.getPrototypeOf(FaHddO)).apply(this, arguments));
    }

    _createClass(FaHddO, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm26.2 27.1q0 0.8-0.5 1.3t-1.3 0.5-1.2-0.5-0.6-1.3 0.6-1.2 1.2-0.5 1.3 0.5 0.5 1.2z m5.7 0q0 0.8-0.5 1.3t-1.3 0.5-1.2-0.5-0.5-1.3 0.5-1.2 1.2-0.5 1.3 0.5 0.5 1.2z m2.5 3.6v-7.1q0-0.3-0.2-0.5t-0.5-0.2h-27.1q-0.3 0-0.5 0.2t-0.2 0.5v7.1q0 0.3 0.2 0.5t0.5 0.2h27.1q0.3 0 0.5-0.2t0.2-0.5z m-27.4-10.7h26.3l-3.5-10.8q-0.1-0.2-0.4-0.4t-0.5-0.2h-17.5q-0.3 0-0.6 0.2t-0.3 0.4z m30.3 3.6v7.1q0 1.5-1.1 2.5t-2.5 1.1h-27.1q-1.5 0-2.6-1.1t-1-2.5v-7.1q0-0.6 0.4-1.7l4.4-13.5q0.3-1.2 1.4-2t2.2-0.7h17.5q1.2 0 2.2 0.7t1.4 2l4.4 13.5q0.4 1.1 0.4 1.7z' })
                )
            );
        }
    }]);

    return FaHddO;
}(React.Component);

exports.default = FaHddO;
module.exports = exports['default'];