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

var FaArrowCircleUp = function (_React$Component) {
    _inherits(FaArrowCircleUp, _React$Component);

    function FaArrowCircleUp() {
        _classCallCheck(this, FaArrowCircleUp);

        return _possibleConstructorReturn(this, (FaArrowCircleUp.__proto__ || Object.getPrototypeOf(FaArrowCircleUp)).apply(this, arguments));
    }

    _createClass(FaArrowCircleUp, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.7 20q0-0.6-0.4-1l-10.2-10.1q-0.4-0.4-1-0.4t-1 0.4l-10.1 10.1q-0.4 0.4-0.4 1t0.4 1l2.1 2q0.4 0.4 1 0.4t1-0.4l4.2-4.2v11.2q0 0.6 0.4 1t1 0.4h2.9q0.5 0 1-0.4t0.4-1v-11.2l4.2 4.2q0.4 0.4 1 0.4t1-0.4l2.1-2q0.4-0.4 0.4-1z m5.6 0q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z' })
                )
            );
        }
    }]);

    return FaArrowCircleUp;
}(React.Component);

exports.default = FaArrowCircleUp;
module.exports = exports['default'];