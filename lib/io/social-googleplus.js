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

var IoSocialGoogleplus = function (_React$Component) {
    _inherits(IoSocialGoogleplus, _React$Component);

    function IoSocialGoogleplus() {
        _classCallCheck(this, IoSocialGoogleplus);

        return _possibleConstructorReturn(this, (IoSocialGoogleplus.__proto__ || Object.getPrototypeOf(IoSocialGoogleplus)).apply(this, arguments));
    }

    _createClass(IoSocialGoogleplus, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm16.4 21.6c1.7 1.4 3.5 2.8 3.5 5.7 0 3.8-3.7 7.7-10.8 7.7-6.3 0-9.1-3-9.1-6 0-0.8 0.2-3.3 3.3-5.1 2.1-1.2 4.7-1.6 6.6-1.8-0.3-0.5-0.6-1.2-0.6-2 0-0.3 0-0.6 0.1-0.8h-0.3c-1.5 0-3.6-0.3-5.3-2-1.1-1.2-1.8-2.8-1.8-4.5 0-2 1-4.1 2.7-5.5 2.5-2 5.4-2.3 7.3-2.3h10.5l-4.7 2.6h-1c0.9 1 1.8 2.4 1.8 4.5 0 3.1-2 4.6-3.5 5.8v0.1c-0.5 0.4-0.9 0.7-0.9 1.3 0 0.5 0.3 0.8 0.8 1.2z m-9.8-10.7c0 1.1 0.4 2.6 1.1 4 0.6 1 1.7 2.1 3.2 2.1 0.8 0 1.7-0.3 2.2-0.8 0.8-0.8 0.8-2 0.8-2.4 0-1.4-0.5-2.9-1.2-4.1-0.6-1-1.5-2.2-3.1-2.2-0.8 0-1.8 0.4-2.3 1-0.4 0.6-0.7 1.4-0.7 2.4z m9.5 17.9c0-1.6-1-2.5-3.9-4.4-0.2 0-0.3-0.1-0.6-0.1-0.5 0-2.5 0.2-3.9 0.6-1.3 0.5-3 1.3-3 3.3 0 2.4 2.5 4 6.2 4 3.2 0 5.2-1.3 5.2-3.5z m12.8-17.7h6.1v2.7h-6.1v6.3h-2.6v-6.3h-6.3v-2.7h6.3v-6.1h2.6v6.1z' })
                )
            );
        }
    }]);

    return IoSocialGoogleplus;
}(React.Component);

exports.default = IoSocialGoogleplus;
module.exports = exports['default'];