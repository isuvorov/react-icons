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

var FaEyedropper = function (_React$Component) {
    _inherits(FaEyedropper, _React$Component);

    function FaEyedropper() {
        _classCallCheck(this, FaEyedropper);

        return _possibleConstructorReturn(this, (FaEyedropper.__proto__ || Object.getPrototypeOf(FaEyedropper)).apply(this, arguments));
    }

    _createClass(FaEyedropper, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm37.9 2.1q2.1 2.1 2.1 5.1t-2.1 5l-5 5 2.3 2.3q0.2 0.2 0.2 0.5t-0.2 0.5l-4.7 4.7q-0.2 0.2-0.5 0.2t-0.5-0.2l-2.4-2.3-13.4 13.4q-0.8 0.8-2 0.8h-4.6l-5.7 2.9-1.4-1.4 2.9-5.7v-4.6q0-1.2 0.8-2l13.4-13.4-2.3-2.4q-0.2-0.2-0.2-0.5t0.2-0.5l4.7-4.7q0.2-0.2 0.5-0.2t0.5 0.2l2.3 2.3 5-5q2.1-2.1 5-2.1t5.1 2.1z m-26.5 30.8l12.9-12.9-4.3-4.3-12.9 12.9v4.3h4.3z' })
                )
            );
        }
    }]);

    return FaEyedropper;
}(React.Component);

exports.default = FaEyedropper;
module.exports = exports['default'];