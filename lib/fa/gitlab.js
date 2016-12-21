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

var FaGitlab = function (_React$Component) {
    _inherits(FaGitlab, _React$Component);

    function FaGitlab() {
        _classCallCheck(this, FaGitlab);

        return _possibleConstructorReturn(this, (FaGitlab.__proto__ || Object.getPrototypeOf(FaGitlab)).apply(this, arguments));
    }

    _createClass(FaGitlab, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm2.3 15.8l17.7 22.6-19.4-14q-0.4-0.3-0.5-0.8t0-1l2.2-6.8z m10.3 0h14.8l-7.4 22.6z m-4.4-13.7l4.4 13.7h-10.3l4.4-13.7q0.2-0.5 0.8-0.5t0.7 0.5z m29.5 13.7l2.2 6.8q0.2 0.5 0 1t-0.5 0.8l-19.4 14 17.7-22.6z m0 0h-10.3l4.4-13.7q0.2-0.5 0.7-0.5t0.8 0.5z' })
                )
            );
        }
    }]);

    return FaGitlab;
}(React.Component);

exports.default = FaGitlab;
module.exports = exports['default'];