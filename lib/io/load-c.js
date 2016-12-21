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

var IoLoadC = function (_React$Component) {
    _inherits(IoLoadC, _React$Component);

    function IoLoadC() {
        _classCallCheck(this, IoLoadC);

        return _possibleConstructorReturn(this, (IoLoadC.__proto__ || Object.getPrototypeOf(IoLoadC)).apply(this, arguments));
    }

    _createClass(IoLoadC, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35 17.7c0 0.2 0 0.4-0.1 0.7-0.3 0.6-1.1 0.9-1.8 0.5-0.3-0.2-0.4-0.5-0.5-0.9-0.1-0.3-0.1-0.7-0.2-1-0.3-1.6-0.9-3.2-1.7-4.6-0.9-1.6-2.2-3.2-3.7-4.4-1.4-1.1-3.1-2-4.8-2.5-1.7-0.5-3.3-0.7-5-0.7h-0.3c-0.3 0-0.5 0-0.7 0-0.5 0-1.1 0.1-1.6 0.2-1 0.2-1.9 0.5-2.9 0.9-1.6 0.6-3.1 1.5-4.4 2.7s-2.5 2.6-3.3 4.1c-1 1.7-1.6 3.5-1.9 5.4-0.1 0.9-0.1 1.8-0.1 2.7 0 0.4 0 0.8 0 1.2 0.1 0.5 0.2 1 0.3 1.5 0.4 1.9 1.1 3.7 2.2 5.2 1 1.6 2.2 3 3.7 4.1 1.6 1.2 3.3 2 5.1 2.6 1.9 0.5 3.9 0.7 5.9 0.5 2-0.1 3.9-0.7 5.7-1.5 0.9-0.4 1.7-1 2.5-1.5s1.5-1.2 2.1-1.9c0.3-0.3 0.7-0.7 1-1.1s0.5-0.8 0.8-1.2 0.9-1.5 1.3-2.4c0.3-0.6 0.6-1.2 0.8-1.9 0.2-0.3 0.3-0.7 0.4-1s0-0.6 0.1-0.9c0.1 0.7 0.1 1.4-0.1 2 0 0.4-0.1 0.9-0.3 1.3-0.1 0.4-0.2 0.8-0.4 1.2-0.3 0.7-0.6 1.4-1 2.1-0.5 0.9-0.9 1.7-1.6 2.4s-1.2 1.4-1.9 2c-1.4 1.2-3.1 2.1-4.9 2.8-1.7 0.7-3.7 1.1-5.7 1.2s-3.9-0.2-5.8-0.9c-1.8-0.5-3.5-1.4-5.1-2.5-1.5-1.1-2.8-2.5-3.9-3.9-0.5-0.8-1-1.6-1.4-2.5s-0.7-1.6-1-2.5c-0.5-1.4-0.7-2.9-0.8-4.4-0.1-1.6 0.1-3.1 0.4-4.5 0.4-1.9 1.2-3.7 2.2-5.4 0.9-1.4 2-2.7 3.3-3.9s2.7-2.1 4.3-2.8c1.8-0.8 3.7-1.5 5.7-1.6 0.8-0.1 1.5-0.1 2.3-0.1 1 0 2 0.2 3 0.3 1.8 0.4 3.6 1.1 5.3 2s3.2 2.3 4.4 3.8c1.2 1.4 2.1 2.9 2.8 4.5 0.4 0.8 0.6 1.7 0.8 2.5 0.2 0.6 0.4 1.4 0.5 2.1z' })
                )
            );
        }
    }]);

    return IoLoadC;
}(React.Component);

exports.default = IoLoadC;
module.exports = exports['default'];