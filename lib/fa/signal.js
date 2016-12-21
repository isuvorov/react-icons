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

var FaSignal = function (_React$Component) {
    _inherits(FaSignal, _React$Component);

    function FaSignal() {
        _classCallCheck(this, FaSignal);

        return _possibleConstructorReturn(this, (FaSignal.__proto__ || Object.getPrototypeOf(FaSignal)).apply(this, arguments));
    }

    _createClass(FaSignal, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm5.7 32.1v4.3q0 0.3-0.2 0.5t-0.5 0.2h-4.3q-0.3 0-0.5-0.2t-0.2-0.5v-4.3q0-0.3 0.2-0.5t0.5-0.2h4.3q0.3 0 0.5 0.2t0.2 0.5z m8.6-2.8v7.1q0 0.3-0.2 0.5t-0.5 0.2h-4.3q-0.3 0-0.5-0.2t-0.2-0.5v-7.1q0-0.3 0.2-0.5t0.5-0.2h4.3q0.3 0 0.5 0.2t0.2 0.5z m8.6-5.7v12.8q0 0.3-0.2 0.5t-0.6 0.2h-4.2q-0.4 0-0.6-0.2t-0.2-0.5v-12.8q0-0.3 0.2-0.5t0.6-0.2h4.2q0.4 0 0.6 0.2t0.2 0.5z m8.5-8.6v21.4q0 0.3-0.2 0.5t-0.5 0.2h-4.3q-0.3 0-0.5-0.2t-0.2-0.5v-21.4q0-0.3 0.2-0.5t0.5-0.2h4.3q0.3 0 0.5 0.2t0.2 0.5z m8.6-11.4v32.8q0 0.3-0.2 0.5t-0.5 0.2h-4.3q-0.3 0-0.5-0.2t-0.2-0.5v-32.8q0-0.3 0.2-0.5t0.5-0.2h4.3q0.3 0 0.5 0.2t0.2 0.5z' })
                )
            );
        }
    }]);

    return FaSignal;
}(React.Component);

exports.default = FaSignal;
module.exports = exports['default'];