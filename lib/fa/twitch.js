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

var FaTwitch = function (_React$Component) {
    _inherits(FaTwitch, _React$Component);

    function FaTwitch() {
        _classCallCheck(this, FaTwitch);

        return _possibleConstructorReturn(this, (FaTwitch.__proto__ || Object.getPrototypeOf(FaTwitch)).apply(this, arguments));
    }

    _createClass(FaTwitch, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 9.7v9.7h-3.2v-9.7h3.2z m8.9 0v9.7h-3.3v-9.7h3.3z m0 17l5.6-5.7v-17.8h-26.6v23.4h7.3v4.9l4.8-4.9h8.9z m8.9-26.7v22.6l-9.7 9.7h-7.3l-4.8 4.8h-4.9v-4.8h-8.9v-25.8l2.5-6.5h33.1z' })
                )
            );
        }
    }]);

    return FaTwitch;
}(React.Component);

exports.default = FaTwitch;
module.exports = exports['default'];