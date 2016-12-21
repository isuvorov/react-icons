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

var IoSocialFacebookOutline = function (_React$Component) {
    _inherits(IoSocialFacebookOutline, _React$Component);

    function IoSocialFacebookOutline() {
        _classCallCheck(this, IoSocialFacebookOutline);

        return _possibleConstructorReturn(this, (IoSocialFacebookOutline.__proto__ || Object.getPrototypeOf(IoSocialFacebookOutline)).apply(this, arguments));
    }

    _createClass(IoSocialFacebookOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm22.5 15h5l-0.6 5h-4.4v15h-6.5v-15h-3.5v-5h3.5v-3.4c0-4.2 1.8-6.6 7.1-6.6h4.4v5h-2.7c-2.1 0-2.3 0.7-2.3 2v3z m3.3 3.8l0.3-2.5h-4.8v-4.3c0-0.7 0-1.6 0.7-2.3 0.7-0.9 1.9-1 2.8-1h1.5v-2.5h-3.2c-2.2 0-3.8 0.5-4.7 1.5-0.7 0.8-1.1 2.1-1.1 3.9v4.6h-3.5v2.5h3.5v15h4v-15h4.5z' })
                )
            );
        }
    }]);

    return IoSocialFacebookOutline;
}(React.Component);

exports.default = IoSocialFacebookOutline;
module.exports = exports['default'];