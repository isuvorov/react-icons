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

var MdKeyboardHide = function (_React$Component) {
    _inherits(MdKeyboardHide, _React$Component);

    function MdKeyboardHide() {
        _classCallCheck(this, MdKeyboardHide);

        return _possibleConstructorReturn(this, (MdKeyboardHide.__proto__ || Object.getPrototypeOf(MdKeyboardHide)).apply(this, arguments));
    }

    _createClass(MdKeyboardHide, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 38.4l-6.6-6.8h13.2z m11.6-25v-3.4h-3.2v3.4h3.2z m0 5v-3.4h-3.2v3.4h3.2z m-5-5v-3.4h-3.2v3.4h3.2z m0 5v-3.4h-3.2v3.4h3.2z m0 6.6v-3.4h-13.2v3.4h13.2z m-15-11.6v-3.4h-3.2v3.4h3.2z m0 5v-3.4h-3.2v3.4h3.2z m1.8-3.4v3.4h3.2v-3.4h-3.2z m0-5v3.4h3.2v-3.4h-3.2z m5 5v3.4h3.2v-3.4h-3.2z m0-5v3.4h3.2v-3.4h-3.2z m15-5c1.8 0 3.2 1.6 3.2 3.4v16.6c0 1.8-1.4 3.4-3.2 3.4h-26.8c-1.8 0-3.2-1.6-3.2-3.4v-16.6c0-1.8 1.4-3.4 3.2-3.4h26.8z' })
                )
            );
        }
    }]);

    return MdKeyboardHide;
}(React.Component);

exports.default = MdKeyboardHide;
module.exports = exports['default'];