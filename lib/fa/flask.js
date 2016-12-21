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

var FaFlask = function (_React$Component) {
    _inherits(FaFlask, _React$Component);

    function FaFlask() {
        _classCallCheck(this, FaFlask);

        return _possibleConstructorReturn(this, (FaFlask.__proto__ || Object.getPrototypeOf(FaFlask)).apply(this, arguments));
    }

    _createClass(FaFlask, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35.6 32.3q1.2 2 0.5 3.4t-3.2 1.4h-25.7q-2.4 0-3.1-1.4t0.5-3.4l11.2-17.7v-8.9h-1.4q-0.6 0-1-0.4t-0.5-1 0.5-1 1-0.4h11.4q0.6 0 1 0.4t0.4 1-0.4 1-1 0.4h-1.4v8.9z m-17.4-16.2l-6.1 9.6h15.9l-6.1-9.6-0.4-0.7v-9.7h-2.9v9.7z' })
                )
            );
        }
    }]);

    return FaFlask;
}(React.Component);

exports.default = FaFlask;
module.exports = exports['default'];