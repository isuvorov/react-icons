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

var IoSocialTux = function (_React$Component) {
    _inherits(IoSocialTux, _React$Component);

    function IoSocialTux() {
        _classCallCheck(this, IoSocialTux);

        return _possibleConstructorReturn(this, (IoSocialTux.__proto__ || Object.getPrototypeOf(IoSocialTux)).apply(this, arguments));
    }

    _createClass(IoSocialTux, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm19.8 7.9c0.1-0.2-0.1 0.1 0 0 0.1-0.2 0.3-0.3 0.4-0.4-0.2 0.2-0.4 0.3-0.5 0.6 0-0.1 0-0.1 0.1-0.2z m13.4 23c0.6 0.4 1.8 0.9 1.6 1.8-0.1 0.7-1.3 1.1-1.8 1.4-1.2 0.7-2.2 1.1-3.2 2-0.7 0.6-1.4 1.2-2.3 1.3-0.9 0.2-2 0.1-2.6-0.6-0.4-0.4-0.5-0.9-1.2-0.9-1.9-0.4-4.2-0.4-6.1 0-1 0.1-1.7 0.8-2.5 1.3-0.8 0.4-1.6 0.4-2.4 0.1-1-0.4-2.1-0.8-3.2-1s-2.2-0.4-3.3-0.8c-2.4-0.6-0.4-2.3-0.9-3.9-0.2-0.9-0.8-2.2 0.6-2.3 0.7-0.1 2.1 0.1 2.5-0.9 0.1-0.5-0.2-1.1 0.1-1.7s-0.1-1.3 0.1-1.9c0.3-1.4 1.5-2.5 1.9-3.9 0.4-1.1 0.7-1.9 1.5-2.9 0.7-0.8 1.7-1.7 2.2-2.6 0.8-1.4 0.7-2.7 0.6-4.3 0-1.3 0-2.6-0.1-3.9 0-2.6 1.6-4.7 4.5-4.7h1.1c3 0 4.9 2.5 5 5.4 0 1.5-0.4 3 0.4 5.2 1.2 2.1 2.8 3.8 4.1 5.7 0.7 1.3 1.2 2.4 1.5 3.9 0.3 1 0.7 2.4 0.6 3.5-0.1 0.4-0.2 0.7-0.3 0.8 0.2 0.1 0.5 0.2 0.7 0.4 0.2 0.3 0.1 0.9 0 2.1-0.1 0.6 0.4 1.1 0.9 1.4z m-17.5 4.3c0.2-1.5-1.2-3-1.9-4.3-0.8-1.3-1.7-3.4-3.1-4.1-0.6-0.3-1.5-0.4-1.8 0.4-0.1 0.5 0 1.5-0.1 1.7-0.4 0.7-1.1 0.8-1.8 0.9-0.5 0-1.4 0-1.4 0.6 0.1 0.8 0.8 1.6 0.6 2.3-0.2 0.6-0.7 1-0.7 1.5 0 1.1 3 1.2 3.7 1.3 1.5 0.4 2.9 1.1 4.5 1.3 0.9 0.1 1.9-0.5 2-1.6z m9.1-5c-0.2-0.8 0.1 0.7 0 0s-0.4-2.2 0-2.8c0.4-0.4 0.8-0.4 1.4-0.4 0-0.3 0.1-0.7 0.2-0.9 0.6-1 2.3-0.6 3.1 0l-0.1-0.2c-0.3-0.3-0.6-0.7-1-0.7 0 0 0.3-1 0.1-2.7-0.3-3.1-2.6-4.8-2.6-4.8 2.1 2.3 2.1 4.5 2.1 5.6 0 0.5 0 1.4-0.3 1.9-0.3 0-0.5 0.1-0.8 0.3-0.8 0.4-0.7-0.2-0.7-0.8 0-1.4-0.1-2.8-0.5-4.2-0.2-0.7-0.5-1.4-1-1.9-0.3-0.4-0.3-0.7-0.4-1.2-0.2-0.9-0.7-1.7-1.3-2.5-0.5-0.7-0.5-1.3-0.3-2.2 0-0.5 0.1-1.1-0.5-1.3-0.5-0.1-2-0.4-2.1-1.1-0.1-0.5-0.1-1.2 0.4-1.5 1.2-1.1 2.3 0.8 1.3 1.8-0.2 0.3 0.5 0.3 0.6 0.3 0.3 0 0.3-0.5 0.4-0.7 0.1-0.4 0.1-0.7 0.1-1.1 0-1.3-1.4-2.5-2.7-1.6-0.4 0.3-0.7 0.9-0.7 1.3 0 0.2-0.1 1.6 0 1.6-0.4 0-0.6-0.4-0.9-0.4-0.2 0-0.6 0-0.8 0.1 0 0 0.2-1.1-0.1-1.7-0.4-0.7-1.5-1.3-1.9-0.4s-0.3 2 0 2.5 0.3 0.4 0.3 0.4c0.1 0 0.4-0.3 0.4-0.3s-0.5-0.2-0.6-0.8c0-0.7 0.3-1.1 0.6-1.2s0.8 0.1 0.9 0.6 0 1 0 1c-0.5 0.5-2.3 1.4-1.7 2.2 1.1 1.4 2.6 1.2 4.1 0.7 0.6-0.2 1.4-0.4 1.8-0.9 0.3-0.2 0.9-0.2 0.7 0.3-0.2 0.4-1.4 0.5-1.8 0.7-0.7 0.3-1.4 0.6-2.1 0.8-0.5 0.1-1.1 0.4-2.2-0.7 0.5 0.5 0.6 1.2 1.3 1.5 1 0.5 2.6-0.7 3.4-1.1 0.1-0.1 1.3-0.4 1.1 0 0 0.3-0.8 0.5-1.1 0.7-0.9 0.4-1.8 1.6-2.9 1.7-0.6 0.1-1.6-1.3-1.9-1.7-0.1-0.1-0.4-0.7-0.5-0.3-0.1 0.6 0.2 1.1-0.2 1.6-0.5 0.7-0.9 1.4-1 2.3-0.1 0.4 0 0.8-0.3 1.2-0.8 1.2-1.3 2.6-1.4 4 0 0.3 0.2 3.4-0.4 3.2-1.4-0.4-1.4-2.6-1.1-3.7-0.3 1-0.7 2.4 0.1 3.5 1 1.1 7.8 4.3 4.2 6.2 0.5 1.1 1.1 2 0.9 3.2 0.6-0.5 0.2-1.5-0.1-2.2 0 0 1.4 1 3 0.8 1.3-0.1 2.5-0.5 3.6-1.2 0.5-0.3 0.9-0.7 1.2-1.1 0.1-0.2 0.4-0.5 0.5-0.6l0.1 0.9c0.1 1.3-0.9 2.1-0.8 2.6 0.3-0.6 0.9-1 1-1.8 0.3-1 0-1.9-0.1-2.8z m-7.7-20.4v0.2c0.2 0 0.2-0.4 0.1-0.6-0.1-0.3-0.2-0.5-0.3-0.5h-0.2c0.3 0.2 0.4 0.5 0.4 0.9z m4.3-1c0.2 0.2 0 0 0 0 0.2 0.2 0.4 0.4 0.4 0.8v0.2c0.2 0 0.2-0.3 0.2-0.5s-0.3-0.5-0.4-0.5h-0.2z m10.7 25c1.9-0.8-1.9 0.8 0 0 1.9-0.8 2.7-1.3 1.6-2-1.4-0.8-2.1-1-2.1-2.3 0-0.4 0.4-1.2 0.2-1.7-0.1-0.3-0.5-0.4-0.7-0.4-0.8 0.8-1.3 2-2.7 2-1.1 0-1.9-0.9-2.2-1.9-0.3-0.2-0.7-0.1-1 0.3-0.4 1 0.1 2.3 0.3 3.2 0.1 1.4-0.3 2.7-0.2 4.2 0.2 1.6 2 1.7 3.1 1 1.3-0.8 2.3-1.7 3.7-2.4z' })
                )
            );
        }
    }]);

    return IoSocialTux;
}(React.Component);

exports.default = IoSocialTux;
module.exports = exports['default'];