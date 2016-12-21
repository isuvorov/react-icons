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

var GoMarkdown = function (_React$Component) {
    _inherits(GoMarkdown, _React$Component);

    function GoMarkdown() {
        _classCallCheck(this, GoMarkdown);

        return _possibleConstructorReturn(this, (GoMarkdown.__proto__ || Object.getPrototypeOf(GoMarkdown)).apply(this, arguments));
    }

    _createClass(GoMarkdown, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm37.1 7.5h-34.2c-1.6 0-2.9 1.3-2.9 2.9v19.2c0 1.6 1.3 2.9 2.9 2.9h34.2c1.6 0 2.9-1.3 2.9-2.9v-19.2c0-1.6-1.3-2.9-2.9-2.9z m-14.6 20l-5 0v-7.5l-3.7 4.8-3.8-4.8v7.5h-5v-15h5l3.8 5 3.7-5 5 0v15z m7.5 1.2l-6.2-8.7h3.7v-7.5h5v7.5h3.8l-6.3 8.7z' })
                )
            );
        }
    }]);

    return GoMarkdown;
}(React.Component);

exports.default = GoMarkdown;
module.exports = exports['default'];