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

var IoSocialChrome = function (_React$Component) {
    _inherits(IoSocialChrome, _React$Component);

    function IoSocialChrome() {
        _classCallCheck(this, IoSocialChrome);

        return _possibleConstructorReturn(this, (IoSocialChrome.__proto__ || Object.getPrototypeOf(IoSocialChrome)).apply(this, arguments));
    }

    _createClass(IoSocialChrome, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm12.3 20c0-2.9 2.3-5.2 5.2-5.2s5.2 2.3 5.2 5.2-2.3 5.2-5.2 5.2-5.2-2.3-5.2-5.2z m22.5-3c0.1 1 0.2 2 0.2 3 0 8.3-5.8 15.2-13.6 17-0.8 0.2-1.6 0.3-2.3 0.4-0.6 0.1-1.1 0.1-1.6 0.1-0.6 0-1.3 0-2-0.1v-0.1l8-13.8c0.6-1 1-2.2 1-3.5 0-2.1-1-3.9-2.5-5.2h12.2c0.3 0.7 0.4 1.5 0.6 2.2-0.2-0.7-0.3-1.5-0.6-2.2 0.3 0.7 0.4 1.5 0.6 2.2z m-17.3 10c0.8 0 1.6-0.2 2.3-0.4l-6.1 10.5c-3.3-0.7-6.2-2.3-8.5-4.6-3.2-3.2-5.2-7.6-5.2-12.5 0-2.4 0.5-4.8 1.4-6.9 0.6-1.2 1.3-2.4 2-3.5l8.1 13.9c1.2 2.1 3.3 3.5 6 3.5z m-12.9-18.8v-0.1c1.9-2 4.3-3.6 7-4.6 1.8-0.6 3.9-1 5.9-1 5.7 0 10.8 2.8 14 7h0.1c0.7 1.1 1.4 2.3 1.9 3.5-0.5-1.2-1.2-2.4-1.9-3.5h-0.1c0.8 1.1 1.5 2.3 2 3.5h-16c-3.4 0-6.2 2.5-6.8 5.6z' })
                )
            );
        }
    }]);

    return IoSocialChrome;
}(React.Component);

exports.default = IoSocialChrome;
module.exports = exports['default'];