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

var IoSocialCodepen = function (_React$Component) {
    _inherits(IoSocialCodepen, _React$Component);

    function IoSocialCodepen() {
        _classCallCheck(this, IoSocialCodepen);

        return _possibleConstructorReturn(this, (IoSocialCodepen.__proto__ || Object.getPrototypeOf(IoSocialCodepen)).apply(this, arguments));
    }

    _createClass(IoSocialCodepen, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm16.3 23.8c0.1 0 0.3 0.2 0.3 0.3v4.1s-4.9-3.2-7.3-4.8l3-2.1c0.2 0 0.3 0 0.4 0 1.2 0.8 2.5 1.7 3.6 2.5z m-3.6-5c0 0.1-0.2 0.1-0.3 0-1-0.7-2-1.3-3.1-2 2.4-1.6 7.3-4.8 7.3-4.8v3.9c0 0.2-0.2 0.4-0.3 0.5-1.1 0.8-2.4 1.6-3.6 2.4z m5.9-2.5c-0.1 0-0.2-0.1-0.2-0.2v-4.2l7.3 4.9-3.1 2c-0.1 0.1-0.3 0.1-0.3 0-1.3-0.8-2.5-1.6-3.7-2.5z m-0.9 1.7c0.4 0.3 3.1 2.1 3.1 2.1l-3.1 2c-0.1 0.1-0.3 0.1-0.4 0l-3.1-2s1.3-0.9 2-1.3c0.4-0.3 0.7-0.5 1.1-0.8 0 0 0.3-0.1 0.4 0z m-9.2 0.5l2.4 1.6-2.4 1.5v-3.1z m9-16c9.7 0 17.5 7.8 17.5 17.5s-7.8 17.5-17.5 17.5-17.5-7.8-17.5-17.5 7.8-17.5 17.5-17.5z m10.9 20.7v-6.3c0-0.5-0.2-0.7-0.6-1-3.2-2.1-6.5-4.3-9.7-6.4-0.4-0.3-0.8-0.3-1.3 0-3.2 2.1-6.3 4.3-9.5 6.4-0.4 0.2-0.7 0.6-0.7 1.1v6.2c0 0.5 0.3 0.8 0.7 1 3.2 2.1 6.3 4.3 9.5 6.4 0.5 0.3 0.9 0.3 1.3 0 3.2-2.1 6.4-4.3 9.6-6.4 0.4-0.2 0.7-0.5 0.7-1z m-6.2-1.9c0.1-0.1 0.4-0.1 0.5 0l3 2.1-7.3 4.8v-4c0-0.2 0.1-0.3 0.3-0.4 1.1-0.8 2.3-1.7 3.5-2.5z m4.2 0.3l-2.3-1.5 2.3-1.6v3.1z' })
                )
            );
        }
    }]);

    return IoSocialCodepen;
}(React.Component);

exports.default = IoSocialCodepen;
module.exports = exports['default'];