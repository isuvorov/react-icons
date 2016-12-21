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

var IoAndroidStarOutline = function (_React$Component) {
    _inherits(IoAndroidStarOutline, _React$Component);

    function IoAndroidStarOutline() {
        _classCallCheck(this, IoAndroidStarOutline);

        return _possibleConstructorReturn(this, (IoAndroidStarOutline.__proto__ || Object.getPrototypeOf(IoAndroidStarOutline)).apply(this, arguments));
    }

    _createClass(IoAndroidStarOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35.6 16.4l-8.6 7.5 2.5 11.1-9.7-5.9-9.8 5.9 2.6-11.1-8.6-7.5 11.3-0.9 4.5-10.5 4.4 10.5z m-14.5 10.6l4.7 2.8-1.3-5.3-0.3-1.5 1.1-1 4.2-3.6-5.5-0.4-1.5-0.2-0.6-1.4-2.1-5-2.1 5-0.7 1.4-1.4 0.2-5.5 0.4 4.1 3.6 1.2 1-0.4 1.5-1.2 5.3 4.7-2.8 1.3-0.8z' })
                )
            );
        }
    }]);

    return IoAndroidStarOutline;
}(React.Component);

exports.default = IoAndroidStarOutline;
module.exports = exports['default'];