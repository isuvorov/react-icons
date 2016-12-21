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

var IoSocialRss = function (_React$Component) {
    _inherits(IoSocialRss, _React$Component);

    function IoSocialRss() {
        _classCallCheck(this, IoSocialRss);

        return _possibleConstructorReturn(this, (IoSocialRss.__proto__ || Object.getPrototypeOf(IoSocialRss)).apply(this, arguments));
    }

    _createClass(IoSocialRss, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm9.4 26.3c2.4 0 4.4 1.9 4.4 4.3s-2 4.4-4.4 4.4-4.4-2-4.4-4.4 2-4.3 4.4-4.3z m-4.4-11.3c10.9 0 20 9.1 20 20h-6.2c0-3.7-1.1-7.3-3.8-10s-6.2-3.7-10-3.7v-6.3z m0-10c16.6 0 30 13.4 30 30h-6.2c0-13.4-10.4-23.7-23.8-23.7v-6.3z' })
                )
            );
        }
    }]);

    return IoSocialRss;
}(React.Component);

exports.default = IoSocialRss;
module.exports = exports['default'];