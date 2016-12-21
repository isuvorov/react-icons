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

var TiBell = function (_React$Component) {
    _inherits(TiBell, _React$Component);

    function TiBell() {
        _classCallCheck(this, TiBell);

        return _possibleConstructorReturn(this, (TiBell.__proto__ || Object.getPrototypeOf(TiBell)).apply(this, arguments));
    }

    _createClass(TiBell, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm32.9 28.8c-0.1 0-2.9-3.1-2.9-10.5 0-4.3-2.8-8-6.7-9.4 0-0.2 0-0.4 0-0.6 0-1.8-1.5-3.3-3.3-3.3s-3.3 1.5-3.3 3.3c0 0.2 0 0.4 0 0.6-3.9 1.4-6.7 5.1-6.7 9.4 0 7.4-2.8 10.5-2.8 10.5-0.5 0.5-0.7 1.2-0.4 1.8s0.9 1.1 1.5 1.1h5.3c0.7 2.8 3.3 5 6.4 5s5.7-2.2 6.4-5h5.3c0.6 0 1.2-0.4 1.5-1.1s0.1-1.3-0.3-1.8z m-12.9-17.1c3.6 0 6.6 2.9 6.6 6.6 0 1.2 0.1 2.3 0.2 3.4h-13.6c0.1-1.1 0.2-2.2 0.2-3.4 0-3.7 2.9-6.6 6.6-6.6z m0 21.6c-1.2 0-2.3-0.6-2.9-1.6h5.8c-0.6 1-1.7 1.6-2.9 1.6z m-8.6-5c0.5-1.2 1.1-2.9 1.5-5h14.2c0.4 2.1 1 3.8 1.6 5h-17.3z' })
                )
            );
        }
    }]);

    return TiBell;
}(React.Component);

exports.default = TiBell;
module.exports = exports['default'];