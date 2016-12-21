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

var MdForward10 = function (_React$Component) {
    _inherits(MdForward10, _React$Component);

    function MdForward10() {
        _classCallCheck(this, MdForward10);

        return _possibleConstructorReturn(this, (MdForward10.__proto__ || Object.getPrototypeOf(MdForward10)).apply(this, arguments));
    }

    _createClass(MdForward10, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm22 25.3c0 0.3 0.5 0.6 0.8 0.6 0.2 0 0.4 0 0.6-0.2l0.3-0.4s0.1-0.3 0.1-0.5v-3.3s-0.1-0.3-0.1-0.5c0-0.2-0.7-0.5-0.9-0.5-0.1 0-0.3 0-0.5 0.2l-0.3 0.3s-0.2 0.3-0.2 0.5v3.3s0.2 0.4 0.2 0.5z m3.2-1.6c0 0.4 0 1-0.2 1.3l-0.5 1s-0.5 0.5-0.8 0.5-0.7 0.1-1 0.1-0.7 0-1.1-0.1-0.4-0.3-0.7-0.5c-0.6-0.2-0.7-1.5-0.7-2.3v-1.2c0-0.5 0-1 0.1-1.3l0.6-1s0.4-0.5 0.7-0.5 0.7-0.2 1.1-0.2 0.7 0 1 0.2 0.5 0.3 0.8 0.5 0.3 0.5 0.5 1 0.2 0.8 0.2 1.3v1.2z m-7 2.9h-1.6v-5.4l-1.6 0.4v-1.1l3-1h0.2v7.1z m-11.6-5c0-7.3 6.1-13.2 13.4-13.2v-6.8l8.4 8.4-8.4 8.4v-6.8c-5.5 0-10 4.6-10 10s4.5 10 10 10 10-4.5 10-10h3.4c0 7.4-6.1 13.4-13.4 13.4s-13.4-6-13.4-13.4z' })
                )
            );
        }
    }]);

    return MdForward10;
}(React.Component);

exports.default = MdForward10;
module.exports = exports['default'];