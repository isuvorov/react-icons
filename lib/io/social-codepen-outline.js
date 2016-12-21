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

var IoSocialCodepenOutline = function (_React$Component) {
    _inherits(IoSocialCodepenOutline, _React$Component);

    function IoSocialCodepenOutline() {
        _classCallCheck(this, IoSocialCodepenOutline);

        return _possibleConstructorReturn(this, (IoSocialCodepenOutline.__proto__ || Object.getPrototypeOf(IoSocialCodepenOutline)).apply(this, arguments));
    }

    _createClass(IoSocialCodepenOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm27.8 15.9c0.4 0.3 0.6 0.5 0.6 1v6.3c0 0.5-0.3 0.8-0.7 1-3.2 2.1-6.4 4.3-9.6 6.4-0.4 0.3-0.8 0.3-1.3 0-3.2-2.1-6.3-4.3-9.5-6.4-0.4-0.2-0.7-0.5-0.7-1v-6.2c0-0.5 0.3-0.9 0.7-1.1 3.2-2.1 6.3-4.3 9.5-6.4 0.5-0.3 0.9-0.3 1.3 0 3.2 2.1 6.5 4.3 9.7 6.4z m-9.4-4v4.2c0 0.1 0.1 0.2 0.2 0.2 1.2 0.9 2.4 1.7 3.7 2.5 0 0.1 0.2 0.1 0.3 0l3.1-2z m-1.8 0.1s-4.9 3.2-7.3 4.8c1.1 0.7 2.1 1.3 3.1 2 0.1 0.1 0.3 0.1 0.3 0 1.2-0.8 2.5-1.6 3.6-2.4 0.1-0.1 0.3-0.3 0.3-0.5v-3.9z m-8.1 6.5v3.1l2.4-1.5z m8.1 9.7v-4.1c0-0.1-0.2-0.3-0.3-0.4-1.1-0.7-2.4-1.6-3.6-2.4-0.1-0.1-0.2-0.1-0.4 0l-3 2.1c2.4 1.6 7.3 4.8 7.3 4.8z m1.1-6.1l3.1-2s-2.7-1.8-3.1-2.1c-0.1-0.1-0.4 0-0.4 0-0.4 0.3-0.7 0.5-1.1 0.7-0.7 0.5-2 1.4-2 1.4l3.1 2c0.1 0.1 0.3 0.1 0.4 0z m0.7 6.1l7.3-4.8-3-2.1c-0.1-0.1-0.4-0.1-0.5 0-1.2 0.8-2.4 1.7-3.5 2.4-0.2 0.2-0.3 0.3-0.3 0.5v4z m8-6.6v-3.1l-2.3 1.6z m-8.9-16.6c-4 0-7.8 1.6-10.6 4.4s-4.4 6.6-4.4 10.6 1.6 7.8 4.4 10.6 6.6 4.4 10.6 4.4 7.8-1.6 10.6-4.4 4.4-6.6 4.4-10.6-1.6-7.8-4.4-10.6-6.6-4.4-10.6-4.4z m0-2.5c9.7 0 17.5 7.8 17.5 17.5s-7.8 17.5-17.5 17.5-17.5-7.8-17.5-17.5 7.8-17.5 17.5-17.5z' })
                )
            );
        }
    }]);

    return IoSocialCodepenOutline;
}(React.Component);

exports.default = IoSocialCodepenOutline;
module.exports = exports['default'];