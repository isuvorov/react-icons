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

var IoLevels = function (_React$Component) {
    _inherits(IoLevels, _React$Component);

    function IoLevels() {
        _classCallCheck(this, IoLevels);

        return _possibleConstructorReturn(this, (IoLevels.__proto__ || Object.getPrototypeOf(IoLevels)).apply(this, arguments));
    }

    _createClass(IoLevels, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm10.1 7.7c0.9 0.4 1.4 1.3 1.4 2.3s-0.5 1.9-1.4 2.3v21.5c0 0.7-0.6 1.2-1.3 1.2s-1.2-0.5-1.2-1.2v-21.8c-0.6-0.4-1.1-1.1-1.1-2s0.5-1.6 1.1-2v-1.7c0-0.8 0.5-1.3 1.2-1.3s1.3 0.5 1.3 1.3v1.4z m7.5 15.2c0.7 0.5 1.2 1.2 1.2 2.1s-0.5 1.6-1.2 2.1v6.7c0 0.7-0.6 1.2-1.3 1.2s-1.2-0.5-1.2-1.2v-6.6c-0.8-0.4-1.3-1.3-1.3-2.2s0.5-1.8 1.3-2.2v-16.5c0-0.8 0.5-1.3 1.2-1.3s1.3 0.5 1.3 1.3v16.6z m7.5-10.2c0.8 0.5 1.2 1.3 1.2 2.2s-0.4 1.7-1.2 2.2v16.7c0 0.7-0.6 1.2-1.3 1.2s-1.2-0.5-1.2-1.2v-16.7c-0.8-0.5-1.3-1.2-1.3-2.2s0.5-1.7 1.3-2.2v-6.4c0-0.8 0.5-1.3 1.2-1.3s1.3 0.5 1.3 1.3v6.4z m8.7 17.2c0 1-0.4 1.7-1.2 2.2v1.7c0 0.7-0.6 1.2-1.3 1.2s-1.2-0.5-1.2-1.2v-1.7c-0.8-0.5-1.3-1.2-1.3-2.2s0.5-1.7 1.3-2.2v-21.4c0-0.8 0.5-1.3 1.2-1.3s1.3 0.5 1.3 1.3v21.4c0.8 0.5 1.2 1.3 1.2 2.2z' })
                )
            );
        }
    }]);

    return IoLevels;
}(React.Component);

exports.default = IoLevels;
module.exports = exports['default'];