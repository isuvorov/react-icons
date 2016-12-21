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

var MdThumbUp = function (_React$Component) {
    _inherits(MdThumbUp, _React$Component);

    function MdThumbUp() {
        _classCallCheck(this, MdThumbUp);

        return _possibleConstructorReturn(this, (MdThumbUp.__proto__ || Object.getPrototypeOf(MdThumbUp)).apply(this, arguments));
    }

    _createClass(MdThumbUp, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm38.4 16.6l-0.1 0.2h0.1v3.2c0 0.5-0.1 0.9-0.3 1.3l-5.1 11.7c-0.4 1.1-1.6 2-3 2h-15c-1.8 0-3.4-1.6-3.4-3.4v-16.6c0-0.9 0.4-1.7 1.1-2.3l10.9-11.1 1.8 1.8c0.5 0.5 0.7 1.1 0.7 1.8v0.5l-1.6 7.7h10.5c1.8 0 3.4 1.4 3.4 3.2z m-36.8 18.4v-20h6.8v20h-6.8z' })
                )
            );
        }
    }]);

    return MdThumbUp;
}(React.Component);

exports.default = MdThumbUp;
module.exports = exports['default'];