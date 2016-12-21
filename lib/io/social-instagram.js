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

var IoSocialInstagram = function (_React$Component) {
    _inherits(IoSocialInstagram, _React$Component);

    function IoSocialInstagram() {
        _classCallCheck(this, IoSocialInstagram);

        return _possibleConstructorReturn(this, (IoSocialInstagram.__proto__ || Object.getPrototypeOf(IoSocialInstagram)).apply(this, arguments));
    }

    _createClass(IoSocialInstagram, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm13.8 20c0-4.1 2.1-6.2 6.2-6.2s6.3 2.1 6.3 6.2-2.2 6.3-6.3 6.3-6.2-2.2-6.2-6.3z m0-6.2c-1.1 1.1-1.8 2.3-2.2 3.7h-6.6v-8.7c0-1.1 0.3-2 1.1-2.7s1.7-1.1 2.7-1.1h22.5c1 0 1.9 0.4 2.6 1.1s1.1 1.6 1.1 2.7v8.7h-6.6c-0.4-1.4-1.1-2.6-2.2-3.7-1.7-1.7-3.8-2.5-6.2-2.5s-4.5 0.8-6.2 2.5z m18.7-2.2v-3.1c0-0.3-0.2-0.5-0.3-0.7s-0.4-0.3-0.7-0.3h-3c-0.3 0-0.5 0.2-0.7 0.3s-0.3 0.4-0.3 0.7v3.1c0 0.3 0.2 0.5 0.3 0.7s0.4 0.2 0.7 0.2h3c0.3 0 0.5-0.1 0.7-0.2s0.3-0.4 0.3-0.7z m-6.2 14.6c1.7-1.7 2.5-3.8 2.5-6.2h6.2v11.3c0 1-0.4 1.8-1.1 2.6s-1.6 1.1-2.6 1.1h-22.5c-1 0-1.8-0.3-2.6-1.1s-1.2-1.6-1.2-2.6v-11.3h6.3c0 2.4 0.8 4.5 2.5 6.2s3.8 2.6 6.2 2.6 4.5-0.9 6.3-2.6z' })
                )
            );
        }
    }]);

    return IoSocialInstagram;
}(React.Component);

exports.default = IoSocialInstagram;
module.exports = exports['default'];