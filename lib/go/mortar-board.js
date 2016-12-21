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

var GoMortarBoard = function (_React$Component) {
    _inherits(GoMortarBoard, _React$Component);

    function GoMortarBoard() {
        _classCallCheck(this, GoMortarBoard);

        return _possibleConstructorReturn(this, (GoMortarBoard.__proto__ || Object.getPrototypeOf(GoMortarBoard)).apply(this, arguments));
    }

    _createClass(GoMortarBoard, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm19.6 23l-9.6-3v6.3s4.5 3.7 10 3.7 10-1.2 10-3.7v-6.3l-9.6 3c-0.2 0-0.6 0-0.9 0h0.1z m0.7-16c-0.2 0-0.4 0-0.5 0l-19.1 5.9c-0.9 0.3-0.9 1.4 0 1.7l4.3 1.4v4.4c-0.7 0.4-1.2 1.2-1.2 2.1 0 0.5 0.1 0.9 0.3 1.3-0.2 0.3-0.4 0.8-0.4 1.2v6.5c0 1.4 5.1 1.4 5.1 0v-6.5c0-0.4-0.2-0.9-0.4-1.2 0.2-0.4 0.3-0.8 0.3-1.3 0-0.9-0.5-1.7-1.2-2.1v-3.6l12.2 3.8c0.2 0 0.4 0 0.5 0l19.1-5.9c0.9-0.3 0.9-1.5 0-1.7l-19-6z m-0.3 8c-1.3 0-2.5-0.5-2.5-1.2s1.2-1.3 2.5-1.3 2.5 0.5 2.5 1.3-1.1 1.2-2.5 1.2z' })
                )
            );
        }
    }]);

    return GoMortarBoard;
}(React.Component);

exports.default = GoMortarBoard;
module.exports = exports['default'];