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

var IoSocialFoursquareOutline = function (_React$Component) {
    _inherits(IoSocialFoursquareOutline, _React$Component);

    function IoSocialFoursquareOutline() {
        _classCallCheck(this, IoSocialFoursquareOutline);

        return _possibleConstructorReturn(this, (IoSocialFoursquareOutline.__proto__ || Object.getPrototypeOf(IoSocialFoursquareOutline)).apply(this, arguments));
    }

    _createClass(IoSocialFoursquareOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.1 12.8c-0.9 4.7-2 10.2-2.1 10.8z m-1.6-10.3c2.7 0 3.5 1.6 2.8 4.5-0.2 1.2-0.7 3.4-1.2 5.8l-2.1 10.7c-0.2 1-0.6 2.7-3.1 2.7h-5.6c-0.2 0-0.2 0-0.5 0.3-0.1 0.1-8.9 10.4-8.9 10.4-0.7 0.8-1.8 0.6-2.2 0.4s-1.2-0.6-1.2-2v-29.7s0.8-3.1 3.4-3.1h18.6z m-0.1 5c0.4-2.4 0.4-2.5-1.9-2.5h-15.2c-2.3 0-2.3 0.2-2.3 2.2v23.2c0 3 0.1 3 0.2 3s0.8-0.7 2.3-2.5c0 0 6.1-6.9 6.2-7 0.1-0.1 0.2-0.1 0.4-0.1h4.9c2 0 2.2-0.5 2.6-2.5 0.3-1.6 2.8-13.8 2.8-13.8z m1.7 5.3c0.5-2.4 1-4.6 1.2-5.8z m-5.4-5.3c0.4 0 0.7 0.4 0.6 0.9l-0.6 3.4c-0.1 0.3-0.5 0.7-0.9 0.7h-5.8c-0.6 0-0.6 0.4-0.6 1v0.5c0 0.6 0 1 0.6 1h5s0.8 0.5 0.8 0.9-0.9 4-1 4.3-0.3 0.7-0.8 0.7h-4.9c-0.7 0-0.8 0-1.3 0.6l-4.2 4.9c-0.1 0.1-0.1 0.1-0.1 0v-18c0-0.4 0.4-0.9 0.9-0.9h12.3z' })
                )
            );
        }
    }]);

    return IoSocialFoursquareOutline;
}(React.Component);

exports.default = IoSocialFoursquareOutline;
module.exports = exports['default'];