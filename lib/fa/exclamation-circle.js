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

var FaExclamationCircle = function (_React$Component) {
    _inherits(FaExclamationCircle, _React$Component);

    function FaExclamationCircle() {
        _classCallCheck(this, FaExclamationCircle);

        return _possibleConstructorReturn(this, (FaExclamationCircle.__proto__ || Object.getPrototypeOf(FaExclamationCircle)).apply(this, arguments));
    }

    _createClass(FaExclamationCircle, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20.1 2.9q4.7 0 8.6 2.3t6.3 6.2 2.3 8.6-2.3 8.6-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3z m2.9 27.8v-4.2q0-0.4-0.2-0.6t-0.5-0.2h-4.3q-0.3 0-0.5 0.2t-0.2 0.5v4.3q0 0.3 0.2 0.5t0.5 0.2h4.3q0.3 0 0.5-0.2t0.2-0.5z m0-7.7l0.4-13.8q0-0.3-0.3-0.5-0.2-0.1-0.5-0.1h-4.9q-0.3 0-0.5 0.1-0.3 0.2-0.3 0.4l0.4 13.9q0 0.2 0.2 0.4t0.6 0.2h4.1q0.3 0 0.5-0.2t0.3-0.4z' })
                )
            );
        }
    }]);

    return FaExclamationCircle;
}(React.Component);

exports.default = FaExclamationCircle;
module.exports = exports['default'];