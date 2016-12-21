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

var IoSocialDropboxOutline = function (_React$Component) {
    _inherits(IoSocialDropboxOutline, _React$Component);

    function IoSocialDropboxOutline() {
        _classCallCheck(this, IoSocialDropboxOutline);

        return _possibleConstructorReturn(this, (IoSocialDropboxOutline.__proto__ || Object.getPrototypeOf(IoSocialDropboxOutline)).apply(this, arguments));
    }

    _createClass(IoSocialDropboxOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm13.8 6l6.2 5.2-8.9 5.5-6.1-4.9z m-6.7 6l4.1 3.2 6.7-4.1-4.1-3.6z m21.8 4.6l6.1 5-6.1 3.9v3.1l-8.9 5.4-8.9-5.3v-3.1l-6.1-4 6.1-5 8.9 5.6-6.2 5.1-1.5-0.9v1.6l7.7 4.6 7.7-4.6v-1.6l-1.5 0.9-6.2-5.1z m-17.7 1.4l-4.1 3.5 6.7 4.3 4.1-3.5z m10.9 4.3l4.1 3.5 6.7-4.4-4.1-3.4z m12.9-10.5l-6.1 4.9-8.9-5.5 6.2-5.2z m-12.9-0.6l6.7 4 4.1-3.2-6.6-4.4z' })
                )
            );
        }
    }]);

    return IoSocialDropboxOutline;
}(React.Component);

exports.default = IoSocialDropboxOutline;
module.exports = exports['default'];