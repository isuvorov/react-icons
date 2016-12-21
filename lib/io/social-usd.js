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

var IoSocialUsd = function (_React$Component) {
    _inherits(IoSocialUsd, _React$Component);

    function IoSocialUsd() {
        _classCallCheck(this, IoSocialUsd);

        return _possibleConstructorReturn(this, (IoSocialUsd.__proto__ || Object.getPrototypeOf(IoSocialUsd)).apply(this, arguments));
    }

    _createClass(IoSocialUsd, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm32.1 23.7c0.2 0.8 0.4 1.5 0.4 2.2 0 1.7-0.4 3-1.1 4.2s-1.6 2-2.7 2.7-2.5 1.3-3.9 1.7c-0.8 0.1-1.5 0.2-2.3 0.3v2.7h-5v-2.7c-0.7-0.1-1.5-0.3-2.2-0.5-1.6-0.4-2.8-0.9-4-1.8s-2-1.9-2.7-3.2c-0.6-1.3-1-2.7-1.1-4.3h5.4c0 0.9 0.1 1.9 0.5 2.6 0.4 0.8 1 1.3 1.7 1.8s1.5 0.8 2.4 1.1v-9.4c-0.6-0.2-1.4-0.3-2.1-0.5-1.3-0.3-2.4-0.7-3.2-1.2s-1.6-1.2-2.1-1.8-0.9-1.4-1.1-2.1-0.3-1.4-0.3-2.1c0-1.4 0.3-2.7 0.9-3.8s1.5-1.9 2.6-2.6 2.3-1.3 3.6-1.6c0.5-0.2 1.2-0.2 1.7-0.3v-2.6h5v2.6c0.7 0.1 1.3 0.3 1.9 0.4 1.4 0.4 2.6 1 3.7 1.8s2 1.7 2.6 2.9c0.6 1 0.9 2.1 0.9 3.6h-5.3c-0.3-1.7-1-2.9-2.1-3.6-0.5-0.4-1-0.7-1.7-0.8v8.3c0.7 0.1 1.3 0.3 2 0.4 0.9 0.3 1.7 0.5 2.1 0.6 1 0.3 1.8 0.7 2.5 1.1 0.8 0.6 1.4 1.1 1.9 1.8s0.9 1.3 1.1 2.1z m-14.6-7.3v-7.2c-0.5 0.2-1.2 0.3-1.6 0.6-0.6 0.3-1 0.7-1.4 1.1s-0.5 1.1-0.5 1.8c0 1.1 0.3 1.9 1 2.5 0.6 0.5 1.6 0.9 2.5 1.2z m9.3 11.6c0.2-0.5 0.3-1 0.3-1.5 0-1.1-0.2-1.9-0.8-2.4s-1.1-0.9-1.8-1.1-1.2-0.4-2-0.7v8.4c0.5-0.1 0.8-0.2 1.1-0.2 0.9-0.3 1.6-0.7 2.1-1s0.9-0.9 1.1-1.5z' })
                )
            );
        }
    }]);

    return IoSocialUsd;
}(React.Component);

exports.default = IoSocialUsd;
module.exports = exports['default'];