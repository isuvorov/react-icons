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

var IoSocialSkype = function (_React$Component) {
    _inherits(IoSocialSkype, _React$Component);

    function IoSocialSkype() {
        _classCallCheck(this, IoSocialSkype);

        return _possibleConstructorReturn(this, (IoSocialSkype.__proto__ || Object.getPrototypeOf(IoSocialSkype)).apply(this, arguments));
    }

    _createClass(IoSocialSkype, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm34.1 23.2c0.6 1.1 0.9 2.3 0.9 3.6 0 4.5-3.7 8.2-8.3 8.2-1.4 0-2.7-0.3-3.9-0.9-0.8 0.1-1.7 0.2-2.6 0.2-7.9 0-14.3-6.3-14.3-14.1 0-1 0.1-1.9 0.3-2.9-0.7-1.2-1.2-2.6-1.2-4.1 0-4.5 3.7-8.2 8.3-8.2 1.6 0 3.2 0.5 4.4 1.2 0.8-0.1 1.6-0.1 2.5-0.1 7.8 0 14.3 6.2 14.3 14.1 0 1-0.1 2.1-0.4 3z m-6.6 3.7c0.7-1 0.9-2 0.9-3.1 0-1-0.1-1.8-0.5-2.5s-0.9-1.3-1.6-1.8-1.5-0.7-2.5-1.1-2-0.5-3.2-0.7c-0.9-0.3-1.5-0.4-1.9-0.5s-0.8-0.3-1.2-0.5-0.5-0.4-0.8-0.6c-0.1-0.2-0.3-0.5-0.3-0.8 0-0.5 0.2-1 0.9-1.4s1.4-0.5 2.5-0.5c1.1 0 1.9 0.1 2.4 0.5s0.8 0.9 1.2 1.6c0.4 0.5 0.7 0.8 0.9 1.1 0.3 0.2 0.7 0.4 1.2 0.4 0.7 0 1.1-0.3 1.5-0.7s0.6-0.8 0.6-1.3c0-0.5-0.2-1.1-0.5-1.6s-0.8-1.1-1.4-1.6-1.4-0.9-2.3-1.2-2.2-0.4-3.4-0.4c-1.6 0-3 0.2-4.1 0.7-1.3 0.4-2.2 1.1-2.9 1.9-0.6 0.9-0.9 1.7-0.9 2.8s0.2 2.1 0.9 2.8 1.5 1.4 2.5 1.8c1 0.4 2.2 0.8 3.7 1.1 1.1 0.3 2 0.4 2.7 0.6 0.6 0.2 1.1 0.5 1.5 0.9 0.3 0.3 0.5 0.8 0.5 1.3 0 0.7-0.3 1.4-1 1.8s-1.7 0.7-2.9 0.7c-0.9 0-1.6-0.1-2.1-0.4s-0.9-0.4-1.2-0.8-0.6-0.9-0.8-1.5-0.5-0.9-0.8-1.2-0.8-0.4-1.3-0.4c-0.6 0-1.1 0.1-1.5 0.5s-0.6 0.8-0.6 1.3c0 0.9 0.3 1.8 1 2.6s1.4 1.5 2.3 2c1.3 0.8 3 1.1 5.1 1.1 1.7 0 3.3-0.2 4.5-0.7s2.3-1.3 2.9-2.2z' })
                )
            );
        }
    }]);

    return IoSocialSkype;
}(React.Component);

exports.default = IoSocialSkype;
module.exports = exports['default'];