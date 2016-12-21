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

var IoArrowRightC = function (_React$Component) {
    _inherits(IoArrowRightC, _React$Component);

    function IoArrowRightC() {
        _classCallCheck(this, IoArrowRightC);

        return _possibleConstructorReturn(this, (IoArrowRightC.__proto__ || Object.getPrototypeOf(IoArrowRightC)).apply(this, arguments));
    }

    _createClass(IoArrowRightC, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm25 10l7.8 8.2c0.5 0.5 0.7 1.1 0.7 1.8s-0.2 1.3-0.7 1.7l-7.8 8.3c-1 0.9-2.4 0.9-3.4 0s-0.9-2.7 0-3.6l3.8-3.9h-17c-1.3 0-2.4-1.1-2.4-2.5s1.1-2.5 2.4-2.5h17l-3.9-3.9c-0.9-0.9-0.9-2.7 0-3.6s2.5-0.9 3.5 0z' })
                )
            );
        }
    }]);

    return IoArrowRightC;
}(React.Component);

exports.default = IoArrowRightC;
module.exports = exports['default'];