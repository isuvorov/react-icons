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

var FaFemale = function (_React$Component) {
    _inherits(FaFemale, _React$Component);

    function FaFemale() {
        _classCallCheck(this, FaFemale);

        return _possibleConstructorReturn(this, (FaFemale.__proto__ || Object.getPrototypeOf(FaFemale)).apply(this, arguments));
    }

    _createClass(FaFemale, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm34.1 23.6q0 0.9-0.7 1.5t-1.5 0.6q-1.1 0-1.8-0.9l-5-7.7h-1v3l5.5 9.2q0.2 0.3 0.2 0.7 0 0.6-0.4 1t-1 0.4h-4.3v6.1q0 1-0.8 1.8t-1.7 0.7h-3.6q-1 0-1.8-0.7t-0.7-1.8v-6.1h-4.3q-0.6 0-1-0.4t-0.4-1q0-0.4 0.2-0.7l5.5-9.2v-3h-1l-5.1 7.7q-0.6 0.9-1.8 0.9-0.8 0-1.5-0.6t-0.6-1.5q0-0.7 0.4-1.2l5.7-8.6q1.6-2.4 3.9-2.4h8.6q2.3 0 3.9 2.4l5.7 8.6q0.4 0.5 0.4 1.2z m-9.3-17.9q0 2.1-1.5 3.6t-3.5 1.4-3.6-1.4-1.4-3.6 1.4-3.5 3.6-1.5 3.5 1.5 1.5 3.5z' })
                )
            );
        }
    }]);

    return FaFemale;
}(React.Component);

exports.default = FaFemale;
module.exports = exports['default'];