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

var MdBlurOff = function (_React$Component) {
    _inherits(MdBlurOff, _React$Component);

    function MdBlurOff() {
        _classCallCheck(this, MdBlurOff);

        return _possibleConstructorReturn(this, (MdBlurOff.__proto__ || Object.getPrototypeOf(MdBlurOff)).apply(this, arguments));
    }

    _createClass(MdBlurOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm5 22.5c0.5 0 0.9 0.4 0.9 0.9s-0.4 0.7-0.9 0.7-0.9-0.3-0.9-0.7 0.4-0.9 0.9-0.9z m5 5.9c0.9 0 1.6 0.7 1.6 1.6s-0.7 1.6-1.6 1.6-1.6-0.7-1.6-1.6 0.7-1.6 1.6-1.6z m6.6 5.7c0.5 0 0.9 0.4 0.9 0.9s-0.4 0.9-0.9 0.9-0.7-0.4-0.7-0.9 0.3-0.9 0.7-0.9z m-11.6-18.2c0.5 0 0.9 0.3 0.9 0.7s-0.4 0.9-0.9 0.9-0.9-0.4-0.9-0.9 0.4-0.7 0.9-0.7z m5 5.7c0.9 0 1.6 0.8 1.6 1.8s-0.7 1.6-1.6 1.6-1.6-0.7-1.6-1.6 0.7-1.8 1.6-1.8z m25 0.9c0.5 0 0.9 0.4 0.9 0.9s-0.4 0.7-0.9 0.7-0.9-0.3-0.9-0.7 0.4-0.9 0.9-0.9z m-18.4 5.9c1 0 1.8 0.7 1.8 1.6s-0.8 1.6-1.8 1.6-1.6-0.7-1.6-1.6 0.7-1.6 1.6-1.6z m-12.5-19.6l2.2-2.2 27.1 27.2-2.2 2.1-6.3-6.4c0.1 0.2 0.1 0.3 0.1 0.5 0 0.9-0.7 1.6-1.6 1.6s-1.8-0.7-1.8-1.6 0.8-1.6 1.8-1.6c0.1 0 0.3 0 0.4 0l-4.7-4.7c-0.1 1.2-1.2 2.2-2.5 2.2-1.4 0-2.5-1.1-2.5-2.5 0-1.3 1-2.4 2.1-2.5l-4.6-4.7c0 0.1 0 0.3 0 0.4 0 1-0.7 1.8-1.6 1.8s-1.6-0.8-1.6-1.8 0.7-1.6 1.6-1.6l0.5 0.1z m19.3 25.3c0.4 0 0.7 0.4 0.7 0.9s-0.3 0.9-0.7 0.9-0.9-0.4-0.9-0.9 0.4-0.9 0.9-0.9z m6.6-22.5c-0.9 0-1.6-0.7-1.6-1.6s0.7-1.6 1.6-1.6 1.6 0.7 1.6 1.6-0.7 1.6-1.6 1.6z m0 6.8c-0.9 0-1.6-0.8-1.6-1.8s0.7-1.6 1.6-1.6 1.6 0.7 1.6 1.6-0.7 1.8-1.6 1.8z m0 6.6c-0.9 0-1.6-0.7-1.6-1.6s0.7-1.8 1.6-1.8 1.6 0.8 1.6 1.8-0.7 1.6-1.6 1.6z m-13.4-13.4c-0.9 0-1.6-0.7-1.6-1.6s0.7-1.6 1.6-1.6 1.8 0.7 1.8 1.6-0.8 1.6-1.8 1.6z m18.4 5.9c-0.5 0-0.9-0.4-0.9-0.9s0.4-0.7 0.9-0.7 0.9 0.3 0.9 0.7-0.4 0.9-0.9 0.9z m-18.4-11.6c-0.4 0-0.7-0.4-0.7-0.9s0.3-0.9 0.7-0.9 0.9 0.4 0.9 0.9-0.4 0.9-0.9 0.9z m6.8 0c-0.5 0-0.9-0.4-0.9-0.9s0.4-0.9 0.9-0.9 0.7 0.4 0.7 0.9-0.3 0.9-0.7 0.9z m-0.4 13.2c-1.1-0.1-2-1-2.1-2.1v-0.4c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5h-0.4z m0.4-7.5c-1 0-1.8-0.7-1.8-1.6s0.8-1.6 1.8-1.6 1.6 0.7 1.6 1.6-0.7 1.6-1.6 1.6z' })
                )
            );
        }
    }]);

    return MdBlurOff;
}(React.Component);

exports.default = MdBlurOff;
module.exports = exports['default'];