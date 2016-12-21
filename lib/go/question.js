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

var GoQuestion = function (_React$Component) {
    _inherits(GoQuestion, _React$Component);

    function GoQuestion() {
        _classCallCheck(this, GoQuestion);

        return _possibleConstructorReturn(this, (GoQuestion.__proto__ || Object.getPrototypeOf(GoQuestion)).apply(this, arguments));
    }

    _createClass(GoQuestion, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm17.5 30h5v-5h-5v5z m2.5-20c-3.7 0-7.5 3.8-7.5 7.5h5c0-1.2 1.3-2.5 2.5-2.5s2.5 1.3 2.5 2.5c0 2.5-5 2.5-5 5h5c2.5-0.9 5-2.5 5-6.2s-3.7-6.3-7.5-6.3z m0-10c-11.1 0-20 8.9-20 20s8.9 20 20 20 20-8.9 20-20-8.9-20-20-20z m0 35c-8.3 0-15-6.7-15-15s6.7-15 15-15 15 6.7 15 15-6.7 15-15 15z' })
                )
            );
        }
    }]);

    return GoQuestion;
}(React.Component);

exports.default = GoQuestion;
module.exports = exports['default'];