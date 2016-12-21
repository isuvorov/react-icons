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

var IoAt = function (_React$Component) {
    _inherits(IoAt, _React$Component);

    function IoAt() {
        _classCallCheck(this, IoAt);

        return _possibleConstructorReturn(this, (IoAt.__proto__ || Object.getPrototypeOf(IoAt)).apply(this, arguments));
    }

    _createClass(IoAt, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm33 31.8c-1.9 2-4.1 3.4-6.7 4.3s-5.4 1.4-8.2 1.4c-2.7 0-5.1-0.5-7.4-1.3s-4.1-2.1-5.7-3.6-2.8-3.4-3.7-5.6-1.3-4.5-1.3-7 0.5-4.8 1.4-7 2.3-3.9 3.9-5.5 3.6-2.7 5.8-3.7c2.2-0.8 4.5-1.3 7-1.3 2.2 0 4.3 0.3 6.4 0.9s3.8 1.6 5.3 2.9 2.9 2.8 3.8 4.6 1.4 4.2 1.4 6.7c0 1.9-0.2 3.6-0.8 5s-1.2 2.6-2.1 3.6-1.9 1.7-3 2.2-2.2 0.7-3.5 0.7-2.2-0.3-3-0.9-1.2-1.3-1.2-2.3h-0.2c-0.5 0.8-1.2 1.5-2.2 2.2s-2.2 1-3.6 1c-2.2 0-3.8-0.7-5-2.1s-1.8-3.2-1.8-5.5c0-1.3 0.2-2.7 0.7-3.9s1.1-2.4 1.9-3.5 1.8-1.8 2.9-2.4 2.5-0.9 3.9-0.9c1.1 0 2.1 0.3 2.9 0.8 0.8 0.4 1.4 1.1 1.7 1.8h0.1l0.3-1.8h4.3l-1.9 8.8c-0.1 0.5-0.2 0.9-0.2 1.5s-0.2 1-0.2 1.5c0 0.5 0.1 1 0.3 1.4s0.6 0.5 1.2 0.5c1.2 0 2.3-0.7 3-2s1.3-3.1 1.3-5.3c0-1.9-0.3-3.5-1-5s-1.5-2.7-2.6-3.7-2.5-1.8-4.1-2.3-3.2-0.7-5.1-0.7c-2 0-3.8 0.3-5.4 1s-3.1 1.8-4.2 3-2.2 2.7-2.8 4.4c-0.6 1.6-1 3.4-1 5.4 0 2 0.3 4 1 5.6s1.7 3.1 2.9 4.2 2.8 2.1 4.5 2.8 3.6 0.9 5.6 0.9c2.6 0 4.8-0.5 6.6-1.3s3.6-1.9 5.1-3.3z m-15-17.1c-0.7 0-1.4 0.1-1.9 0.6s-1.1 1-1.5 1.7-0.6 1.4-0.8 2.2-0.4 1.6-0.4 2.4c0 0.4 0 0.7 0.1 1.2 0.1 0.4 0.3 0.8 0.5 1.2s0.5 0.6 0.9 0.8 0.9 0.4 1.5 0.4c0.9 0 1.6-0.2 2.2-0.6s1.1-1 1.5-1.6 0.7-1.3 0.8-2.1 0.3-1.4 0.3-2.1c0-0.4 0-1-0.1-1.5s-0.3-0.9-0.6-1.3-0.5-0.7-0.9-0.9-0.9-0.4-1.6-0.4z' })
                )
            );
        }
    }]);

    return IoAt;
}(React.Component);

exports.default = IoAt;
module.exports = exports['default'];