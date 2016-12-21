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

var FaWrench = function (_React$Component) {
    _inherits(FaWrench, _React$Component);

    function FaWrench() {
        _classCallCheck(this, FaWrench);

        return _possibleConstructorReturn(this, (FaWrench.__proto__ || Object.getPrototypeOf(FaWrench)).apply(this, arguments));
    }

    _createClass(FaWrench, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm9.6 32.9q0-0.6-0.5-1t-1-0.5-1 0.5-0.4 1 0.4 1 1 0.4 1-0.4 0.5-1z m14.3-9.4l-15.2 15.2q-0.8 0.8-2 0.8-1.1 0-2-0.8l-2.4-2.4q-0.8-0.8-0.8-2 0-1.2 0.8-2l15.2-15.2q0.9 2.1 2.6 3.8t3.8 2.6z m14.2-9.7q0 0.8-0.5 2.3-1.1 3-3.7 4.9t-5.8 1.9q-4.1 0-7-3t-3-7 3-7.1 7-2.9q1.3 0 2.8 0.3t2.4 1.1q0.3 0.2 0.3 0.6t-0.3 0.6l-6.6 3.8v5l4.3 2.4q0.1-0.1 1.8-1.1t3-1.8 1.6-0.8q0.3 0 0.5 0.2t0.2 0.6z' })
                )
            );
        }
    }]);

    return FaWrench;
}(React.Component);

exports.default = FaWrench;
module.exports = exports['default'];