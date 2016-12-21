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

var IoPersonStalker = function (_React$Component) {
    _inherits(IoPersonStalker, _React$Component);

    function IoPersonStalker() {
        _classCallCheck(this, IoPersonStalker);

        return _possibleConstructorReturn(this, (IoPersonStalker.__proto__ || Object.getPrototypeOf(IoPersonStalker)).apply(this, arguments));
    }

    _createClass(IoPersonStalker, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30.7 25.4c3.3 1.2 4.1 2 4.1 2.6 0.2 0.7 0.2 7 0.2 7h-7.7c0-1.4 0-5.5 0-6-0.1-0.8-0.1-2.3-4.3-3.9-0.7-0.3-1.1-0.4-1.5-0.6 1.4-0.6 1.2-1.1 1.2-2.2 0-1.4-0.7-0.8-1.2-3.6-0.2-1.1-0.3-0.4-0.7-2.2-0.3-1 0.1-1 0.1-1.4s-0.1-0.8-0.2-1.7c-0.1-1.1 0.9-4.1 4.5-4.1s4.6 3 4.5 4.1c-0.1 0.9-0.2 1.2-0.2 1.7 0 0.4 0.3 0.4 0.1 1.4-0.4 1.8-0.5 1.1-0.7 2.2-0.5 2.8-1.2 2.2-1.2 3.6 0 2.3-0.2 1.8 3 3.1z m-5.3 9.6h-25.4s0-5.1 0.2-6c0.1-0.8 1.1-1.7 5.3-3.4 4.3-1.5 4-1.3 4-4.3 0-1.8-1-0.6-1.6-4.2-0.2-1.4-0.4-0.5-0.9-2.8-0.2-1.2 0.2-1.3 0.1-1.8s-0.1-1.1-0.2-2.3c-0.2-1.4 1.1-5.2 5.8-5.2s6 3.8 5.8 5.2c-0.1 1.2-0.1 1.8-0.2 2.3s0.4 0.6 0.1 1.8c-0.4 2.3-0.7 1.4-0.9 2.8-0.6 3.6-1.6 2.4-1.6 4.2 0 2.5-0.1 2.8 2.5 3.8 0.4 0.1 0.8 0.3 1.4 0.5 4.3 1.7 5.3 2.6 5.4 3.4 0.1 0.5 0.2 2.2 0.2 3.7v2.3z' })
                )
            );
        }
    }]);

    return IoPersonStalker;
}(React.Component);

exports.default = IoPersonStalker;
module.exports = exports['default'];