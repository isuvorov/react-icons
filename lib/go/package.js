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

var GoPackage = function (_React$Component) {
    _inherits(GoPackage, _React$Component);

    function GoPackage() {
        _classCallCheck(this, GoPackage);

        return _possibleConstructorReturn(this, (GoPackage.__proto__ || Object.getPrototypeOf(GoPackage)).apply(this, arguments));
    }

    _createClass(GoPackage, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm18.8 2.5l-18.8 5v22.5l18.8 5 18.7-5v-22.5l-18.7-5z m-16.3 25.7l0-16.9 15 4v16.9l-15-4z m0-19.4l6.2-1.7 16.3 4.3-6.2 1.7-16.3-4.3z m32.5 19.4l-15 4v-16.9l5-1.4v6.1l5-1.3v-6.1l5-1.4 0 17z m-5-18.1v0l-16.3-4.4 5.1-1.3 16.2 4.4-5 1.3z' })
                )
            );
        }
    }]);

    return GoPackage;
}(React.Component);

exports.default = GoPackage;
module.exports = exports['default'];