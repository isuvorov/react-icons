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

var FaGraduationCap = function (_React$Component) {
    _inherits(FaGraduationCap, _React$Component);

    function FaGraduationCap() {
        _classCallCheck(this, FaGraduationCap);

        return _possibleConstructorReturn(this, (FaGraduationCap.__proto__ || Object.getPrototypeOf(FaGraduationCap)).apply(this, arguments));
    }

    _createClass(FaGraduationCap, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.1 18.9l0.3 5.6q0 1.2-1.5 2.2t-4.1 1.7-5.6 0.6-5.7-0.6-4.1-1.7-1.4-2.2l0.3-5.6 10 3.2q0.4 0.1 0.9 0.1t0.8-0.1z m9.2-5.6q0 0.4-0.3 0.5l-19.7 6.2q0 0-0.1 0t-0.2 0l-11.4-3.6q-0.8 0.6-1.3 1.9t-0.6 3.2q1.1 0.6 1.1 1.9 0 1.2-1 1.8l1 7.6q0.1 0.3-0.1 0.5-0.2 0.1-0.4 0.1h-3.4q-0.2 0-0.4-0.1-0.2-0.2-0.1-0.5l1-7.6q-1-0.6-1-1.8 0-1.3 1.1-2 0.2-3.6 1.7-5.8l-5.8-1.8q-0.4-0.1-0.4-0.5t0.4-0.6l19.6-6.1q0.1 0 0.2 0t0.1 0l19.6 6.1q0.4 0.2 0.4 0.6z' })
                )
            );
        }
    }]);

    return FaGraduationCap;
}(React.Component);

exports.default = FaGraduationCap;
module.exports = exports['default'];