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

var IoSocialNodejs = function (_React$Component) {
    _inherits(IoSocialNodejs, _React$Component);

    function IoSocialNodejs() {
        _classCallCheck(this, IoSocialNodejs);

        return _possibleConstructorReturn(this, (IoSocialNodejs.__proto__ || Object.getPrototypeOf(IoSocialNodejs)).apply(this, arguments));
    }

    _createClass(IoSocialNodejs, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 37.5c-0.5 0-0.9-0.2-1.3-0.4l-4.2-2.5c-0.6-0.4-0.3-0.5 0-0.5 0.8-0.4 1-0.4 1.9-1 0.1-0.1 0.2-0.1 0.3 0l3.1 1.8c0 0.1 0.3 0.1 0.4 0l12.1-7.2c0.1 0 0.2-0.1 0.2-0.3v-14.6c0-0.1 0-0.3-0.2-0.4l-12.1-7.3c-0.1-0.1-0.3-0.1-0.4 0l-12.1 7.3c-0.1 0.1-0.2 0.3-0.2 0.4v14.6c0 0.2 0 0.3 0.2 0.3l3.1 1.9c1.9 0.9 3-0.1 3-1.2v-14.3c0-0.2 0.1-0.4 0.3-0.4h1.8c0.2 0 0.4 0.2 0.4 0.4v14.3c0 2.6-1.5 4.1-3.9 4.1-0.7 0-1.3-0.1-2.9-0.9l-3.2-1.8c-0.8-0.5-1.3-1.4-1.3-2.4v-14.8c0-1 0.5-1.9 1.3-2.4l12.4-7.4c0.8-0.5 1.8-0.5 2.6 0l12.4 7.4c0.8 0.5 1.3 1.4 1.3 2.4v14.8c0 1-0.5 1.9-1.3 2.4l-12.4 7.3c-0.4 0.2-0.8 0.4-1.3 0.4z m3.8-10c-5 0-6.5-2.4-6.5-4.6 0-0.2 0-0.4 0.3-0.4h1.6c0.2 0 0.4 0.2 0.4 0.3 0.2 1.7 1.3 2.4 4.2 2.4 2.6 0 3.7-0.8 3.7-2.2 0-0.9-0.2-1.4-4.3-1.8-3.4-0.3-5.5-1.2-5.5-4 0-2.6 2.1-4.1 5.7-4.1 3.6 0 5.9 1.1 6.1 4 0 0.1 0 0.2-0.1 0.2s-0.2 0.2-0.3 0.2h-1.5c-0.2 0-0.4-0.2-0.4-0.3-0.3-1.3-1.3-1.8-3.8-1.8-2.9 0-3.2 0.9-3.2 1.7 0 0.9 0.3 1.3 4.2 1.8s5.6 1.3 5.6 4c0 2.8-2.3 4.6-6.2 4.6z' })
                )
            );
        }
    }]);

    return IoSocialNodejs;
}(React.Component);

exports.default = IoSocialNodejs;
module.exports = exports['default'];