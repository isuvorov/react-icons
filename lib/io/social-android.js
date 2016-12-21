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

var IoSocialAndroid = function (_React$Component) {
    _inherits(IoSocialAndroid, _React$Component);

    function IoSocialAndroid() {
        _classCallCheck(this, IoSocialAndroid);

        return _possibleConstructorReturn(this, (IoSocialAndroid.__proto__ || Object.getPrototypeOf(IoSocialAndroid)).apply(this, arguments));
    }

    _createClass(IoSocialAndroid, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm11 20.9v-5.9h17.5v13c0 0.5-0.3 1.1-0.9 1.1h-2.1v4c0 1-0.9 1.9-1.9 1.9h-0.1c-0.5 0-0.8-0.2-1.1-0.4-0.4-0.3-0.7-0.8-0.7-1.5v-4h-3.8v4c0 1-0.9 1.9-1.9 1.9s-1.9-0.9-1.9-1.9v-4h-2.2c-0.6 0-0.9-0.6-0.9-1.1v-7.1z m20.6-7.1c1 0 1.9 0.8 1.9 1.8v7.5c0 1-0.9 1.9-1.9 1.9s-1.8-0.9-1.8-1.9v-7.5c0-1 0.8-1.8 1.8-1.8z m-23.7 0c1 0 1.9 0.8 1.9 1.8v7.5c0 1-0.9 1.9-1.9 1.9s-1.9-0.9-1.9-1.9v-7.5c0-1 0.9-1.8 1.9-1.8z m16.1-6.8c3.8 1.6 4.4 5.6 4.5 6.8h-17.5c0.1-1.2 0.6-5.2 4.4-6.8l-1.4-1.8c0 0 0 0 0-0.1s0.3-0.1 0.3-0.1l1.5 1.8c1.1-0.4 2.4-0.7 3.9-0.7s2.9 0.3 4 0.7l1.5-1.8c0-0.1 0.1 0 0.2 0.1l0.1 0.1z m-8.1 3.9c0.6 0 1-0.5 1-1.1s-0.4-1.1-1-1.1c-0.6 0-1.1 0.6-1.1 1.1s0.6 1.1 1.1 1.1z m7.7 0c0.5 0 1.1-0.5 1.1-1.1s-0.6-1.1-1.1-1.1c-0.6 0-1 0.6-1 1.1s0.4 1.1 1 1.1z' })
                )
            );
        }
    }]);

    return IoSocialAndroid;
}(React.Component);

exports.default = IoSocialAndroid;
module.exports = exports['default'];