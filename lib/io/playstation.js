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

var IoPlaystation = function (_React$Component) {
    _inherits(IoPlaystation, _React$Component);

    function IoPlaystation() {
        _classCallCheck(this, IoPlaystation);

        return _possibleConstructorReturn(this, (IoPlaystation.__proto__ || Object.getPrototypeOf(IoPlaystation)).apply(this, arguments));
    }

    _createClass(IoPlaystation, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.3 15.9c0 0.8 0 1.7-0.2 2.5-0.2 0.8-0.4 1.6-0.8 2.2-0.3 0.6-0.8 1-1.4 1.4-0.5 0.3-1.2 0.4-1.9 0.4-1 0-2.4-0.3-3.2-0.7v-10.4c0-0.7-0.6-1.3-1.2-1.3h-0.1c-0.7 0-1.3 0.6-1.3 1.3v23.7l-6.2-2v-28s2.2 0.3 5.9 1.4 5.2 1.6 6.5 2.4c0.6 0.4 1.2 0.9 1.7 1.4 0.5 0.5 1 1 1.3 1.8 0.6 1.2 0.8 2.5 0.9 3.9z m-24.5 12.1c-0.3 0.1-0.6 0.2-0.9 0.4 0 0.1-0.2 0.3-0.1 0.4s0.3 0.3 0.5 0.4c0.4 0.2 1 0.3 1.4 0.3 0.6 0 1.2 0 1.8-0.2 0.3-0.1 0.7-0.2 1-0.4 2.4-0.8 3.3-0.9 3.3-0.9v3.3c-1.1 0.1-2.9 0.3-4 0.3-2.3 0-4.6-0.3-6.8-1.1-0.7-0.2-1.5-0.4-2.1-0.9-0.4-0.2-0.7-0.6-0.8-1-0.2-0.3-0.1-0.7 0.1-1s0.3-0.6 0.7-0.9c0.7-0.5 1.4-0.8 2.2-1.1 0.6-0.3 1.3-0.5 2-0.8 2.7-0.9 8.7-2.8 8.7-2.8v3.6s-4.9 1.6-7 2.4z m33.2-1c0 0.4-0.2 0.7-0.4 1-0.5 0.6-1.1 0.9-1.7 1.2s-1.3 0.6-2 0.9c-4.3 1.5-13.4 4.6-13.4 4.6v-3.8s7.2-2.3 10.4-3.4c0.5-0.2 0.9-0.3 1.2-0.6 0.2-0.2 0.4-0.3 0.3-0.5-0.1-0.2-0.3-0.3-0.5-0.4-0.5-0.1-1-0.2-1.5-0.2-0.8 0-1.5 0.1-2.3 0.4-2.3 0.8-7.6 2.5-7.6 2.5v-3.9s3.5-1.1 5.2-1.2c0.7-0.1 1.8-0.1 2.5-0.1 2 0 4.2 0.2 6.1 0.9 0.4 0.1 0.7 0.2 1.1 0.4 0.7 0.2 1.4 0.6 2 1.1 0.3 0.3 0.6 0.7 0.6 1.1z' })
                )
            );
        }
    }]);

    return IoPlaystation;
}(React.Component);

exports.default = IoPlaystation;
module.exports = exports['default'];