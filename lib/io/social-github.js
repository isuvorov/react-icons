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

var IoSocialGithub = function (_React$Component) {
    _inherits(IoSocialGithub, _React$Component);

    function IoSocialGithub() {
        _classCallCheck(this, IoSocialGithub);

        return _possibleConstructorReturn(this, (IoSocialGithub.__proto__ || Object.getPrototypeOf(IoSocialGithub)).apply(this, arguments));
    }

    _createClass(IoSocialGithub, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm17.5 2.5c9.7 0 17.5 8 17.5 18 0 7.9-5 14.7-12 17h-0.3c-0.6 0-0.9-0.5-0.9-0.9 0-0.7 0.1-2.5 0.1-4.9 0-1.6-0.7-2.8-1.3-3.3 3.9-0.5 8.1-2 8.1-8.9 0-1.9-0.7-3.6-1.8-4.8 0.1-0.5 0.8-2.3-0.2-4.8h-0.4c-0.6 0-2.1 0.3-4.4 1.9-1.4-0.4-2.9-0.6-4.4-0.6s-3 0.2-4.4 0.6c-2.3-1.6-3.8-1.9-4.4-1.9h-0.4c-1 2.5-0.3 4.3-0.2 4.8-1.1 1.2-1.8 2.9-1.8 4.8 0 6.9 4.1 8.4 8 8.9-0.5 0.4-0.9 1.2-1.1 2.4-0.5 0.2-1.2 0.5-2 0.5-1 0-2.2-0.4-3.1-2 0 0-1-1.7-2.7-1.9-0.2 0-1.7 0-0.1 1.1 0 0 1.2 0.6 2 2.7 0 0 0.7 2.6 4.1 2.6 0.6 0 1.1 0 1.7-0.2v3c0 0.4-0.2 0.9-0.8 0.9h-0.3c-7-2.3-12-9.1-12-17 0-10 7.8-18 17.5-18z' })
                )
            );
        }
    }]);

    return IoSocialGithub;
}(React.Component);

exports.default = IoSocialGithub;
module.exports = exports['default'];