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

var GoNoNewline = function (_React$Component) {
    _inherits(GoNoNewline, _React$Component);

    function GoNoNewline() {
        _classCallCheck(this, GoNoNewline);

        return _possibleConstructorReturn(this, (GoNoNewline.__proto__ || Object.getPrototypeOf(GoNoNewline)).apply(this, arguments));
    }

    _createClass(GoNoNewline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35 12.5v5h-5v-5l-7.5 7.5 7.5 7.5v-5h7.5s2.5 0 2.5-2.5v-7.5h-5z m-26.2-1.2c-4.9 0-8.8 3.9-8.8 8.7 0 4.8 3.9 8.8 8.8 8.8s8.7-4 8.7-8.8c0-4.8-3.9-8.7-8.7-8.7z m-5 8.7c0-2.8 2.2-5 5-5 0.7 0 1.4 0.2 2 0.4l-6.6 6.6c-0.3-0.6-0.4-1.3-0.4-2z m5 5c-0.8 0-1.5-0.2-2.1-0.4l6.6-6.6c0.3 0.6 0.5 1.3 0.5 2 0 2.8-2.3 5-5 5z' })
                )
            );
        }
    }]);

    return GoNoNewline;
}(React.Component);

exports.default = GoNoNewline;
module.exports = exports['default'];