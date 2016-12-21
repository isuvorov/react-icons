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

var GoGitMerge = function (_React$Component) {
    _inherits(GoGitMerge, _React$Component);

    function GoGitMerge() {
        _classCallCheck(this, GoGitMerge);

        return _possibleConstructorReturn(this, (GoGitMerge.__proto__ || Object.getPrototypeOf(GoGitMerge)).apply(this, arguments));
    }

    _createClass(GoGitMerge, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30 17.5c-1.9 0-3.5 1-4.3 2.5-0.2 0-0.5 0-0.7 0-5.1 0-10-3.9-11.7-8.7 1-0.9 1.7-2.3 1.7-3.8 0-2.8-2.2-5-5-5s-5 2.2-5 5c0 1.8 1 3.4 2.5 4.3v16.4c-1.5 0.9-2.5 2.5-2.5 4.3 0 2.8 2.2 5 5 5s5-2.2 5-5c0-1.8-1-3.4-2.5-4.3v-9c3.3 3.5 7.8 5.8 12.5 5.8 0.3 0 0.5 0 0.7 0 0.8 1.5 2.4 2.5 4.3 2.5 2.8 0 5-2.2 5-5s-2.2-5-5-5z m-20 17.5c-1.4 0-2.5-1.1-2.5-2.5 0-1.4 1.1-2.5 2.5-2.5 1.4 0 2.5 1.1 2.5 2.5 0 1.4-1.1 2.5-2.5 2.5z m0-25c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5z m20 15c-1.4 0-2.5-1.1-2.5-2.5 0-1.4 1.1-2.5 2.5-2.5 1.4 0 2.5 1.1 2.5 2.5 0 1.4-1.1 2.5-2.5 2.5z' })
                )
            );
        }
    }]);

    return GoGitMerge;
}(React.Component);

exports.default = GoGitMerge;
module.exports = exports['default'];