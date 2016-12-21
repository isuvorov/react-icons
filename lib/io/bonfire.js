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

var IoBonfire = function (_React$Component) {
    _inherits(IoBonfire, _React$Component);

    function IoBonfire() {
        _classCallCheck(this, IoBonfire);

        return _possibleConstructorReturn(this, (IoBonfire.__proto__ || Object.getPrototypeOf(IoBonfire)).apply(this, arguments));
    }

    _createClass(IoBonfire, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm21.2 27.4l1.1 7c0.1 0.2 0.1 0.4 0.1 0.6 0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5c0-0.2 0-0.4 0.1-0.5l1.2-7.2c0.1-0.6 0.6-1.1 1.2-1.1s1.2 0.6 1.3 1.2z m2.7 0.3z m6.8 2.8c0.7 0.6 0.8 1.9 0 2.7s-2.1 0.7-2.7 0c-0.1-0.1-0.2-0.2-0.3-0.3l-3.8-5.2c-0.2-0.4-0.1-0.8 0.2-1.1 0.4-0.4 0.7-0.4 1.2-0.1l5 3.7c0.2 0 0.2 0.2 0.4 0.3z m-1.6-4.3z m4.9-1c0.7 0 1 0.5 1 1.4 0 0.7-0.8 1.1-1.4 1l-4.5-1.4c-0.2-0.2-0.4-0.4-0.3-0.7s0.3-0.6 0.6-0.5z m-23.1 1z m0 0l-4.6 1.4c-0.6 0.1-1.3-0.3-1.3-1 0-0.9 0.2-1.4 0.9-1.4l4.7-0.2c0.3-0.1 0.6 0.2 0.7 0.5s-0.2 0.5-0.4 0.7z m3.8 0.3c0.4-0.3 0.8-0.3 1.2 0.1 0.4 0.3 0.4 0.7 0.2 1.1l-3.8 5.2c-0.1 0.1-0.2 0.2-0.3 0.3-0.7 0.8-1.9 0.8-2.7 0s-0.8-1.9 0-2.7c0.2-0.2 0.2-0.3 0.4-0.3z m12.8-16.5c0 2.5-0.7 4.5-3.9 6.7-2.9 2.1-7.3 3.6-8.6 8.3 0 0-4.5-1.9-3.7-7.5s9.6-8.3 8.7-15c1.9 0 7.5 2.7 7.5 7.5z m0 10c-1.2 3.9-3.4 5-6.2 5-1.2 0-2.5-0.7-3.4-2 0.9-1.2 2.2-2.1 3.7-2.9 0.7-0.4 1.5-0.8 2.2-1.3 1.7-1.1 3-2.4 3.7-3.8 0.4 1.2 0.4 3.8 0 5z m-15.6-7.5c-0.5-0.3-0.7-1.1-0.6-2.1 0.1-1.7 2.6-3.1 2.5-5.4 1-0.2 2.4 0.2 3.2 1.9-0.4 0.8-1.1 1.6-2.2 2.6s-2 1.8-2.9 3z' })
                )
            );
        }
    }]);

    return IoBonfire;
}(React.Component);

exports.default = IoBonfire;
module.exports = exports['default'];