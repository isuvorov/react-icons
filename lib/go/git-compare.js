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

var GoGitCompare = function (_React$Component) {
    _inherits(GoGitCompare, _React$Component);

    function GoGitCompare() {
        _classCallCheck(this, GoGitCompare);

        return _possibleConstructorReturn(this, (GoGitCompare.__proto__ || Object.getPrototypeOf(GoGitCompare)).apply(this, arguments));
    }

    _createClass(GoGitCompare, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35 28.2v-15.7s-3.7-7.5-7.5-7.5h-2.5v-5l-7.5 7.5 7.5 7.5v-5h2.5s2.5 1.3 2.5 2.5v15.7c-1.5 0.9-2.5 2.5-2.5 4.3 0 2.8 2.2 5 5 5s5-2.2 5-5c0-1.8-1-3.4-2.5-4.3z m-2.5 6.8c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z m-17.5-5h-2.5s-2.5-1.2-2.5-2.5v-15.7c1.5-0.9 2.5-2.5 2.5-4.3 0-2.8-2.2-5-5-5s-5 2.2-5 5c0 1.8 1 3.4 2.5 4.3v15.7s3.8 7.5 7.5 7.5h2.5v5l7.5-7.5-7.5-7.5v5z m-7.5-20c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z' })
                )
            );
        }
    }]);

    return GoGitCompare;
}(React.Component);

exports.default = GoGitCompare;
module.exports = exports['default'];