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

var MdDeveloperBoard = function (_React$Component) {
    _inherits(MdDeveloperBoard, _React$Component);

    function MdDeveloperBoard() {
        _classCallCheck(this, MdDeveloperBoard);

        return _possibleConstructorReturn(this, (MdDeveloperBoard.__proto__ || Object.getPrototypeOf(MdDeveloperBoard)).apply(this, arguments));
    }

    _createClass(MdDeveloperBoard, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 18.4h6.6v10h-6.6v-10z m-10-6.8h8.4v8.4h-8.4v-8.4z m10 0h6.6v5h-6.6v-5z m-10 10h8.4v6.8h-8.4v-6.8z m20 10v-23.2h-23.4v23.2h23.4z m6.6-16.6h-3.2v3.4h3.2v3.2h-3.2v3.4h3.2v3.4h-3.2v3.2c0 1.8-1.6 3.4-3.4 3.4h-23.4c-1.8 0-3.2-1.6-3.2-3.4v-23.2c0-1.8 1.4-3.4 3.2-3.4h23.4c1.8 0 3.4 1.6 3.4 3.4v3.2h3.2v3.4z' })
                )
            );
        }
    }]);

    return MdDeveloperBoard;
}(React.Component);

exports.default = MdDeveloperBoard;
module.exports = exports['default'];