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

var IoSocialPython = function (_React$Component) {
    _inherits(IoSocialPython, _React$Component);

    function IoSocialPython() {
        _classCallCheck(this, IoSocialPython);

        return _possibleConstructorReturn(this, (IoSocialPython.__proto__ || Object.getPrototypeOf(IoSocialPython)).apply(this, arguments));
    }

    _createClass(IoSocialPython, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm15.1 19.5c-2.3 0.3-3.8 2.3-3.8 4.4v3.6h-1.2c-2.3 0-4.2-2.3-4.9-5.4-0.1-0.7-0.2-1.3-0.2-2.1v-0.1c0-4.1 2.3-7.4 5.1-7.4h9.9v-1.2h-7.5v-2.3c0-2 0.5-3.1 3.6-3.7 1-0.1 2.3-0.3 3.5-0.3s3.1 0.1 4.3 0.3c2 0.3 3.6 1.7 3.6 3.7v6.9c0 1.6-1.1 2.9-2.6 3.3-0.3 0.1-0.6 0.2-1 0.2h-7.9c-0.3 0-0.6 0-0.9 0.1z m0.8-9.6c0.8 0 1.4-0.5 1.4-1.3s-0.6-1.4-1.4-1.4-1.4 0.6-1.4 1.4 0.7 1.3 1.4 1.3z m18.8 7.5c0.2 0.8 0.3 1.7 0.3 2.6 0 1.3-0.2 2.3-0.5 3.4-0.9 2.4-2.6 4.1-4.6 4.1h-9.9v1.3h7.5v2c0 2-1.8 3.1-3.6 3.7-2.7 0.7-5.3 0.7-7.6 0-1.9-0.6-3.8-1.8-3.8-3.7v-6.8c0-1.7 1.1-2.8 2.6-3.2 0.3-0.1 0.6-0.2 1-0.2h8.1c0.3 0 0.5-0.1 0.7-0.1 2.1-0.3 3.9-2.1 3.9-4.8v-3.2h1.1c2.2 0 4.1 2 4.8 4.9z m-10.6 12.5c-0.8 0-1.4 0.6-1.4 1.4s0.6 1.4 1.4 1.4 1.3-0.7 1.3-1.4-0.6-1.4-1.3-1.4z' })
                )
            );
        }
    }]);

    return IoSocialPython;
}(React.Component);

exports.default = IoSocialPython;
module.exports = exports['default'];