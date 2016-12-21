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

var FaExchange = function (_React$Component) {
    _inherits(FaExchange, _React$Component);

    function FaExchange() {
        _classCallCheck(this, FaExchange);

        return _possibleConstructorReturn(this, (FaExchange.__proto__ || Object.getPrototypeOf(FaExchange)).apply(this, arguments));
    }

    _createClass(FaExchange, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm40 26.4v4.3q0 0.3-0.2 0.5t-0.5 0.2h-30.7v4.3q0 0.3-0.2 0.5t-0.5 0.2q-0.3 0-0.6-0.2l-7.1-7.1q-0.2-0.2-0.2-0.5 0-0.3 0.2-0.5l7.1-7.2q0.2-0.2 0.6-0.2 0.2 0 0.5 0.2t0.2 0.5v4.3h30.7q0.3 0 0.5 0.2t0.2 0.5z m0-12.1q0 0.3-0.2 0.5l-7.1 7.1q-0.2 0.2-0.6 0.2-0.2 0-0.5-0.2t-0.2-0.5v-4.3h-30.7q-0.3 0-0.5-0.2t-0.2-0.5v-4.3q0-0.2 0.2-0.5t0.5-0.2h30.7v-4.3q0-0.3 0.2-0.5t0.5-0.2q0.3 0 0.6 0.3l7.1 7.1q0.2 0.2 0.2 0.5z' })
                )
            );
        }
    }]);

    return FaExchange;
}(React.Component);

exports.default = FaExchange;
module.exports = exports['default'];