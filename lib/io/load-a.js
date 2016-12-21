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

var IoLoadA = function (_React$Component) {
    _inherits(IoLoadA, _React$Component);

    function IoLoadA() {
        _classCallCheck(this, IoLoadA);

        return _possibleConstructorReturn(this, (IoLoadA.__proto__ || Object.getPrototypeOf(IoLoadA)).apply(this, arguments));
    }

    _createClass(IoLoadA, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm16.3 7.5c0-3.4 1.6-5 5-5s5 1.6 5 5-1.7 5-5 5-5-1.6-5-5z m-11.3 12.5c0-2.5 1.3-3.7 3.8-3.7s3.7 1.2 3.7 3.7-1.2 3.8-3.7 3.8-3.8-1.3-3.8-3.8z m24.4-8.7c0-0.4 0.2-0.7 0.6-0.7s0.6 0.3 0.6 0.7-0.2 0.6-0.6 0.6-0.6-0.3-0.6-0.6z m-14.1-2.9c0.8 0.8 1.2 1.8 1.2 2.9s-0.4 2-1.2 2.8-1.7 1.1-2.8 1.1-2-0.4-2.8-1.1-1.2-1.8-1.2-2.8 0.4-2.1 1.2-2.9 1.7-1.1 2.8-1.1 2 0.4 2.8 1.1z m17.2 11.6c0-0.9 0.4-1.2 1.3-1.2s1.2 0.3 1.2 1.2-0.4 1.3-1.2 1.3-1.3-0.4-1.3-1.3z m-4.3 8.8c0-1.2 0.6-1.8 1.9-1.8s1.9 0.6 1.9 1.8-0.7 1.9-1.9 1.9-1.9-0.6-1.9-1.9z m-9.4 3.7c0-1.6 0.8-2.5 2.5-2.5s2.5 0.9 2.5 2.5-0.9 2.5-2.5 2.5-2.5-0.9-2.5-2.5z m-9.4-3.7c0-2.2 1-3.2 3.1-3.2s3.1 1 3.1 3.2-1 3.1-3.1 3.1-3.1-1-3.1-3.1z' })
                )
            );
        }
    }]);

    return IoLoadA;
}(React.Component);

exports.default = IoLoadA;
module.exports = exports['default'];