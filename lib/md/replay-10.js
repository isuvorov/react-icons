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

var MdReplay10 = function (_React$Component) {
    _inherits(MdReplay10, _React$Component);

    function MdReplay10() {
        _classCallCheck(this, MdReplay10);

        return _possibleConstructorReturn(this, (MdReplay10.__proto__ || Object.getPrototypeOf(MdReplay10)).apply(this, arguments));
    }

    _createClass(MdReplay10, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm22 25.3c0 0.3 0.5 0.6 0.8 0.6 0.2 0 0.4 0 0.6-0.2l0.3-0.4s0.1-0.3 0.1-0.5v-3.3s-0.1-0.3-0.1-0.5c0-0.2-0.7-0.5-0.9-0.5-0.1 0-0.3 0-0.5 0.2l-0.3 0.3s-0.2 0.3-0.2 0.5v3.3s0.2 0.4 0.2 0.5z m3.3-1.6c0 0.4 0 1-0.1 1.3l-0.5 1s-0.6 0.5-0.9 0.5-0.7 0.1-1 0.1-0.7 0-1-0.1-0.5-0.3-0.8-0.5c-0.5-0.2-0.7-1.5-0.7-2.3v-1.2c0-0.5 0-1 0.2-1.3l0.5-1s0.5-0.5 0.8-0.5 0.7-0.2 1-0.2 0.7 0 1 0.2 0.6 0.3 0.9 0.5 0.3 0.5 0.5 1 0.1 0.8 0.1 1.3v1.2z m-7.1 2.9h-1.6v-5.4l-1.6 0.4v-1.1l3-1h0.2v7.1z m1.8-18.2c7.3 0 13.4 5.9 13.4 13.2s-6.1 13.4-13.4 13.4-13.4-6-13.4-13.4h3.4c0 5.5 4.5 10 10 10s10-4.5 10-10-4.5-10-10-10v6.8l-8.4-8.4 8.4-8.4v6.8z' })
                )
            );
        }
    }]);

    return MdReplay10;
}(React.Component);

exports.default = MdReplay10;
module.exports = exports['default'];