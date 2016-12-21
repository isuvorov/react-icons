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

var IoCash = function (_React$Component) {
    _inherits(IoCash, _React$Component);

    function IoCash() {
        _classCallCheck(this, IoCash);

        return _possibleConstructorReturn(this, (IoCash.__proto__ || Object.getPrototypeOf(IoCash)).apply(this, arguments));
    }

    _createClass(IoCash, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm0 7.5h40v20h-40v-20z m15.1 17.5c-1.6-1.8-2.6-4.5-2.6-7.5s1-5.7 2.6-7.5h-7.6c0 2.7-2.3 5-5 5v6.3c2.1 0 3.8 1.6 3.8 3.7h8.8z m8.2-4.6c0.2-0.3 0.3-0.7 0.3-1.2 0-0.2 0-0.4-0.1-0.6s-0.1-0.5-0.3-0.6-0.3-0.3-0.5-0.5-0.5-0.3-0.8-0.4c-0.1 0-0.3-0.1-0.6-0.1s-0.4 0-0.6-0.1v-2.4c0.2 0 0.4 0.1 0.6 0.2 0.3 0.2 0.4 0.5 0.5 1h1.6c0-0.4-0.2-0.7-0.4-1s-0.3-0.6-0.7-0.9-0.7-0.4-1-0.4c-0.2-0.1-0.4-0.2-0.6-0.2v-0.7h-1.4v0.7c-0.2 0-0.3 0.1-0.5 0.2-0.4 0-0.8 0.1-1.1 0.3s-0.5 0.5-0.7 0.8-0.3 0.7-0.3 1.1c0 0.3 0 0.4 0.1 0.6s0.2 0.4 0.3 0.6 0.4 0.4 0.6 0.5 0.6 0.4 1 0.4c0.2 0.1 0.4 0 0.6 0.1v2.7c-0.2 0-0.5-0.1-0.7-0.3s-0.4-0.3-0.5-0.5-0.1-0.5-0.1-0.7h-1.6c0 0.4 0.2 0.8 0.3 1.2 0.3 0.4 0.5 0.7 0.8 0.9s0.7 0.5 1.2 0.5c0.2 0.1 0.4 0.2 0.6 0.2v0.7h1.4v-0.7c0.2 0 0.5-0.1 0.7-0.2 0.4 0 0.8-0.1 1.1-0.4s0.5-0.5 0.8-0.8z m14.2 0.9v-6.3c-2.7 0-5-2.3-5-5h-7.6c1.6 1.8 2.6 4.5 2.6 7.5s-1 5.7-2.6 7.5h8.9c0-2.1 1.7-3.7 3.7-3.7z m-32.5-3.8c0-1.6 0.9-2.5 2.5-2.5s2.5 0.9 2.5 2.5-0.9 2.5-2.5 2.5-2.5-0.9-2.5-2.5z m25 0c0-1.6 0.9-2.5 2.5-2.5s2.5 0.9 2.5 2.5-0.9 2.5-2.5 2.5-2.5-0.9-2.5-2.5z m-8.7 0.9c0.2 0 0.3 0.1 0.5 0.3s0.2 0.4 0.2 0.7c0 0.1 0 0.3 0 0.4s-0.2 0.4-0.4 0.4-0.3 0.3-0.6 0.3c-0.1 0-0.1 0.1-0.3 0.1v-2.4c0.2 0.1 0.5 0.1 0.6 0.2z m-2.9-3.5c0.1-0.1 0.3-0.2 0.4-0.3s0.3-0.1 0.5-0.1v2c-0.3-0.1-0.5-0.3-0.7-0.4s-0.3-0.3-0.3-0.6c0-0.3 0.1-0.4 0.1-0.6z m-18.4 17.6v-2.5h40v2.5h-40z' })
                )
            );
        }
    }]);

    return IoCash;
}(React.Component);

exports.default = IoCash;
module.exports = exports['default'];